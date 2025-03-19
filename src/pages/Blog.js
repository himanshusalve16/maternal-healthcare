import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaCalendarAlt, FaUser, FaComments, FaShare, FaTags } from 'react-icons/fa';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Blog post data with Indian-specific content
  const blogPosts = [
    {
      id: 1,
      title: 'Ayurvedic Practices for a Healthy Pregnancy',
      excerpt: 'Learn about traditional Ayurvedic practices that can complement modern prenatal care for a healthy pregnancy journey.',
      image: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=Ayurvedic+Practices',
      date: 'May 10, 2023',
      author: 'Dr. Priya Sharma',
      category: 'Prenatal Care',
      tags: ['Ayurveda', 'Traditional Medicine', 'Pregnancy Wellness'],
      comments: 15
    },
    {
      id: 2,
      title: 'Understanding the Pradhan Mantri Matru Vandana Yojana (PMMVY)',
      excerpt: 'A comprehensive guide to the benefits and application process for the PMMVY maternity benefit program in India.',
      image: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=PMMVY+Guide',
      date: 'April 25, 2023',
      author: 'Anjali Desai',
      category: 'Government Schemes',
      tags: ['PMMVY', 'Maternity Benefits', 'Government Support'],
      comments: 23
    },
    {
      id: 3,
      title: 'Nutritional Guidelines for Pregnant Women in India',
      excerpt: 'Region-specific nutritional advice considering Indian dietary patterns and addressing common deficiencies during pregnancy.',
      image: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=Indian+Nutrition',
      date: 'April 18, 2023',
      author: 'Dr. Meera Krishnan',
      category: 'Nutrition',
      tags: ['Diet', 'Indian Food', 'Pregnancy Nutrition'],
      comments: 19
    },
    {
      id: 4,
      title: 'Navigating Antenatal Care in Rural India: Challenges and Solutions',
      excerpt: 'Exploring the unique challenges faced by expectant mothers in rural India and community-based solutions.',
      image: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=Rural+Healthcare',
      date: 'April 5, 2023',
      author: 'Dr. Rajesh Verma',
      category: 'Rural Healthcare',
      tags: ['Rural Health', 'Community Support', 'Healthcare Access'],
      comments: 27
    },
    {
      id: 5,
      title: 'The Role of ASHA Workers in Maternal Healthcare',
      excerpt: 'Understanding how Accredited Social Health Activists (ASHA) are transforming maternal care in communities across India.',
      image: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=ASHA+Workers',
      date: 'March 22, 2023',
      author: 'Sunita Kumari',
      category: 'Community Health',
      tags: ['ASHA', 'Community Health', 'Maternal Support'],
      comments: 31
    },
    {
      id: 6,
      title: 'Preparing for Delivery: Hospital Checklist for Indian Families',
      excerpt: 'A comprehensive checklist of documents, items, and preparations for hospital delivery in India.',
      image: 'https://placehold.co/600x400/FBF9F3/77A6B6?text=Hospital+Checklist',
      date: 'March 15, 2023',
      author: 'Nisha Patel',
      category: 'Birth Preparation',
      tags: ['Hospital Delivery', 'Checklist', 'Birth Planning'],
      comments: 42
    }
  ];
  
  // Categories for sidebar
  const categories = [
    { name: 'Prenatal Care', count: 15 },
    { name: 'Nutrition', count: 12 },
    { name: 'Government Schemes', count: 8 },
    { name: 'Traditional Practices', count: 10 },
    { name: 'Rural Healthcare', count: 7 },
    { name: 'Community Health', count: 9 },
    { name: 'Birth Preparation', count: 11 }
  ];
  
  // Recent posts for sidebar
  const recentPosts = blogPosts.slice(0, 3);
  
  const handleSearch = (e) => {
    e.preventDefault();
    // In a real app, this would filter posts or navigate to search results
    console.log('Searching for:', searchQuery);
  };
  
  return (
    <div className="blog-page py-5">
      <Container>
        <h2 className="mb-4">Maternal Health Blog</h2>
        <p className="text-muted mb-5">
          Expert advice, success stories, and resources for expectant mothers in India
        </p>
        
        <Row>
          {/* Main Content */}
          <Col lg={8} className="mb-5 mb-lg-0">
            {/* Featured Post */}
            <Card className="border-0 shadow-sm overflow-hidden mb-5">
              <div className="ratio ratio-16x9">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="card-img-top"
                />
              </div>
              <Card.Body className="p-4">
                <div className="d-flex text-muted mb-3">
                  <small className="me-3">
                    <FaCalendarAlt className="me-1" /> {blogPosts[0].date}
                  </small>
                  <small className="me-3">
                    <FaUser className="me-1" /> {blogPosts[0].author}
                  </small>
                  <small>
                    <FaComments className="me-1" /> {blogPosts[0].comments} comments
                  </small>
                </div>
                <h3 className="card-title mb-3">
                  <Link to={`/blog/${blogPosts[0].id}`} className="text-decoration-none">
                    {blogPosts[0].title}
                  </Link>
                </h3>
                <Card.Text className="mb-4">{blogPosts[0].excerpt}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button 
                    as={Link} 
                    to={`/blog/${blogPosts[0].id}`} 
                    variant="primary"
                  >
                    Read More
                  </Button>
                  <div>
                    <Button variant="light" size="sm" className="me-2">
                      <FaShare className="me-1" /> Share
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            
            {/* Blog Post Grid */}
            <Row className="g-4">
              {blogPosts.slice(1).map(post => (
                <Col md={6} key={post.id}>
                  <Card className="h-100 border-0 shadow-sm">
                    <div className="ratio ratio-4x3">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="card-img-top"
                      />
                    </div>
                    <Card.Body className="p-4">
                      <small className="d-block text-muted mb-2">
                        <FaCalendarAlt className="me-1" /> {post.date}
                      </small>
                      <h4 className="card-title mb-3">
                        <Link to={`/blog/${post.id}`} className="text-decoration-none">
                          {post.title}
                        </Link>
                      </h4>
                      <Card.Text className="mb-3">{post.excerpt}</Card.Text>
                      <div className="d-flex justify-content-between align-items-center">
                        <Button 
                          as={Link} 
                          to={`/blog/${post.id}`} 
                          variant="link" 
                          className="p-0"
                        >
                          Read More
                        </Button>
                        <small className="text-muted">
                          <FaComments className="me-1" /> {post.comments}
                        </small>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            
            {/* Pagination */}
            <div className="d-flex justify-content-center mt-5">
              <Button variant="outline-secondary" className="me-2">&laquo; Previous</Button>
              <Button variant="primary" className="mx-1">1</Button>
              <Button variant="outline-primary" className="mx-1">2</Button>
              <Button variant="outline-primary" className="mx-1">3</Button>
              <Button variant="outline-secondary" className="ms-2">Next &raquo;</Button>
            </div>
          </Col>
          
          {/* Sidebar */}
          <Col lg={4}>
            {/* Search Box */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-3">Search</h5>
                <Form onSubmit={handleSearch}>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Search blog posts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Button variant="primary" type="submit">
                      <FaSearch />
                    </Button>
                  </InputGroup>
                </Form>
              </Card.Body>
            </Card>
            
            {/* Categories */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-3">Categories</h5>
                <ul className="list-unstyled">
                  {categories.map((category, index) => (
                    <li key={index} className="mb-2">
                      <Link to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-decoration-none d-flex justify-content-between align-items-center">
                        <span>{category.name}</span>
                        <span className="badge bg-light text-dark rounded-pill">{category.count}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
            
            {/* Recent Posts */}
            <Card className="border-0 shadow-sm mb-4">
              <Card.Body>
                <h5 className="mb-3">Recent Posts</h5>
                {recentPosts.map(post => (
                  <div key={post.id} className="d-flex mb-3">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="rounded"
                      width="70"
                      height="70"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className="ms-3">
                      <h6 className="mb-1">
                        <Link to={`/blog/${post.id}`} className="text-decoration-none">
                          {post.title}
                        </Link>
                      </h6>
                      <small className="text-muted">
                        <FaCalendarAlt className="me-1" /> {post.date}
                      </small>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
            
            {/* Tags */}
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5 className="mb-3">Tags</h5>
                <div className="d-flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).map((tag, index) => (
                    <Link 
                      key={index} 
                      to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                      className="badge bg-light text-dark text-decoration-none p-2"
                    >
                      <FaTags className="me-1" /> {tag}
                    </Link>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog; 