import React from 'react';

const Shop = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-primary" style={{ fontFamily: 'serif' }}>Lesson Packages</h2>
        <p className="lead text-secondary">Choose the perfect plan for you and your partner.</p>
      </div>

      <div className="row g-4 justify-content-center">
        
        {/* Package 1 */}
        <div className="col-md-4">
          <div className="card border-primary h-100 shadow-sm">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4>Beginner</h4>
            </div>
            <div className="card-body text-center d-flex flex-column">
              <h2 className="display-4 fw-bold text-dark">$50</h2>
              <ul className="list-unstyled mt-3 mb-4 text-start mx-auto">
                <li>✅ 1 Hour Session</li>
                <li>✅ Basic Rules & Stance</li>
                <li>✅ Equipment Provided</li>
              </ul>
              <button className="btn btn-outline-primary mt-auto w-100 rounded-pill">Buy Now</button>
            </div>
          </div>
        </div>

        {/* Package 2 (Highlighted) */}
        <div className="col-md-4">
          <div className="card border-primary h-100 shadow position-relative">
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark">
              MOST POPULAR
            </span>
            <div className="card-header bg-primary bg-gradient text-white text-center py-4">
              <h3>Date Night</h3>
            </div>
            <div className="card-body text-center d-flex flex-column bg-primary bg-opacity-10">
              <h2 className="display-4 fw-bold text-dark">$120</h2>
              <ul className="list-unstyled mt-3 mb-4 text-start mx-auto">
                <li>✅ 2.5 Hour Session</li>
                <li>✅ Drinks & Snacks Included</li>
                <li>✅ Private Table</li>
                <li>✅ Photo Souvenir</li>
              </ul>
              <button className="btn btn-primary mt-auto w-100 btn-lg rounded-pill">Book Date</button>
            </div>
          </div>
        </div>

        {/* Package 3 */}
        <div className="col-md-4">
          <div className="card border-primary h-100 shadow-sm">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4>Pro Master</h4>
            </div>
            <div className="card-body text-center d-flex flex-column">
              <h2 className="display-4 fw-bold text-dark">$200</h2>
              <ul className="list-unstyled mt-3 mb-4 text-start mx-auto">
                <li>✅ 5 Week Course</li>
                <li>✅ Advanced Techniques</li>
                <li>✅ Personal Coach</li>
              </ul>
              <button className="btn btn-outline-primary mt-auto w-100 rounded-pill">Enroll</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shop;