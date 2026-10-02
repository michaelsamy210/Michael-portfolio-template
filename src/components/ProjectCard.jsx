import { useState } from "react";

function ProjectCard({ project, index, onOpen }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="block w-full text-left"
        aria-label={`View ${project.title} project details`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
          {!imageError ? (
            <img
              src={project.image}
              alt={project.title}
              loading={index < 2 ? "eager" : "lazy"}
              onError={() => setImageError(true)}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="project-fallback flex h-full w-full items-center justify-center">
              <span className="text-5xl font-black tracking-[-0.05em] text-white/20">
                {project.title.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute left-5 top-5 flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-md">
              {project.number}
            </span>

            {project.featured && (
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-cyan-300 backdrop-blur-md">
                Featured
              </span>
            )}
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-white/40">
                {project.category}
              </p>

              <h3 className="text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl">
                {project.title}
              </h3>
            </div>

            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/40 text-lg text-white backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 group-hover:text-cyan-300">
              ↗
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <p className="max-w-xl text-sm leading-6 text-white/45">
              {project.description}
            </p>

            <span className="hidden shrink-0 text-xs text-white/25 sm:block">
              {project.year}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-white/35"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </button>

      <div className="border-t border-white/5 px-6 py-4 sm:px-7">
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-xs font-semibold text-white/50 transition hover:text-white"
          >
            View details
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-white/60 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
