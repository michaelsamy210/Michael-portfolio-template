import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import skillGroups from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-32 sm:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title={
              <>
                Tools I use to
                <span className="text-white/30"> build.</span>
              </>
            }
            description="A practical toolkit for building responsive, maintainable and visually strong web experiences."
          />
        </Reveal>

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 100}>
              <article className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
                  0{index + 1}
                </p>

                <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em]">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/35">
                  {group.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-white/55 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;