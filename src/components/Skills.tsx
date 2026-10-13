import { skills } from "../data/content";
import { Reveal, Section } from "./Reveal";

export function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <Reveal className="skills-table">
        {skills.map((skill) => (
          <div className="skill-row" key={skill.group}>
            <h4 className="mono">{skill.group}</h4>
            <p>{skill.items}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
