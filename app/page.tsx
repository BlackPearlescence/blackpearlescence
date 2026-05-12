import Image from "next/image";
import { NavigationBar } from "./components/NavigationBar";
import { ProjectCard, type ProjectCardProps } from "./components/ProjectCard";

const portfolioProjects: ProjectCardProps[] = [
  {
    title: "Ciderina",
    eyebrow: "Featured project",
    summary:
      "Ciderina is a horticulture-forward cider planning app for growers and hobbyists. It allows users to explore apple cultivars, build weighted blends, understand estimated cider traits, plan preparation and fermentation steps, and finally, generate a practical cider report.",
    description:
      "Hobbyist cidermakers often have access to apple varieties but lack an easy way to understand how these cultivars work together in a blend. Ciderina connects apple traits, fruit chemistry, blend composition, and process decisions into one guided workflow.",
    projectUrl: "https://cider-maker.vercel.app/",
    images: [
      {
        src: "/portfolio/cider-project-flow.png",
        alt: "Project screenshot showing a dark interface with a visual blend process workflow",
      },
      {
        src: "/portfolio/cider-project-apples.png",
        alt: "Project screenshot showing apple variety cards in a dark botanical interface",
      },
    ],
    details: [
      "Searchable apple cultivar catalog",
      "Advanced filtering by category, flavor class, Brix, pH, and tannin",
      "Batch builder with selected apple varieties",
      "Fermentation and cider planning",
    ],
    tags: ["Next.js", "TypeScript", "Horticulture"],
  },
];

const links = [
  { label: "Email", href: "srogers138@gmail.com" },
  { label: "GitHub", href: "https://github.com/blackpearlescence" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sani-rogers-b9a38425a/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#182018]">
      <NavigationBar />
      <section
        id="top"
        className="relative isolate flex min-h-[92vh] items-end overflow-hidden px-6 pb-10 pt-24 sm:px-10 lg:px-16"
      >
        <Image
          src="/guava-banner.jpg"
          alt="A green guava fruit growing among sunlit leaves"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-[center_58%]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(247,245,239,0.97)_0%,rgba(247,245,239,0.86)_34%,rgba(247,245,239,0.34)_68%,rgba(24,32,24,0.18)_100%)]" />

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
          <div className="grid gap-10 pb-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.55fr)] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold tracking-[0.22em] text-[#667d2e] uppercase">
                Software engineering for horticulture
              </p>
              <h1 className="text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl lg:text-7xl">
                Thoughtful tools for growers and gardeners.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#3e4a3d] sm:text-xl">
                I’m a full-stack engineer with a background in computer science
                and a deep interest in gardening, horticulture, and food
                systems. I enjoy building software that helps people make better
                decisions around plants: what to grow, how to grow, and how to
                turn raw information into useful action.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center bg-[#182018] px-6 text-sm font-semibold text-white transition hover:bg-[#2d3a2c]"
                >
                  View projects
                </a>
                <a
                  href="#about"
                  className="inline-flex h-12 items-center justify-center border border-[#9ea88d] bg-white/50 px-6 text-sm font-semibold text-[#182018] transition hover:border-[#667d2e] hover:bg-white"
                >
                  About my work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#667d2e] uppercase">
              About Me
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
              I want to bridge the gap between software and nature bringing
              about a unity in which better decisions can be made for
              horticulture.
            </h2>
          </div>
          <div className="grid gap-5">
            <div className="border border-[#c8cfb8] bg-[#fffdf6]/80 px-6 py-7 shadow-[0_18px_50px_rgba(54,67,39,0.12)] backdrop-blur sm:px-8">
              <p className="mt-4 text-xl leading-8 text-[#334033]">
                I have an enormous passion for gardening and in fact, the guava
                tree you see above is my very own tree! I want to create tools
                that make gardening approachable and easier for all walks of
                life. What better way to use my knowledge of software and the
                workflows behind it?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-[#20271f] px-6 py-20 text-[#f7f5ef] sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-[#b7ca75] uppercase">
              Featured work
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Projects that connect thoughtful software with plant-focused
              decisions.
            </h2>
          </div>

          <div className="mt-12 grid gap-8">
            {portfolioProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
            I care about the quiet parts of useful software: timing, context,
            trust, and whether the tool still makes sense when someone has soil
            on their hands.
          </h2>
          <p className="text-lg leading-8 text-[#485345]">
            That lens changes the engineering choices. It favors resilient flows
            over flashy demos, thoughtful defaults over clutter, and data that
            helps people notice what is changing in the living systems they
            tend.
          </p>
        </div>
      </section>

      <section
        id="links"
        className="border-t border-[#d8d5c7] px-6 py-16 sm:px-10 lg:px-16"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#667d2e] uppercase">
              Links
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Find me around the web.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                className="inline-flex h-11 items-center border border-[#aeb39f] bg-white/55 px-5 text-sm font-semibold text-[#182018] transition hover:border-[#667d2e] hover:bg-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
