import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Terms = () => {
  return (
    <div>
      {/* === SECTION 1: HEADER === */}
      <div className="terms-header">
        <Container>
          <h1 className="display-3 font-serif fw-bold text-dark mb-3">
            Terms of Service
          </h1>
          <p className="terms-date">
            Last updated: January 27, 2026
          </p>
        </Container>
      </div>

      {/* === SECTION 2: LEGAL CONTENT === */}
      <div className="terms-content">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              
              {/* Point 1 */}
              <h2 className="legal-heading">1. Acceptance of Terms</h2>
              <p className="legal-text">
                By accessing and using Gathering's website and services, you accept and agree to be bound by the terms 
                and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
                These terms apply to all visitors, users, and others who access or use our services.
              </p>

              {/* Point 2 */}
              <h2 className="legal-heading">2. Course Access and Licensing</h2>
              <p className="legal-text">
                Gathering grants you a limited, non-exclusive, non-transferable license to access and view the courses 
                and associated content for which you have paid all required fees, solely for your personal, non-commercial, 
                educational purposes through the Services, in accordance with these Terms and any conditions or restrictions 
                associated with a particular courses or feature of our Services.
              </p>
              <p className="legal-text">
                All other uses are expressly prohibited. You may not reproduce, redistribute, transmit, assign, sell, 
                broadcast, rent, share, lend, modify, adapt, edit, create derivative works of, sublicense, or otherwise 
                transfer or use any course unless we give you explicit permission to do so in a written agreement signed 
                by a Gathering authorized representative.
              </p>

              {/* Point 3 */}
              <h2 className="legal-heading">3. Payments and Refunds</h2>
              <p className="legal-text">
                You agree to pay the fees for courses that you purchase, and you authorize us to charge your debit or 
                credit card or process other means of payment for those fees. Gathering works with third party payment 
                processing partners to offer you the most convenient payment methods in your country and to keep your 
                payment information secure.
              </p>
              <p className="legal-text">
                If the course you purchased is not what you were expecting, you can request, within 30 days of your 
                purchase of the course, that Gathering apply a refund to your account.
              </p>

              {/* Point 4 */}
              <h2 className="legal-heading">4. User Conduct</h2>
              <p className="legal-text">
                You may only use the Services for lawful purposes. You are solely responsible for the knowledge of and 
                adherence to any and all laws, rules, and regulations pertaining to your use of the Services. You agree 
                not to use the Services or the Company Content to recruit, solicit, or contact in any form Instructors 
                or potential users for employment or contracting for a business not affiliated with us without our 
                advance written permission.
              </p>

            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Terms;