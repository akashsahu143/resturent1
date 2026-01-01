import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-images">
            <div className="image-main">
              <div className="image-placeholder">
                <span>Restaurant Interior</span>
              </div>
            </div>
            <div className="image-secondary">
              <div className="image-placeholder small">
                <span>Chef at Work</span>
              </div>
            </div>
            <div className="experience-badge">
              <span className="number">15+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>
          
          <div className="about-content">
            <div className="section-title">
              <h2>Our Story</h2>
              <p>A culinary journey above the clouds</p>
            </div>
            
            <div className="about-text">
              <p className="lead">
                Nestled on the rooftop with panoramic ocean views, Reef Rooftop Restaurant 
                offers an unforgettable dining experience that combines exceptional cuisine 
                with breathtaking surroundings.
              </p>
              <p>
                Founded with a passion for creating memorable moments, our restaurant has 
                become a destination for those seeking the perfect blend of elegance, 
                comfort, and culinary excellence. Our team of expert chefs crafts each 
                dish with locally-sourced ingredients and innovative techniques.
              </p>
              <p>
                Whether you're celebrating a special occasion or enjoying a romantic 
                dinner, our warm atmosphere and impeccable service ensure every visit 
                is a treasured experience.
              </p>
            </div>
            
            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">👨‍🍳</div>
                <div className="feature-info">
                  <h4>Expert Chefs</h4>
                  <p>World-class culinary team</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🥬</div>
                <div className="feature-info">
                  <h4>Fresh Ingredients</h4>
                  <p>Locally sourced produce</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🌅</div>
                <div className="feature-info">
                  <h4>Stunning Views</h4>
                  <p>Ocean & city panoramas</p>
                </div>
              </div>
            </div>
            
            <button className="btn btn-primary" onClick={() => document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' })}>
              Reserve Your Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

