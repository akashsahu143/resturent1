import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        specialRequests: ''
      });
      setSubmitStatus(null);
    }, 3000);
  };

  const timeSlots = [
    '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
  ];

  const occasions = [
    'Birthday', 'Anniversary', 'Date Night', 'Business Dinner',
    'Celebration', 'Other'
  ];

  return (
    <section id="reservation" className="reservation">
      <div className="container">
        <div className="reservation-wrapper">
          <div className="reservation-info">
            <div className="section-title">
              <h2>Reserve a Table</h2>
              <p>Book your unforgettable dining experience</p>
            </div>
            
            <div className="info-content">
              <p className="info-lead">
                Join us at Reef Rooftop Restaurant for an extraordinary culinary journey 
                with stunning views and impeccable service.
              </p>
              
              <div className="info-details">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-text">
                    <h4>Location</h4>
                    <p>123 Ocean View Boulevard<br />Coastal City, CC 12345</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">🕐</div>
                  <div className="info-text">
                    <h4>Opening Hours</h4>
                    <p>Lunch: 11:00 AM - 3:00 PM<br />Dinner: 5:00 PM - 10:00 PM</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-text">
                    <h4>Contact</h4>
                    <p>+1 (555) 123-4567<br />reservations@reefrooftop.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reservation-form-container">
            <form className="reservation-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                  >
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Preferred Time</label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="occasion">Occasion (Optional)</label>
                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                >
                  <option value="">Select an occasion</option>
                  {occasions.map(occasion => (
                    <option key={occasion} value={occasion}>{occasion}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="specialRequests">Special Requests</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  placeholder="Any dietary restrictions, seating preferences, or special requests..."
                  rows="3"
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Booking...' : 'Confirm Reservation'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="form-success">
                  ✓ Reservation submitted successfully! We will confirm via email shortly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;

