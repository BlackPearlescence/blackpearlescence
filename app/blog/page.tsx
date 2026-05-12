import type { Metadata } from "next";
import Link from "next/link";
import { BlogPostCard } from "../components/BlogPostCard";
import { blogPosts } from "../lib/blogPosts";

export const metadata: Metadata = {
  title: "Blog | Sani Rogers",
  description:
    "Field notes on software engineering, gardening, horticulture, and thoughtful tools for growers.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] px-6 pb-20 pt-36 text-[#182018] sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#667d2e] uppercase">
              Blog
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Field notes for plant-focused software.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#485345]">
            A place for project reflections, gardening observations, and the
            product thinking behind tools for growers and gardeners. The posts
            below use placeholder copy so you can replace them with your own
            writing when you are ready.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 border border-[#c8cfb8] bg-[#fffdf6] p-6 sm:p-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#667d2e] uppercase">
            Open notebook
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#334033]">
            This is where I think out loud about the overlap between software
            and growing things: garden observations, project reflections, and
            ideas for tools that help people make better decisions with plants.
          </p>
        </div>

        <Link
          href="/#top"
          className="mt-10 inline-flex h-12 items-center justify-center border border-[#9ea88d] bg-white/55 px-5 text-sm font-semibold text-[#182018] transition hover:border-[#667d2e] hover:bg-white"
        >
          Back home
        </Link>
      </section>
    </main>
  );
}
