import Link from "next/link";

export const NavigationBar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#d7d2bd]/70 bg-[#f7f5ef]/86 px-6 py-4 text-sm font-medium text-[#334033] backdrop-blur sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        <Link
          href="/#top"
          className="font-semibold tracking-[0.18em] uppercase"
        >
          Sani Rogers
        </Link>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-8">
          <Link href="/#top" className="transition hover:text-[#667d2e]">
            Home
          </Link>
          <Link href="/#about" className="transition hover:text-[#667d2e]">
            About
          </Link>
          <Link href="/#projects" className="transition hover:text-[#667d2e]">
            Projects
          </Link>
          <Link href="/#purpose" className="transition hover:text-[#667d2e]">
            Purpose
          </Link>
          <Link href="/blog" className="transition hover:text-[#667d2e]">
            Blog
          </Link>
          <Link href="/#links" className="transition hover:text-[#667d2e]">
            Links
          </Link>
        </div>
      </div>
    </nav>
  );
};
