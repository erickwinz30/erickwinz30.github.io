import { useState } from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/content";
import { Reveal } from "./ui/Reveal";

export const Projects = () => {
  const [openBreakdown, setOpenBreakdown] = useState<string | null>(null);

  return (
    <section id="work" className="border-b border-border px-6 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
              Selected work
            </p>
            <h2 className="text-[clamp(30px,4vw,60px)] font-semibold leading-none tracking-[-0.02em]">
              Selected <em className="italic text-primary">work</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Four systems, built end to end. The flagship platform is available
            as a short technical breakdown.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((project, index) => {
            const isOpen = openBreakdown === project.id;

            return (
              <Reveal key={project.id} delay={index * 0.06}>
                <article className="group relative flex h-full flex-col">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      data-cursor="view"
                      className="absolute inset-0 z-10"
                    />
                  ) : null}

                  <div className="relative aspect-[16/10] overflow-hidden border border-border bg-card">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_70%_20%,hsl(8_92%_62%/0.28),transparent_55%)]">
                        <span className="font-display text-[clamp(120px,18vw,260px)] font-extrabold leading-none tracking-[-0.06em] text-primary">
                          {project.panel}
                        </span>
                        <span className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                          AI Platform
                        </span>
                        <span className="absolute bottom-5 right-5 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                          Go + React
                        </span>
                      </div>
                    )}
                    <span className="absolute right-5 top-5 z-20 font-display text-sm font-semibold text-primary">
                      {project.index}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col border-b border-border pb-6 pt-5">
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="relative z-20 mt-6 flex flex-wrap items-center gap-5">
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:text-primary"
                        >
                          <Github size={15} />
                          GitHub
                        </a>
                      ) : null}
                      {project.demoHref ? (
                        <a
                          href={project.demoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-foreground transition-colors hover:text-primary"
                        >
                          <ExternalLink size={15} />
                          Live demo
                        </a>
                      ) : null}
                      {project.breakdown ? (
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={`breakdown-${project.id}`}
                          onClick={() =>
                            setOpenBreakdown(isOpen ? null : project.id)
                          }
                          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-primary"
                        >
                          {isOpen ? "Close breakdown" : "Read the breakdown"}
                          <ArrowUpRight
                            size={15}
                            className={`transition-transform ${
                              isOpen ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                      ) : null}
                    </div>

                    {project.breakdown ? (
                      <div
                        id={`breakdown-${project.id}`}
                        hidden={!isOpen}
                        className="mt-6 border-t border-border pt-5"
                      >
                        <ul className="space-y-3">
                          {project.breakdown.map((point) => (
                            <li
                              key={point}
                              className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
