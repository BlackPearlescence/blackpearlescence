"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectCardProps = {
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  projectUrl: string;
  images: ProjectImage[];
  details: string[];
  tags: string[];
};

export function ProjectCard({
  title,
  eyebrow,
  summary,
  description,
  projectUrl,
  images,
  details,
  tags,
}: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dialogTitleId = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-dialog-title`;

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const imageTimer = window.setInterval(() => {
      setActiveImage((currentImage) => (currentImage + 1) % images.length);
    }, 4200);

    return () => window.clearInterval(imageTimer);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <article className="grid overflow-hidden border border-[#596454] bg-[#162016] shadow-[0_24px_70px_rgba(0,0,0,0.22)] lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[260px] overflow-hidden border-b border-[#394638] bg-[#101810] lg:min-h-[480px] lg:border-b-0 lg:border-r">
          {images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className={`object-cover transition-opacity duration-700 ${
                index === activeImage ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Show project image ${index + 1}`}
                onClick={() => setActiveImage(index)}
                className={`h-2.5 w-8 border transition ${
                  index === activeImage
                    ? "border-[#e8eadf] bg-[#e8eadf]"
                    : "border-[#b7ca75]/70 bg-[#182018]/65 hover:bg-[#b7ca75]/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 p-6 sm:p-8 lg:p-10">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-[#b7ca75] uppercase">
              {eyebrow}
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#f7f5ef] sm:text-4xl">
              {title}
            </h3>
            <p className="mt-5 text-lg leading-8 text-[#d8ddcf]">{summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#65705f] bg-[#20271f] px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[#d8ddcf] uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-12 items-center justify-center bg-[#f7f5ef] px-5 text-sm font-semibold text-[#182018] transition hover:bg-white"
            >
              More information
            </button>
            <a
              href={projectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center border border-[#9ea88d] px-5 text-sm font-semibold text-[#f7f5ef] transition hover:border-[#f7f5ef] hover:bg-[#f7f5ef]/10"
            >
              Visit project
            </a>
          </div>
        </div>
      </article>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#101810]/75 px-6 py-8 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          onMouseDown={() => setIsOpen(false)}
        >
          <div
            className="max-h-full w-full max-w-3xl overflow-auto border border-[#c8cfb8] bg-[#fffdf6] p-6 text-[#182018] shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-8"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] text-[#667d2e] uppercase">
                  Project details
                </p>
                <h2
                  id={dialogTitleId}
                  className="mt-3 text-3xl font-semibold leading-tight"
                >
                  {title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#aeb39f] text-xl leading-none transition hover:border-[#667d2e] hover:bg-white"
                aria-label="Close project details"
              >
                x
              </button>
            </div>

            <p className="mt-6 text-lg leading-8 text-[#3e4a3d]">
              {description}
            </p>

            <div className="mt-7 grid gap-4">
              {details.map((detail) => (
                <p
                  key={detail}
                  className="border-l-2 border-[#667d2e] bg-[#eef0e3] px-4 py-3 leading-7 text-[#334033]"
                >
                  {detail}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center bg-[#182018] px-5 text-sm font-semibold text-white transition hover:bg-[#2d3a2c]"
              >
                Open project
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-12 items-center justify-center border border-[#aeb39f] px-5 text-sm font-semibold text-[#182018] transition hover:border-[#667d2e] hover:bg-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
