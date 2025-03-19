import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup, ProgressBar, Nav, Alert } from 'react-bootstrap';
import { FaRupeeSign, FaHandHoldingHeart, FaHospital, FaUsers, FaPhone, FaEnvelope, FaInfinity, FaRegCreditCard, FaMobileAlt, FaUniversity } from 'react-icons/fa';

const Donate = () => {
  const [donationType, setDonationType] = useState('oneTime');
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [activeCategory, setActiveCategory] = useState('all');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    panCard: '',
    address: '',
    anonymous: false,
    newsletter: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Predefined donation amounts (in INR)
  const donationAmounts = [500, 1000, 2500, 5000];

  // Donation projects with Indian context
  const donationProjects = [
    {
      id: 1,
      title: 'Rural Maternal Healthcare Centers',
      category: 'infrastructure',
      description: 'Support the establishment of maternal healthcare centers in remote villages of Rajasthan and Uttar Pradesh, providing essential services to underserved communities.',
      goal: 2500000,
      raised: 1750000,
      image: 'https://placehold.co/400x300/FBF9F3/77A6B6?text=Rural+Centers',
      beneficiaries: '25 villages, approximately 15,000 women'
    },
    {
      id: 2,
      title: 'Training for ASHA Workers',
      category: 'education',
      description: 'Fund comprehensive training programs for Accredited Social Health Activists (ASHA) workers across Bihar, enhancing their skills in maternal and newborn care.',
      goal: 1200000,
      raised: 800000,
      image: 'https://placehold.co/400x300/FBF9F3/77A6B6?text=ASHA+Training',
      beneficiaries: '500 ASHA workers serving approximately 50,000 women'
    },
    {
      id: 3,
      title: 'Mobile Medical Units',
      category: 'infrastructure',
      description: 'Help deploy fully equipped mobile medical units to reach pregnant women in remote tribal areas of Jharkhand and Chhattisgarh.',
      goal: 3000000,
      raised: 1200000,
      image: 'https://placehold.co/400x300/FBF9F3/77A6B6?text=Mobile+Units',
      beneficiaries: '75 villages, approximately 25,000 women'
    },
    {
      id: 4,
      title: 'Nutritional Support Program',
      category: 'nutrition',
      description: 'Provide essential nutritional supplements and education to undernourished pregnant women in slum areas of Mumbai and Delhi.',
      goal: 900000,
      raised: 650000,
      image: 'https://placehold.co/400x300/FBF9F3/77A6B6?text=Nutrition+Program',
      beneficiaries: '2,000 pregnant women across 15 slum communities'
    },
    {
      id: 5,
      title: 'Digital Health Records System',
      category: 'technology',
      description: 'Support the implementation of a digital health records system for pregnant women in Tamil Nadu, ensuring better continuity of care.',
      goal: 1500000,
      raised: 1100000,
      image: 'https://placehold.co/400x300/FBF9F3/77A6B6?text=Digital+Records',
      beneficiaries: '100 healthcare facilities serving 50,000+ women'
    },
    {
      id: 6,
      title: 'Emergency Transport Network',
      category: 'emergency',
      description: 'Help establish an emergency transport network in rural Gujarat to quickly transport women with pregnancy complications to hospitals.',
      goal: 1800000,
      raised: 900000,
      image: 'https://placehold.co/400x300/FBF9F3/77A6B6?text=Transport+Network',
      beneficiaries: '200 villages, potentially saving 500+ lives annually'
    }
  ];

  // Project categories
  const projectCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'infrastructure', name: 'Healthcare Infrastructure' },
    { id: 'education', name: 'Education & Training' },
    { id: 'nutrition', name: 'Nutrition Programs' },
    { id: 'technology', name: 'Technology Solutions' },
    { id: 'emergency', name: 'Emergency Services' }
  ];

  // Handle input changes for donor information
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonorInfo({
      ...donorInfo,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle donation amount selection
  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  // Handle custom amount input
  const handleCustomAmount = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  // Get filtered projects based on active category
  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return donationProjects;
    }
    return donationProjects.filter(project => project.category === activeCategory);
  };

  // Calculate actual donation amount
  const getActualDonationAmount = () => {
    if (donationAmount === 'custom') {
      return customAmount ? parseInt(customAmount) : 0;
    }
    return donationAmount;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would process the payment
    
    console.log('Donation processed:', {
      type: donationType,
      amount: getActualDonationAmount(),
      paymentMethod,
      donorInfo
    });
    
    setFormSubmitted(true);
    
    // Reset form after 3 seconds in this demo
    setTimeout(() => {
      setFormSubmitted(false);
      setDonationAmount('');
      setCustomAmount('');
      setDonorInfo({
        name: '',
        email: '',
        phone: '',
        panCard: '',
        address: '',
        anonymous: false,
        newsletter: true
      });
    }, 5000);
  };

  return (
    <div className="donate-page py-5">
      <Container>
        <h2 className="mb-4">Support Maternal Healthcare in India</h2>
        <p className="text-muted mb-5">
          Your contribution helps us provide vital healthcare services to mothers across India
        </p>
        
        <Row>
          {/* Donation Form */}
          <Col lg={7} className="mb-5 mb-lg-0">
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                {formSubmitted ? (
                  <Alert variant="success">
                    <h4>Thank You for Your Donation!</h4>
                    <p>
                      Your generous contribution of <strong>₹{getActualDonationAmount().toLocaleString()}</strong> will help improve maternal healthcare services across India.
                    </p>
                    <p>
                      A confirmation receipt has been sent to your email address. If you've provided your PAN card details, you'll receive a tax exemption certificate under Section 80G of the Income Tax Act.
                    </p>
                    <div className="mt-3">
                      <Button variant="outline-primary" onClick={() => setFormSubmitted(false)}>Make Another Donation</Button>
                    </div>
                  </Alert>
                ) : (
                  <Form onSubmit={handleSubmit}>
                    <h4 className="mb-4">Make a Donation</h4>
                    
                    {/* Donation Type */}
                    <Form.Group className="mb-4">
                      <Form.Label>Donation Type</Form.Label>
                      <div className="d-flex">
                        <Form.Check
                          type="radio"
                          id="oneTime"
                          name="donationType"
                          label="One-time Donation"
                          value="oneTime"
                          checked={donationType === 'oneTime'}
                          onChange={() => setDonationType('oneTime')}
                          className="me-4"
                        />
                        <Form.Check
                          type="radio"
                          id="monthly"
                          name="donationType"
                          label="Monthly Donation"
                          value="monthly"
                          checked={donationType === 'monthly'}
                          onChange={() => setDonationType('monthly')}
                        />
                      </div>
                    </Form.Group>
                    
                    {/* Donation Amount */}
                    <Form.Group className="mb-4">
                      <Form.Label>Donation Amount (₹)</Form.Label>
                      <div className="donation-amounts mb-3">
                        <Row className="g-2">
                          {donationAmounts.map((amount) => (
                            <Col xs={6} md={3} key={amount}>
                              <Button
                                variant={donationAmount === amount ? "primary" : "outline-primary"}
                                className="w-100"
                                onClick={() => handleAmountSelect(amount)}
                              >
                                <FaRupeeSign /> {amount.toLocaleString()}
                              </Button>
                            </Col>
                          ))}
                        </Row>
                      </div>
                      
                      <InputGroup>
                        <InputGroup.Text><FaRupeeSign /></InputGroup.Text>
                        <Form.Control
                          type="number"
                          placeholder="Custom Amount"
                          value={customAmount}
                          onChange={handleCustomAmount}
                          min="100"
                        />
                      </InputGroup>
                      <Form.Text className="text-muted">
                        Minimum donation amount is ₹100. All donations are eligible for tax exemption under Section 80G.
                      </Form.Text>
                    </Form.Group>
                    
                    {/* Payment Method */}
                    <Form.Group className="mb-4">
                      <Form.Label>Payment Method</Form.Label>
                      <div className="payment-methods">
                        <Row className="g-2">
                          <Col xs={6} md={3}>
                            <Button
                              variant={paymentMethod === 'upi' ? "primary" : "outline-primary"}
                              className="w-100"
                              onClick={() => setPaymentMethod('upi')}
                            >
                              <FaMobileAlt className="me-2" /> UPI
                            </Button>
                          </Col>
                          <Col xs={6} md={3}>
                            <Button
                              variant={paymentMethod === 'card' ? "primary" : "outline-primary"}
                              className="w-100"
                              onClick={() => setPaymentMethod('card')}
                            >
                              <FaRegCreditCard className="me-2" /> Card
                            </Button>
                          </Col>
                          <Col xs={6} md={3}>
                            <Button
                              variant={paymentMethod === 'netbanking' ? "primary" : "outline-primary"}
                              className="w-100"
                              onClick={() => setPaymentMethod('netbanking')}
                            >
                              <FaUniversity className="me-2" /> NetBanking
                            </Button>
                          </Col>
                          <Col xs={6} md={3}>
                            <Button
                              variant={paymentMethod === 'wallet' ? "primary" : "outline-primary"}
                              className="w-100"
                              onClick={() => setPaymentMethod('wallet')}
                            >
                              <FaEnvelope className="me-2" /> Wallets
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </Form.Group>
                    
                    <hr className="my-4" />
                    
                    {/* Donor Information */}
                    <h5 className="mb-3">Your Information</h5>
                    
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={donorInfo.name}
                            onChange={handleInputChange}
                            required={!donorInfo.anonymous}
                            disabled={donorInfo.anonymous}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={donorInfo.email}
                            onChange={handleInputChange}
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
                            value={donorInfo.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>PAN Card (for tax benefits)</Form.Label>
                          <Form.Control
                            type="text"
                            name="panCard"
                            value={donorInfo.panCard}
                            onChange={handleInputChange}
                            placeholder="Optional, for 80G certificate"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        name="address"
                        value={donorInfo.address}
                        onChange={handleInputChange}
                        required={!donorInfo.anonymous}
                        disabled={donorInfo.anonymous}
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-3">
                      <Form.Check
                        type="checkbox"
                        id="anonymous"
                        label="I wish to donate anonymously"
                        name="anonymous"
                        checked={donorInfo.anonymous}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-4">
                      <Form.Check
                        type="checkbox"
                        id="newsletter"
                        label="Keep me updated on how my donation is making an impact"
                        name="newsletter"
                        checked={donorInfo.newsletter}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    
                    <Button 
                      variant="primary" 
                      type="submit" 
                      size="lg" 
                      className="w-100"
                      disabled={!donationAmount || (donationAmount === 'custom' && !customAmount)}
                    >
                      <FaHandHoldingHeart className="me-2" /> 
                      Donate {donationAmount && <><FaRupeeSign /> {getActualDonationAmount().toLocaleString()}</>}
                    </Button>
                    
                    <div className="text-center mt-3">
                      <small className="text-muted">
                        By proceeding, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
                      </small>
                    </div>
                  </Form>
                )}
              </Card.Body>
            </Card>
          </Col>
          
          {/* Donation Info */}
          <Col lg={5}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body className="p-4">
                <h4 className="mb-4">How Your Donation Helps</h4>
                
                <div className="donation-impact mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-wrapper bg-light rounded-circle p-3 me-3">
                      <FaRupeeSign className="text-primary" size={24} />
                    </div>
                    <div>
                      <h6 className="mb-0">₹500</h6>
                      <p className="text-muted mb-0">Provides prenatal vitamins for one mother for three months</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-wrapper bg-light rounded-circle p-3 me-3">
                      <FaRupeeSign className="text-primary" size={24} />
                    </div>
                    <div>
                      <h6 className="mb-0">₹1,000</h6>
                      <p className="text-muted mb-0">Funds one emergency transport for a mother in labor</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-wrapper bg-light rounded-circle p-3 me-3">
                      <FaRupeeSign className="text-primary" size={24} />
                    </div>
                    <div>
                      <h6 className="mb-0">₹2,500</h6>
                      <p className="text-muted mb-0">Covers training costs for one ASHA worker</p>
                    </div>
                  </div>
                  
                  <div className="d-flex align-items-center">
                    <div className="icon-wrapper bg-light rounded-circle p-3 me-3">
                      <FaRupeeSign className="text-primary" size={24} />
                    </div>
                    <div>
                      <h6 className="mb-0">₹5,000</h6>
                      <p className="text-muted mb-0">Provides essential medical equipment for one rural health center</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mb-3">
                  <FaInfinity size={30} className="text-primary" />
                  <p className="mb-0">
                    <strong>100% of your donation</strong> goes directly to supporting maternal healthcare services
                  </p>
                </div>
              </Card.Body>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h5 className="mb-3">Tax Benefits</h5>
                <p className="text-muted">
                  All donations to the MaternalCare Foundation are eligible for tax deduction under Section 80G of the Income Tax Act, 1961.
                </p>
                <ul className="text-muted">
                  <li>PAN-based donation receipts will be provided</li>
                  <li>80G certificates sent via email within 7 working days</li>
                  <li>Deduction of 50% of the donation amount</li>
                </ul>
                
                <h5 className="mb-3 mt-4">Need Assistance?</h5>
                <p className="text-muted mb-2">
                  Our donation support team is available to help:
                </p>
                <p className="mb-1">
                  <FaPhone className="me-2 text-primary" /> +91-XXXXXXXXXX
                </p>
                <p>
                  <FaEnvelope className="me-2 text-primary" /> donations@maternalcare.org
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        {/* Donation Projects */}
        <div className="donation-projects mt-5">
          <h3 className="mb-4">Current Funding Projects</h3>
          
          <Nav 
            variant="pills" 
            activeKey={activeCategory}
            onSelect={(k) => setActiveCategory(k)}
            className="mb-4"
          >
            {projectCategories.map(category => (
              <Nav.Item key={category.id}>
                <Nav.Link eventKey={category.id}>{category.name}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          
          <Row className="g-4">
            {getFilteredProjects().map(project => (
              <Col md={6} lg={4} key={project.id}>
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body className="p-4">
                    <h5>{project.title}</h5>
                    <p className="text-muted">{project.description}</p>
                    <div className="mb-3">
                      <div className="d-flex justify-content-between mb-1">
                        <span>₹{project.raised.toLocaleString()} raised</span>
                        <span>₹{project.goal.toLocaleString()}</span>
                      </div>
                      <ProgressBar 
                        now={(project.raised / project.goal) * 100} 
                        variant="primary" 
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-light text-dark">
                        Beneficiaries: {project.beneficiaries}
                      </span>
                      <Button variant="outline-primary" size="sm">
                        Support Project
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        
        {/* Corporate Partnerships */}
        <div className="corporate-partnerships mt-5">
          <Card className="border-0 shadow-sm bg-light">
            <Card.Body className="p-4">
              <Row className="align-items-center">
                <Col lg={8}>
                  <h4>Corporate Partnerships</h4>
                  <p className="mb-4">
                    We partner with corporations across India to maximize impact through CSR initiatives. 
                    Our corporate partners receive customized engagement opportunities, impact reports, 
                    and recognition across our platforms.
                  </p>
                  <Button variant="primary">
                    Become a Corporate Partner
                  </Button>
                </Col>
                <Col lg={4} className="text-center">
                  <FaHandHoldingHeart size={100} className="text-primary opacity-50" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Donate; 