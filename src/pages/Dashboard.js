import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar, Table, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaHeartbeat, 
  FaFileAlt, 
  FaChartLine, 
  FaRegBell, 
  FaUserMd, 
  FaPlusCircle,
  FaExclamationTriangle,
  FaArrowRight,
  FaRegClock,
  FaHospital,
  FaFileMedical,
  FaBookMedical
} from 'react-icons/fa';

const Dashboard = () => {
  // Sample health metrics data
  const healthMetrics = {
    bloodPressure: {
      current: '120/80',
      status: 'normal',
      lastChecked: '2 days ago'
    },
    weight: {
      current: '65 kg',
      change: '+0.5 kg',
      status: 'normal',
      lastChecked: '1 week ago'
    },
    bloodSugar: {
      current: '90 mg/dL',
      status: 'normal',
      lastChecked: '3 days ago'
    }
  };
  
  // Sample pregnancy progress data
  const pregnancyProgress = {
    currentWeek: 24,
    totalWeeks: 40,
    trimester: 'Second',
    dueDate: 'August 15, 2023',
    nextCheckup: 'May 12, 2023'
  };
  
  // Sample upcoming appointments
  const upcomingAppointments = [
    {
      id: 1,
      date: 'May 12, 2023',
      time: '10:00 AM',
      doctor: 'Dr. Sarah Johnson',
      type: 'Regular Checkup',
      location: 'City General Hospital'
    },
    {
      id: 2,
      date: 'May 25, 2023',
      time: '02:30 PM',
      doctor: 'Dr. Michael Brown',
      type: 'Ultrasound',
      location: 'Women\'s Health Clinic'
    }
  ];
  
  // Sample reminders
  const reminders = [
    {
      id: 1,
      title: 'Take prenatal vitamins',
      time: 'Daily at 8:00 AM',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Drink 8 glasses of water',
      time: 'Throughout the day',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Gentle stretching exercise',
      time: 'Daily at 5:00 PM',
      priority: 'medium'
    }
  ];
  
  // Sample recent activities
  const recentActivities = [
    {
      id: 1,
      title: 'Blood Pressure Updated',
      date: 'May 2, 2023',
      time: '09:15 AM'
    },
    {
      id: 2,
      title: 'Appointment Scheduled',
      date: 'May 1, 2023',
      time: '03:45 PM'
    },
    {
      id: 3,
      title: 'Medical Report Uploaded',
      date: 'April 28, 2023',
      time: '11:30 AM'
    }
  ];
  
  return (
    <div className="dashboard-page py-5">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Dashboard</h2>
          <div className="position-relative">
            <FaRegBell size={24} className="text-muted" />
            <span 
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: '0.5rem' }}
            >
              3
            </span>
          </div>
        </div>
        
        {/* Pregnancy Progress */}
        <Card className="mb-4 border-0 shadow-sm">
          <Card.Body className="p-4">
            <Row>
              <Col md={8}>
                <h4 className="mb-3">Pregnancy Progress</h4>
                <Row>
                  <Col sm={6} className="mb-3">
                    <div className="text-muted mb-1">Current Week</div>
                    <h3 className="mb-0 fw-bold">{pregnancyProgress.currentWeek} <small className="text-muted fw-normal">of {pregnancyProgress.totalWeeks}</small></h3>
                  </Col>
                  <Col sm={6} className="mb-3">
                    <div className="text-muted mb-1">Trimester</div>
                    <h3 className="mb-0 fw-bold">{pregnancyProgress.trimester}</h3>
                  </Col>
                </Row>
                <div className="mt-2 mb-3">
                  <ProgressBar 
                    now={(pregnancyProgress.currentWeek / pregnancyProgress.totalWeeks) * 100} 
                    label={`${pregnancyProgress.currentWeek} weeks`}
                    variant="primary"
                    style={{ height: "20px" }}
                  />
                </div>
                <Row>
                  <Col sm={6}>
                    <div className="text-muted mb-1">Estimated Due Date</div>
                    <div className="fw-bold">{pregnancyProgress.dueDate}</div>
                  </Col>
                  <Col sm={6}>
                    <div className="text-muted mb-1">Next Checkup</div>
                    <div className="fw-bold">{pregnancyProgress.nextCheckup}</div>
                  </Col>
                </Row>
              </Col>
              <Col md={4} className="d-flex align-items-center justify-content-center border-start">
                <div className="text-center">
                  <div className="mb-3">
                    <img 
                      src="https://placehold.co/200x200/FBF9F3/77A6B6?text=Baby+Development" 
                      alt="Baby development" 
                      className="img-fluid rounded-circle"
                      style={{ maxWidth: "150px" }}
                    />
                  </div>
                  <h5>Week {pregnancyProgress.currentWeek}</h5>
                  <p className="text-muted mb-2">Your baby is now the size of a cantaloupe.</p>
                  <Button 
                    as={Link}
                    to="/education"
                    variant="outline-primary"
                    size="sm"
                  >
                    Learn more about this week
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        
        <Row>
          {/* Health Metrics */}
          <Col lg={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Header className="bg-white d-flex justify-content-between align-items-center py-3">
                <h5 className="mb-0">
                  <FaHeartbeat className="me-2 text-primary" /> Health Metrics
                </h5>
                <Button 
                  as={Link}
                  to="/health-tracking"
                  variant="outline-primary"
                  size="sm"
                >
                  View All
                </Button>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Blood Pressure</span>
                    <Badge bg={healthMetrics.bloodPressure.status === 'normal' ? 'success' : 'warning'}>
                      {healthMetrics.bloodPressure.status}
                    </Badge>
                  </div>
                  <h4 className="mb-0">{healthMetrics.bloodPressure.current}</h4>
                  <small className="text-muted">Last checked {healthMetrics.bloodPressure.lastChecked}</small>
                </div>
                
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Weight</span>
                    <Badge bg={healthMetrics.weight.status === 'normal' ? 'success' : 'warning'}>
                      {healthMetrics.weight.status}
                    </Badge>
                  </div>
                  <h4 className="mb-0">{healthMetrics.weight.current} <small className="text-muted">({healthMetrics.weight.change})</small></h4>
                  <small className="text-muted">Last checked {healthMetrics.weight.lastChecked}</small>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span className="text-muted">Blood Sugar</span>
                    <Badge bg={healthMetrics.bloodSugar.status === 'normal' ? 'success' : 'warning'}>
                      {healthMetrics.bloodSugar.status}
                    </Badge>
                  </div>
                  <h4 className="mb-0">{healthMetrics.bloodSugar.current}</h4>
                  <small className="text-muted">Last checked {healthMetrics.bloodSugar.lastChecked}</small>
                </div>
                
                <Button 
                  as={Link}
                  to="/health-tracking"
                  variant="primary"
                  className="w-100"
                >
                  <FaPlusCircle className="me-2" /> Update Metrics
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Upcoming Appointments */}
          <Col lg={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Header className="bg-white d-flex justify-content-between align-items-center py-3">
                <h5 className="mb-0">
                  <FaCalendarAlt className="me-2 text-primary" /> Upcoming Appointments
                </h5>
                <Button 
                  as={Link}
                  to="/health-tracking"
                  variant="outline-primary"
                  size="sm"
                >
                  Schedule
                </Button>
              </Card.Header>
              <Card.Body>
                {upcomingAppointments.length > 0 ? (
                  <div>
                    {upcomingAppointments.map(appointment => (
                      <Card key={appointment.id} className="mb-3 border">
                        <Card.Body className="p-3">
                          <div className="d-flex align-items-center mb-2">
                            <div className="bg-light rounded-circle p-2 me-3">
                              <FaUserMd className="text-primary" />
                            </div>
                            <div>
                              <h6 className="mb-0">{appointment.type}</h6>
                              <small className="text-muted">{appointment.doctor}</small>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center text-muted small mb-2">
                            <span><FaRegClock className="me-1" /> {appointment.date}, {appointment.time}</span>
                            <span><FaHospital className="me-1" /> {appointment.location}</span>
                          </div>
                          <div className="d-flex gap-2 mt-2">
                            <Button variant="outline-primary" size="sm" className="flex-grow-1">Reschedule</Button>
                            <Button variant="outline-danger" size="sm" className="flex-grow-1">Cancel</Button>
                          </div>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <FaCalendarAlt size={48} className="text-muted mb-3" />
                    <h6>No upcoming appointments</h6>
                    <p className="text-muted">Schedule your next appointment</p>
                    <Button 
                      as={Link}
                      to="/health-tracking"
                      variant="primary"
                    >
                      Schedule Now
                    </Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
          
          {/* Reminders & Activities */}
          <Col lg={4} className="mb-4">
            <Card className="h-100 border-0 shadow-sm">
              <Card.Header className="bg-white d-flex justify-content-between align-items-center py-3">
                <h5 className="mb-0">
                  <FaExclamationTriangle className="me-2 text-primary" /> Reminders
                </h5>
                <Button 
                  variant="outline-primary"
                  size="sm"
                >
                  Add New
                </Button>
              </Card.Header>
              <Card.Body>
                <div className="reminders mb-4">
                  {reminders.map(reminder => (
                    <div key={reminder.id} className="d-flex align-items-center mb-3">
                      <div 
                        className={`flex-shrink-0 rounded-circle me-3 ${
                          reminder.priority === 'high' ? 'bg-danger' : 
                          reminder.priority === 'medium' ? 'bg-warning' : 'bg-info'
                        }`}
                        style={{ width: "10px", height: "10px" }}
                      />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between">
                          <div className="fw-bold">{reminder.title}</div>
                          <Button variant="link" className="p-0 text-danger" style={{ fontSize: '0.8rem' }}>
                            &times;
                          </Button>
                        </div>
                        <div className="text-muted small">{reminder.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h6 className="mb-3">Recent Activities</h6>
                {recentActivities.map(activity => (
                  <div key={activity.id} className="d-flex mb-3">
                    <div 
                      className="flex-shrink-0 rounded-circle bg-light d-flex align-items-center justify-content-center me-3"
                      style={{ width: "40px", height: "40px" }}
                    >
                      {activity.title.includes('Blood') && <FaHeartbeat className="text-primary" />}
                      {activity.title.includes('Appointment') && <FaCalendarAlt className="text-primary" />}
                      {activity.title.includes('Report') && <FaFileAlt className="text-primary" />}
                    </div>
                    <div>
                      <div className="fw-bold">{activity.title}</div>
                      <div className="text-muted small">{activity.date}, {activity.time}</div>
                    </div>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        {/* Quick Access Links */}
        <h4 className="mb-3">Quick Access</h4>
        <Row className="g-3 mb-4">
          <Col md={3} sm={6}>
            <Card 
              as={Link}
              to="/health-tracking"
              className="text-decoration-none border-0 shadow-sm h-100"
            >
              <Card.Body className="text-center p-4">
                <div className="icon-wrapper bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                  <FaChartLine className="text-primary" size={24} />
                </div>
                <h5>Health Tracker</h5>
                <p className="text-muted small mb-0">Monitor your health metrics</p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} sm={6}>
            <Card 
              as={Link}
              to="/emergency-support"
              className="text-decoration-none border-0 shadow-sm h-100"
            >
              <Card.Body className="text-center p-4">
                <div className="icon-wrapper bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                  <FaExclamationTriangle className="text-danger" size={24} />
                </div>
                <h5>Emergency Support</h5>
                <p className="text-muted small mb-0">Quick access to emergency services</p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} sm={6}>
            <Card 
              as={Link}
              to="/education"
              className="text-decoration-none border-0 shadow-sm h-100"
            >
              <Card.Body className="text-center p-4">
                <div className="icon-wrapper bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                  <FaBookMedical className="text-primary" size={24} />
                </div>
                <h5>Education Center</h5>
                <p className="text-muted small mb-0">Learn about pregnancy and childbirth</p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={3} sm={6}>
            <Card 
              as={Link}
              to="/health-tracking"
              className="text-decoration-none border-0 shadow-sm h-100"
            >
              <Card.Body className="text-center p-4">
                <div className="icon-wrapper bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px" }}>
                  <FaFileMedical className="text-primary" size={24} />
                </div>
                <h5>Medical Reports</h5>
                <p className="text-muted small mb-0">Access your health records</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard; 