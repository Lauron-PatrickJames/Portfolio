import { useState } from "react";
import { experience, type ExperienceType } from "../data/content";
import { Reveal, Section } from "./Reveal";

const tabs: { value: ExperienceType; label: string }[] = [
  { value: "work", label: "Work" },
  { value: "leadership", label: "Leadership" }
];

export function Experience() {
  const [active, setActive] = useState<ExperienceType>("work");
  const rows = experience.filter((item) => item.type === active);

  return (
    <Section id="experience" index="02" title="Experience">
      <Reveal className="exp-tabs">
        <div role="tablist" aria-label="Experience type" style={{ display: "contents" }}>
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`exp-tab ${active === tab.value ? "is-active" : ""}`.trim()}
              type="button"
              role="tab"
              aria-selected={active === tab.value}
              aria-controls="exp_list"
              onClick={() => setActive(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal className="exp-list">
        <div id="exp_list" role="tabpanel">
          {rows.map((item) => (
            <article className="exp-row" key={item.role}>
              <div className="exp-date mono">{item.dates}</div>
              <div className="exp-body">
                <h3>{item.role}</h3>
                <p className="exp-org">{item.org}</p>
                <ul className="exp-bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
