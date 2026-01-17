import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          <span>PRATITI</span>
          <br />
          <span>PAUL</span>
        </h1>
        <p className="hero-subtitle">
          I DESIGN AND BUILD PRODUCTS THAT
          <br />
          <span className="highlight">deliver real impact.</span>
        </p>
        
        <div className="hero-glow"></div>
      </div>
    </section>
  );
};

export default Hero;
