import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="work"
        className="relative overflow-hidden px-5 py-32 sm:px-8 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Selected Work"
                title={
                  <>
                    Projects built with{" "}
                    <span className="text-white/30">purpose.</span>
                  </>
                }
                description="A selection of web experiences focused on modern interfaces, responsive design and scalable front-end development."
              />

              <div className="hidden shrink-0 text-right md:block">
                <p className="text-5xl font-black tracking-[-0.05em]">
                  0{projects.length}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/25">
                  Selected projects
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default Projects;