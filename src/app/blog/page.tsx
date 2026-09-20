import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Cultural Journal — Stories on Pakistani Textiles & Style",
  description: "Read styling guides, textile knowledge, and fabric care tips from Cultural Fusion's creative team in Lahore.",
};

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const remainingPosts = BLOG_POSTS.slice(1);

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Cultural Journal" }]} />

        {/* Header */}
        <div className="border-b border-[#E9E1D5] pb-10 pt-4 mb-12">
          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Essays & Guides</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1B] tracking-tight mb-3">
            The Cultural Journal
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A64] font-light max-w-2xl leading-relaxed">
            Exploring the rich history of Pakistani textile arts, modern wardrobe curation, fabric preservation, and the nuances of South Asian styling.
          </p>
        </div>

        {/* Featured Editorial Post */}
        {featuredPost && (
          <div className="mb-16 bg-[#FAF8F5] border border-[#E9E1D5] overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[4/3] bg-[#E9E1D5] overflow-hidden">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#1D1D1B] text-[#F8F5EF] text-[10px] uppercase tracking-widest px-3 py-1.5 font-semibold">
                  Featured Story • {featuredPost.category}
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4">
                <div className="flex items-center space-x-3 text-xs text-[#A88B5A] uppercase tracking-wider">
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1D1D1B] group-hover:text-[#A88B5A] transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-4 border-t border-[#E9E1D5] flex items-center justify-between">
                  <span className="text-xs text-[#6E6A64]">
                    By {featuredPost.author.name}
                  </span>
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Remaining Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {remainingPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#FAF8F5] border border-[#E9E1D5] overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden bg-[#E9E1D5]"
                >
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 bg-[#1D1D1B] text-[#F8F5EF] text-[9px] uppercase tracking-widest px-2.5 py-1">
                    {post.category}
                  </div>
                </Link>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[11px] text-[#A88B5A] uppercase tracking-wider mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="block group-hover:text-[#A88B5A] transition-colors">
                    <h3 className="font-serif text-lg font-normal text-[#1D1D1B] leading-snug mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-[#6E6A64] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#F0ECE4] flex items-center justify-between mt-4">
                <span className="text-[11px] text-[#6E6A64]">{post.author.name}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A] transition-colors inline-flex items-center space-x-1"
                >
                  <span>Read</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
