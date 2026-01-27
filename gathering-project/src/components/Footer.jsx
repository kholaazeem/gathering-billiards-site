import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 mt-auto">
      <div className="container text-center">
        <div className="mb-3">
          <Link to="/" className="text-white text-decoration-none mx-3">Home</Link>
          <Link to="/shop" className="text-white text-decoration-none mx-3">Shop</Link>
          <Link to="/contact" className="text-white text-decoration-none mx-3">Contact</Link>
          <Link to="/terms" className="text-white text-decoration-none mx-3">Terms</Link>
        </div>
        <p className="small mb-0 opacity-75">&copy; 2026 Gathering Billiards. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;