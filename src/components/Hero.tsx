import { profile } from "../data/content";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div className="frame">
          <img className="frame-photo" src={profile.portrait.src} alt={profile.portrait.alt} />
        </div>

        <div>
          <p className="eyebrow mono">{profile.eyebrow}</p>
          <h1>
            {profile.firstName} <em>{profile.lastName}</em>
          </h1>
          <p className="hero-role">{profile.role}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            <a className="btn btn-ghost" href="#projects">
              View projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
