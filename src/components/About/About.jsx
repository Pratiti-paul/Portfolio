import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title reveal">
          I'm <span className="highlight">Pratiti</span>, a
          <br />
          Passionate Full-stack Developer.
        </h2>
        
        <p className="about-description reveal">
          Specializing in creating modern, responsive, and user-friendly web applications. 
          I love turning ideas into reality with code. I focus on writing clean, efficient, 
          and scalable code while maintaining a keen eye for design and user experience.
        </p>

        <div className="about-buttons reveal">
          <a href="https://github.com/Pratiti-paul" className="btn icon-btn">
             Github
          </a>
          <a href="https://www.linkedin.com/in/pratiti-paul/" className="btn icon-btn">
             LinkedIn
          </a>
          <a href="https://www.instagram.com/paul_pratiti23/" className="btn icon-btn">
             Instagram
          </a>
          {/* <a href="#" className="btn icon-btn">
             Download CV
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
