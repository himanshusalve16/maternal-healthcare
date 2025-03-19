import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaHeartbeat, 
  FaAmbulance, 
  FaBookOpen, 
  FaFileMedical, 
  FaVideo, 
  FaUsers, 
  FaStethoscope, 
  FaComments 
} from 'react-icons/fa';

const Services = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Our Services</h1>
      <p className="lead mb-5">
        MaternalCare provides a comprehensive range of maternal healthcare services designed 
        specifically for the Indian context. Our platform combines traditional wisdom with modern 
        healthcare practices to support women through their pregnancy journey.
      </p>

      {/* Main Services */}
      <h2 className="mb-4">Core Services</h2>
      <Row className="g-4 mb-5">
        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center p-4">
              <div className="mb-3">
                <FaHeartbeat size={50} className="text-primary" />
              </div>
              <Card.Title>Health Tracking</Card.Title>
              <Card.Text>
                Monitor your pregnancy vitals, track health metrics, and maintain digital records 
                of your medical history.
              </Card.Text>
              <Button as={Link} to="/health-tracking" variant="outline-primary">
                Track Health
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center p-4">
              <div className="mb-3">
                <FaAmbulance size={50} className="text-primary" />
              </div>
              <Card.Title>Emergency Support</Card.Title>
              <Card.Text>
                Quick access to emergency services, ASHA workers, and government maternal health 
                programs during critical situations.
              </Card.Text>
              <Button as={Link} to="/emergency-support" variant="outline-primary">
                Get Support
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center p-4">
              <div className="mb-3">
                <FaBookOpen size={50} className="text-primary" />
              </div>
              <Card.Title>Education Resources</Card.Title>
              <Card.Text>
                Access comprehensive educational materials about pregnancy, childbirth, 
                and maternal care in multiple Indian languages.
              </Card.Text>
              <Button as={Link} to="/education" variant="outline-primary">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="text-center p-4">
              <div className="mb-3">
                <FaComments size={50} className="text-primary" />
              </div>
              <Card.Title>Community Support</Card.Title>
              <Card.Text>
                Connect with other mothers, share experiences, and access community support 
                through our platform.
              </Card.Text>
              <Button as={Link} to="/testimonials" variant="outline-primary">
                Join Community
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Additional Services */}
      <h2 className="mb-4">Additional Services</h2>
      <Row className="g-4 mb-5">
        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <Row>
                <Col xs="auto">
                  <FaFileMedical size={40} className="text-primary" />
                </Col>
                <Col>
                  <Card.Title>Government Scheme Integration</Card.Title>
                  <Card.Text>
                    Get information about and register for government maternal healthcare schemes 
                    like Pradhan Mantri Matru Vandana Yojana (PMMVY) and Janani Suraksha Yojana (JSY).
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <Row>
                <Col xs="auto">
                  <FaVideo size={40} className="text-primary" />
                </Col>
                <Col>
                  <Card.Title>Telemedicine Consultations</Card.Title>
                  <Card.Text>
                    Connect with healthcare providers remotely for consultations and follow-ups, 
                    reducing the need for frequent hospital visits.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <Row>
                <Col xs="auto">
                  <FaUsers size={40} className="text-primary" />
                </Col>
                <Col>
                  <Card.Title>ASHA Worker Connection</Card.Title>
                  <Card.Text>
                    Get connected with local ASHA (Accredited Social Health Activist) workers 
                    for personalized support and guidance through your pregnancy.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Body className="p-4">
              <Row>
                <Col xs="auto">
                  <FaStethoscope size={40} className="text-primary" />
                </Col>
                <Col>
                  <Card.Title>Traditional & Modern Care Integration</Card.Title>
                  <Card.Text>
                    Access resources that combine traditional Indian pregnancy care practices 
                    with modern medical guidelines for a holistic approach.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Service Packages */}
      <h2 className="mb-4">Service Packages</h2>
      <Row className="mb-5">
        <Col md={4} className="mb-4 mb-md-0">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Header className="bg-light text-center py-4">
              <h4 className="mb-0">Basic</h4>
            </Card.Header>
            <Card.Body className="text-center p-4">
              <h3 className="display-5 fw-bold mb-0">Free</h3>
              <p className="text-muted mb-4">Available to all users</p>
              <ul className="list-unstyled mb-4 text-start">
                <li className="mb-2">✓ Health tracking basics</li>
                <li className="mb-2">✓ Emergency contact information</li>
                <li className="mb-2">✓ Basic educational resources</li>
                <li className="mb-2">✓ Community forum access</li>
                <li className="mb-2 text-muted">✗ Telemedicine consultations</li>
                <li className="mb-2 text-muted">✗ Personalized care plans</li>
              </ul>
              <Button variant="primary" className="w-100">Register Now</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-4 mb-md-0">
          <Card className="h-100 border-0 shadow-sm border-primary">
            <Card.Header className="bg-primary text-white text-center py-4">
              <h4 className="mb-0">Premium</h4>
            </Card.Header>
            <Card.Body className="text-center p-4">
              <h3 className="display-5 fw-bold mb-0">₹499</h3>
              <p className="text-muted mb-4">Per month</p>
              <ul className="list-unstyled mb-4 text-start">
                <li className="mb-2">✓ All Basic features</li>
                <li className="mb-2">✓ Advanced health tracking</li>
                <li className="mb-2">✓ Priority emergency support</li>
                <li className="mb-2">✓ Complete educational library</li>
                <li className="mb-2">✓ Monthly telemedicine consultation</li>
                <li className="mb-2 text-muted">✗ Personalized care plans</li>
              </ul>
              <Button variant="primary" className="w-100">Subscribe Now</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Header className="bg-light text-center py-4">
              <h4 className="mb-0">Complete Care</h4>
            </Card.Header>
            <Card.Body className="text-center p-4">
              <h3 className="display-5 fw-bold mb-0">₹999</h3>
              <p className="text-muted mb-4">Per month</p>
              <ul className="list-unstyled mb-4 text-start">
                <li className="mb-2">✓ All Premium features</li>
                <li className="mb-2">✓ Unlimited telemedicine consultations</li>
                <li className="mb-2">✓ Personalized care plans</li>
                <li className="mb-2">✓ Dedicated ASHA worker connection</li>
                <li className="mb-2">✓ Home visit coordination</li>
                <li className="mb-2">✓ Hospital admission assistance</li>
              </ul>
              <Button variant="primary" className="w-100">Subscribe Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row>
        <Col>
          <Card className="bg-light border-0">
            <Card.Body className="p-5 text-center">
              <h2 className="mb-3">Need More Information?</h2>
              <p className="lead mb-4">
                Our team is ready to answer any questions you may have about our services.
              </p>
              <Button as={Link} to="/contact" variant="primary" size="lg">Contact Us</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services; 