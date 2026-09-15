import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import site from "../data/site";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-32 sm:px-8 lg:py-48"
    >
      <div className="contact-glow pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            align="center"
            title={
              <>
                Have an idea?
                <br />
                <span className="gradient-text">Let's build it.</span>
              </>
            }
            description="I'm open to front-end opportunities, freelance projects and collaborations where thoughtful design and solid development matter."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300"
            >
              Gmail ↗
            </a>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300"
            >
              WhatsApp ↗
            </a>

            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300"
            >
              LinkedIn ↗
            </a>

            <a
              href={site.cv}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300"
            >
              Download CV ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;

