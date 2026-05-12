import Link from "next/link";
import type { BlogPost } from "../lib/blogPosts";

type BlogPostCardProps = {
  post: BlogPost;
  tone?: "light" | "dark";
};

export function BlogPostCard({ post, tone = "light" }: BlogPostCardProps) {
  const isDark = tone === "dark";

  return (
    <article
      className={
        isDark
          ? "flex min-h-full flex-col border border-[#596454] bg-[#162016] p-6 text-[#f7f5ef] shadow-[0_18px_55px_rgba(0,0,0,0.18)] sm:p-7"
          : "flex min-h-full flex-col border border-[#d8d5c7] bg-[#fffdf6] p-6 text-[#182018] shadow-[0_18px_45px_rgba(54,67,39,0.1)] sm:p-7"
      }
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold tracking-[0.16em] uppercase">
        <span className={isDark ? "text-[#b7ca75]" : "text-[#667d2e]"}>
          {post.category}
        </span>
        <span className={isDark ? "text-[#9ea88d]" : "text-[#6d7568]"}>
          {post.readTime}
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-semibold leading-tight">
        <Link
          href={`/blog/${post.slug}`}
          className={
            isDark
              ? "transition hover:text-[#dce9a7]"
              : "transition hover:text-[#667d2e]"
          }
        >
          {post.title}
        </Link>
      </h3>

      <p
        className={
          isDark
            ? "mt-4 leading-7 text-[#d8ddcf]"
            : "mt-4 leading-7 text-[#485345]"
        }
      >
        {post.excerpt}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className={
              isDark
                ? "border border-[#65705f] bg-[#20271f] px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[#d8ddcf] uppercase"
                : "border border-[#c8cfb8] bg-[#eef0e3] px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[#334033] uppercase"
            }
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-7">
        <Link
          href={`/blog/${post.slug}`}
          className={
            isDark
              ? "inline-flex h-11 items-center justify-center border border-[#9ea88d] px-5 text-sm font-semibold text-[#f7f5ef] transition hover:border-[#f7f5ef] hover:bg-[#f7f5ef]/10"
              : "inline-flex h-11 items-center justify-center bg-[#182018] px-5 text-sm font-semibold text-white transition hover:bg-[#2d3a2c]"
          }
        >
          Read note
        </Link>
      </div>
    </article>
  );
}
