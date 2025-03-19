import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    
    // Simulate form submission
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setFormError(false);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } else {
      setFormError(true);
    }
  };
  
  return (
    <Container className="py-5">
      <h1 className="mb-4">Contact Us</h1>
      <p className="lead mb-5">
        We're here to help you with any questions or concerns about maternal healthcare. 
        Reach out to our team using any of the contact methods below.
      </p>
      
      <Row>
        <Col lg={5} className="mb-4 mb-lg-0">
          <Card className="border-0 shadow-sm h-100">
            <Card.Body className="p-4">
              <h2 className="mb-4">Get in Touch</h2>
              
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <FaMapMarkerAlt size={24} className="text-primary me-3" />
                  <div>
                    <h5 className="mb-0">Our Location</h5>
                    <p className="mb-0 text-muted">123 Maternal Street, Care City, 45678, India</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <FaPhone size={24} className="text-primary me-3" />
                  <div>
                    <h5 className="mb-0">Phone</h5>
                    <p className="mb-0">
                      <a href="tel:+911234567890" className="text-muted">+91 123 456 7890</a>
                    </p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <FaEnvelope size={24} className="text-primary me-3" />
                  <div>
                    <h5 className="mb-0">Email</h5>
                    <p className="mb-0">
                      <a href="mailto:info@maternalcare.org" className="text-muted">info@maternalcare.org</a>
                    </p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <FaWhatsapp size={24} className="text-primary me-3" />
                  <div>
                    <h5 className="mb-0">WhatsApp</h5>
                    <p className="mb-0">
                      <a href="https://wa.me/911234567890" className="text-muted">+91 123 456 7890</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <h5 className="mb-3">Office Hours</h5>
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>Monday - Friday:</td>
                    <td>9:00 AM - 6:00 PM</td>
                  </tr>
                  <tr>
                    <td>Saturday:</td>
                    <td>10:00 AM - 4:00 PM</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
              
              <h5 className="mb-3">Follow Us</h5>
              <div className="social-icons d-flex">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaFacebook size={24} className="text-primary" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaTwitter size={24} className="text-primary" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                  <FaInstagram size={24} className="text-primary" />
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={7}>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h2 className="mb-4">Send a Message</h2>
              
              {formSubmitted && (
                <Alert variant="success" dismissible>
                  Your message has been sent successfully! We'll get back to you soon.
                </Alert>
              )}
              
              {formError && (
                <Alert variant="danger" dismissible>
                  Please fill in all required fields (name, email, and message).
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Your Name *</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Address *</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                
                <Form.Group className="mb-3">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="I agree to the privacy policy and consent to having my data stored and processed according to it."
                    required
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit" size="lg">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mt-5">
        <Col>
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-0">
              <div className="ratio ratio-21x9">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393666!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sus!4v1719053287217!5m2!1sen!2sus" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Our Location"
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact; 