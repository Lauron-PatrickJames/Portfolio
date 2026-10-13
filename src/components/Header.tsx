import { useState } from "react";
import { navLinks } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navLinks.map((link) => link.id);

export function Header({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  return (
    <header id="site_header" className={scrolled ? "scrolled" : undefined}>
      <a className="brand" href="#home" aria-label="Patrick James Lauron home">
        pat.
      </a>

      <nav id="site_nav" className={open ? "open" : undefined} aria-label="Main navigation">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? "active" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`nav-toggle ${open ? "open" : ""}`.trim()}
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="site_nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
      </button>
    </header>
  );
}
