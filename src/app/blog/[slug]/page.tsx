import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Clock, User, Share2 } from "lucide-react";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blog";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Cultural Fusion Journal",
    };
  }

  return {
    title: `${post.title} — Cultural Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedArticles = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Cultural Journal", href: "/blog" },
            { label: post.category, href: "/blog" },
            { label: post.title },
          ]}
        />

        {/* Back Link */}
        <div className="pt-2 pb-6">
          <Link
            href="/blog"
            className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-[#6E6A64] hover:text-[#1D1D1B] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to all stories</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{post.category}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1D1D1B] tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#6E6A64] border-y border-[#E9E1D5] py-3.5 max-w-xl mx-auto">
            <div className="flex items-center space-x-1.5">
              <User className="w-3.5 h-3.5 text-[#A88B5A]" />
              <span>{post.author.name} ({post.author.role})</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#A88B5A]" />
              <span>{post.date} • {post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] w-full bg-[#E9E1D5] overflow-hidden border border-[#E0D8CC] mb-12 shadow-xs">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover object-center"
          />
        </div>

        {/* Article Body Content */}
        <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 sm:p-12 mb-16 shadow-xs">
          <div className="prose prose-stone max-w-none text-[#1D1D1B] space-y-6 text-sm sm:text-base leading-relaxed font-light">
            <p className="text-base sm:text-lg font-normal text-[#1D1D1B] border-l-2 border-[#A88B5A] pl-4 italic">
              {post.excerpt}
            </p>

            {post.content.map((paragraph, index) => (
              <p key={index} className="text-[#3D3A35]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags & Share */}
          <div className="mt-10 pt-6 border-t border-[#E9E1D5] flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[#6E6A64] uppercase tracking-wider font-semibold mr-1">Tags:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-[#F0ECE4] text-[#1D1D1B] border border-[#E0D8CC] text-[11px]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-[#6E6A64]">
              <Share2 className="w-4 h-4 text-[#A88B5A]" />
              <span className="uppercase tracking-wider">Share Article</span>
            </div>
          </div>
        </div>

        {/* Related Reads */}
        <div className="border-t border-[#E9E1D5] pt-12 mb-16">
          <h2 className="font-serif text-2xl font-normal text-[#1D1D1B] mb-6">
            Continue Reading
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.slug}`}
                className="bg-[#FAF8F5] border border-[#E9E1D5] p-5 flex flex-col justify-between hover:border-[#A88B5A] transition-colors group"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A88B5A] font-semibold block mb-1">
                    {rel.category} • {rel.readTime}
                  </span>
                  <h3 className="font-serif text-lg text-[#1D1D1B] group-hover:text-[#A88B5A] transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E9E1D5] flex items-center justify-between text-xs font-semibold text-[#1D1D1B]">
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
