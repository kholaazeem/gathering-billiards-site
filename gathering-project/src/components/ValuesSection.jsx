import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Sparkles, Heart, Users } from 'lucide-react'; // Icons

const ValuesSection = () => {
  return (
    <section className="py-5 my-5 bg-white">
      <Container>
        
        {/* --- Header Section --- */}
        <div className="text-center mb-5 pb-3">
          <p className="text-uppercase mb-3" style={{ color: '#3b82f6', letterSpacing: '2px', fontWeight: '700', fontSize: '14px' }}>Our Philosophy</p>
          <h2 className="display-4 fw-bold text-dark mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why Couples Choose <br /> Gathering
          </h2>
          <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>
            We believe the best date nights combine learning something new 
            with quality time together.
          </p>
        </div>

        {/* --- Cards Section --- */}
        <Row className="g-4">
          
          {/* Card 1: High Quality */}
          <Col lg={4} md={6}>
            <div className="value-card">
              <div className="icon-box">
                <Sparkles size={28} />
              </div>
              <h3 className="fw-bold mb-3 h4 text-dark">High Quality</h3>
              <p className="text-muted mb-0">
                Professional instruction from world-class billiards coaches. 
                Every lesson is crafted to perfection with cinematic production value.
              </p>
            </div>
          </Col>

          {/* Card 2: Connection */}
          <Col lg={4} md={6}>
            <div className="value-card">
              <div className="icon-box">
                <Heart size={28} />
              </div>
              <h3 className="fw-bold mb-3 h4 text-dark">Connection</h3>
              <p className="text-muted mb-0">
                Strengthen your bond through friendly competition. Our lessons are 
                designed to spark conversation, laughter, and teamwork.
              </p>
            </div>
          </Col>

          {/* Card 3: Approachability */}
          <Col lg={4} md={6}>
            <div className="value-card">
              <div className="icon-box">
                <Users size={28} />
              </div>
              <h3 className="fw-bold mb-3 h4 text-dark">Approachability</h3>
              <p className="text-muted mb-0">
                No experience needed. Our step-by-step approach makes learning 
                enjoyable for complete beginners to aspiring pros.
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default ValuesSection;