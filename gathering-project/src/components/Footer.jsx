import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section py-5 mt-auto"> {/* mt-auto ensures it stays at bottom */}
      <Container>
        <Row className="gy-5">
          
          {/* Column 1: Brand Info */}
          <Col lg={5} md={6}>
            <Link to="/" className="footer-brand text-decoration-none">
              Gathering
            </Link>
            <p className="text-white-50 pe-lg-5" style={{ lineHeight: '1.8' }}>
              Premium billiards lessons designed for couples. 
              Create unforgettable date nights while mastering 
              the art of the game together.
            </p>
          </Col>

          {/* Column 2: Quick Links */}
          <Col lg={3} md={6}>
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/shop" className="footer-link">Shop Lessons</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
            </ul>
          </Col>

          {/* Column 3: Contact Info */}
          <Col lg={4} md={12}>
            <h5 className="footer-heading">Contact</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-3">
                <a href="mailto:hello@gathering.com" className="footer-link text-white-50 m-0">
                  hello@gathering.com
                </a>
              </li>
              <li>
                <span className="d-block">+1 (555) 123-4567</span>
              </li>
            </ul>
          </Col>
        </Row>

        {/* --- Bottom Section (Copyright) --- */}
        <div className="footer-divider d-flex flex-column flex-md-row justify-content-between align-items-center text-white-50 small">
          <div className="mb-2 mb-md-0">
            &copy; 2026 Gathering. All rights reserved.
          </div>
          <div className="d-flex align-items-center gap-1">
            Made with <Heart size={14} fill="#ef4444" className="text-danger" /> for couples
          </div>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;