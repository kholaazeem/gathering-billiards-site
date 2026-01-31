import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Bootstrap CSS (Zaroori hai styling ke liye)
import 'bootstrap/dist/css/bootstrap.min.css';

// 2. Components Import
// Note: Agar aapne MyNavbar 'Home.jsx' mein lagaya tha, to wahan se hata dein
// kyunke hum usay yahan global laga rahe hain.
import MyNavbar from './components/MyNavbar';

// 3. Pages Import
import Home from './pages/Home';

// --- Placeholder Pages (Taake links click karne par error na aaye) ---
const Shop = () => <div className="pt-5 mt-5 text-center"><h1>Shop Page</h1><p>Coming Soon...</p></div>;
const Contact = () => <div className="pt-5 mt-5 text-center"><h1>Contact Page</h1><p>Form will be here.</p></div>;
const Terms = () => <div className="pt-5 mt-5 text-center"><h1>Terms of Service</h1><p>Legal text here.</p></div>;

function App() {
  return (
    <BrowserRouter>
      {/* Wrapper */}
      <div className="d-flex flex-column min-vh-100">
        
        {/* ✅ Global Navbar (Har page par dikhegi) */}
        <MyNavbar />

        {/* Routing Logic */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;