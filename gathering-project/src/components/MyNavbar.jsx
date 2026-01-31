import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    // ✅ Yahan 'glass-navbar' add kiya hai
    <Navbar fixed="top" expand="lg" variant="dark" className="glass-navbar py-3">
      <Container>
        {/* Brand Logo - Thora bara aur bold */}
        <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold font-serif text-white tracking-wide">
          GATHERING
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* Links ko thora space diya */}
            <Nav.Link as={Link} to="/" className="text-white mx-2 fw-medium">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop" className="text-white mx-2 fw-medium">Shop</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white mx-2 fw-medium">Contact</Nav.Link>
            <Nav.Link as={Link} to="/terms" className="text-white mx-2 fw-medium">Terms</Nav.Link>
          </Nav>
          
          {/* Button ko thora chota aur neat kiya */}
          <Button as={Link} to="/shop" variant="light" className="rounded-pill px-4 fw-bold btn-sm">
            Get Started
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;