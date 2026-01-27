import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Bootstrap CSS Import (Zaroori hai)
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      {/* Layout Wrapper: Footer ko neeche rakhne ke liye */}
      <div className="d-flex flex-column min-vh-100">
        
        {/* 1. Navbar (Hamesha Top par rahegi) */}
        <MyNavbar />

        {/* 2. Main Content Area (Pages yahan badlenge) */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>

        {/* 3. Footer (Hamesha Bottom par rahega) */}
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;