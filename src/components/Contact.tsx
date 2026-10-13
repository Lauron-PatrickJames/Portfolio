import type { FormEvent } from "react";
import { profile, socials } from "../data/content";
import { Reveal, Section } from "./Reveal";

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
          <p className="contact-head">
            Have a project in mind, or just want to say hi?{" "}
            <span className="serif-it">My inbox is open.</span>
          </p>

          <div className="contact-links">
            <a className="contact-line" href={`mailto:${profile.email}`}>
              <span className="mono">Email</span>
              <span>{profile.email}</span>
            </a>
            {linkedIn && (
              <a className="contact-line" href={linkedIn.href} target="_blank" rel="noopener noreferrer">
                <span className="mono">LinkedIn</span>
                <span>{linkedIn.short}</span>
              </a>
            )}
            <a className="contact-line" href={profile.phoneHref}>
              <span className="mono">Phone</span>
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
            <textarea id="cf_message" name="message" rows={4} placeholder="What’s on your mind?" required />
          </div>

          <button className="btn btn-primary send-btn" type="submit">
            Send message <span aria-hidden="true">→</span>
          </button>
        </form>
      </Reveal>
    </Section>
  );
}
