import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import MenuModal from './components/MenuModal';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  return (
    <div className="App">
      <Navbar onMenuClick={() => setIsMenuModalOpen(true)} />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Footer />
      <MenuModal isOpen={isMenuModalOpen} onClose={() => setIsMenuModalOpen(false)} />
    </div>
  );
}

export default App;

