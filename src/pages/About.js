import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4">About Us</h1>
      
      <Row className="mb-5">
        <Col lg={6} className="mb-4 mb-lg-0">
          <h2>Our Mission</h2>
          <p>
            At MaternalCare, our mission is to enhance maternal healthcare accessibility 
            for women across India, particularly in underserved communities. We believe that 
            every woman deserves quality care during pregnancy, childbirth, and postpartum periods.
          </p>
          <p>
            Through our comprehensive platform, we aim to provide educational resources, 
            health tracking tools, emergency support, and community connections to empower 
            women in their maternal healthcare journey.
          </p>
          <Button variant="primary">Learn More About Our Work</Button>
        </Col>
        <Col lg={6}>
          <Image 
            src="https://placehold.co/600x400/FBF9F3/77A6B6?text=Our+Mission" 
            alt="Our Mission" 
            fluid 
            rounded 
          />
        </Col>
      </Row>
      
      <h2 className="mb-4">Our Team</h2>
      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Img variant="top" src="https://placehold.co/300x300/FBF9F3/77A6B6?text=Dr.+Sharma" alt="Dr. Sharma" />
            <Card.Body className="text-center">
              <Card.Title>Dr. Priya Sharma</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Founder & Medical Director</Card.Subtitle>
              <Card.Text>
                Obstetrician with over 15 years of experience in maternal healthcare,
                passionate about improving healthcare access in rural India.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Img variant="top" src="https://placehold.co/300x300/FBF9F3/77A6B6?text=Neha+Patel" alt="Neha Patel" />
            <Card.Body className="text-center">
              <Card.Title>Neha Patel</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Chief Operations Officer</Card.Subtitle>
              <Card.Text>
                Healthcare administrator with expertise in developing healthcare
                solutions for underserved communities across India.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 border-0 shadow-sm">
            <Card.Img variant="top" src="https://placehold.co/300x300/FBF9F3/77A6B6?text=Raj+Kumar" alt="Raj Kumar" />
            <Card.Body className="text-center">
              <Card.Title>Raj Kumar</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Technology Director</Card.Subtitle>
              <Card.Text>
                Technology expert specialized in developing healthcare applications
                and ensuring seamless user experiences.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row className="mb-5">
        <Col>
          <Card className="bg-light border-0">
            <Card.Body className="p-5">
              <h2 className="mb-4 text-center">Our Impact</h2>
              <Row className="text-center">
                <Col md={4} className="mb-4 mb-md-0">
                  <h2 className="display-4 fw-bold text-primary">10,000+</h2>
                  <p className="lead">Women Supported</p>
                </Col>
                <Col md={4} className="mb-4 mb-md-0">
                  <h2 className="display-4 fw-bold text-primary">500+</h2>
                  <p className="lead">Healthcare Professionals</p>
                </Col>
                <Col md={4}>
                  <h2 className="display-4 fw-bold text-primary">200+</h2>
                  <p className="lead">Communities Reached</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <h2 className="mb-4">Our Approach</h2>
          <p>
            At MaternalCare, we believe in a holistic approach to maternal healthcare that combines:
          </p>
          <ul>
            <li>
              <strong>Education and Awareness</strong> - Providing comprehensive resources about pregnancy, childbirth, and postpartum care.
            </li>
            <li>
              <strong>Technology Integration</strong> - Leveraging technology to make healthcare more accessible and efficient.
            </li>
            <li>
              <strong>Community Support</strong> - Building networks of support for pregnant women and new mothers.
            </li>
            <li>
              <strong>Healthcare Access</strong> - Working to improve access to quality maternal healthcare in underserved areas.
            </li>
            <li>
              <strong>Cultural Sensitivity</strong> - Respecting and incorporating traditional practices that promote maternal well-being.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About; 