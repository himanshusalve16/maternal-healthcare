import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaLock, FaEnvelope, FaUserMd, FaHandHoldingHeart, FaBuilding, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Register = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('mother');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    organization: '',
    specialization: '',
    licenseNumber: '',
    acceptTerms: false
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    if (!formData.acceptTerms) {
      setError('You must accept the terms and conditions');
      return;
    }
    
    try {
      setError('');
      setLoading(true);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, we'll just redirect to login
      navigate('/login');
    } catch (err) {
      setError('Failed to create an account. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Common form fields for all user types
  const renderCommonFields = () => {
    return (
      <>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <div className="input-group">
            <span className="input-group-text">
              <FaEnvelope />
            </span>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <Form.Control
                  type="password"
                  placeholder="Confirm your password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaPhone />
                </span>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="">Select your country</option>
                <option value="india">India</option>
                <option value="kenya">Kenya</option>
                <option value="nigeria">Nigeria</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </>
    );
  };
  
  // Specific fields by user type
  const renderSpecificFields = () => {
    switch (activeTab) {
      case 'doctor':
        return (
          <>
            <Form.Group className="mb-3" controlId="formSpecialization">
              <Form.Label>Specialization</Form.Label>
              <Form.Control
                as="select"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
              >
                <option value="">Select your specialization</option>
                <option value="obgyn">Obstetrics & Gynecology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="gp">General Practice</option>
                <option value="midwife">Midwifery</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formLicenseNumber">
              <Form.Label>Medical License Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your license number"
                name="licenseNumber"
                value={formData.licenseNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </>
        );
      case 'ngo':
        return (
          <>
            <Form.Group className="mb-3" controlId="formOrganization">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your organization name"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaMapMarkerAlt />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Enter your organization address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </>
        );
      case 'volunteer':
        return (
          <>
            <Form.Group className="mb-3" controlId="formSkills">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your skills and experience"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formAvailability">
              <Form.Label>Availability</Form.Label>
              <Form.Check
                type="checkbox"
                label="Weekdays"
                name="availableWeekdays"
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                label="Weekends"
                name="availableWeekends"
                onChange={handleChange}
                className="mb-2"
              />
              <Form.Check
                type="checkbox"
                label="Emergency on-call"
                name="availableEmergency"
                onChange={handleChange}
              />
            </Form.Group>
          </>
        );
      case 'mother':
      default:
        return (
          <>
            <Form.Group className="mb-3" controlId="formPregnancyStage">
              <Form.Label>Pregnancy Stage</Form.Label>
              <Form.Control
                as="select"
                name="pregnancyStage"
                value={formData.pregnancyStage}
                onChange={handleChange}
              >
                <option value="">Select your pregnancy stage</option>
                <option value="first-trimester">First Trimester (1-12 weeks)</option>
                <option value="second-trimester">Second Trimester (13-26 weeks)</option>
                <option value="third-trimester">Third Trimester (27-40 weeks)</option>
                <option value="postnatal">Postnatal</option>
                <option value="planning">Planning Pregnancy</option>
              </Form.Control>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaMapMarkerAlt />
                </span>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <Form.Text className="text-muted">
                This helps us connect you with nearby services.
              </Form.Text>
            </Form.Group>
            
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </>
        );
    }
  };
  
  // Tab content with user-specific registration forms
  const renderTabContent = () => {
    const userTypeIcons = {
      mother: <FaUserCircle size={50} className="text-primary mb-3" />,
      doctor: <FaUserMd size={50} className="text-primary mb-3" />,
      ngo: <FaBuilding size={50} className="text-primary mb-3" />,
      volunteer: <FaHandHoldingHeart size={50} className="text-primary mb-3" />
    };
    
    const userTypeTitles = {
      mother: 'Mother Registration',
      doctor: 'Doctor Registration',
      ngo: 'NGO Registration',
      volunteer: 'Volunteer Registration'
    };
    
    const userTypeDescriptions = {
      mother: 'Create your account to access maternal healthcare services',
      doctor: 'Join our network of healthcare providers',
      ngo: 'Register your organization to provide support',
      volunteer: 'Sign up to volunteer and help our community'
    };
    
    return (
      <div className={`${activeTab}-registration`}>
        <div className="text-center mb-4">
          {userTypeIcons[activeTab]}
          <h4>{userTypeTitles[activeTab]}</h4>
          <p className="text-muted">{userTypeDescriptions[activeTab]}</p>
        </div>
        
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
          
          {renderCommonFields()}
          {renderSpecificFields()}
          
          <Form.Group className="mb-3" controlId="formTerms">
            <Form.Check
              type="checkbox"
              label={
                <span>
                  I agree to the{' '}
                  <Link to="/terms" className="text-primary">
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-primary">
                    Privacy Policy
                  </Link>
                </span>
              }
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
            />
          </Form.Group>
          
          <Button
            variant="primary"
            type="submit"
            className="w-100 mb-3"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Register'}
          </Button>
          
          <div className="text-center">
            <p className="mb-0">
              Already have an account?{' '}
              <Link to="/login" className="text-primary text-decoration-none">
                Sign in
              </Link>
            </p>
          </div>
        </Form>
      </div>
    );
  };
  
  return (
    <div className="register-page py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <Nav
                  variant="pills"
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

export default Register; 