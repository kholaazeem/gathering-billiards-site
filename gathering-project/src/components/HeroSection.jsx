import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Play, ArrowRight, Circle } from 'lucide-react'; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="justify-content-center"> {/* Row ko center kiya */}
          <Col lg={10} className="text-center">   {/* Column ka text center kiya */}
            
            {/* Premium Badge (Centered) */}
            <div className="d-inline-flex align-items-center bg-white bg-opacity-10 border border-white border-opacity-25 rounded-pill px-4 py-2 mb-4 backdrop-blur">
              <Circle size={10} fill="#60a5fa" className="text-info me-2" />
              <small className="text-white text-uppercase fw-bold ls-1">Premium Couples Experience</small>
            </div>

            {/* Headline */}
            <h1 className="display-1 font-serif fw-bold mb-4 lh-1">
              Make Your Date Night <br />
              <span style={{ color: '#93c5fd', textShadow: '0 0 20px rgba(147, 197, 253, 0.5)' }}>Iconic.</span>
            </h1>

            {/* Subtext (Centered width kam ki taake acha lagay) */}
            <p className="lead text-white text-opacity-90 mb-5 w-75 mx-auto">
              Master the art of billiards together. Our premium lessons are designed 
              exclusively for couples who want to connect, compete, and create unforgettable memories.
            </p>

            {/* Buttons (Flex Center) */}
            <div className="d-flex gap-3 justify-content-center flex-wrap mb-5">
              <Button className="btn-white-pill d-flex align-items-center gap-2">
                Get Free Sample Lesson <ArrowRight size={20} />
              </Button>
              
              <Button className="btn-transparent-pill d-flex align-items-center gap-2">
                <Play size={20} fill="white" /> Watch Preview
              </Button>
            </div>

            {/* Social Proof (Transparent Circles Centered) */}
            <div className="d-flex flex-column align-items-center gap-2">
              <div className="d-flex justify-content-center ps-3"> {/* ps-3 overlap fix karne ke liye */}
                {['A', 'B', 'C', 'D'].map((char, index) => (
                  <div key={index} className="glass-circle shadow-sm">
                    {char}
                  </div>
                ))}
              </div>
              <div className="text-white small opacity-75">
                <strong>2,500+ Couples</strong> have mastered the game together
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;