import { projects } from "../data/content";
import { Reveal, Section } from "./Reveal";

export function Projects() {
  return (
    <Section id="projects" index="03" title="Projects">
      <Reveal className="proj-grid">
        {projects.map((project, i) => (
          <article className="proj-card" key={project.name}>
            <div className="proj-top mono">
              <span>
                P—{String(i + 1).padStart(2, "0")} · {project.kind}
              </span>
              <span>{project.dates}</span>
            </div>
            <h3>{project.name}</h3>
            <p className="proj-sub">{project.summary}</p>
            <ul className="exp-bullets">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="chip-row">
              {project.stack.map((tech) => (
                <span className="chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
