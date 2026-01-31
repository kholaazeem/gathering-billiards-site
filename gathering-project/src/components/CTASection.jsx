import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="cta-section py-5">
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            
            {/* Tagline */}
            <p className="text-uppercase fw-bold text-primary mb-3" style={{ letterSpacing: '2px', fontSize: '14px' }}>
              Ready to Begin?
            </p>

            {/* Main Heading */}
            <h2 className="display-4 font-serif fw-bold text-dark mb-4">
              Start Your Billiards <br /> Journey Together
            </h2>

            {/* Subtext */}
            <p className="lead text-muted mb-5 mx-auto" style={{ maxWidth: '650px' }}>
              Join thousands of couples who have transformed their date nights 
              with our premium billiards lessons. Your first lesson is on us.
            </p>

            {/* Buttons Area */}
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {/* Button 1: Dark Blue */}
              <Button as={Link} to="/shop" className="btn-dark-pill d-flex align-items-center gap-2">
                Browse All Lessons <ArrowRight size={18} />
              </Button>
              
              {/* Button 2: White */}
              <Button as={Link} to="/contact" className="btn-light-pill">
                Have Questions?
              </Button>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTASection;