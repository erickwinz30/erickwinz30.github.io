import { Reveal } from "./ui/Reveal";

export const Principle = () => {
  return (
    <section className="border-b border-border px-6 py-24 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <blockquote>
            <p className="font-display text-[clamp(30px,5vw,72px)] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground">
              “Reliability is a feature. If it only works in the demo, it
              doesn't work.”
            </p>
            <footer className="mt-8 text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
              Working principle
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
};

export default Principle;
