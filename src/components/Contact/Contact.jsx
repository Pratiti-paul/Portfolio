import React from "react";
import {
  FaArrowRight,
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaProductHunt,
} from "react-icons/fa";
import "./Contact.css";

const contactChannels = [
  {
    title: "Email",
    subtitle: "Drop me a message",
    action: "Send Email",
    href: "mailto:paulpratiti23@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "LinkedIn",
    subtitle: "Let's connect",
    action: "Visit Profile",
    href: "https://www.linkedin.com/in/pratiti-paul/",
    icon: FaLinkedinIn,
  },
  {
    title: "GitHub",
    subtitle: "Explore my projects",
    action: "View GitHub",
    href: "https://github.com/Pratiti-paul",
    icon: FaGithub,
  },
  {
    title: "Product Hunt",
    subtitle: "See my launches",
    action: "View Profile",
    href: "https://www.producthunt.com/search?q=Puddly",
    icon: FaProductHunt,
  },
];

const ContactCard = ({ channel }) => {
  const Icon = channel.icon;
  const externalLink = channel.href.startsWith("http");

  return (
    <a
      className="contact-channel"
      href={channel.href}
      target={externalLink ? "_blank" : undefined}
      rel={externalLink ? "noopener noreferrer" : undefined}
      aria-label={`${channel.action}: ${channel.title}${externalLink ? " (opens in a new tab)" : ""}`}
    >
      <span className="channel-icon" aria-hidden="true"><Icon /></span>
      <span className="channel-copy">
        <strong>{channel.title}</strong>
        <small>{channel.subtitle}</small>
      </span>
      <span className="channel-action">{channel.action} <FaArrowRight aria-hidden="true" /></span>
    </a>
  );
};

const Contact = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section id="contact" className="contact-section">
      <div className="contact-particles" aria-hidden="true">
        {Array.from({ length: 7 }, (_, index) => <i key={index} />)}
      </div>

      <div className="contact-container">
        <header className="contact-intro reveal">
          <p className="contact-kicker">Have an idea in mind?</p>
          <h2 className="contact-title">Let's Create Something <span className="highlight">People Love.</span></h2>
          <p>
            Whether it&apos;s an internship, a full-time opportunity, a freelance project, an open-source collaboration, or simply a new idea, I&apos;d love to connect.
          </p>
        </header>

        <div className="contact-channels stagger-container" aria-label="Ways to get in touch">
          {contactChannels.map((channel) => <ContactCard key={channel.title} channel={channel} />)}
        </div>

        <div className="contact-lower stagger-container">
          <article className="building-card stagger-item">
            <div className="building-heading">
              <span className="building-orb" aria-hidden="true">💧</span>
              <div>
                <p>Currently Building</p>
                <h3>Puddly <span>v1.1</span></h3>
              </div>
            </div>
            <div className="building-tags" aria-label="Puddly technology and availability">
              <span>Desktop Companion</span><span>Electron</span><span>Cross Platform</span><span>Open Source</span>
            </div>
            <div className="roadmap-items" aria-label="Puddly roadmap">
              <span>Water Tracking</span><span>Themes</span><span>Idle Animations</span>
            </div>
          </article>

          <div className="availability-panel stagger-item">
            <p><span className="availability-dot" aria-hidden="true" /> Open to</p>
            <div className="availability-tags">
              <span>Internships</span><span>Full-Time Opportunities</span><span>Collaborations</span><span>Freelance Projects</span>
            </div>
          </div>
        </div>

        <a className="contact-cta" href="mailto:paulpratiti23@gmail.com" aria-label="Start an email conversation with Pratiti Paul">
          Let&apos;s Talk <FaArrowRight aria-hidden="true" />
        </a>

        <footer className="footer">
          <div>
            <p>Designed, developed and shipped with <span aria-label="blue heart">💙</span> by Pratiti Paul.</p>
            <small>© 2026 Pratiti Paul</small>
          </div>
          <button className="scroll-top-btn" type="button" onClick={scrollToTop} aria-label="Scroll to top">
            <FaArrowUp aria-hidden="true" />
          </button>
        </footer>
      </div>

      <div className="contact-glow" aria-hidden="true" />
    </section>
  );
};

export default Contact;
