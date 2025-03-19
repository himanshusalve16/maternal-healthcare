import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { FaUser, FaSignInAlt, FaBars } from 'react-icons/fa';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  
  // Function to check if the path is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <Navbar 
        bg="white" 
        expand="lg" 
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        className="py-3 shadow-sm"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img 
              src="/placeholder-logo.png" 
              alt="MaternalCare Logo" 
              height="40" 
              className="me-2"
            />
            <span style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>MaternalCare</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <FaBars />
          </Navbar.Toggle>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link 
                as={Link} 
                to="/" 
                className={isActive('/')}
              >
                Home
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/health-tracking" 
                className={isActive('/health-tracking')}
              >
                Health Tracking
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/emergency-support" 
                className={isActive('/emergency-support')}
              >
                Emergency Support
              </Nav.Link>
              
              <Nav.Link 
                as={Link} 
                to="/education" 
                className={isActive('/education')}
              >
                Education
              </Nav.Link>
              
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/dashboard">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/login">
                  <FaSignInAlt className="me-2" /> Login
                </NavDropdown.Item>
              </NavDropdown>
              
              <div className="d-flex align-items-center ms-lg-2">
                <Button 
                  as={Link} 
                  to="/register" 
                  variant="outline-primary"
                  className="ms-2"
                >
                  <FaUser className="me-1" /> Sign Up
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header; 