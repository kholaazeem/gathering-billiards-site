import React from 'react';

const Contact = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow border-0">
            <div className="card-body p-5">
              <h2 className="text-center text-primary mb-4 fw-bold">Customer Support</h2>
              <p className="text-center text-muted mb-4">
                Need help with booking or have a question? Fill out the form below.
              </p>
              
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold text-dark">Name</label>
                    <input type="text" className="form-control border-primary" placeholder="Your Name" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold text-dark">Email</label>
                    <input type="email" className="form-control border-primary" placeholder="name@example.com" />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-bold text-dark">Subject</label>
                  <select className="form-select border-primary">
                    <option>Order Inquiry</option>
                    <option>Technical Support</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold text-dark">Message</label>
                  <textarea className="form-control border-primary" rows="5" placeholder="How can we help you?"></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg rounded-pill">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;