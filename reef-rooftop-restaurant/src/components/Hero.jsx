import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">Welcome to</div>
        <h1 className="hero-title">
          Reef <span>Rooftop</span>
          <br />
          Restaurant
        </h1>
        <p className="hero-subtitle">
          Experience breathtaking views and exquisite cuisine
          <br />
          elevated to new heights
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}>
            View Menu
          </button>
          <button className="btn btn-outline" onClick={() => document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' })}>
            Book a Table
          </button>
        </div>
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">★</span>
            <span>Fine Dining</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🍷</span>
            <span>Premium Drinks</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🌅</span>
            <span>Ocean View</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator"></div>
      </div>
    </section>
  );
};

export default Hero;

