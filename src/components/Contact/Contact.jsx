import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          Let's create <br />
          something <span className="highlight">real.</span>
        </h2>
        
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Pratiti Paul. All rights reserved.</p>
        </footer>
      </div>
      
      <div className="contact-glow"></div>
    </section>
  );
};

export default Contact;
