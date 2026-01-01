import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const menuCategories = {
    starters: {
      title: 'Starters',
      items: [
        { name: 'Crispy Calamari', description: 'Tender calamari rings with lemon aioli and marinara sauce', price: '₹1500' },
        { name: 'Burrata Salad', description: 'Fresh burrata with heirloom tomatoes, basil, and balsamic glaze', price: '₹1350' },
        { name: 'Tuna Tartare', description: 'Ahi tuna with avocado, sesame, and crispy wonton chips', price: '₹1800' },
        { name: 'Soup of the Day', description: 'Chef daily creation served with artisan bread', price: '₹1000' },
      ]
    },
    mains: {
      title: 'Main Courses',
      items: [
        { name: 'Pan-Seared Salmon', description: 'Atlantic salmon with lemon butter, asparagus, and wild rice', price: '₹2800' },
        { name: 'Filet Mignon', description: '8oz prime beef with red wine reduction and truffle mashed potatoes', price: '₹4000' },
        { name: 'Lobster Risotto', description: 'Creamy arborio rice with fresh lobster and parmesan', price: '₹3500' },
        { name: 'Grilled Sea Bass', description: 'Mediterranean sea bass with olive tapenade and roasted vegetables', price: '₹3150' },
        { name: 'Chicken Marsala', description: 'Farm-raised chicken with mushroom marsala sauce and garlic spinach', price: '₹2350' },
      ]
    },
    desserts: {
      title: 'Desserts',
      items: [
        { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with molten center and vanilla ice cream', price: '₹1150' },
        { name: 'Crème Brûlée', description: 'Classic vanilla custard with caramelized sugar crust', price: '₹1000' },
        { name: 'Tiramisu', description: 'Espresso-soaked ladyfingers with mascarpone and cocoa', price: '₹1100' },
        { name: 'Seasonal Fruit Plate', description: 'Fresh tropical fruits with honey-yogurt drizzle', price: '₹900' },
      ]
    },
    drinks: {
      title: 'Drinks',
      items: [
        { name: 'Signature Cocktail', description: 'Ask our bartender for today special creation', price: '₹1350' },
        { name: 'Premium Wine Glass', description: 'Selection from our award-winning cellar', price: '₹1150' },
        { name: 'Champagne', description: 'House champagne by the glass', price: '₹1500' },
        { name: 'Artisan Mocktail', description: 'Non-alcoholic refreshers with fresh ingredients', price: '₹850' },
      ]
    }
  };

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-title">
          <h2>Our Menu</h2>
          <p>Crafted with passion, served with pride</p>
        </div>
        
        <div className="menu-tabs">
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              className={`menu-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {menuCategories[category].title}
            </button>
          ))}
        </div>
        
        <div className="menu-grid">
          {menuCategories[activeCategory].items.map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3>{item.name}</h3>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="menu-footer">
          <p>Can not find your favorite dish? <a href="#contact" onClick={() => document.getElementById('reservation').scrollIntoView({ behavior: 'smooth' })}>Contact us</a> for special requests</p>
        </div>
      </div>
    </section>
  );
};

export default Menu;

