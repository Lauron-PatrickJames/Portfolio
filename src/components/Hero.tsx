import { profile } from "../data/content";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow mono">
            <span className="dot" aria-hidden="true" />
            {profile.location}
          </p>

          <h1>
            {profile.firstName}
            <span className="serif-it">{profile.lastName}</span>
          </h1>

          <p className="hero-role">{profile.role}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get in touch <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href="#projects">
              View projects
            </a>
          </div>

          <dl className="hero-meta">
            {profile.meta.map((item) => (
              <div key={item.label}>
                <dt className="mono">{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="frame">
          <div className="frame-inner">
            <img className="frame-photo" src={profile.portrait.src} alt={profile.portrait.alt} />
          </div>
          <figcaption className="placard mono">
            <span>Fig. 01</span>
            <span>{profile.portrait.caption}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
