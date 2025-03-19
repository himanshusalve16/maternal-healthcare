import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from your auth context

  return (
    <Navbar 
      bg="primary" 
      variant="dark" 
      expand="lg" 
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Maternal Healthcare
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link>
            
            {/* Services Dropdown */}
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item as={Link} to="/services">All Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/health-tracking">Health Tracking</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/emergency-support">Emergency Support</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/education">Education</NavDropdown.Item>
            </NavDropdown>

            {/* Resources Dropdown */}
            <NavDropdown title="Resources" id="resources-dropdown">
              <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faqs">FAQs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/testimonials">Testimonials</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/donate" onClick={() => setExpanded(false)}>Donate</Nav.Link>
          </Nav>

          {/* User Menu */}
          <Nav>
            {isLoggedIn ? (
              <>
                <NavDropdown title={<FaUser />} id="user-dropdown">
                  <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => setIsLoggedIn(false)}>
                    <FaSignOutAlt /> Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <Button variant="outline-light" as={Link} to="/login">
                <FaSignInAlt /> Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 