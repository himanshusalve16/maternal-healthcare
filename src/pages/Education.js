import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Tab, Nav, Badge, Modal, ListGroup, Accordion } from 'react-bootstrap';
import { 
  FaSearch, 
  FaBookOpen, 
  FaVideo, 
  FaRobot, 
  FaFilePdf, 
  FaGraduationCap, 
  FaLanguage, 
  FaPaperPlane, 
  FaPlus, 
  FaTimes, 
  FaPlay,
  FaBookmark,
  FaShare,
  FaRegClock,
  FaBook,
  FaFileAlt,
  FaCertificate,
  FaUserGraduate,
  FaHandHoldingMedical,
  FaBaby,
  FaUtensils,
  FaHeartbeat,
  FaCalendarAlt
} from 'react-icons/fa';

const Education = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for chatbot
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      message: 'Hello! I\'m your maternal health assistant. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  
  // State for video modal
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // State for selected language
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  
  // Sample articles data
  const articles = [
    {
      id: 1,
      title: 'Essential Nutrition During Pregnancy',
      excerpt: 'Proper nutrition is crucial for both mother and baby during pregnancy. Learn about essential nutrients and healthy eating habits.',
      image: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=Nutrition',
      category: 'Nutrition',
      readTime: '5 min read',
      language: 'English',
      isFeatured: true
    },
    {
      id: 2,
      title: 'Understanding Prenatal Care Visits',
      excerpt: 'Regular prenatal care is important for monitoring your health and your baby\'s development. Learn what to expect at each visit.',
      image: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=Prenatal+Care',
      category: 'Prenatal Care',
      readTime: '7 min read',
      language: 'English',
      isFeatured: false
    },
    {
      id: 3,
      title: 'Common Discomforts During Pregnancy',
      excerpt: 'Pregnancy can bring various discomforts. Learn about common issues and how to manage them safely.',
      image: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=Discomforts',
      category: 'Wellness',
      readTime: '8 min read',
      language: 'English',
      isFeatured: false
    },
    {
      id: 4,
      title: 'Preparing for Labor and Delivery',
      excerpt: 'Being prepared for labor can help reduce anxiety. Learn about signs of labor, pain management options, and what to expect.',
      image: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=Labor',
      category: 'Labor & Delivery',
      readTime: '10 min read',
      language: 'English',
      isFeatured: true
    }
  ];
  
  // Sample videos data
  const videos = [
    {
      id: 1,
      title: 'Prenatal Yoga for Each Trimester',
      thumbnail: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=Yoga',
      duration: '15:23',
      category: 'Exercise',
      views: '12.5K',
      language: 'English'
    },
    {
      id: 2,
      title: 'Understanding Fetal Development',
      thumbnail: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=Development',
      duration: '8:45',
      category: 'Development',
      views: '8.7K',
      language: 'English'
    },
    {
      id: 3,
      title: 'How to Manage Morning Sickness',
      thumbnail: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=Morning+Sickness',
      duration: '5:12',
      category: 'Wellness',
      views: '15.2K',
      language: 'English'
    },
    {
      id: 4,
      title: 'Breastfeeding Basics for New Mothers',
      thumbnail: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=Breastfeeding',
      duration: '12:38',
      category: 'Postpartum',
      views: '10.1K',
      language: 'English'
    }
  ];
  
  // Resources data
  const resources = [
    {
      id: 1,
      title: 'Pregnancy Food Guide',
      type: 'PDF',
      icon: <FaFilePdf className="text-danger" />,
      size: '2.4 MB'
    },
    {
      id: 2,
      title: 'Prenatal Exercise Routines',
      type: 'PDF',
      icon: <FaFilePdf className="text-danger" />,
      size: '3.1 MB'
    },
    {
      id: 3,
      title: 'Hospital Bag Checklist',
      type: 'PDF',
      icon: <FaFilePdf className="text-danger" />,
      size: '1.2 MB'
    },
    {
      id: 4,
      title: 'Postpartum Recovery Guide',
      type: 'PDF',
      icon: <FaFilePdf className="text-danger" />,
      size: '2.8 MB'
    }
  ];
  
  // Categories data
  const categories = [
    { id: 1, name: 'Nutrition', count: 18 },
    { id: 2, name: 'Exercise', count: 12 },
    { id: 3, name: 'Prenatal Care', count: 24 },
    { id: 4, name: 'Labor & Delivery', count: 15 },
    { id: 5, name: 'Postpartum', count: 20 },
    { id: 6, name: 'Breastfeeding', count: 14 },
    { id: 7, name: 'Baby Care', count: 16 },
    { id: 8, name: 'Wellness', count: 22 }
  ];
  
  // Languages data
  const languages = [
    { id: 1, name: 'English', count: 120 },
    { id: 2, name: 'Spanish', count: 85 },
    { id: 3, name: 'Hindi', count: 62 },
    { id: 4, name: 'French', count: 43 },
    { id: 5, name: 'Arabic', count: 38 },
    { id: 6, name: 'Swahili', count: 29 }
  ];
  
  // Sample data for educational content
  const educationalContent = [
    {
      id: 1,
      title: 'Pregnancy Care in Indian Context',
      category: 'pregnancy',
      language: 'hindi',
      type: 'article',
      content: 'Comprehensive guide to pregnancy care incorporating both modern medicine and traditional Indian practices.',
      author: 'Dr. Priya Sharma',
      date: '2024-03-15',
      readTime: '10 min',
      tags: ['pregnancy', 'traditional', 'modern']
    },
    {
      id: 2,
      title: 'Ayurvedic Practices for Healthy Pregnancy',
      category: 'traditional',
      language: 'english',
      type: 'video',
      content: 'Learn about safe Ayurvedic practices during pregnancy, including diet and lifestyle recommendations.',
      author: 'Dr. Rajesh Kumar',
      date: '2024-03-14',
      duration: '15:30',
      tags: ['ayurveda', 'pregnancy', 'wellness']
    },
    {
      id: 3,
      title: 'Understanding Government Schemes for Maternal Health',
      category: 'government',
      language: 'hindi',
      type: 'article',
      content: 'Detailed information about PMMVY, JSY, and other government initiatives for maternal healthcare.',
      author: 'Government Health Department',
      date: '2024-03-13',
      readTime: '8 min',
      tags: ['government', 'schemes', 'benefits']
    },
    {
      id: 4,
      title: 'Nutrition Guide for Indian Pregnant Women',
      category: 'nutrition',
      language: 'english',
      type: 'video',
      content: 'Complete guide to Indian pregnancy diet, including traditional foods and modern nutritional requirements.',
      author: 'Dr. Meera Patel',
      date: '2024-03-12',
      duration: '20:00',
      tags: ['nutrition', 'diet', 'pregnancy']
    },
    {
      id: 5,
      title: 'Postpartum Care in Indian Tradition',
      category: 'postpartum',
      language: 'hindi',
      type: 'article',
      content: 'Understanding traditional postpartum practices and their scientific basis.',
      author: 'Dr. Anjali Gupta',
      date: '2024-03-11',
      readTime: '12 min',
      tags: ['postpartum', 'traditional', 'care']
    }
  ];

  // Sample data for courses
  const courses = [
    {
      id: 1,
      title: 'Pregnancy and Childbirth Course',
      instructor: 'Dr. Priya Sharma',
      duration: '8 weeks',
      level: 'Beginner',
      language: 'Hindi',
      topics: ['Pregnancy Care', 'Labor Preparation', 'Postpartum Care'],
      certificate: true
    },
    {
      id: 2,
      title: 'Traditional Indian Pregnancy Practices',
      instructor: 'Dr. Rajesh Kumar',
      duration: '6 weeks',
      level: 'Intermediate',
      language: 'English',
      topics: ['Ayurveda', 'Yoga', 'Traditional Diet'],
      certificate: true
    },
    {
      id: 3,
      title: 'Government Schemes and Benefits',
      instructor: 'Government Health Department',
      duration: '4 weeks',
      level: 'Beginner',
      language: 'Hindi',
      topics: ['PMMVY', 'JSY', 'Other Benefits'],
      certificate: true
    }
  ];
  
  // Filter content based on search query and category
  const filteredContent = educationalContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || content.language === selectedLanguage;
    return matchesSearch && matchesCategory && matchesLanguage;
  });
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchQuery);
  };
  
  // Handle sending a new chat message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessage = {
      id: chatMessages.length + 1,
      sender: 'user',
      message: newMessage,
      timestamp: new Date()
    };
    
    setChatMessages([...chatMessages, userMessage]);
    setNewMessage('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        sender: 'bot',
        message: getBotResponse(newMessage),
        timestamp: new Date()
      };
      
      setChatMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };
  
  // Get bot response based on user message
  const getBotResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('nutrition') || lowerMsg.includes('food') || lowerMsg.includes('eat')) {
      return 'Proper nutrition is essential during pregnancy. Focus on a balanced diet with plenty of fruits, vegetables, lean proteins, and whole grains. Would you like me to share some specific dietary recommendations?';
    } else if (lowerMsg.includes('pain') || lowerMsg.includes('discomfort')) {
      return 'Many women experience discomfort during pregnancy. Mild pain can be normal, but it\'s important to discuss any concerns with your healthcare provider. Would you like information about specific types of pain?';
    } else if (lowerMsg.includes('exercise') || lowerMsg.includes('active')) {
      return 'Regular, moderate exercise is beneficial during pregnancy. Activities like walking, swimming, and prenatal yoga are generally safe. Would you like some exercise recommendations?';
    } else if (lowerMsg.includes('labor') || lowerMsg.includes('delivery') || lowerMsg.includes('birth')) {
      return 'Preparing for labor involves understanding the signs of labor, creating a birth plan, and learning about pain management options. Would you like more information about labor preparation?';
    } else {
      return 'Thank you for your question. I can provide information on nutrition, exercise, common discomforts, prenatal care, labor and delivery, and more. Could you please provide more details about what you\'d like to know?';
    }
  };
  
  // Handle opening video modal
  const handleOpenVideoModal = (video) => {
    setSelectedVideo(video);
    setShowVideoModal(true);
  };
  
  return (
    <div className="education-page py-5">
      <Container>
        <h2 className="mb-4">Educational Resources</h2>
        <p className="text-muted mb-4">
          Access a wealth of maternal health information through articles, videos, and interactive resources.
        </p>
        
        {/* Search Bar */}
        <Card className="mb-5 border-0 shadow-sm">
          <Card.Body className="p-4">
            <h5 className="mb-3">Find Educational Content</h5>
            <Form onSubmit={handleSearchSubmit}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Search for topics like nutrition, exercise, labor..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  aria-label="Search for educational content"
                />
                <Button variant="primary" type="submit">
                  <FaSearch className="me-2" /> Search
                </Button>
              </InputGroup>
            </Form>
            <div className="d-flex flex-wrap gap-2">
              <small className="text-muted me-2">Popular searches:</small>
              <Badge bg="light" text="dark" className="px-3 py-2">Nutrition</Badge>
              <Badge bg="light" text="dark" className="px-3 py-2">Labor signs</Badge>
              <Badge bg="light" text="dark" className="px-3 py-2">Breastfeeding</Badge>
              <Badge bg="light" text="dark" className="px-3 py-2">Morning sickness</Badge>
            </div>
          </Card.Body>
        </Card>
        
        <Tab.Container id="education-tabs" defaultActiveKey="articles">
          <Row>
            <Col lg={9}>
              <Nav variant="pills" className="mb-4 education-nav">
                <Nav.Item>
                  <Nav.Link eventKey="articles">
                    <FaBookOpen className="me-2" /> Articles
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="videos">
                    <FaVideo className="me-2" /> Videos
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="resources">
                    <FaFilePdf className="me-2" /> Resources
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="assistant">
                    <FaRobot className="me-2" /> AI Assistant
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              
              <Tab.Content>
                {/* Articles Tab */}
                <Tab.Pane eventKey="articles">
                  <h4 className="mb-4">Featured Articles</h4>
                  <Row className="g-4">
                    {articles.filter(article => article.isFeatured).map(article => (
                      <Col md={6} key={article.id}>
                        <Card className="h-100 border-0 shadow-sm">
                          <Card.Img variant="top" src={article.image} alt={article.title} />
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <Badge bg="primary">{article.category}</Badge>
                              <small className="text-muted">
                                <FaRegClock className="me-1" /> {article.readTime}
                              </small>
                            </div>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Text>{article.excerpt}</Card.Text>
                          </Card.Body>
                          <Card.Footer className="bg-white d-flex justify-content-between align-items-center">
                            <div>
                              <Badge bg="light" text="dark">
                                <FaLanguage className="me-1" /> {article.language}
                              </Badge>
                            </div>
                            <div>
                              <Button variant="link" className="p-0 text-muted">
                                <FaBookmark />
                              </Button>
                              <Button variant="link" className="p-0 text-muted ms-3">
                                <FaShare />
                              </Button>
                            </div>
                          </Card.Footer>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  
                  <h4 className="mt-5 mb-4">All Articles</h4>
                  <Row className="g-4">
                    {articles.map(article => (
                      <Col lg={6} key={article.id}>
                        <Card className="mb-3 border-0 shadow-sm">
                          <Row className="g-0">
                            <Col md={4}>
                              <img 
                                src={article.image} 
                                alt={article.title} 
                                className="img-fluid rounded-start h-100 object-fit-cover"
                                style={{ objectFit: 'cover' }}
                              />
                            </Col>
                            <Col md={8}>
                              <Card.Body>
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                  <Badge bg="primary">{article.category}</Badge>
                                  <small className="text-muted">
                                    <FaRegClock className="me-1" /> {article.readTime}
                                  </small>
                                </div>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text className="mb-0">
                                  {article.excerpt.length > 80 
                                    ? `${article.excerpt.substring(0, 80)}...` 
                                    : article.excerpt}
                                </Card.Text>
                              </Card.Body>
                            </Col>
                          </Row>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                
                {/* Videos Tab */}
                <Tab.Pane eventKey="videos">
                  <h4 className="mb-4">Educational Videos</h4>
                  <Row className="g-4">
                    {videos.map(video => (
                      <Col md={6} key={video.id}>
                        <Card className="h-100 border-0 shadow-sm">
                          <div className="position-relative">
                            <Card.Img variant="top" src={video.thumbnail} alt={video.title} />
                            <div 
                              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
                              style={{ background: 'rgba(0,0,0,0.2)', cursor: 'pointer' }}
                              onClick={() => handleOpenVideoModal(video)}
                            >
                              <Button 
                                variant="light" 
                                className="rounded-circle p-2"
                                onClick={() => handleOpenVideoModal(video)}
                              >
                                <FaPlay />
                              </Button>
                            </div>
                            <div 
                              className="position-absolute bottom-0 end-0 bg-dark text-white px-2 py-1 m-2 rounded"
                            >
                              {video.duration}
                            </div>
                          </div>
                          <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <Badge bg="primary">{video.category}</Badge>
                              <small className="text-muted">
                                {video.views} views
                              </small>
                            </div>
                            <Card.Title>{video.title}</Card.Title>
                          </Card.Body>
                          <Card.Footer className="bg-white d-flex justify-content-between align-items-center">
                            <div>
                              <Badge bg="light" text="dark">
                                <FaLanguage className="me-1" /> {video.language}
                              </Badge>
                            </div>
                            <div>
                              <Button variant="link" className="p-0 text-muted">
                                <FaBookmark />
                              </Button>
                              <Button variant="link" className="p-0 text-muted ms-3">
                                <FaShare />
                              </Button>
                            </div>
                          </Card.Footer>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
                
                {/* Resources Tab */}
                <Tab.Pane eventKey="resources">
                  <h4 className="mb-4">Downloadable Resources</h4>
                  <Row className="g-4">
                    {resources.map(resource => (
                      <Col md={6} key={resource.id}>
                        <Card className="h-100 border-0 shadow-sm">
                          <Card.Body>
                            <div className="d-flex">
                              <div className="me-3 fs-1">
                                {resource.icon}
                              </div>
                              <div>
                                <Card.Title>{resource.title}</Card.Title>
                                <Card.Text className="text-muted">
                                  {resource.type} • {resource.size}
                                </Card.Text>
                                <Button variant="primary" className="mt-2">
                                  Download
                                </Button>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  
                  <h4 className="mt-5 mb-4">Educational Programs</h4>
                  <Card className="border-0 shadow-sm mb-4">
                    <Card.Body>
                      <Row>
                        <Col md={8}>
                          <h5>Comprehensive Prenatal Education Course</h5>
                          <p className="text-muted">
                            A complete 8-week course covering all aspects of pregnancy, birth, and early postpartum.
                            Topics include nutrition, exercise, labor preparation, breastfeeding, and newborn care.
                          </p>
                          <Button variant="primary">Enroll Now</Button>
                        </Col>
                        <Col md={4} className="text-center d-flex align-items-center justify-content-center">
                          <div>
                            <FaGraduationCap size={60} className="text-primary mb-2" />
                            <div>8 Weeks • 16 Modules</div>
                            <div className="text-muted">Available in 3 languages</div>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                  
                  <Card className="border-0 shadow-sm">
                    <Card.Body>
                      <Row>
                        <Col md={8}>
                          <h5>Birth Preparation Workshop</h5>
                          <p className="text-muted">
                            A focused 2-week workshop on labor and delivery, including pain management techniques,
                            breathing exercises, and partner support strategies.
                          </p>
                          <Button variant="primary">Enroll Now</Button>
                        </Col>
                        <Col md={4} className="text-center d-flex align-items-center justify-content-center">
                          <div>
                            <FaGraduationCap size={60} className="text-primary mb-2" />
                            <div>2 Weeks • 6 Modules</div>
                            <div className="text-muted">Available in 5 languages</div>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
                
                {/* AI Assistant Tab */}
                <Tab.Pane eventKey="assistant">
                  <h4 className="mb-4">AI Maternal Health Assistant</h4>
                  <Card className="border-0 shadow-sm">
                    <Card.Body className="p-4">
                      <div className="chat-container" style={{ height: '400px', overflowY: 'auto' }}>
                        {chatMessages.map(msg => (
                          <div 
                            key={msg.id} 
                            className={`chat-message d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'} mb-3`}
                          >
                            <div 
                              className={`message-bubble p-3 rounded ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light'}`}
                              style={{ maxWidth: '75%' }}
                            >
                              <div className="message-text">
                                {msg.message}
                              </div>
                              <div className={`message-time small mt-1 ${msg.sender === 'user' ? 'text-white-50' : 'text-muted'}`}>
                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Form onSubmit={handleSendMessage} className="mt-3">
                        <InputGroup>
                          <Form.Control
                            placeholder="Type your question about maternal health..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                          />
                          <Button variant="primary" type="submit">
                            <FaPaperPlane />
                          </Button>
                        </InputGroup>
                      </Form>
                      <div className="mt-3">
                        <small className="text-muted">
                          Note: This AI assistant provides general information only and is not a substitute for professional medical advice.
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              </Tab.Content>
            </Col>
            
            <Col lg={3}>
              <div className="sidebar">
                {/* Categories */}
                <Card className="mb-4 border-0 shadow-sm">
                  <Card.Body>
                    <h5 className="mb-3">Categories</h5>
                    <ListGroup variant="flush">
                      {categories.map(category => (
                        <ListGroup.Item 
                          key={category.id}
                          className="d-flex justify-content-between align-items-center px-0 border-bottom py-2"
                          action
                        >
                          {category.name}
                          <Badge bg="light" text="dark" pill>
                            {category.count}
                          </Badge>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
                
                {/* Languages */}
                <Card className="mb-4 border-0 shadow-sm">
                  <Card.Body>
                    <h5 className="mb-3">Languages</h5>
                    <ListGroup variant="flush">
                      {languages.map(language => (
                        <ListGroup.Item 
                          key={language.id}
                          className="d-flex justify-content-between align-items-center px-0 border-bottom py-2"
                          action
                        >
                          <span>
                            <FaLanguage className="me-2" />
                            {language.name}
                          </span>
                          <Badge bg="light" text="dark" pill>
                            {language.count}
                          </Badge>
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </Card.Body>
                </Card>
                
                {/* Request Content */}
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <h5 className="mb-3">Request Content</h5>
                    <p className="text-muted small">
                      Can't find what you're looking for? Request new educational content on specific topics.
                    </p>
                    <Button variant="outline-primary" className="w-100">
                      <FaPlus className="me-2" /> Request Content
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
      
      {/* Video Modal */}
      <Modal
        show={showVideoModal}
        onHide={() => setShowVideoModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedVideo?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <div className="d-flex align-items-center justify-content-center bg-light">
              <div className="text-center">
                <FaVideo size={60} className="text-primary mb-3" />
                <h5>Video Player</h5>
                <p className="text-muted">
                  In a real application, the video would play here.
                </p>
              </div>
            </div>
          </div>
          
          {selectedVideo && (
            <div className="mt-3">
              <h5>{selectedVideo.title}</h5>
              <div className="d-flex align-items-center text-muted mb-3">
                <Badge bg="primary" className="me-2">{selectedVideo.category}</Badge>
                <span className="me-3">{selectedVideo.views} views</span>
                <span>{selectedVideo.duration}</span>
              </div>
              <p>
                This is a sample description for the video. In a real application, this would contain 
                information about the video content, the instructor, and other relevant details.
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowVideoModal(false)}>
            <FaTimes className="me-2" /> Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Education; 