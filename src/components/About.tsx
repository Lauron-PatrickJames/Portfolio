import { useEffect, useState } from "react";
import { about, socials } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const intervalMs = 4000;

function Carousel() {
  const slides = about.gallery;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Bumped on manual navigation so the auto-advance timer restarts.
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (paused || slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, cycle, slides.length]);

  return (
    <aside className="about-side">
      <div
        className="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            className={`carousel-slide ${i === index ? "is-active" : ""}`.trim()}
            src={slide.src}
            alt={slide.alt}
          />
        ))}

        <div className="carousel-dots">
          {slides.map((slide, i) => (
            <span
              key={slide.src}
              className={i === index ? "is-active" : undefined}
              onClick={() => {
                setIndex(i);
                setCycle((c) => c + 1);
              }}
            />
          ))}
        </div>
      </div>
      <p className="side-caption mono">{slides[index].label}</p>
    </aside>
  );
}

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal className="about-grid">
        <div className="about-main">
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}

          <div className="social-row">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.short}
              </a>
            ))}
          </div>
        </div>

        <Carousel />
      </Reveal>
    </Section>
  );
}
