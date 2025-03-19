import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert, ListGroup, Badge } from 'react-bootstrap';
import { 
  FaAmbulance, 
  FaPhone, 
  FaHospital, 
  FaMapMarkerAlt, 
  FaExclamationTriangle, 
  FaHandHoldingMedical, 
  FaUserMd,
  FaWhatsapp
} from 'react-icons/fa';

const EmergencySupport = () => {
  const [emergencyType, setEmergencyType] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    phone: '',
    alternatePhone: '',
    address: ''
  });
  const [nearestHospitals, setNearestHospitals] = useState([]);
  const [ashaWorkers, setAshaWorkers] = useState([]);
  const [governmentServices, setGovernmentServices] = useState([]);
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [showEmergencyForm, setShowEmergencyForm] = useState(false);
  const [emergencySubmitted, setEmergencySubmitted] = useState(false);

  // Sample data for emergency contacts
  const emergencyContactData = [
    {
      name: 'National Emergency Number',
      number: '112',
      description: 'Unified Emergency Response System',
      type: 'general'
    },
    {
      name: 'Maternal Helpline',
      number: '1800-XXX-XXXX',
      description: '24/7 Maternal Emergency Support',
      type: 'maternal'
    },
    {
      name: 'ASHA Helpline',
      number: '1800-XXX-XXXX',
      description: 'ASHA Worker Support',
      type: 'asha'
    },
    {
      name: 'Janani Express',
      number: '1800-XXX-XXXX',
      description: 'Free Ambulance Service',
      type: 'ambulance'
    }
  ];

  // Sample data for government services
  const governmentServiceData = [
    {
      name: 'Janani Suraksha Yojana',
      description: 'Free delivery and post-delivery care',
      eligibility: 'All pregnant women',
      contact: '1800-XXX-XXXX'
    },
    {
      name: 'Pradhan Mantri Matru Vandana Yojana',
      description: 'Cash incentive for pregnant women',
      eligibility: 'First-time mothers',
      contact: '1800-XXX-XXXX'
    },
    {
      name: 'Maternal Health Program',
      description: 'Free antenatal and postnatal care',
      eligibility: 'All pregnant women',
      contact: '1800-XXX-XXXX'
    }
  ];

  // Sample data for ASHA workers
  const ashaWorkerData = [
    {
      name: 'Priya Sharma',
      area: 'Rural Delhi',
      contact: '+91-XXXXXXXXXX',
      experience: '5 years',
      languages: ['Hindi', 'English']
    },
    {
      name: 'Meera Patel',
      area: 'Urban Mumbai',
      contact: '+91-XXXXXXXXXX',
      experience: '8 years',
      languages: ['Hindi', 'Marathi', 'English']
    }
  ];

  const handleEmergencySubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the emergency request to a backend service
    setEmergencySubmitted(true);
    setTimeout(() => {
      setShowEmergencyForm(false);
      setEmergencySubmitted(false);
    }, 3000);
  };

  const handleWhatsAppShare = () => {
    const message = `Emergency Alert:\nType: ${emergencyType}\nLocation: ${location}\nDescription: ${description}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Emergency Support</h1>

      {/* Emergency Alert Banner */}
      <Alert variant="danger" className="mb-4">
        <h4><FaExclamationTriangle /> Emergency Alert</h4>
        <p className="mb-0">For immediate medical assistance, call emergency services at <strong>112</strong> or your nearest hospital.</p>
      </Alert>

      <Row>
        {/* Emergency Contacts */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0"><FaPhone /> Emergency Contacts</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {emergencyContactData.map((contact, index) => (
                  <ListGroup.Item key={index}>
                    <h6>{contact.name}</h6>
                    <p className="mb-1">{contact.description}</p>
                    <Button variant="outline-danger" size="sm" className="w-100">
                      <FaPhone /> {contact.number}
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Government Services */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0">Government Services</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {governmentServiceData.map((service, index) => (
                  <ListGroup.Item key={index}>
                    <h6>{service.name}</h6>
                    <p className="mb-1">{service.description}</p>
                    <small className="text-muted">Eligibility: {service.eligibility}</small>
                    <Button variant="outline-primary" size="sm" className="w-100 mt-2">
                      Contact: {service.contact}
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* ASHA Workers */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Header>
              <h5 className="mb-0"><FaUserMd /> ASHA Workers</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                {ashaWorkerData.map((worker, index) => (
                  <ListGroup.Item key={index}>
                    <h6>{worker.name}</h6>
                    <p className="mb-1">Area: {worker.area}</p>
                    <p className="mb-1">Experience: {worker.experience}</p>
                    <Badge bg="info" className="me-1">Languages: {worker.languages.join(', ')}</Badge>
                    <Button variant="outline-success" size="sm" className="w-100 mt-2">
                      <FaPhone /> {worker.contact}
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Emergency Form */}
      <Row className="mt-4">
        <Col md={8} className="mx-auto">
          <Card>
            <Card.Header>
              <h5 className="mb-0">Report Emergency</h5>
            </Card.Header>
            <Card.Body>
              {emergencySubmitted ? (
                <Alert variant="success">
                  Emergency request submitted successfully. Help is on the way!
                </Alert>
              ) : (
                <Form onSubmit={handleEmergencySubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Emergency Type</Form.Label>
                    <Form.Select
                      value={emergencyType}
                      onChange={(e) => setEmergencyType(e.target.value)}
                      required
                    >
                      <option value="">Select emergency type</option>
                      <option value="labor">Labor Pain</option>
                      <option value="bleeding">Bleeding</option>
                      <option value="high_bp">High Blood Pressure</option>
                      <option value="diabetes">Diabetes Emergency</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Describe the emergency situation"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Contact Information</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      required
                    />
                    <Form.Control
                      type="tel"
                      placeholder="Phone Number"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      required
                    />
                    <Form.Control
                      type="tel"
                      placeholder="Alternate Phone Number"
                      value={contactInfo.alternatePhone}
                      onChange={(e) => setContactInfo({ ...contactInfo, alternatePhone: e.target.value })}
                    />
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      value={contactInfo.address}
                      onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                      required
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button variant="danger" type="submit" size="lg">
                      <FaExclamationTriangle /> Submit Emergency Request
                    </Button>
                    <Button variant="success" onClick={handleWhatsAppShare} size="lg">
                      <FaWhatsapp /> Share via WhatsApp
                    </Button>
                  </div>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Emergency Guidelines */}
      <Row className="mt-4">
        <Col md={12}>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Emergency Guidelines</h5>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h6>During Labor</h6>
                  <ul>
                    <li>Call emergency services (112) immediately</li>
                    <li>Contact your ASHA worker</li>
                    <li>Arrange for transportation to the nearest hospital</li>
                    <li>Keep emergency contact numbers handy</li>
                  </ul>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6>For Bleeding</h6>
                  <ul>
                    <li>Lie down and elevate your feet</li>
                    <li>Use sanitary pads to monitor bleeding</li>
                    <li>Call emergency services immediately</li>
                    <li>Keep your medical records ready</li>
                  </ul>
                </ListGroup.Item>
                <ListGroup.Item>
                  <h6>For High Blood Pressure</h6>
                  <ul>
                    <li>Take prescribed medication</li>
                    <li>Monitor blood pressure regularly</li>
                    <li>Contact your healthcare provider</li>
                    <li>Seek immediate medical attention if symptoms worsen</li>
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EmergencySupport; 