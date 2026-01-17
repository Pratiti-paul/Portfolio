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
        
<div className="contact-content">
          <div className="contact-column">
            <h3 className="contact-subtitle">Contact Info</h3>
            <div className="contact-info-cards">
              <div className="info-card">
                <div className="icon-box email">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>paulpratiti23@gmail.com</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box phone">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>+91 6290370398</p>
                </div>
              </div>

              <div className="info-card">
                <div className="icon-box location">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div className="info-content">
                  <h4>Location</h4>
                  <p>Delhi, India</p>
                </div>
              </div>

              <div className="info-card">
                 <div className="icon-box available">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                 </div>
                 <div className="info-content">
                   <h4>Available for</h4>
                   <div className="availability-tags">
                     <span>Freelance</span>
                     <span>Part-time</span>
                   </div>
                 </div>
              </div>

            </div>
          </div>

          <div className="contact-column">
            <h3 className="contact-subtitle">Send a Message</h3>
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
          </div>
        </div>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Pratiti Paul. All rights reserved.</p>
        </footer>
      </div>
      
      <div className="contact-glow"></div>
    </section>
  );
};

export default Contact;
