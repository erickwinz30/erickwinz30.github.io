import { stackMarquee } from "../data/content";

export const Marquee = () => {
  return (
    <section
      aria-label="Core technology stack"
      className="overflow-hidden border-y border-border py-6"
    >
      <p className="sr-only">Core stack: {stackMarquee.join(", ")}.</p>
      <div className="marquee-track flex w-max opacity-55 transition-opacity hover:opacity-100">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden="true"
            className="flex shrink-0 items-center gap-14 pr-14"
          >
            {stackMarquee.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground md:text-3xl"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
