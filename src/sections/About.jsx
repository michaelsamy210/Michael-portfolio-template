import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function About() {
  const principles = [
    {
      number: "01",
      title: "Clarity",
      text: "Interfaces should communicate quickly, feel natural and stay easy to navigate.",
    },
    {
      number: "02",
      title: "Quality",
      text: "Small details matter — spacing, typography, motion and responsive behavior all contribute to the final experience.",
    },
    {
      number: "03",
      title: "Structure",
      text: "I build reusable components and organized code so projects can evolve without becoming difficult to maintain.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.06] px-5 py-32 sm:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                I care about how
                <span className="text-white/30"> things feel.</span>
              </>
            }
            description="I'm a front-end developer focused on turning ideas into polished digital experiences. My work combines clean React architecture with modern visual design and thoughtful interaction."
          />
        </Reveal>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.number} delay={index * 100}>
              <article className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.25em] text-cyan-400">
                    {principle.number}
                  </span>

                  <span className="text-white/20">↗</span>
                </div>

                <h3 className="mt-16 text-2xl font-bold tracking-[-0.03em]">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/40">
                  {principle.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;