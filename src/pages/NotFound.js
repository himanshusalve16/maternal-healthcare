import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="not-found-page py-5">
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="mb-4">
              <FaExclamationTriangle size={80} className="text-warning mb-4" />
              <h1 className="display-1 fw-bold text-primary">404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="lead mb-5">
                We're sorry, but the page you're looking for doesn't exist or has been moved.
              </p>
              <Button 
                as={Link} 
                to="/" 
                size="lg" 
                variant="primary"
                className="px-5"
              >
                <FaHome className="me-2" /> Return to Home
              </Button>
            </div>
            
            <div className="mt-5 pt-4 border-top">
              <h5>Need Help?</h5>
              <p className="text-muted">
                If you're experiencing any issues or need assistance, please contact our support team.
              </p>
              <Link to="/emergency-support" className="btn btn-outline-danger me-2">
                Emergency Support
              </Link>
              <Button variant="link">Contact Us</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound; 