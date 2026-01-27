import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* --- HERO SECTION --- */}
      <header className="bg-primary bg-opacity-10 py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold text-primary mb-3" style={{ fontFamily: 'serif' }}>
                Make Your Date Night Iconic.
              </h1>
              <p className="lead text-secondary mb-4">
                We produce iconic billiards lessons for couples. 
                Experience importance, luxury, and fun together.
              </p>
              <Link to="/contact" className="btn btn-primary btn-lg px-4 shadow-sm rounded-pill">
                Get Free Sample Lesson
              </Link>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              {/* Blue Tinted Image Placeholder */}
              <img 
                src="https://placehold.co/600x400/0d6efd/ffffff?text=Elegant+Billiards" 
                alt="Couple Playing Pool" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* --- OUR VALUES SECTION --- */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">Our Values</h2>
            <div className="bg-primary mx-auto" style={{ height: '3px', width: '60px' }}></div>
          </div>
          
          <div className="row g-4">
            {/* Value 1 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4 bg-light">
                <div className="fs-1 text-primary mb-3">💎</div>
                <h4 className="card-title fw-bold">High Quality</h4>
                <p className="card-text text-muted">We provide premium equipment and world-class coaching.</p>
              </div>
            </div>
            {/* Value 2 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4 bg-light">
                <div className="fs-1 text-primary mb-3">🤝</div>
                <h4 className="card-title fw-bold">Connection</h4>
                <p className="card-text text-muted">Strengthen your bond while learning a sophisticated skill.</p>
              </div>
            </div>
            {/* Value 3 */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4 bg-light">
                <div className="fs-1 text-primary mb-3">🎱</div>
                <h4 className="card-title fw-bold">Approachability</h4>
                <p className="card-text text-muted">Luxury doesn't mean difficult. We make learning easy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;