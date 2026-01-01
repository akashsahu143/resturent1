import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    { id: 1, category: 'interior', title: 'Rooftop View', image: '🏙️' },
    { id: 2, category: 'food', title: 'Signature Dish', image: '🍽️' },
    { id: 3, category: 'events', title: 'Romantic Dinner', image: '💑' },
    { id: 4, category: 'interior', title: 'Main Dining', image: '🏛️' },
    { id: 5, category: 'food', title: 'Seafood Platter', image: '🦐' },
    { id: 6, category: 'events', title: 'Wine Tasting', image: '🍷' },
    { id: 7, category: 'food', title: 'Dessert Art', image: '🍰' },
    { id: 8, category: 'interior', title: 'Bar Area', image: '🍸' },
    { id: 9, category: 'events', title: 'Sunset Dining', image: '🌅' },
  ];

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Interior' },
    { id: 'food', label: 'Food' },
    { id: 'events', label: 'Events' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Our Gallery</h2>
          <p>Capturing memorable moments at Reef Rooftop</p>
        </div>
        
        <div className="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`gallery-filter ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image">
                <span>{item.image}</span>
              </div>
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
                <p>Reef Rooftop Restaurant</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

