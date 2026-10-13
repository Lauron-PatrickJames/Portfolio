import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id}>
      <Reveal className="section-label">
        <span className="idx mono">{index}</span>
        <h2>{title}</h2>
        <div className="rule" />
      </Reveal>
      {children}
    </section>
  );
}
