import { projects } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" index="04" title="Projects">
      <Reveal className="proj-grid">
        {projects.map((project) => (
          <article className="proj-card" key={project.name}>
            <div className="proj-head">
              <h3>{project.name}</h3>
              <span className="exp-date mono">{project.dates}</span>
            </div>
            <p className="proj-sub">{project.subtitle}</p>
            <ul className="exp-bullets">
              {project.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="chip-row proj-stack">
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
