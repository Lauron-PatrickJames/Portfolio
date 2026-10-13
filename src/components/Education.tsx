import { awards, certifications, education } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <Reveal className="edu-grid">
        <div className="edu-list">
          {education.map((item) => (
            <div className="edu-item" key={item.school}>
              <div className="stage mono">{item.stage}</div>
              <div>
                <div className="school">{item.school}</div>
                <div className="note">{item.note}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="cert-col">
          <h4 className="side-caption mono">CERTIFICATIONS</h4>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>

          <h4 className="side-caption mono">ACHIEVEMENTS &amp; AWARDS</h4>
          <ul className="cert-list">
            {awards.map((award) => (
              <li key={award}>{award}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
