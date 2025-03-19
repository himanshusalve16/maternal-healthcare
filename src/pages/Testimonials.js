import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, FloatingLabel, Alert, Nav } from 'react-bootstrap';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaRegStar, FaUser, FaUserMd, FaHospital, FaHandHoldingHeart, FaMapMarkerAlt, FaPlay } from 'react-icons/fa';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    userType: 'mother',
    testimonial: '',
    rating: 5,
    email: '',
    shareStory: false
  });

  // Testimonial data with Indian context
  const testimonialData = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Delhi, India',
      image: 'https://placehold.co/300x300/FBF9F3/77A6B6?text=PS',
      testimonial: 'As a first-time mother from a remote village near Delhi, I was anxious about my pregnancy. The MaternalCare app connected me with an ASHA worker who guided me through the entire journey. The health tracking helped me monitor my vitals, and the educational resources taught me what to expect at each stage. When I developed complications in my 7th month, the emergency feature quickly connected me to the nearest PHC. I\'m now a proud mother of a healthy baby girl and continue to use the app for postnatal care!',
      rating: 5,
      type: 'mother',
      video: null
    },
    {
      id: 2,
      name: 'Dr. Rajesh Verma',
      location: 'Mumbai, Maharashtra',
      image: 'https://placehold.co/300x300/FBF9F3/77A6B6?text=RV',
      testimonial: 'As an obstetrician working in Mumbai\'s public healthcare system, I\'ve seen how this platform bridges critical gaps in maternal care. The app helps me monitor high-risk patients remotely, especially those from underserved communities who can\'t visit frequently. The emergency alert system has saved several lives by enabling timely interventions. The platform\'s integration with government schemes like PMMVY and JSY helps patients easily access benefits they\'re entitled to. This technology is truly transforming maternal healthcare in urban India.',
      rating: 5,
      type: 'doctor',
      video: null
    },
    {
      id: 3,
      name: 'Lakshmi Devi',
      location: 'Rural Tamil Nadu',
      image: 'https://placehold.co/300x300/FBF9F3/77A6B6?text=LD',
      testimonial: 'Living in a village 50 km from the nearest hospital, I was worried about my pregnancy. The MaternalCare app provided me with Hindi language resources that I could understand. The app helped me register for Janani Suraksha Yojana benefits and even reminded me of my vaccination dates. When I went into labor early, the emergency feature helped my husband quickly arrange transportation. The local ASHA worker was notified through the app and accompanied us to the hospital. I\'m grateful for this technology that made my journey to motherhood safer.',
      rating: 5,
      type: 'mother',
      video: 'https://example.com/video1.mp4'
    },
    {
      id: 4,
      name: 'Sunita Kumari',
      location: 'Patna, Bihar',
      image: 'https://placehold.co/300x300/FBF9F3/77A6B6?text=SK',
      testimonial: 'As an ASHA worker serving in rural Bihar, this platform has empowered me to provide better care to pregnant women in my community. I can now register women, track their health metrics, and schedule reminders for their check-ups directly through the app. The educational content in local languages helps me explain complex medical concepts to mothers. When emergencies arise, I can quickly connect with doctors for guidance. This technology has made my work more efficient and effective, allowing me to support more women in my village.',
      rating: 4,
      type: 'volunteer',
      video: null
    },
    {
      id: 5,
      name: 'Aruna Patel',
      location: 'Ahmedabad, Gujarat',
      image: 'https://placehold.co/300x300/FBF9F3/77A6B6?text=AP',
      testimonial: 'The nutrition guidance on this app was tailored to Indian dietary habits, which was incredibly helpful! As a vegetarian with gestational diabetes, I was struggling to maintain my blood sugar levels. The app suggested local foods that were both nutritious and suitable for my condition. The recipe section offered diabetes-friendly versions of traditional Gujarati dishes. The app even connected me with a nutritionist who helped me create a meal plan using locally available foods. My pregnancy journey became much easier with this culturally appropriate guidance.',
      rating: 5,
      type: 'mother',
      video: null
    },
    {
      id: 6,
      name: 'Dr. Meena Krishnan',
      location: 'Bengaluru, Karnataka',
      image: 'https://placehold.co/300x300/FBF9F3/77A6B6?text=MK',
      testimonial: 'The MaternalCare platform has transformed how we deliver care at our community health center in Bengaluru. The digital health records enable continuity of care even when different providers see the patient. The analytics help us identify high-risk pregnancies early and allocate resources accordingly. We\'ve reduced maternal complications by 30% since implementing this system. The platform\'s integration with government schemes also simplifies administrative work, allowing us to focus more on patient care. This technology is exactly what India\'s public health system needed.',
      rating: 5,
      type: 'doctor',
      video: 'https://example.com/video2.mp4'
    },
    {
      id: 7,
      name: 'Sampath Healthcare Trust',
      location: 'Multiple locations across India',
      image: 'https://placehold.co/300x300/FBF9F3/77A6B6?text=SHT',
      testimonial: 'Our NGO works with pregnant women in slum communities across five major Indian cities. The MaternalCare platform has enabled us to standardize care protocols while adapting to local needs. We can track multiple outreach programs simultaneously and measure their impact accurately. The platform\'s multilingual support helps us serve diverse linguistic communities. Most importantly, the emergency response system has dramatically improved outcomes in critical situations. This technology has multiplied our impact and helped us serve thousands more women than we could previously reach.',
      rating: 5,
      type: 'ngo',
      video: null
    },
    {
      id: 8,
      name: 'Pooja Singh',
      location: 'Varanasi, Uttar Pradesh',
      image: 'https://placehold.co/300x300/FBF9F3/77A6B6?text=PS',
      testimonial: 'During my high-risk pregnancy with twins, this app became my lifeline. The daily monitoring helped detect pre-eclampsia early, and the emergency feature quickly connected me to specialists when my blood pressure spiked dangerously. The app guided me through applying for the Pradhan Mantri Matru Vandana Yojana benefits, which helped cover my medical expenses. The educational content about multiple pregnancies prepared me for what to expect. Today, my twin boys are healthy, and I continue to use the app for tracking their vaccinations and development milestones.',
      rating: 5,
      type: 'mother',
      video: null
    }
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the testimonial to the backend
    console.log('Testimonial submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setShowSubmitForm(false);
      setFormData({
        name: '',
        location: '',
        userType: 'mother',
        testimonial: '',
        rating: 5,
        email: '',
        shareStory: false
      });
    }, 3000);
  };

  // Filter testimonials based on active tab
  const getFilteredTestimonials = () => {
    if (activeTab === 'all') {
      return testimonialData;
    }
    return testimonialData.filter(testimonial => testimonial.type === activeTab);
  };

  // Render star rating
  const renderStarRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-warning" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-warning" />);
      }
    }
    return stars;
  };

  // Get user type icon
  const getUserTypeIcon = (type) => {
    switch (type) {
      case 'doctor':
        return <FaUserMd className="text-primary" />;
      case 'ngo':
        return <FaHospital className="text-primary" />;
      case 'volunteer':
        return <FaHandHoldingHeart className="text-primary" />;
      default:
        return <FaUser className="text-primary" />;
    }
  };

  return (
    <div className="testimonials-page py-5">
      <Container>
        <h2 className="mb-4">Success Stories</h2>
        <p className="text-muted mb-5">
          Read about real experiences from mothers, healthcare providers, and community workers across India
        </p>
        
        {/* Filter Tabs */}
        <Nav 
          variant="pills" 
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
          className="mb-4 justify-content-center"
        >
          <Nav.Item>
            <Nav.Link eventKey="all">All Stories</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="mother">Mothers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="doctor">Healthcare Providers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="volunteer">Community Workers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="ngo">Organizations</Nav.Link>
          </Nav.Item>
        </Nav>
        
        {/* Featured Testimonial */}
        <Card className="border-0 shadow-sm mb-5">
          <Card.Body className="p-4">
            <Row className="align-items-center">
              <Col lg={4} className="text-center mb-4 mb-lg-0">
                <img 
                  src={testimonialData[0].image} 
                  alt={testimonialData[0].name} 
                  className="rounded-circle img-thumbnail" 
                  width="200"
                  height="200"
                />
                <h4 className="mt-3 mb-1">{testimonialData[0].name}</h4>
                <p className="text-muted">
                  <FaMapMarkerAlt className="me-1" /> {testimonialData[0].location}
                </p>
                <div className="mb-2">
                  {renderStarRating(testimonialData[0].rating)}
                </div>
                <span className="badge bg-primary">
                  {getUserTypeIcon(testimonialData[0].type)} {' '}
                  {testimonialData[0].type === 'mother' ? 'Mother' : 
                   testimonialData[0].type === 'doctor' ? 'Healthcare Provider' : 
                   testimonialData[0].type === 'volunteer' ? 'Community Worker' : 'Organization'}
                </span>
              </Col>
              <Col lg={8}>
                <div className="position-relative">
                  <FaQuoteLeft size={30} className="text-primary opacity-25 position-absolute top-0 start-0" style={{ transform: 'translateX(-50%)' }} />
                  <p className="lead px-4 mb-4">
                    {testimonialData[0].testimonial}
                  </p>
                  <FaQuoteRight size={30} className="text-primary opacity-25 position-absolute bottom-0 end-0" style={{ transform: 'translateX(50%)' }} />
                </div>
                {testimonialData[0].video && (
                  <div className="text-end mt-3">
                    <Button variant="outline-primary">
                      <FaPlay className="me-2" /> Watch Video Testimonial
                    </Button>
                  </div>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
        
        {/* Testimonial Grid */}
        <Row className="g-4 mb-5">
          {getFilteredTestimonials().slice(1).map(testimonial => (
            <Col md={6} lg={4} key={testimonial.id}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="rounded-circle me-3" 
                      width="60"
                      height="60"
                    />
                    <div>
                      <h5 className="mb-0">{testimonial.name}</h5>
                      <p className="text-muted mb-0 small">
                        <FaMapMarkerAlt className="me-1" /> {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="mb-2 d-flex justify-content-between align-items-center">
                    <div>
                      {renderStarRating(testimonial.rating)}
                    </div>
                    <span className="badge bg-light text-dark">
                      {getUserTypeIcon(testimonial.type)} {' '}
                      {testimonial.type === 'mother' ? 'Mother' : 
                       testimonial.type === 'doctor' ? 'Healthcare Provider' : 
                       testimonial.type === 'volunteer' ? 'Community Worker' : 'Organization'}
                    </span>
                  </div>
                  <div className="position-relative">
                    <FaQuoteLeft size={20} className="text-primary opacity-25 position-absolute top-0 start-0" style={{ transform: 'translate(-50%, -50%)' }} />
                    <p className="px-3 mb-3">
                      {testimonial.testimonial.length > 200 
                        ? `${testimonial.testimonial.substring(0, 200)}...` 
                        : testimonial.testimonial}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <Button variant="link" className="p-0 text-decoration-none">Read Full Story</Button>
                    {testimonial.video && (
                      <Button variant="outline-primary" size="sm">
                        <FaPlay className="me-1" /> Watch Video
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        {/* Submit Your Story */}
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Share Your Story</h4>
              <Button 
                variant="primary"
                onClick={() => setShowSubmitForm(!showSubmitForm)}
              >
                {showSubmitForm ? 'Hide Form' : 'Share Your Experience'}
              </Button>
            </div>
            
            {showSubmitForm && (
              <div>
                {formSubmitted ? (
                  <Alert variant="success">
                    <h5>Thank you for sharing your story!</h5>
                    <p className="mb-0">
                      Your testimonial has been submitted successfully. It will be reviewed and published soon.
                    </p>
                  </Alert>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <FloatingLabel label="Your Name">
                            <Form.Control
                              type="text"
                              placeholder="Your Name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <FloatingLabel label="Location (City, State)">
                            <Form.Control
                              type="text"
                              placeholder="Location (City, State)"
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                              required
                            />
                          </FloatingLabel>
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>I am a:</Form.Label>
                      <div>
                        <Form.Check
                          inline
                          type="radio"
                          label="Mother"
                          name="userType"
                          value="mother"
                          checked={formData.userType === 'mother'}
                          onChange={handleInputChange}
                          id="userType-mother"
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Healthcare Provider"
                          name="userType"
                          value="doctor"
                          checked={formData.userType === 'doctor'}
                          onChange={handleInputChange}
                          id="userType-doctor"
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Community Worker"
                          name="userType"
                          value="volunteer"
                          checked={formData.userType === 'volunteer'}
                          onChange={handleInputChange}
                          id="userType-volunteer"
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Organization"
                          name="userType"
                          value="ngo"
                          checked={formData.userType === 'ngo'}
                          onChange={handleInputChange}
                          id="userType-ngo"
                        />
                      </div>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <FloatingLabel label="Your Experience">
                        <Form.Control
                          as="textarea"
                          placeholder="Share your experience with the platform..."
                          style={{ height: '150px' }}
                          name="testimonial"
                          value={formData.testimonial}
                          onChange={handleInputChange}
                          required
                        />
                      </FloatingLabel>
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>Your Rating</Form.Label>
                      <div className="d-flex gap-1">
                        {[1, 2, 3, 4, 5].map(num => (
                          <Button 
                            key={num}
                            variant="outline-warning"
                            className={`px-3 ${formData.rating >= num ? 'active' : ''}`}
                            onClick={() => setFormData({...formData, rating: num})}
                          >
                            {num}
                          </Button>
                        ))}
                      </div>
                    </Form.Group>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <FloatingLabel label="Email Address (will not be published)">
                            <Form.Control
                              type="email"
                              placeholder="Email Address"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </FloatingLabel>
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="d-flex align-items-center">
                        <Form.Group className="mb-3">
                          <Form.Check
                            type="checkbox"
                            label="I'm willing to share my story in more detail and possibly appear in promotional materials"
                            name="shareStory"
                            checked={formData.shareStory}
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Button variant="primary" type="submit" className="mt-2">
                      Submit Your Story
                    </Button>
                  </Form>
                )}
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Testimonials; 