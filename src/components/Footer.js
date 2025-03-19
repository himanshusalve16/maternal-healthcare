import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer bg-white mt-5 pt-5">
      <Container>
        <Row className="mb-4">
          <Col lg={4} md={6} className="mb-4 mb-lg-0">
            <h5 style={{ color: 'var(--primary-color)' }}>MaternalCare</h5>
            <p className="text-muted mb-4">
              Bridging the gap in prenatal and emergency care for underprivileged communities.
            </p>
            <div className="social-icons d-flex">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaFacebook size={20} color="var(--primary-color)" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaTwitter size={20} color="var(--primary-color)" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                <FaInstagram size={20} color="var(--primary-color)" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={20} color="var(--primary-color)" />
              </a>
            </div>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/" className="text-muted">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-muted">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/health-tracking" className="text-muted">Health Tracking</Link>
              </li>
              <li className="mb-2">
                <Link to="/emergency-support" className="text-muted">Emergency Support</Link>
              </li>
              <li>
                <Link to="/education" className="text-muted">Education</Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h6 className="text-uppercase">Resources</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/blog" className="text-muted">Blog</Link>
              </li>
              <li className="mb-2">
                <Link to="/faqs" className="text-muted">FAQs</Link>
              </li>
              <li className="mb-2">
                <Link to="/testimonials" className="text-muted">Testimonials</Link>
              </li>
              <li className="mb-2">
                <Link to="/donate" className="text-muted">Donate</Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-muted">Volunteer</Link>
              </li>
            </ul>
          </Col>
          
          <Col lg={4} md={6}>
            <h6 className="text-uppercase">Contact</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2" color="var(--primary-color)" />
                <span className="text-muted">123 Maternal Street, Care City, 45678</span>
              </li>
              <li className="mb-2">
                <FaPhone className="me-2" color="var(--primary-color)" />
                <a href="tel:+1234567890" className="text-muted">+123 456 7890</a>
              </li>
              <li>
                <FaEnvelope className="me-2" color="var(--primary-color)" />
                <a href="mailto:info@maternalcare.org" className="text-muted">info@maternalcare.org</a>
              </li>
            </ul>
            <form className="mt-4">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  aria-label="Enter your email" 
                />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
              <small className="form-text text-muted">
                Subscribe to our newsletter for updates.
              </small>
            </form>
          </Col>
        </Row>
        
        <hr />
        
        <Row className="py-3">
          <Col md={6} className="mb-2 mb-md-0">
            <p className="mb-0 text-muted">
              &copy; {currentYear} MaternalCare. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <Link to="/privacy-policy" className="text-muted">Privacy Policy</Link>
              </li>
              <li className="list-inline-item mx-3">
                <Link to="/terms-of-service" className="text-muted">Terms of Service</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/cookie-policy" className="text-muted">Cookie Policy</Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 