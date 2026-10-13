import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  className?: string;
  children: ReactNode;
}

/** Fades and lifts its content in the first time it scrolls into view. */
export function Reveal({ className = "", children }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className={`reveal ${visible ? "in" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}

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
      </Reveal>
      {children}
    </section>
  );
}
