import { useCallback, useEffect, useState } from "react";
import { about, socials } from "../data/content";
import { Reveal, Section } from "./Reveal";

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

  const goTo = useCallback((next: number) => {
    setIndex(next);
    setCycle((c) => c + 1);
  }, []);

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
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="carousel-dots">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              className={i === index ? "is-active" : undefined}
              aria-label={`Show photo ${i + 1} of ${slides.length}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
      <p className="placard mono">
        <span>Off-screen</span>
        <span>{slides[index].label}</span>
      </p>
    </aside>
  );
}

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <Reveal className="about-grid">
        <div className="about-main">
          <p className="lede">
            {about.lede.before}
            <span className="serif-it">{about.lede.accent}</span>
            {about.lede.after}
          </p>
          <p>{about.body}</p>

          <div className="social-row">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                {social.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <Carousel />
      </Reveal>
    </Section>
  );
}
