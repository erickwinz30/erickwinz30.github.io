import { productionFacts } from "../data/content";
import { Reveal } from "./ui/Reveal";

export const Facts = () => {
  return (
    <section className="border-b border-border px-6 py-16 lg:px-10 lg:py-20">
      <h2 className="sr-only">Production facts</h2>
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
        {productionFacts.map((fact, index) => (
          <Reveal key={fact.label} delay={index * 0.06}>
            <div>
              <div className="font-display text-[clamp(44px,6vw,92px)] font-semibold leading-none tracking-[-0.04em] text-primary">
                {fact.value}
              </div>
              <p className="mt-4 max-w-[16ch] text-xs uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                {fact.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Facts;
