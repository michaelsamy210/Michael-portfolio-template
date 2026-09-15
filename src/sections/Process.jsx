import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      text: "I start by understanding the goal, audience and core requirements before writing the interface.",
    },
    {
      number: "02",
      title: "Structure",
      text: "The project is organized into reusable components and clear sections so the code remains maintainable.",
    },
    {
      number: "03",
      title: "Build",
      text: "I turn the structure into a responsive React experience with attention to interaction and visual hierarchy.",
    },
    {
      number: "04",
      title: "Refine",
      text: "The final stage focuses on responsive behavior, details, animations, performance and overall polish.",
    },
  ];

  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-white/[0.06] px-5 py-32 sm:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title={
              <>
                From idea to
                <span className="text-white/30"> interface.</span>
              </>
            }
            description="A straightforward process designed to keep the work focused while leaving room for creative solutions."
          />
        </Reveal>

        <div className="mt-20">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 80}>
              <div className="group grid gap-6 border-t border-white/10 py-8 md:grid-cols-[100px_220px_1fr] md:items-center">
                <span className="text-xs tracking-[0.25em] text-cyan-400">
                  {step.number}
                </span>

                <h3 className="text-2xl font-bold tracking-[-0.03em] transition group-hover:text-cyan-300">
                  {step.title}
                </h3>

                <p className="max-w-2xl text-sm leading-7 text-white/40">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;