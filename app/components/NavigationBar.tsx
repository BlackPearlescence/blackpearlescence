export const NavigationBar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-20 border-b border-[#d7d2bd]/70 bg-[#f7f5ef]/86 px-6 py-4 text-sm font-medium text-[#334033] backdrop-blur sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        <a href="#top" className="font-semibold tracking-[0.18em] uppercase">
          Sani Rogers
        </a>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-8">
          <a href="#top" className="transition hover:text-[#667d2e]">
            Home
          </a>
          <a href="#about" className="transition hover:text-[#667d2e]">
            About
          </a>
          <a href="#projects" className="transition hover:text-[#667d2e]">
            Projects
          </a>
          <a href="#links" className="transition hover:text-[#667d2e]">
            Links
          </a>
          <a href="#blog" className="transition hover:text-[#667d2e]">
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};
