import { skillGroups } from "../data/content";
import { Reveal } from "./ui/Reveal";

export const Skills = () => {
  return (
    <section id="skills" className="border-b border-border px-6 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
            Skills
          </p>
          <h2 className="text-[clamp(30px,4vw,60px)] font-semibold leading-none tracking-[-0.02em]">
            What I work with.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {skillGroups.map((group, index) => (
            <Reveal key={group.index} delay={index * 0.08}>
              <div className="border-t border-border pt-6">
                <span className="font-display text-sm font-semibold text-primary">
                  {group.index}
                </span>
                <h3 className="mb-6 mt-3 text-xl font-semibold tracking-[-0.01em] text-foreground">
                  {group.title}
                </h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:text-primary"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
