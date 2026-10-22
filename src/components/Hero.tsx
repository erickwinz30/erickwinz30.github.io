import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-6 pb-10 pt-24 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.18em] text-primary md:text-[11px] md:tracking-[0.24em]">
          Full-stack · AI Automation · Backend
        </p>

        <h1 className="grid grid-cols-1">
          <span className="sr-only">Erick Winata</span>

          <span
            aria-hidden="true"
            className="z-0 block overflow-hidden md:row-start-1"
          >
            <motion.span
              className="block text-center font-display text-[clamp(44px,13vw,260px)] font-extrabold uppercase leading-[0.82] tracking-[-0.04em]"
              initial={reduceMotion ? false : { y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease, delay: 0.12 }}
            >
              Erick
            </motion.span>
          </span>

          <motion.img
            src="/assets/profile_erick.png"
            alt=""
            aria-hidden="true"
            width={354}
            height={472}
            className="relative z-10 row-start-3 mx-auto mt-8 h-[clamp(280px,38vh,440px)] max-h-[440px] w-auto object-contain md:row-start-2 md:-mt-[clamp(24px,4.5vw,64px)]"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.3 }}
          />

          <span
            aria-hidden="true"
            className="z-20 row-start-2 block overflow-hidden md:row-start-3 md:-mt-[clamp(32px,8vw,120px)]"
          >
            <motion.span
              className="block text-center font-display text-[clamp(44px,13vw,260px)] font-extrabold uppercase leading-[0.82] tracking-[-0.04em]"
              initial={reduceMotion ? false : { y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease, delay: 0.24 }}
            >
              Winata
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I turn messy operations into reliable software — Go backends,
            multi-tenant AI pipelines, and the interfaces people actually use.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              See selected work
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="/assets/CV_ATS_ErickWinata_English_17-10-2026.pdf"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Download CV
              <Download
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          <span>East Surabaya, Indonesia</span>
          <span className="inline-flex items-center gap-2">
            Scroll
            <ArrowUpRight size={14} className="rotate-90 text-primary" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
