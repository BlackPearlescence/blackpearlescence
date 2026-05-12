import Image from "next/image";
import { NavigationBar } from "./components/NavigationBar";

const focusAreas = [
  "Planning tools for seed starting, crop rotation, and seasonal workflows",
  "Field notes, reminders, and lightweight records that growers will actually use",
  "Clear dashboards for weather, soil, harvests, inventory, and daily decisions",
];

const projects = [
  {
    title: "Grow Log Systems",
    description:
      "Structured journals that turn observations, photos, and tasks into practical growing history.",
  },
  {
    title: "Nursery Operations",
    description:
      "Interfaces for propagation, stock tracking, batch status, and repeatable care routines.",
  },
  {
    title: "Garden Intelligence",
    description:
      "Small automations that connect sensors, weather, and schedules without burying people in data.",
  },
];

const principles = [
  "Human-scale software",
  "Calm interfaces",
  "Useful data",
  "Season-aware systems",
];

const links = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#182018]">
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

        <NavigationBar />
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
                I build practical software for people working with plants:
                systems that make planning easier, records clearer, and daily
                growing decisions less scattered.
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

            <div className="grid grid-cols-2 gap-3 text-sm text-[#293529] sm:max-w-xl lg:justify-self-end">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="border border-[#d4d3c7]/80 bg-[#fffdf6]/75 px-4 py-4 backdrop-blur"
                >
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#667d2e] uppercase">
              Repositioning
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
              From generic developer brand to a clear horticulture niche.
            </h2>
          </div>
          <div className="grid gap-5">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="border-t border-[#c9c8ba] pt-5 text-xl leading-8 text-[#334033]"
              >
                {area}
              </div>
            ))}
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
              Portfolio direction
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              The work should feel like it belongs in gardens, greenhouses,
              nurseries, and small farms.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="border-t border-[#65705f] pt-6"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-4 leading-7 text-[#d8ddcf]">
                  {project.description}
                </p>
              </article>
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
