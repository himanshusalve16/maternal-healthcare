import React, { useState } from 'react';
import { Container, Row, Col, Card, Accordion, Form, InputGroup, Button, Alert } from 'react-bootstrap';
import { FaSearch, FaQuestionCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFaqs, setFilteredFaqs] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [showCustomQuestion, setShowCustomQuestion] = useState(false);
  const [customQuestion, setCustomQuestion] = useState('');
  const [customEmail, setCustomEmail] = useState('');
  const [customSubmitted, setCustomSubmitted] = useState(false);

  // FAQ categories
  const categories = [
    { id: 'all', name: 'All FAQs' },
    { id: 'general', name: 'General Questions' },
    { id: 'prenatal', name: 'Prenatal Care' },
    { id: 'nutrition', name: 'Nutrition & Diet' },
    { id: 'government', name: 'Government Schemes' },
    { id: 'delivery', name: 'Labor & Delivery' },
    { id: 'postnatal', name: 'Postnatal Care' }
  ];

  // FAQ data with Indian context
  const faqData = [
    {
      id: 1,
      question: 'How often should I visit the doctor during pregnancy in India?',
      answer: 'In India, it is recommended to visit your doctor once a month during the first 28 weeks, every 2-3 weeks until 36 weeks, and then weekly until delivery. However, if you have high-risk factors or complications, your doctor may recommend more frequent visits. Under the Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA), pregnant women can also receive free antenatal check-ups on the 9th of every month at designated government facilities.',
      category: 'prenatal'
    },
    {
      id: 2,
      question: 'What government schemes are available for pregnant women in India?',
      answer: 'Several government schemes support pregnant women in India: 1) Pradhan Mantri Matru Vandana Yojana (PMMVY) provides a cash benefit of ₹5,000 in three installments. 2) Janani Suraksha Yojana (JSY) offers cash assistance for institutional deliveries. 3) Janani Shishu Suraksha Karyakram (JSSK) provides free delivery services, medications, diagnostics, and transport. 4) Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA) offers free antenatal check-ups. Visit your nearest health center or ASHA worker for enrollment details.',
      category: 'government'
    },
    {
      id: 3,
      question: 'How do I register for antenatal services at a government hospital?',
      answer: 'To register for antenatal services at a government hospital in India, visit your nearest Primary Health Center (PHC), Community Health Center (CHC), or district hospital with your Aadhaar card, proof of address, and a photo ID. You can also contact your local ASHA (Accredited Social Health Activist) worker who can help with registration and accompany you for your first visit. Registration is free, and you will receive a Mother and Child Protection (MCP) card to track your care throughout pregnancy.',
      category: 'general'
    },
    {
      id: 4,
      question: 'What dietary recommendations should Indian pregnant women follow?',
      answer: 'Indian pregnant women should consume a balanced diet rich in local, seasonal foods. Include protein sources like dal, milk, and pulses; calcium from dairy products, ragi, and green leafy vegetables; iron from jaggery, dates, and green vegetables; and folate from green leafy vegetables and citrus fruits. It\'s also important to include ghee in moderation, stay hydrated, and continue consuming traditional foods like millet, home-prepared pickles, and seasonal fruits. Avoid excessive spicy food and consult your doctor about specific supplements to address common deficiencies like iron, calcium, and vitamin D.',
      category: 'nutrition'
    },
    {
      id: 5,
      question: 'Are there any traditional practices during pregnancy that are beneficial?',
      answer: 'Several traditional Indian practices can be beneficial during pregnancy when followed safely. Yoga and meditation can reduce stress and improve sleep. Certain Ayurvedic herbs like ginger for morning sickness may be helpful, but always consult your doctor before trying any herbal remedies. Traditional oil massages can relieve muscle tension. The Garbha Sanskar tradition of listening to music and positive affirmations may promote maternal wellbeing. However, it\'s important to balance traditional practices with modern medical care and avoid any practices involving fasting or untested herbal concoctions.',
      category: 'prenatal'
    },
    {
      id: 6,
      question: 'What should I include in my hospital bag for delivery in India?',
      answer: 'For your hospital bag in India, pack: 1) Documents: Aadhaar card, MCP card, health insurance papers, hospital registration, test reports, and ultrasound reports. 2) For mother: 3-4 front-opening nightgowns, slippers, undergarments, nursing bras, sanitary pads, toiletries, and a water bottle. 3) For baby: 4-5 cotton suits/jhablas, diapers, soft towels, baby blanket, socks, mittens, caps, and gentle baby wash. 4) Also useful: Phone charger, cash for miscellaneous expenses, snacks, and a small pillow. If delivering in a government hospital, you might need to bring your own sheets and additional supplies.',
      category: 'delivery'
    },
    {
      id: 7,
      question: 'How can I identify pregnancy complications requiring urgent medical attention?',
      answer: 'Seek immediate medical attention if you experience: 1) Vaginal bleeding 2) Severe abdominal pain 3) Severe headache or blurred vision 4) Rapid swelling of face, hands, or feet 5) Fever above 100.4°F (38°C) 6) Reduced or no baby movement after 24 weeks 7) Waters breaking before 37 weeks 8) Persistent vomiting 9) Burning during urination with fever 10) Seizures or loss of consciousness. In India, contact your doctor, call 108 for ambulance services, or visit your nearest emergency facility. Keep your ASHA worker\'s contact information accessible for guidance in rural areas.',
      category: 'prenatal'
    },
    {
      id: 8,
      question: 'What postnatal care services are available in government facilities in India?',
      answer: 'Government facilities in India provide comprehensive postnatal care services including: 1) Free postnatal check-ups under JSSK 2) Immunization for the baby as per the national schedule 3) Nutrition counseling and supplementation 4) Family planning services 5) Screening for postpartum depression 6) Home visits by ASHA workers to check mother and baby\'s health 7) Support for breastfeeding through lactation consultants at district hospitals 8) Treatment for complications. Visit your primary health center or contact your ASHA worker within 48 hours after discharge for your first postnatal check-up.',
      category: 'postnatal'
    },
    {
      id: 9,
      question: 'How do I claim benefits under the Pradhan Mantri Matru Vandana Yojana (PMMVY)?',
      answer: 'To claim PMMVY benefits (₹5,000): 1) Register at your local Anganwadi center, ASHA worker, or health facility 2) Submit form 1-A with your Aadhaar card, bank passbook, and MCP card for first installment (after early registration) 3) Submit form 1-B with proof of first ANC visit for second installment 4) Submit form 1-C with proof of child birth registration for third installment. Benefits are directly transferred to your bank account. The scheme applies to the first living child only. Your ASHA worker can assist with the application process.',
      category: 'government'
    },
    {
      id: 10,
      question: 'What vaccinations are recommended during pregnancy in India?',
      answer: 'In India, the following vaccinations are recommended during pregnancy: 1) Tetanus-Diphtheria (Td) or Tetanus Toxoid (TT) - Two doses given 4 weeks apart during the first pregnancy, or one booster dose for subsequent pregnancies if previous vaccination was within 3 years 2) Influenza (Flu) vaccine - Safe at any stage of pregnancy and especially recommended during flu season 3) COVID-19 vaccination as per current guidelines. These vaccines are available free of cost at government health facilities. Always consult your healthcare provider for personalized vaccination advice.',
      category: 'prenatal'
    },
    {
      id: 11,
      question: 'How can I prepare for breastfeeding?',
      answer: 'To prepare for breastfeeding: 1) Attend breastfeeding classes at government hospitals or through local healthcare workers 2) Learn proper latching techniques 3) Discuss breastfeeding with experienced mothers or lactation consultants 4) Prepare comfortable nursing areas at home 5) Know that colostrum (first milk) is extremely beneficial for your baby - in India, there is sometimes a misconception that it should be discarded, but it provides essential antibodies 6) Plan to initiate breastfeeding within the first hour after birth 7) Be aware of resources like the National Breastfeeding Promotion Program where you can get support if needed. During pregnancy, maintain good nutrition and stay hydrated, as this will help with milk production later.',
      category: 'postnatal'
    },
    {
      id: 12,
      question: 'What are the signs of labor?',
      answer: 'Signs of labor include: 1) Regular contractions that increase in frequency, duration, and intensity 2) Rupture of membranes ("water breaking") 3) Bloody show (pink or brown mucus discharge) 4) Lower back pain or pressure 5) Diarrhea or nausea. In India, it\'s advisable to leave for the hospital when contractions are regular and about 5-7 minutes apart, especially if you live far from the facility or face transportation challenges. Call your doctor or 108 for ambulance services when labor begins. If you\'re in a rural area, notify your ASHA worker who can arrange transportation and accompany you to the facility.',
      category: 'delivery'
    }
  ];

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      setFilteredFaqs(null);
      return;
    }
    
    const filtered = faqData.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredFaqs(filtered);
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setFilteredFaqs(null);
    setSearchTerm('');
  };

  // Get FAQs to display based on active category and search filters
  const getFaqsToDisplay = () => {
    if (filteredFaqs !== null) {
      return filteredFaqs;
    }
    
    if (activeCategory === 'all') {
      return faqData;
    }
    
    return faqData.filter(faq => faq.category === activeCategory);
  };

  // Handle custom question submission
  const handleCustomQuestionSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the question to the backend
    console.log('Question submitted:', customQuestion, 'Email:', customEmail);
    setCustomSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setCustomSubmitted(false);
      setCustomQuestion('');
      setCustomEmail('');
      setShowCustomQuestion(false);
    }, 3000);
  };

  return (
    <div className="faqs-page py-5">
      <Container>
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <p className="text-muted mb-5">
          Find answers to common questions about maternal healthcare in India
        </p>
        
        <Row>
          <Col lg={8} className="mb-4 mb-lg-0">
            {/* Search Bar */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <Form onSubmit={handleSearch}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Search for questions or keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button variant="primary" type="submit">
                      <FaSearch className="me-1" /> Search
                    </Button>
                  </InputGroup>
                </Form>
              </Card.Body>
            </Card>
            
            {/* Search Results or FAQs */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                {filteredFaqs !== null && (
                  <div className="mb-4">
                    <h5>Search Results</h5>
                    <p className="text-muted">
                      Found {filteredFaqs.length} {filteredFaqs.length === 1 ? 'result' : 'results'} for "{searchTerm}"
                    </p>
                    {filteredFaqs.length === 0 && (
                      <Alert variant="info">
                        No FAQs match your search. Try different keywords or ask a new question below.
                      </Alert>
                    )}
                  </div>
                )}
                
                <Accordion defaultActiveKey="0" flush>
                  {getFaqsToDisplay().map((faq, index) => (
                    <Accordion.Item key={faq.id} eventKey={index.toString()}>
                      <Accordion.Header>
                        <FaQuestionCircle className="me-2 text-primary" /> {faq.question}
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>{faq.answer}</p>
                        <div className="text-end">
                          <small className="text-muted">
                            Category: {categories.find(cat => cat.id === faq.category)?.name}
                          </small>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </Card.Body>
            </Card>
            
            {/* Ask a Question */}
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Don't see your question?</h5>
                  <Button 
                    variant="link" 
                    className="text-decoration-none p-0"
                    onClick={() => setShowCustomQuestion(!showCustomQuestion)}
                  >
                    {showCustomQuestion ? (
                      <><FaMinusCircle className="me-1" /> Hide Form</>
                    ) : (
                      <><FaPlusCircle className="me-1" /> Ask a Question</>
                    )}
                  </Button>
                </div>
                
                {showCustomQuestion && (
                  <Form onSubmit={handleCustomQuestionSubmit}>
                    {customSubmitted ? (
                      <Alert variant="success">
                        Thank you for your question! Our healthcare team will respond within 48 hours.
                      </Alert>
                    ) : (
                      <>
                        <Form.Group className="mb-3">
                          <Form.Label>Your Question</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Type your question here..."
                            value={customQuestion}
                            onChange={(e) => setCustomQuestion(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your email to receive a response"
                            value={customEmail}
                            onChange={(e) => setCustomEmail(e.target.value)}
                            required
                          />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Submit Question
                        </Button>
                      </>
                    )}
                  </Form>
                )}
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            {/* Categories */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-3">Categories</h5>
                <div className="d-grid gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? "primary" : "outline-primary"}
                      onClick={() => handleCategoryChange(category.id)}
                      className="text-start"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </Card.Body>
            </Card>
            
            {/* Contact Info */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-3">Need More Help?</h5>
                <p>
                  If you need immediate assistance or have specific questions about your pregnancy, 
                  please contact:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Maternal Health Helpline:</strong><br />
                    1800-XXX-XXXX (Toll Free)
                  </li>
                  <li className="mb-2">
                    <strong>Email Support:</strong><br />
                    support@maternalcare.org
                  </li>
                  <li>
                    <strong>Emergency Services:</strong><br />
                    108 (National Emergency Number)
                  </li>
                </ul>
              </Card.Body>
            </Card>
            
            {/* Resources */}
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5 className="mb-3">Helpful Resources</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/education" className="text-decoration-none">
                      Maternal Health Education Center
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://nhm.gov.in/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      National Health Mission
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="https://pmsma.nhp.gov.in/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                      Pradhan Mantri Surakshit Matritva Abhiyan
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="text-decoration-none">
                      Blog: Maternal Health in India
                    </a>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQs; 