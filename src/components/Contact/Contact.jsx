import React from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaFileAlt,
  FaGithub,
  FaLinkedinIn,
  FaProductHunt,
} from "react-icons/fa";
import "./Contact.css";

const contactLinks = [
  { title: "Email", href: "mailto:paulpratiti23@gmail.com", icon: FaEnvelope },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/pratiti-paul/", icon: FaLinkedinIn },
  { title: "GitHub", href: "https://github.com/Pratiti-paul", icon: FaGithub },
  { title: "Resume", href: "public/Resume.pdf", icon: FaFileAlt },
];

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-particles" aria-hidden="true">
      {Array.from({ length: 7 }, (_, index) => <i key={index} />)}
    </div>

    <div className="contact-container">
      <header className="contact-intro reveal">
        <h2 className="contact-title">Let&apos;s Build Something Amazing Together.</h2>
        <p>
          Whether you&apos;re looking for a developer, want to collaborate on an exciting project, have an internship opportunity, or simply want to discuss ideas—I&apos;d love to hear from you.
        </p>
      </header>

      <nav className="contact-links stagger-container" aria-label="Contact links">
        {contactLinks.map(({ title, href, icon }) => {
          const isExternal = href.startsWith("http");
          return (
            <a
              className="contact-link"
              href={href}
              key={title}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              aria-label={`${title}${isExternal ? " (opens in a new tab)" : ""}`}
            >
              {React.createElement(icon, { "aria-hidden": true })}
              <span>{title}</span>
              <FaArrowRight className="link-arrow" aria-hidden="true" />
            </a>
          );
        })}
      </nav>

      <blockquote className="contact-quote reveal">
        “Great products begin with great conversations.”
      </blockquote>


      <footer className="footer">
        <p>Designed &amp; developed with <span aria-label="blue heart">🩷</span> by Pratiti Paul</p>
        <small>© 2026 Pratiti Paul</small>
      </footer>
    </div>

    <div className="contact-glow" aria-hidden="true" />
  </section>
);

export default Contact;
