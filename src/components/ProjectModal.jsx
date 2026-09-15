import { useEffect, useState } from "react";
import site from "../data/site";

function ProjectModal({ project, onClose }) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/80 p-4 backdrop-blur-xl sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="mx-auto my-6 max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c0c] shadow-2xl sm:my-10">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.25em] text-cyan-400">
              {project.number}
            </span>

            <span className="h-px w-8 bg-white/15" />

            <span className="text-xs text-white/40">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-white/30 hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[300px] overflow-hidden lg:min-h-[600px]">
            {!imageError ? (
              <img
                src={project.image}
                alt={project.title}
                onError={() => setImageError(true)}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="project-fallback absolute inset-0">
                <span>{project.title.slice(0, 2).toUpperCase()}</span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          <div className="p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-white/30">
              {project.year}
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              {project.title}
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/50">
              {project.overview}
            </p>

            <div className="mt-9">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                Highlights
              </p>

              <div className="space-y-3">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 text-sm text-white/60"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/50"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {(project.liveUrl || project.githubUrl || site.cv) && (
              <div className="mt-10 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-5 py-3 text-xs font-semibold text-black transition hover:scale-105"
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold text-white/70 transition hover:border-white/30 hover:text-white"
                  >
                    GitHub ↗
                  </a>
                )}

                {site.cv && (
                  <a
                    href={site.cv}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold text-white/70 transition hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300"
                  >
                    CV ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
