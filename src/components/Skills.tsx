import { skills } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" index="02" title="Skills">
      <Reveal className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-group" key={skill.group}>
            <h4>{skill.group}</h4>
            <div className="chip-row">
              {skill.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
