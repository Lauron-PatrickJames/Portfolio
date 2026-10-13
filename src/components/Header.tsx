import { useState } from "react";
import { navLinks, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";

const sectionIds = navLinks.map((link) => link.id);

export function Header({ scrolled }: { scrolled: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggle } = useTheme();
  const active = useActiveSection(sectionIds);

  return (
    <header id="site_header" className={scrolled ? "scrolled" : undefined}>
      <a className="brand" href="#home" aria-label={`${profile.firstName} ${profile.lastName} home`}>
        <span className="brand-mark">{profile.initials}</span>
        <span className="brand-name">
          {profile.firstName} {profile.lastName}
        </span>
      </a>

      <nav id="site_nav" className={menuOpen ? "open" : undefined} aria-label="Main navigation">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? "active" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-actions">
        <button className="theme-toggle" type="button" aria-label="Toggle color theme" onClick={toggle}>
          <svg className="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
          <svg className="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
          </svg>
        </button>

        <button
          className={`nav-toggle ${menuOpen ? "open" : ""}`.trim()}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="site_nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
