import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <h2>Reef<span>Rooftop</span></h2>
                <p>Restaurant</p>
              </div>
              <p className="footer-tagline">
                Experience culinary excellence with breathtaking views,
                creating unforgettable moments above the clouds.
              </p>
              <div className="social-links">
                <a href="#facebook" className="social-link">f</a>
                <a href="#instagram" className="social-link">in</a>
                <a href="#twitter" className="social-link">X</a>
                <a href="#pinterest" className="social-link">P</a>
              </div>
            </div>
            
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
                <li><a href="#menu" onClick={() => scrollToSection('menu')}>Our Menu</a></li>
                <li><a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
                <li><a href="#reservation" onClick={() => scrollToSection('reservation')}>Reservations</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3>Legal</h3>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#accessibility">Accessibility</a></li>
                <li><a href="#careers">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-contact" id="contact">
              <h3>Contact Us</h3>
              <div className="contact-items">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <p>123 Ocean View Boulevard<br />Coastal City, CC 12345</p>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <p>reservations@reefrooftop.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Reef Rooftop Restaurant. All rights reserved.
            </p>
            <p className="designer">
              Design by <a href="https://akash-saw-yn42lcb.gamma.site/" target="_blank" rel="noopener noreferrer">AKS</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

