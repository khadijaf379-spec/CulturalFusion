import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";

export function JournalSection() {
  const latestArticles = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-20 bg-[#FAF8F5] border-t border-[#E9E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Cultural Journal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B]">
              Stories, Style & Textiles
            </h2>
          </div>

          <Link
            href="/blog"
            className="mt-4 sm:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A] transition-colors group"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestArticles.map((post) => (
            <article key={post.id} className="group flex flex-col justify-between">
              <div>
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-[#E9E1D5] mb-4">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#1D1D1B] text-[#F8F5EF] text-[10px] uppercase tracking-widest px-2.5 py-1">
                    {post.category}
                  </div>
                </Link>

                <div className="flex items-center space-x-3 text-[11px] text-[#A88B5A] mb-2 uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <Link href={`/blog/${post.slug}`} className="block group-hover:text-[#A88B5A] transition-colors">
                  <h3 className="font-serif text-xl font-normal text-[#1D1D1B] leading-snug mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-xs text-[#6E6A64] line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E9E1D5]">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A] transition-colors inline-flex items-center space-x-1"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
