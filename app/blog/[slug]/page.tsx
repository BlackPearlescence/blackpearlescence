import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../../lib/blogPosts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog post not found | Sani Rogers",
    };
  }

  return {
    title: `${post.title} | Sani Rogers`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f5ef] px-6 pb-20 pt-36 text-[#182018] sm:px-10 lg:px-16">
      <article className="mx-auto max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex h-11 items-center justify-center border border-[#9ea88d] bg-white/55 px-5 text-sm font-semibold text-[#182018] transition hover:border-[#667d2e] hover:bg-white"
        >
          Back to blog
        </Link>

        <header className="mt-10 border-b border-[#d8d5c7] pb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold tracking-[0.16em] uppercase">
            <span className="text-[#667d2e]">{post.category}</span>
            <span className="text-[#6d7568]">{post.date}</span>
            <span className="text-[#6d7568]">{post.readTime}</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-7 text-xl leading-8 text-[#485345]">{post.intro}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[#c8cfb8] bg-[#eef0e3] px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[#334033] uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-10 grid gap-8">
          {post.sections.map((section) => (
            <section
              key={section.heading}
              className="border-l-2 border-[#667d2e] bg-[#fffdf6] px-6 py-6 shadow-[0_16px_40px_rgba(54,67,39,0.08)] sm:px-8"
            >
              <h2 className="text-2xl font-semibold leading-tight">
                {section.heading}
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#3e4a3d]">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
