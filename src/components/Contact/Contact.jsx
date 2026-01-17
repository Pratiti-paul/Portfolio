import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("http://localhost:5001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to send");

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          Let's create <br />
          something <span className="highlight">real.</span>
        </h2>

        <div className="contact-content">
          {/* LEFT COLUMN — unchanged */}
          <div className="contact-column">
            <h3 className="contact-subtitle">Contact Info</h3>
            {/* your info cards stay same */}
          </div>

          {/* RIGHT COLUMN */}
          <div className="contact-column">
            <h3 className="contact-subtitle">Send a Message</h3>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && <p className="form-status">{status}</p>}
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
