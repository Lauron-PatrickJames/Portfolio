import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  className?: string;
  id?: string;
  children: ReactNode;
}

/** Fades and lifts its content in the first time it scrolls into view. */
export function Reveal({ className = "", id, children }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} id={id} className={`${className} reveal ${visible ? "in" : ""}`.trim()}>
      {children}
    </div>
  );
}
