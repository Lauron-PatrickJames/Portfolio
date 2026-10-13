import { awards, certifications, education, type Listed } from "../data/content";
import { Reveal, Section } from "./Reveal";

function ListedItems({ items }: { items: Listed[] }) {
  return (
    <ul className="cert-list">
      {items.map((item) => (
        <li key={item.name}>
          {item.name}
          {item.meta && <span>{item.meta}</span>}
        </li>
      ))}
    </ul>
  );
}

export function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <Reveal className="edu-grid">
        <div className="edu-list">
          {education.map((item) => (
            <div className="edu-item" key={item.school}>
              <div className="edu-year mono">{item.years}</div>
              <div>
                <div className="school">{item.school}</div>
                <div className="note">{item.note}</div>
                <div className="edu-stats">
                  {item.stats.map((stat) => (
                    <span key={stat.text}>
                      {stat.highlight && <strong>{stat.highlight}</strong>}
                      {stat.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cert-col">
          <h4 className="mono">Certifications</h4>
          <ListedItems items={certifications} />

          <h4 className="mono">Awards</h4>
          <ListedItems items={awards} />
        </div>
      </Reveal>
    </Section>
  );
}
