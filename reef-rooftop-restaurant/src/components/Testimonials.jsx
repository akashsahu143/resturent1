import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Food Critic',
      rating: 5,
      text: 'An extraordinary dining experience! The panoramic views combined with impeccable service and culinary excellence make Reef Rooftop Restaurant a must-visit destination.',
      image: '👩‍💼'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Regular Guest',
      rating: 5,
      text: 'We celebrated our anniversary here and it was magical. The attention to detail, the stunning sunset views, and the delicious food created a perfect evening.',
      image: '👨‍💼'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Food Blogger',
      rating: 5,
      text: 'As a food blogger, I have dined at many places, but Reef Rooftop stands out. The menu is innovative, the presentation is art, and the atmosphere is unmatched.',
      image: '👩‍🎨'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Business Executive',
      rating: 5,
      text: 'The perfect venue for corporate events. Professional service, exceptional cuisine, and a sophisticated atmosphere that impresses every client.',
      image: '👨‍💻'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Wedding Planner',
      rating: 5,
      text: 'We have hosted multiple weddings here and every time it exceeds expectations. The rooftop setting creates unforgettable memories.',
      image: '👩‍🎓'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Guests Say</h2>
          <p>Reviews from our cherished patrons</p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonials-track">
            <div 
              className="testimonials-slider"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="quote-icon">"</div>
                    <p>{testimonial.text}</p>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-image">{testimonial.image}</div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="testimonials-nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="testimonials-stats">
          <div className="stat">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Happy Guests</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.9</span>
            <span className="stat-label">Star Rating</span>
          </div>
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Five Star Reviews</span>
          </div>
          <div className="stat">
            <span className="stat-number">98%</span>
            <span className="stat-label">Would Recommend</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

