import { ArrowUpRight } from "lucide-react";
import { services } from "../data/content";
import { Reveal } from "./ui/Reveal";

export const Services = () => {
  return (
    <section className="border-b border-border px-6 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <p className="mb-12 text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
          What I do
        </p>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {services.map((service, index) => (
            <Reveal key={service.index} delay={index * 0.08}>
              <article className="flex h-full flex-col border-t border-border pt-6">
                <span className="mb-8 font-display text-sm font-semibold text-primary">
                  {service.index}
                </span>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.02em] text-foreground md:text-3xl">
                  {service.title}
                </h3>
                <p className="mb-8 flex-1 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href={service.link.href}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {service.link.label}
                  <ArrowUpRight
                    size={15}
                    className="text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
