import React from 'react';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    // Simple HTML Nav tag use kar rahe hain (No Crash guarantee)
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
      <div className="container">
        
        {/* Brand Name */}
        <Link to="/" className="navbar-brand fs-3 fw-bold" style={{ fontFamily: 'serif', letterSpacing: '2px' }}>
          GATHERING
        </Link>

        {/* Mobile Toggle Button (Hamburger Menu) */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-3 text-uppercase small fw-bold">
            
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Home</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/shop" className="nav-link text-white">Shop</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">Contact</Link>
            </li>

            <li className="nav-item">
              <Link to="/terms" className="nav-link text-white">Terms</Link>
            </li>

          </ul>

          {/* Button */}
          <div className="d-none d-lg-block ms-4">
             <Link to="/contact" className="btn btn-outline-light rounded-pill px-4 btn-sm">
                Get Started
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;