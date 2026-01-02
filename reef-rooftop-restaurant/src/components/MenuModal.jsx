import React from 'react';
import './MenuModal.css';

const MenuModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pdfUrl = "https://drive.google.com/file/d/19GS3p09tPki8wen47ZkzLVO6vp6oBNKm/preview";

  return (
    <div className="menu-modal-overlay" onClick={onClose}>
      <div className="menu-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="menu-modal-header">
          <h2>Our Menu</h2>
          <button className="menu-modal-close" onClick={onClose}>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="menu-modal-content">
          <iframe
            src={pdfUrl}
            title="Menu PDF"
            className="menu-pdf-frame"
            allow="autoplay; encrypted-media"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuModal;

