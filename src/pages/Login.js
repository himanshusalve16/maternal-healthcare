import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaLock, FaGoogle, FaFacebook, FaUserMd, FaHandHoldingHeart, FaBuilding } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('mother');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll just redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to log in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };
  
  // Tab content - user type specific login forms
  const renderTabContent = () => {
    switch (activeTab) {
      case 'doctor':
        return (
          <div className="doctor-login">
            <div className="text-center mb-4">
              <FaUserMd size={50} className="text-primary mb-3" />
              <h4>Doctor Login</h4>
              <p className="text-muted">Access your provider dashboard</p>
            </div>
            {renderLoginForm()}
          </div>
        );
      case 'ngo':
        return (
          <div className="ngo-login">
            <div className="text-center mb-4">
              <FaBuilding size={50} className="text-primary mb-3" />
              <h4>NGO Login</h4>
              <p className="text-muted">Access your organization dashboard</p>
            </div>
            {renderLoginForm()}
          </div>
        );
      case 'volunteer':
        return (
          <div className="volunteer-login">
            <div className="text-center mb-4">
              <FaHandHoldingHeart size={50} className="text-primary mb-3" />
              <h4>Volunteer Login</h4>
              <p className="text-muted">Access your volunteer dashboard</p>
            </div>
            {renderLoginForm()}
          </div>
        );
      case 'mother':
      default:
        return (
          <div className="mother-login">
            <div className="text-center mb-4">
              <FaUserCircle size={50} className="text-primary mb-3" />
              <h4>Mother Login</h4>
              <p className="text-muted">Access your maternal health dashboard</p>
            </div>
            {renderLoginForm()}
          </div>
        );
    }
  };
  
  // Common login form
  const renderLoginForm = () => {
    return (
      <Form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
        
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FaUserCircle />
            </span>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FaLock />
            </span>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </Form.Group>
        
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Form.Check
            type="checkbox"
            label="Remember me"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
          <Link to="/forgot-password" className="text-primary text-decoration-none">
            Forgot Password?
          </Link>
        </div>
        
        <Button
          variant="primary"
          type="submit"
          className="w-100 mb-3"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </Button>
        
        <div className="text-center mb-3">
          <span className="text-muted">Or sign in with</span>
        </div>
        
        <div className="d-flex gap-2 mb-3">
          <Button variant="outline-primary" className="w-50">
            <FaGoogle className="me-2" /> Google
          </Button>
          <Button variant="outline-primary" className="w-50">
            <FaFacebook className="me-2" /> Facebook
          </Button>
        </div>
        
        <div className="text-center">
          <p className="mb-0">
            Don't have an account? {' '}
            <Link to="/register" className="text-primary text-decoration-none">
              Sign up
            </Link>
          </p>
        </div>
      </Form>
    );
  };
  
  return (
    <div className="login-page py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <Nav
                  variant="tabs"
                  className="mb-4 nav-fill"
                  activeKey={activeTab}
                  onSelect={(k) => setActiveTab(k)}
                >
                  <Nav.Item>
                    <Nav.Link eventKey="mother">
                      <FaUserCircle className="me-2" /> Mother
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="doctor">
                      <FaUserMd className="me-2" /> Doctor
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ngo">
                      <FaBuilding className="me-2" /> NGO
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="volunteer">
                      <FaHandHoldingHeart className="me-2" /> Volunteer
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                
                {renderTabContent()}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login; 