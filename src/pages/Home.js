import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaUserMd, FaBookMedical, FaAmbulance, FaComments } from 'react-icons/fa';
import Card from '../components/common/Card';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero position-relative bg-light py-5">
        <Container>
          <Row className="align-items-center min-vh-75">
            <Col lg={6} className="py-5">
              <h1 className="display-4 fw-bold mb-4" style={{ color: 'var(--primary-color)' }}>
                Bridging the Gap in Maternal Healthcare
              </h1>
              <p className="lead mb-4">
                Empowering underprivileged communities with accessible prenatal and emergency care 
                solutions through technology and community support.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Button 
                  as={Link} 
                  to="/register" 
                  variant="primary" 
                  size="lg"
                  className="px-4 py-2"
                >
                  Register Now
                </Button>
                <Button 
                  as={Link} 
                  to="/emergency-support" 
                  variant="danger" 
                  size="lg"
                  className="px-4 py-2"
                >
                  Emergency Support
                </Button>
              </div>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0">
              <img 
                src="https://placehold.co/600x400/FBF9F3/77A6B6?text=Maternal+Healthcare+Hero" 
                alt="Mother and child receiving care" 
                className="img-fluid rounded shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-3">Our Platform Features</h2>
            <p className="lead text-muted">
              Tools and resources designed to support maternal health at every stage
            </p>
          </div>
          
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card
                className="h-100 text-center p-4"
                shadow="sm"
                hover={true}
                to="/health-tracking"
              >
                <div className="mb-4">
                  <FaHeartbeat size={40} color="var(--primary-color)" />
                </div>
                <h4>Health Tracking</h4>
                <p className="text-muted">
                  Monitor vital signs, appointments, and health metrics throughout your pregnancy journey.
                </p>
              </Card>
            </Col>
            
            <Col md={6} lg={3}>
              <Card
                className="h-100 text-center p-4"
                shadow="sm"
                hover={true}
                to="/emergency-support"
              >
                <div className="mb-4">
                  <FaAmbulance size={40} color="var(--danger-color)" />
                </div>
                <h4>Emergency Support</h4>
                <p className="text-muted">
                  Quick access to emergency services, nearby hospitals, and medical assistance.
                </p>
              </Card>
            </Col>
            
            <Col md={6} lg={3}>
              <Card
                className="h-100 text-center p-4"
                shadow="sm"
                hover={true}
                to="/education"
              >
                <div className="mb-4">
                  <FaBookMedical size={40} color="var(--secondary-color)" />
                </div>
                <h4>Educational Resources</h4>
                <p className="text-muted">
                  Access to educational content on pregnancy, childbirth, and maternal health.
                </p>
              </Card>
            </Col>
            
            <Col md={6} lg={3}>
              <Card
                className="h-100 text-center p-4"
                shadow="sm"
                hover={true}
                to="/consultation"
              >
                <div className="mb-4">
                  <FaUserMd size={40} color="var(--accent-color)" />
                </div>
                <h4>Consultation</h4>
                <p className="text-muted">
                  Connect with healthcare professionals for advice and guidance throughout your journey.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-3">How It Works</h2>
            <p className="lead text-muted">
              Simple steps to access maternal healthcare services
            </p>
          </div>
          
          <Row className="g-4">
            <Col md={4}>
              <div className="d-flex">
                <div 
                  className="flex-shrink-0 d-flex align-items-center justify-content-center me-3" 
                  style={{ 
                    width: "50px", 
                    height: "50px", 
                    borderRadius: "50%", 
                    backgroundColor: "var(--primary-color)", 
                    color: "white", 
                    fontSize: "1.5rem",
                    fontWeight: "bold"
                  }}
                >
                  1
                </div>
                <div>
                  <h4>Register</h4>
                  <p className="text-muted">
                    Create your profile as a mother, doctor, NGO, or volunteer to access personalized services.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="d-flex">
                <div 
                  className="flex-shrink-0 d-flex align-items-center justify-content-center me-3" 
                  style={{ 
                    width: "50px", 
                    height: "50px", 
                    borderRadius: "50%", 
                    backgroundColor: "var(--secondary-color)", 
                    color: "white", 
                    fontSize: "1.5rem",
                    fontWeight: "bold"
                  }}
                >
                  2
                </div>
                <div>
                  <h4>Access Services</h4>
                  <p className="text-muted">
                    Use the platform to track health, find resources, or connect with healthcare providers.
                  </p>
                </div>
              </div>
            </Col>
            
            <Col md={4}>
              <div className="d-flex">
                <div 
                  className="flex-shrink-0 d-flex align-items-center justify-content-center me-3" 
                  style={{ 
                    width: "50px", 
                    height: "50px", 
                    borderRadius: "50%", 
                    backgroundColor: "var(--accent-color)", 
                    color: "white", 
                    fontSize: "1.5rem",
                    fontWeight: "bold"
                  }}
                >
                  3
                </div>
                <div>
                  <h4>Get Support</h4>
                  <p className="text-muted">
                    Receive personalized care, education, and emergency assistance when needed.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-3">Testimonials</h2>
            <p className="lead text-muted">
              Hear from mothers and healthcare providers who've benefited from our platform
            </p>
          </div>
          
          <Row className="g-4">
            <Col md={6} lg={4}>
              <Card className="h-100 p-4" shadow="sm">
                <div className="d-flex align-items-center mb-4">
                  <img 
                    src="https://placehold.co/80x80/FBF9F3/77A6B6?text=A" 
                    alt="Avatar" 
                    className="rounded-circle"
                    width="60"
                    height="60"
                  />
                  <div className="ms-3">
                    <h5 className="mb-0">Amara Johnson</h5>
                    <p className="text-muted mb-0">New Mother</p>
                  </div>
                </div>
                <div className="mb-3">
                  <FaComments size={20} color="var(--primary-color)" className="me-2" />
                  <small className="text-muted">Testimonial</small>
                </div>
                <p className="text-muted">
                  "This platform was a lifesaver during my pregnancy. The health tracking tools helped me monitor my 
                  progress, and I could access educational resources anytime. The emergency support feature came in 
                  handy when I needed urgent care."
                </p>
              </Card>
            </Col>
            
            <Col md={6} lg={4}>
              <Card className="h-100 p-4" shadow="sm">
                <div className="d-flex align-items-center mb-4">
                  <img 
                    src="https://placehold.co/80x80/FBF9F3/77A6B6?text=D" 
                    alt="Avatar" 
                    className="rounded-circle"
                    width="60"
                    height="60"
                  />
                  <div className="ms-3">
                    <h5 className="mb-0">Dr. Priya Sharma</h5>
                    <p className="text-muted mb-0">Obstetrician</p>
                  </div>
                </div>
                <div className="mb-3">
                  <FaComments size={20} color="var(--primary-color)" className="me-2" />
                  <small className="text-muted">Testimonial</small>
                </div>
                <p className="text-muted">
                  "As a healthcare provider, this platform has transformed how I connect with patients in 
                  underserved areas. I can monitor their health remotely, provide consultations, and coordinate 
                  emergency care when needed."
                </p>
              </Card>
            </Col>
            
            <Col md={6} lg={4} className="mx-auto">
              <Card className="h-100 p-4" shadow="sm">
                <div className="d-flex align-items-center mb-4">
                  <img 
                    src="https://placehold.co/80x80/FBF9F3/77A6B6?text=S" 
                    alt="Avatar" 
                    className="rounded-circle"
                    width="60"
                    height="60"
                  />
                  <div className="ms-3">
                    <h5 className="mb-0">Sarah Njuki</h5>
                    <p className="text-muted mb-0">Community Health Worker</p>
                  </div>
                </div>
                <div className="mb-3">
                  <FaComments size={20} color="var(--primary-color)" className="me-2" />
                  <small className="text-muted">Testimonial</small>
                </div>
                <p className="text-muted">
                  "This platform has empowered our community health workers to provide better support to 
                  expectant mothers. We can now reach more women, deliver educational content in their 
                  local languages, and ensure they receive proper care."
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="cta py-5 bg-primary text-white text-center">
        <Container>
          <h2 className="mb-4">Join Our Maternal Healthcare Community Today</h2>
          <p className="lead mb-4">
            Register now to access essential healthcare services, educational resources, and community support.
          </p>
          <Button 
            as={Link} 
            to="/register" 
            variant="light" 
            size="lg"
            className="px-4 py-2 me-3"
          >
            Sign Up
          </Button>
          <Button 
            as={Link} 
            to="/about" 
            variant="outline-light" 
            size="lg"
            className="px-4 py-2"
          >
            Learn More
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Home; 