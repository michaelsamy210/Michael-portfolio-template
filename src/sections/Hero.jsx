import { useEffect, useState } from "react";
import site from "../data/site";

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="top"
      className="hero-section relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-36 sm:px-8"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" />

      <div className="hero-orb hero-orb-one pointer-events-none absolute" />
      <div className="hero-orb hero-orb-two pointer-events-none absolute" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="hero-content">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-xs text-white/55">
              {site.availability}
            </span>
          </div>

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
            {site.role}
          </p>

          <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.06em] sm:text-8xl lg:text-[7.5rem]">
            I build
            <br />
            <span className="gradient-text">digital</span>
            <br />
            experiences.
          </h1>

          <p className="mt-9 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
            I create modern, responsive and interactive web experiences with
            React, clean component architecture and a strong focus on visual
            quality.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="magnetic-button rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-105"
            >
              View my work
              <span className="ml-2">↗</span>
            </a>

            <a
              href="#contact"
              className="magnetic-button rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300"
            >
              Let's talk
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5 text-xs text-white/30">
            <span>React</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>JavaScript</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Supabase</span>
          </div>
        </div>

        <div
          className="relative mx-auto flex h-[480px] w-full max-w-[560px] items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          <div className="hero-sphere absolute h-[400px] w-[400px] rounded-full border border-white/[0.08]" />

          <div
            className="absolute h-[340px] w-[340px] rounded-full border border-cyan-400/[0.12]"
            style={{
              transform: `
                rotateX(${mouse.y * -18}deg)
                rotateY(${mouse.x * 18}deg)
              `,
            }}
          />

          <div
            className="absolute h-[280px] w-[280px] rounded-full border border-violet-400/[0.12]"
            style={{
              transform: `
                rotateX(${mouse.y * 25}deg)
                rotateY(${mouse.x * -25}deg)
              `,
            }}
          />

          <div
            className="hero-cube absolute h-64 w-64 rounded-[3.5rem] border border-cyan-400/20 bg-cyan-400/[0.04] shadow-[0_0_120px_rgba(34,211,238,0.12)] backdrop-blur-xl"
            style={{
              transform: `
                translate3d(${mouse.x * 40}px, ${mouse.y * 40}px, -40px)
                rotateX(${mouse.y * -20}deg)
                rotateY(${mouse.x * 20}deg)
                rotateZ(45deg)
              `,
            }}
          />

          <div
            className="absolute h-44 w-44 rounded-[2.8rem] border border-violet-400/20 bg-violet-400/[0.05] shadow-[0_0_100px_rgba(167,139,250,0.14)] backdrop-blur-xl"
            style={{
              transform: `
                translate3d(${mouse.x * -65}px, ${mouse.y * -65}px, 80px)
                rotateX(${mouse.y * 28}deg)
                rotateY(${mouse.x * -28}deg)
                rotateZ(-12deg)
              `,
            }}
          />

          <div
            className="hero-core relative flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-4xl font-black shadow-[0_0_80px_rgba(255,255,255,0.08)] backdrop-blur-2xl"
            style={{
              transform: `
                translate3d(${mouse.x * 85}px, ${mouse.y * 85}px, 120px)
                rotateX(${mouse.y * -35}deg)
                rotateY(${mouse.x * 35}deg)
              `,
            }}
          >
            M<span className="text-cyan-400">.</span>
          </div>

          <div
            className="absolute right-0 top-16 rounded-full border border-white/10 bg-black/50 px-4 py-2.5 text-xs text-white/55 backdrop-blur-xl"
            style={{
              transform: `translate3d(${mouse.x * 30}px, ${
                mouse.y * 30
              }px, 40px)`,
            }}
          >
            React
          </div>

          <div
            className="absolute bottom-16 left-0 rounded-full border border-white/10 bg-black/50 px-4 py-2.5 text-xs text-white/55 backdrop-blur-xl"
            style={{
              transform: `translate3d(${mouse.x * -25}px, ${
                mouse.y * -25
              }px, 30px)`,
            }}
          >
            Creative UI
          </div>

          <div
            className="absolute bottom-2 right-14 rounded-full border border-white/10 bg-black/50 px-4 py-2.5 text-xs text-white/55 backdrop-blur-xl"
            style={{
              transform: `translate3d(${mouse.x * 45}px, ${
                mouse.y * 45
              }px, 50px)`,
            }}
          >
            Front-End
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-white/25 sm:flex">
        <span className="h-px w-10 bg-white/15" />
        Scroll to explore
        <span className="h-px w-10 bg-white/15" />
      </div>
    </section>
  );
}

export default Hero;