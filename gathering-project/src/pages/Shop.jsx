import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Check } from 'lucide-react';

const Shop = () => {
  return (
    <div className="shop-page-wrapper">
      <Container>
        
        {/* === 1. TITLE SECTION === */}
        <div className="text-center mb-5 pb-3">
          <p className="text-uppercase fw-bold text-primary mb-3" style={{ fontSize: '12px', letterSpacing: '2px' }}>
            Choose Your Journey
          </p>
          <h1 className="display-4 font-serif fw-bold text-dark mb-4">
            Lesson Packages
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '16px' }}>
            From complete beginners to aspiring pros, we have the perfect package 
            for your billiards journey together. All lessons include lifetime access.
          </p>
        </div>

        {/* === 2. PRICING CARDS === */}
        <Row className="gy-5 gx-lg-4 justify-content-center align-items-center mb-5 pb-5">
          
          {/* Card 1: Beginner */}
          <Col lg={4} md={6}>
            <div className="pricing-card">
              <h3 className="h5 fw-bold mb-2 text-dark">Beginner Session</h3>
              <p className="text-muted small mb-4">Perfect for first-time players</p>
              
              <div className="price-tag text-dark">
                $50 <span>/ couple</span>
              </div>
              
              <Button variant="dark" className="w-100 rounded-pill py-2 mb-4 fw-bold" style={{ backgroundColor: '#0a193c' }}>
                Buy Now
              </Button>

              <ul className="list-unstyled feature-list">
                <li><Check size={16} className="text-primary" /> 2-hour introductory lesson</li>
                <li><Check size={16} className="text-primary" /> Basic stance and grip techniques</li>
                <li><Check size={16} className="text-primary" /> Simple shot mechanics</li>
                <li><Check size={16} className="text-primary" /> Practice drills for couples</li>
                <li><Check size={16} className="text-primary" /> Lifetime access to lesson videos</li>
              </ul>
            </div>
          </Col>

          {/* Card 2: Date Night (Dark Center) */}
          <Col lg={4} md={6}>
            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              
              <h3 className="h5 fw-bold mb-2">Date Night Package</h3>
              <p className="text-white-50 small mb-4">Our most loved experience</p>
              
              <div className="price-tag text-white">
                $120 <span>/ couple</span>
              </div>
              
              <Button variant="light" className="w-100 rounded-pill py-2 mb-4 fw-bold text-primary">
                Buy Now
              </Button>

              <ul className="list-unstyled feature-list">
                <li><Check size={16} className="text-white" /> 4-hour comprehensive course</li>
                <li><Check size={16} className="text-white" /> Beginner to intermediate skills</li>
                <li><Check size={16} className="text-white" /> Game strategy and rules mastery</li>
                <li><Check size={16} className="text-white" /> Couples challenge activities</li>
                <li><Check size={16} className="text-white" /> Bonus: Romantic game night guide</li>
                <li><Check size={16} className="text-white" /> 1-on-1 instructor support</li>
              </ul>
            </div>
          </Col>

          {/* Card 3: Pro Masterclass */}
          <Col lg={4} md={6}>
            <div className="pricing-card">
              <h3 className="h5 fw-bold mb-2 text-dark">Pro Masterclass</h3>
              <p className="text-muted small mb-4">For aspiring billiards enthusiasts</p>
              
              <div className="price-tag text-dark">
                $200 <span>/ couple</span>
              </div>
              
              <Button variant="dark" className="w-100 rounded-pill py-2 mb-4 fw-bold" style={{ backgroundColor: '#0a193c' }}>
                Get Started
              </Button>

              <ul className="list-unstyled feature-list">
                <li><Check size={16} className="text-primary" /> 8-hour advanced curriculum</li>
                <li><Check size={16} className="text-primary" /> Professional-level techniques</li>
                <li><Check size={16} className="text-primary" /> Competitive play strategies</li>
                <li><Check size={16} className="text-primary" /> Video analysis of your shots</li>
                <li><Check size={16} className="text-primary" /> Monthly live Q&A sessions</li>
              </ul>
            </div>
          </Col>

        </Row>

        {/* === 3. FAQ SECTION (New) === */}
        <div className="mt-5 pt-5">
          <div className="text-center mb-5">
            <h2 className="display-6 font-serif fw-bold text-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <Row className="justify-content-center">
            <Col lg={8}>
              
              {/* FAQ 1 */}
              <div className="faq-box">
                <h5 className="faq-question">Do we need our own pool table?</h5>
                <p className="faq-answer">
                  Not at all! Our lessons are designed to be practiced at any local pool hall. 
                  We'll even help you find the best venues in your area with the right atmosphere for a date night.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="faq-box">
                <h5 className="faq-question">What if we've never played before?</h5>
                <p className="faq-answer">
                  Perfect! Our Beginner Session is designed specifically for complete newcomers. 
                  We start from the absolute basics, so you'll feel comfortable holding a cue in no time.
                </p>
              </div>

            </Col>
          </Row>
        </div>

      </Container>
    </div>
  );
};

export default Shop;