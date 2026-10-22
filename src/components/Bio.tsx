import { ArrowUpRight, Download } from "lucide-react";
import { bioParagraphs, contact } from "../data/content";
import { Reveal } from "./ui/Reveal";

const cvHref = "/assets/CV_ATS_ErickWinata_English_17-10-2026.pdf";

export const Bio = () => {
  return (
    <section id="about" className="border-b border-border px-6 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-20">
        <Reveal>
          <div className="relative mx-auto w-full max-w-[420px] md:mx-0">
            <div className="absolute inset-0 scale-90 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative overflow-hidden border border-border bg-card">
              <img
                src="/assets/profile_erick.png"
                alt="Erick Winata"
                loading="lazy"
                className="mx-auto h-auto max-h-[440px] w-full object-contain"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
            About
          </p>
          <h2 className="mb-8 text-[clamp(30px,4vw,60px)] font-semibold leading-none tracking-[-0.02em]">
            About Erick.
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={cvHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Download CV
              <Download size={16} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-primary"
            >
              LinkedIn
              <ArrowUpRight
                size={14}
                className="text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-primary"
            >
              GitHub
              <ArrowUpRight
                size={14}
                className="text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Bio;
