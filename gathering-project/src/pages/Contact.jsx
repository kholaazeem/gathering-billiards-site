import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import Swal from 'sweetalert2'; // ✅ Popup Library Import ki

const Contact = () => {

  // --- POPUP FUNCTION ---
  const handleSendMessage = (e) => {
    e.preventDefault(); // Page reload honay se rokta hai

    // ✨ Pyara sa Popup
    Swal.fire({
      title: 'Message Sent!',
      text: 'Thank you for contacting us. We will get back to you shortly.',
      icon: 'success',         // Green Tick Animation
      confirmButtonColor: '#0a193c', // Button ka rang (Dark Blue)
      confirmButtonText: 'Great!',
      timer: 3000,             // 3 seconds baad khud band ho jayega
      timerProgressBar: true,
    });
  };

  return (
    <div className="contact-wrapper">
      <Container>
        
        {/* === HEADER SECTION === */}
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold text-primary mb-3" style={{ fontSize: '12px', letterSpacing: '2px' }}>
            We're Here to Help
          </p>
          <h1 className="display-4 font-serif fw-bold text-dark mb-3">
            Contact Us
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '16px' }}>
            Have questions about our lessons or need help getting started? 
            Our friendly support team is ready to assist you.
          </p>
        </div>

        <Row className="gy-5 justify-content-center">
          
          {/* === LEFT COLUMN: FORM === */}
          <Col lg={6}>
            <div className="contact-form-card">
              <h3 className="font-serif fw-bold text-dark mb-4 h4">Send Us a Message</h3>
              
              <Form onSubmit={handleSendMessage}> {/* ✅ Yahan function lagaya */}
                <Row>
                  <Col md={6} className="mb-4">
                    <Form.Label className="form-label">Full Name</Form.Label>
                    <Form.Control required type="text" placeholder="Jane & John Doe" className="form-control-custom" />
                  </Col>
                  <Col md={6} className="mb-4">
                    <Form.Label className="form-label">Email Address</Form.Label>
                    <Form.Control required type="email" placeholder="couple@example.com" className="form-control-custom" />
                  </Col>
                </Row>

                <div className="mb-4">
                  <Form.Label className="form-label">Subject</Form.Label>
                  <Form.Control required type="text" placeholder="Question about lessons..." className="form-control-custom" />
                </div>

                <div className="mb-4">
                  <Form.Label className="form-label">Message</Form.Label>
                  <Form.Control required as="textarea" rows={4} placeholder="Tell us how we can help..." className="form-control-custom" />
                </div>

                {/* Button */}
                <Button type="submit" variant="dark" className="w-100 py-3 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#0a193c' }}>
                  Send Message <Send size={16} />
                </Button>
              </Form>
            </div>
          </Col>

          {/* === RIGHT COLUMN: INFO & CHAT === */}
          <Col lg={5}>
            <h3 className="font-serif fw-bold text-dark mb-4 h4 ms-1">Get in Touch</h3>
            
            <div className="info-card">
              <div className="info-icon-box">
                <Mail size={20} />
              </div>
              <div>
                <small className="text-muted d-block fw-bold" style={{ fontSize: '11px' }}>Email</small>
                <span className="text-dark fw-medium">hello@gathering.com</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-box">
                <Phone size={20} />
              </div>
              <div>
                <small className="text-muted d-block fw-bold" style={{ fontSize: '11px' }}>Phone</small>
                <span className="text-dark fw-medium">+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <small className="text-muted d-block fw-bold" style={{ fontSize: '11px' }}>Address</small>
                <span className="text-dark fw-medium">123 Billards Lane, Los Angeles, CA</span>
              </div>
            </div>

            <div className="info-card border-0 bg-transparent ps-0 shadow-none mb-0">
               <div className="info-icon-box bg-white text-muted shadow-sm">
                <Clock size={20} />
              </div>
              <div>
                <small className="text-muted d-block fw-bold" style={{ fontSize: '11px' }}>Support Hours</small>
                <span className="text-dark fw-medium">Mon-Fri: 9AM - 6PM PST</span>
              </div>
            </div>

            <div className="chat-help-card">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <MessageSquare size={20} className="text-info" /> Prefer to Chat?
              </h5>
              <p className="text-white-50 small mb-4">
                Our support team typically responds within 2 hours during business hours.
              </p>
              <div className="bg-white bg-opacity-10 rounded p-2 text-center">
                <small className="text-info fw-bold" style={{ fontSize: '12px' }}>Average response time: Under 30 minutes</small>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;