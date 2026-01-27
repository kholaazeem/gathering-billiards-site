import React from 'react';

const Terms = () => {
  return (
    <div className="container py-5">
      <h1 className="text-primary mb-4">Terms of Service</h1>
      <p className="text-muted">Last Updated: January 2026</p>
      
      <div className="bg-light p-4 rounded shadow-sm border-start border-4 border-primary">
        <h4 className="fw-bold">1. Introduction</h4>
        <p>Welcome to Gathering. By accessing our website and purchasing our lessons, you agree to be bound by these terms.</p>
        
        <h4 className="fw-bold mt-4">2. Purchases</h4>
        <p>All lesson purchases are final. Rescheduling is allowed up to 24 hours before the booked slot.</p>

        <h4 className="fw-bold mt-4">3. Code of Conduct</h4>
        <p>We maintain a respectful environment. Any inappropriate behavior during lessons will result in immediate termination without refund.</p>
      </div>
    </div>
  );
};

export default Terms;