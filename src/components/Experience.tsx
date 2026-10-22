import { ArrowUpRight } from "lucide-react";
import { experience } from "../data/content";
import { Reveal } from "./ui/Reveal";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="border-b border-border px-6 py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
            Experience
          </p>
          <h2 className="text-[clamp(30px,4vw,60px)] font-semibold leading-none tracking-[-0.02em]">
            Where I've worked.
          </h2>
        </div>

        <div className="border-t border-border">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`} delay={index * 0.04}>
              <article className="group grid gap-3 border-b border-border py-7 md:grid-cols-[170px_1fr_32px] md:items-start md:gap-8 md:py-8">
                <span className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {item.period}
                </span>

                <div className="transition-transform duration-300 group-hover:translate-x-1.5">
                  <h3 className="text-xl font-semibold tracking-[-0.01em] text-foreground md:text-2xl">
                    {item.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                    <span
                      data-testid="experience-company"
                      className="font-medium text-primary"
                    >
                      {item.company}
                    </span>
                    <span className="text-muted-foreground">
                      {item.location}
                    </span>
                  </div>
                  <ul className="mt-4 max-w-2xl space-y-2.5">
                    {item.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-primary"
                        />
                        <span data-testid="experience-detail">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ArrowUpRight
                  size={20}
                  className="mt-1 hidden text-primary transition-transform duration-300 group-hover:translate-x-2.5 md:block"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
