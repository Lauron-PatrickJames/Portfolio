import { useState } from "react";
import { experience, visibleExperience } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Section id="experience" index="03" title="Experience">
      <Reveal className={`exp-list ${expanded ? "expanded" : ""}`.trim()} id="exp_list">
        {experience.map((item, i) => (
          <article
            className={`exp-card ${i >= visibleExperience ? "exp-extra" : ""}`.trim()}
            key={item.role}
          >
            <div className="exp-head">
              <div>
                <h3>{item.role}</h3>
                <p className="exp-org">{item.org}</p>
              </div>
              <span className="exp-date mono">{item.dates}</span>
            </div>
            <ul className="exp-bullets">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </Reveal>

      {experience.length > visibleExperience && (
        <button
          className="view-more mono"
          type="button"
          aria-expanded={expanded}
          aria-controls="exp_list"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "View less" : "View more"} <span className="arrow" aria-hidden="true">↓</span>
        </button>
      )}
    </Section>
  );
}
