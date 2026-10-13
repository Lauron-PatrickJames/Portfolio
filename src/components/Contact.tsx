import type { FormEvent } from "react";
import { profile, socials } from "../data/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const linkedIn = socials.find((social) => social.label === "LinkedIn");

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  const subject = encodeURIComponent(`Hello from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

  window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

export function Contact() {
  return (
    <Section id="contact" index="06" title="Contact">
      <Reveal className="contact-grid">
        <div className="contact-info">
          <p>Got a project in mind or just want to say hi? My inbox is always open.</p>

          <div className="contact-links">
            <a className="contact-pill" href={`mailto:${profile.email}`}>
              <span className="c-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 6h18v12H3z" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </span>
              <span>{profile.email}</span>
            </a>

            {linkedIn && (
              <a className="contact-pill" href={linkedIn.href} target="_blank" rel="noopener noreferrer">
                <span className="c-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M8 11v5M8 8v.01M12 16v-5 M12 11c0-1.2 1-2 2.2-2s2 .9 2 2.1V16" />
                  </svg>
                </span>
                <span>{profile.linkedInShort}</span>
              </a>
            )}

            <a className="contact-pill" href={profile.phoneHref}>
              <span className="c-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14 l5 2v4c0 1-1 2-2 2C10 22 2 14 2 6c0-1 1-2 2-2z" />
                </svg>
              </span>
              <span>{profile.phone}</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label className="mono" htmlFor="cf_name">Name</label>
              <input type="text" id="cf_name" name="name" placeholder="Your name" autoComplete="name" required />
            </div>
            <div className="field">
              <label className="mono" htmlFor="cf_email">Email</label>
              <input type="email" id="cf_email" name="email" placeholder="you@email.com" autoComplete="email" required />
            </div>
          </div>

          <div className="field">
            <label className="mono" htmlFor="cf_message">Message</label>
            <textarea id="cf_message" name="message" rows={3} placeholder="What's on your mind?" required />
          </div>

          <button className="send-btn" type="submit">
            Send <span className="arrow" aria-hidden="true">→</span>
          </button>
        </form>
      </Reveal>
    </Section>
  );
}
