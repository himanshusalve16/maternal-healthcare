import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Table, Alert, Badge, Tabs, Tab } from 'react-bootstrap';
import { FaHeartbeat, FaCalendarAlt, FaFileUpload, FaChartLine, FaWeight, FaTemperatureHigh, FaFileMedical, FaTrash, FaEdit, FaSyringe, FaNotesMedical, FaExclamationTriangle } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HealthTracking = () => {
  // State for health metrics form
  const [metricForm, setMetricForm] = useState({
    date: new Date().toISOString().split('T')[0],
    bloodPressure: '',
    weight: '',
    bloodSugar: '',
    temperature: '',
    notes: ''
  });
  
  // State for appointment form
  const [appointmentForm, setAppointmentForm] = useState({
    date: '',
    time: '',
    doctor: '',
    type: '',
    notes: ''
  });
  
  // State for success messages
  const [showSuccess, setShowSuccess] = useState({
    metrics: false,
    appointment: false,
    upload: false
  });
  
  // Sample health metrics data
  const [healthMetrics, setHealthMetrics] = useState([
    {
      id: 1,
      date: '2023-03-15',
      bloodPressure: '120/80',
      weight: '65',
      bloodSugar: '90',
      temperature: '36.5',
      notes: 'Feeling good today'
    },
    {
      id: 2,
      date: '2023-03-10',
      bloodPressure: '118/78',
      weight: '64.5',
      bloodSugar: '92',
      temperature: '36.7',
      notes: 'Slight fatigue in the afternoon'
    }
  ]);
  
  // Sample appointments data
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      date: '2023-04-05',
      time: '10:00',
      doctor: 'Dr. Sarah Johnson',
      type: 'Regular checkup',
      notes: 'Bring previous ultrasound reports'
    },
    {
      id: 2,
      date: '2023-04-20',
      time: '14:30',
      doctor: 'Dr. Michael Brown',
      type: 'Blood work',
      notes: 'Fasting required'
    }
  ]);
  
  // Sample reports data
  const [reports, setReports] = useState([
    {
      id: 1,
      name: 'Blood Test Report',
      date: '2023-03-01',
      type: 'Laboratory',
      size: '1.2 MB'
    },
    {
      id: 2,
      name: 'Ultrasound Scan',
      date: '2023-02-15',
      type: 'Imaging',
      size: '3.5 MB'
    }
  ]);
  
  const [vitals, setVitals] = useState({
    bloodPressure: '',
    weight: '',
    temperature: '',
    bloodSugar: '',
    hemoglobin: '',
    pulseRate: '',
    oxygenLevel: '',
    fetalHeartRate: ''
  });

  const [medications, setMedications] = useState([]);
  const [newMedication, setNewMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    startDate: '',
    endDate: '',
    prescribedBy: '',
    notes: ''
  });

  const [symptoms, setSymptoms] = useState([]);
  const [newSymptom, setNewSymptom] = useState({
    type: '',
    severity: 'mild',
    duration: '',
    notes: ''
  });

  const [nutrition, setNutrition] = useState({
    meals: [],
    waterIntake: 0,
    supplements: [],
    dietaryRestrictions: []
  });

  const [sleep, setSleep] = useState({
    hours: 0,
    quality: 'good',
    disturbances: []
  });

  const [ayushTracking, setAyushTracking] = useState({
    ayurvedicPractices: [],
    yogaPoses: [],
    meditationMinutes: 0,
    homeRemedies: []
  });

  const [governmentSchemes, setGovernmentSchemes] = useState({
    pmjdy: false,
    pmmy: false,
    jsy: false,
    anm: false,
    asha: false
  });

  const [regionalMetrics, setRegionalMetrics] = useState({
    airQuality: '',
    weather: '',
    localDiseasePrevalence: []
  });

  const [healthAlerts, setHealthAlerts] = useState([]);
  
  // Handle health metrics form submission
  const handleMetricSubmit = (e) => {
    e.preventDefault();
    
    // Add new health metric to the list
    const newMetric = {
      id: healthMetrics.length + 1,
      ...metricForm
    };
    
    setHealthMetrics([newMetric, ...healthMetrics]);
    
    // Reset form and show success message
    setMetricForm({
      date: new Date().toISOString().split('T')[0],
      bloodPressure: '',
      weight: '',
      bloodSugar: '',
      temperature: '',
      notes: ''
    });
    
    setShowSuccess({...showSuccess, metrics: true});
    setTimeout(() => {
      setShowSuccess({...showSuccess, metrics: false});
    }, 3000);
  };
  
  // Handle appointment form submission
  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    
    // Add new appointment to the list
    const newAppointment = {
      id: appointments.length + 1,
      ...appointmentForm
    };
    
    setAppointments([...appointments, newAppointment]);
    
    // Reset form and show success message
    setAppointmentForm({
      date: '',
      time: '',
      doctor: '',
      type: '',
      notes: ''
    });
    
    setShowSuccess({...showSuccess, appointment: true});
    setTimeout(() => {
      setShowSuccess({...showSuccess, appointment: false});
    }, 3000);
  };
  
  // Handle file upload
  const handleFileUpload = (e) => {
    e.preventDefault();
    
    // Simulate file upload
    const fileInput = document.getElementById('reportFile');
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      
      // Add new report to the list
      const newReport = {
        id: reports.length + 1,
        name: file.name,
        date: new Date().toISOString().split('T')[0],
        type: document.getElementById('reportType').value,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
      };
      
      setReports([newReport, ...reports]);
      
      // Reset form and show success message
      fileInput.value = '';
      document.getElementById('reportType').value = '';
      
      setShowSuccess({...showSuccess, upload: true});
      setTimeout(() => {
        setShowSuccess({...showSuccess, upload: false});
      }, 3000);
    }
  };
  
  // Handle deleting a report
  const handleDeleteReport = (id) => {
    setReports(reports.filter(report => report.id !== id));
  };
  
  // Handle metric form changes
  const handleMetricChange = (e) => {
    const { name, value } = e.target;
    setMetricForm({
      ...metricForm,
      [name]: value
    });
  };
  
  // Handle appointment form changes
  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointmentForm({
      ...appointmentForm,
      [name]: value
    });
  };

  const handleVitalsSubmit = (e) => {
    e.preventDefault();
    // Add validation for Indian standards
    const alerts = [];
    
    if (vitals.bloodPressure > '140/90') {
      alerts.push('High blood pressure detected. Please consult your doctor.');
    }
    if (vitals.bloodSugar > 140) {
      alerts.push('High blood sugar detected. Monitor your diet and consult your doctor.');
    }
    if (vitals.hemoglobin < 11) {
      alerts.push('Low hemoglobin detected. Consider iron-rich foods and supplements.');
    }
    
    setHealthAlerts(alerts);
  };

  const handleMedicationAdd = (e) => {
    e.preventDefault();
    setMedications([...medications, { ...newMedication, id: Date.now() }]);
    setNewMedication({
      name: '',
      dosage: '',
      frequency: '',
      startDate: '',
      endDate: '',
      prescribedBy: '',
      notes: ''
    });
  };

  const handleSymptomAdd = (e) => {
    e.preventDefault();
    setSymptoms([...symptoms, { ...newSymptom, id: Date.now(), date: new Date() }]);
    setNewSymptom({
      type: '',
      severity: 'mild',
      duration: '',
      notes: ''
    });
  };

  const handleAyushAdd = (practice) => {
    setAyushTracking({
      ...ayushTracking,
      [practice.type]: [...ayushTracking[practice.type], practice]
    });
  };

  const handleGovernmentSchemeToggle = (scheme) => {
    setGovernmentSchemes({
      ...governmentSchemes,
      [scheme]: !governmentSchemes[scheme]
    });
  };

  // Sample data for charts
  const weightData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Weight (kg)',
        data: [65, 65.5, 66, 66.5],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const bpData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Systolic',
        data: [120, 118, 122, 119],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Diastolic',
        data: [80, 78, 82, 79],
        borderColor: 'rgb(53, 162, 235)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="health-tracking-page py-5">
      <Container>
        <h2 className="mb-4">Health Tracking</h2>
        <p className="text-muted mb-4">
          Monitor your health metrics, schedule appointments, and upload medical reports all in one place.
        </p>
        
        <Tabs defaultActiveKey="metrics" className="mb-4">
          <Tab eventKey="metrics" title={<span><FaHeartbeat className="me-2" /> Health Metrics</span>}>
            <Row>
              <Col md={5} lg={4}>
                <Card className="mb-4">
                  <Card.Header>
                    <h5 className="mb-0">Add New Measurement</h5>
                  </Card.Header>
                  <Card.Body>
                    {showSuccess.metrics && (
                      <Alert variant="success" className="mb-3">
                        Health metrics saved successfully!
                      </Alert>
                    )}
                    
                    <Form onSubmit={handleMetricSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={metricForm.date}
                          onChange={handleMetricChange}
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Blood Pressure (mmHg)</Form.Label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaHeartbeat />
                          </span>
                          <Form.Control
                            type="text"
                            placeholder="e.g. 120/80"
                            name="bloodPressure"
                            value={metricForm.bloodPressure}
                            onChange={handleMetricChange}
                          />
                        </div>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Weight (kg)</Form.Label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaWeight />
                          </span>
                          <Form.Control
                            type="number"
                            placeholder="e.g. 65"
                            name="weight"
                            value={metricForm.weight}
                            onChange={handleMetricChange}
                          />
                        </div>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Blood Sugar (mg/dL)</Form.Label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaChartLine />
                          </span>
                          <Form.Control
                            type="number"
                            placeholder="e.g. 90"
                            name="bloodSugar"
                            value={metricForm.bloodSugar}
                            onChange={handleMetricChange}
                          />
                        </div>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Temperature (°C)</Form.Label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FaTemperatureHigh />
                          </span>
                          <Form.Control
                            type="number"
                            step="0.1"
                            placeholder="e.g. 36.5"
                            name="temperature"
                            value={metricForm.temperature}
                            onChange={handleMetricChange}
                          />
                        </div>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="Any additional notes"
                          name="notes"
                          value={metricForm.notes}
                          onChange={handleMetricChange}
                        />
                      </Form.Group>
                      
                      <Button type="submit" variant="primary" className="w-100">
                        Save Measurement
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={7} lg={8}>
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Health Metrics History</h5>
                    <Button variant="outline-primary" size="sm">
                      <FaChartLine className="me-2" /> View Trends
                    </Button>
                  </Card.Header>
                  <Card.Body>
                    <div className="table-responsive">
                      <Table striped hover>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Blood Pressure</th>
                            <th>Weight (kg)</th>
                            <th>Blood Sugar</th>
                            <th>Temperature</th>
                            <th>Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {healthMetrics.map(metric => (
                            <tr key={metric.id}>
                              <td>{metric.date}</td>
                              <td>{metric.bloodPressure}</td>
                              <td>{metric.weight}</td>
                              <td>{metric.bloodSugar}</td>
                              <td>{metric.temperature}</td>
                              <td>{metric.notes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab>
          
          <Tab eventKey="appointments" title={<span><FaCalendarAlt className="me-2" /> Appointments</span>}>
            <Row>
              <Col md={5} lg={4}>
                <Card className="mb-4">
                  <Card.Header>
                    <h5 className="mb-0">Schedule Appointment</h5>
                  </Card.Header>
                  <Card.Body>
                    {showSuccess.appointment && (
                      <Alert variant="success" className="mb-3">
                        Appointment scheduled successfully!
                      </Alert>
                    )}
                    
                    <Form onSubmit={handleAppointmentSubmit}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          type="date"
                          name="date"
                          value={appointmentForm.date}
                          onChange={handleAppointmentChange}
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                          type="time"
                          name="time"
                          value={appointmentForm.time}
                          onChange={handleAppointmentChange}
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Doctor</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Doctor's name"
                          name="doctor"
                          value={appointmentForm.doctor}
                          onChange={handleAppointmentChange}
                          required
                        />
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Appointment Type</Form.Label>
                        <Form.Control
                          as="select"
                          name="type"
                          value={appointmentForm.type}
                          onChange={handleAppointmentChange}
                          required
                        >
                          <option value="">Select type</option>
                          <option value="Regular checkup">Regular checkup</option>
                          <option value="Ultrasound">Ultrasound</option>
                          <option value="Blood work">Blood work</option>
                          <option value="Consultation">Consultation</option>
                          <option value="Other">Other</option>
                        </Form.Control>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>Notes</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          placeholder="Any specific instructions"
                          name="notes"
                          value={appointmentForm.notes}
                          onChange={handleAppointmentChange}
                        />
                      </Form.Group>
                      
                      <Button type="submit" variant="primary" className="w-100">
                        Schedule Appointment
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={7} lg={8}>
                <Card>
                  <Card.Header>
                    <h5 className="mb-0">Upcoming Appointments</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="table-responsive">
                      <Table striped hover>
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Doctor</th>
                            <th>Type</th>
                            <th>Notes</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {appointments.map(appointment => (
                            <tr key={appointment.id}>
                              <td>{appointment.date}</td>
                              <td>{appointment.time}</td>
                              <td>{appointment.doctor}</td>
                              <td>{appointment.type}</td>
                              <td>{appointment.notes}</td>
                              <td>
                                <Button variant="outline-primary" size="sm" className="me-2">
                                  <FaEdit />
                                </Button>
                                <Button variant="outline-danger" size="sm">
                                  <FaTrash />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab>
          
          <Tab eventKey="reports" title={<span><FaFileMedical className="me-2" /> Medical Reports</span>}>
            <Row>
              <Col md={5} lg={4}>
                <Card className="mb-4">
                  <Card.Header>
                    <h5 className="mb-0">Upload Medical Report</h5>
                  </Card.Header>
                  <Card.Body>
                    {showSuccess.upload && (
                      <Alert variant="success" className="mb-3">
                        Report uploaded successfully!
                      </Alert>
                    )}
                    
                    <Form onSubmit={handleFileUpload}>
                      <Form.Group className="mb-3">
                        <Form.Label>Report Type</Form.Label>
                        <Form.Control
                          as="select"
                          id="reportType"
                          required
                        >
                          <option value="">Select type</option>
                          <option value="Laboratory">Laboratory</option>
                          <option value="Imaging">Imaging</option>
                          <option value="Prescription">Prescription</option>
                          <option value="Discharge Summary">Discharge Summary</option>
                          <option value="Other">Other</option>
                        </Form.Control>
                      </Form.Group>
                      
                      <Form.Group className="mb-3">
                        <Form.Label>File</Form.Label>
                        <Form.Control
                          type="file"
                          id="reportFile"
                          required
                        />
                        <Form.Text className="text-muted">
                          Supported formats: PDF, JPG, PNG (Max: 10MB)
                        </Form.Text>
                      </Form.Group>
                      
                      <Button type="submit" variant="primary" className="w-100">
                        <FaFileUpload className="me-2" /> Upload Report
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col md={7} lg={8}>
                <Card>
                  <Card.Header>
                    <h5 className="mb-0">My Medical Reports</h5>
                  </Card.Header>
                  <Card.Body>
                    <div className="table-responsive">
                      <Table striped hover>
                        <thead>
                          <tr>
                            <th>Report Name</th>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Size</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {reports.map(report => (
                            <tr key={report.id}>
                              <td>{report.name}</td>
                              <td>{report.date}</td>
                              <td>{report.type}</td>
                              <td>{report.size}</td>
                              <td>
                                <Button variant="outline-primary" size="sm" className="me-2">
                                  View
                                </Button>
                                <Button 
                                  variant="outline-danger" 
                                  size="sm"
                                  onClick={() => handleDeleteReport(report.id)}
                                >
                                  <FaTrash />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab>
        </Tabs>

        {/* Health Alerts */}
        {healthAlerts.length > 0 && (
          <Alert variant="warning" className="mb-4">
            <h5><FaExclamationTriangle /> Health Alerts</h5>
            <ul>
              {healthAlerts.map((alert, index) => (
                <li key={index}>{alert}</li>
              ))}
            </ul>
          </Alert>
        )}

        <Row>
          {/* Vitals Tracking */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Header>
                <h5 className="mb-0"><FaHeartbeat /> Vitals Tracking</h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleVitalsSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Blood Pressure (mmHg)</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="e.g., 120/80"
                          value={vitals.bloodPressure}
                          onChange={(e) => setVitals({ ...vitals, bloodPressure: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Weight (kg)</Form.Label>
                        <Form.Control
                          type="number"
                          value={vitals.weight}
                          onChange={(e) => setVitals({ ...vitals, weight: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Temperature (°C)</Form.Label>
                        <Form.Control
                          type="number"
                          value={vitals.temperature}
                          onChange={(e) => setVitals({ ...vitals, temperature: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Blood Sugar (mg/dL)</Form.Label>
                        <Form.Control
                          type="number"
                          value={vitals.bloodSugar}
                          onChange={(e) => setVitals({ ...vitals, bloodSugar: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Hemoglobin (g/dL)</Form.Label>
                        <Form.Control
                          type="number"
                          value={vitals.hemoglobin}
                          onChange={(e) => setVitals({ ...vitals, hemoglobin: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Pulse Rate (bpm)</Form.Label>
                        <Form.Control
                          type="number"
                          value={vitals.pulseRate}
                          onChange={(e) => setVitals({ ...vitals, pulseRate: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" type="submit">Save Vitals</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* AYUSH Tracking */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Header>
                <h5 className="mb-0">AYUSH Practices</h5>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Yoga Poses</Form.Label>
                  <Form.Select
                    onChange={(e) => handleAyushAdd({ type: 'yogaPoses', name: e.target.value })}
                  >
                    <option value="">Select a pose</option>
                    <option value="sukhasana">Sukhasana (Easy Pose)</option>
                    <option value="viparita-karani">Viparita Karani (Legs Up Wall)</option>
                    <option value="cat-cow">Cat-Cow Stretch</option>
                    <option value="child-pose">Child's Pose</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Ayurvedic Practices</Form.Label>
                  <Form.Select
                    onChange={(e) => handleAyushAdd({ type: 'ayurvedicPractices', name: e.target.value })}
                  >
                    <option value="">Select a practice</option>
                    <option value="abhyanga">Abhyanga (Oil Massage)</option>
                    <option value="nasya">Nasya (Nasal Therapy)</option>
                    <option value="pranayama">Pranayama (Breathing Exercises)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Meditation (minutes)</Form.Label>
                  <Form.Control
                    type="number"
                    value={ayushTracking.meditationMinutes}
                    onChange={(e) => setAyushTracking({
                      ...ayushTracking,
                      meditationMinutes: e.target.value
                    })}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Government Schemes */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Header>
                <h5 className="mb-0">Government Schemes</h5>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Check
                    type="switch"
                    id="pmjdy"
                    label="Pradhan Mantri Jan Dhan Yojana"
                    checked={governmentSchemes.pmjdy}
                    onChange={() => handleGovernmentSchemeToggle('pmjdy')}
                  />
                  <Form.Check
                    type="switch"
                    id="pmmy"
                    label="Pradhan Mantri Matru Vandana Yojana"
                    checked={governmentSchemes.pmmy}
                    onChange={() => handleGovernmentSchemeToggle('pmmy')}
                  />
                  <Form.Check
                    type="switch"
                    id="jsy"
                    label="Janani Suraksha Yojana"
                    checked={governmentSchemes.jsy}
                    onChange={() => handleGovernmentSchemeToggle('jsy')}
                  />
                  <Form.Check
                    type="switch"
                    id="anm"
                    label="ANM Home Visits"
                    checked={governmentSchemes.anm}
                    onChange={() => handleGovernmentSchemeToggle('anm')}
                  />
                  <Form.Check
                    type="switch"
                    id="asha"
                    label="ASHA Worker Support"
                    checked={governmentSchemes.asha}
                    onChange={() => handleGovernmentSchemeToggle('asha')}
                  />
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Regional Health Metrics */}
          <Col md={6} className="mb-4">
            <Card>
              <Card.Header>
                <h5 className="mb-0">Regional Health Metrics</h5>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Air Quality Index</Form.Label>
                  <Form.Control
                    type="text"
                    value={regionalMetrics.airQuality}
                    onChange={(e) => setRegionalMetrics({
                      ...regionalMetrics,
                      airQuality: e.target.value
                    })}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Weather Conditions</Form.Label>
                  <Form.Control
                    type="text"
                    value={regionalMetrics.weather}
                    onChange={(e) => setRegionalMetrics({
                      ...regionalMetrics,
                      weather: e.target.value
                    })}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Local Disease Prevalence</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={regionalMetrics.localDiseasePrevalence.join(', ')}
                    onChange={(e) => setRegionalMetrics({
                      ...regionalMetrics,
                      localDiseasePrevalence: e.target.value.split(', ')
                    })}
                  />
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Health Trends */}
        <Row className="mb-4">
          <Col md={6}>
            <Card>
              <Card.Header>
                <h5 className="mb-0">Weight Trend</h5>
              </Card.Header>
              <Card.Body>
                <Line data={weightData} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>
                <h5 className="mb-0">Blood Pressure Trend</h5>
              </Card.Header>
              <Card.Body>
                <Line data={bpData} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Medications and Symptoms */}
        <Row>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Header>
                <h5 className="mb-0"><FaSyringe /> Medications</h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleMedicationAdd}>
                  <Form.Group className="mb-3">
                    <Form.Label>Medication Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={newMedication.name}
                      onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
                    />
                  </Form.Group>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Dosage</Form.Label>
                        <Form.Control
                          type="text"
                          value={newMedication.dosage}
                          onChange={(e) => setNewMedication({ ...newMedication, dosage: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Frequency</Form.Label>
                        <Form.Control
                          type="text"
                          value={newMedication.frequency}
                          onChange={(e) => setNewMedication({ ...newMedication, frequency: e.target.value })}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" type="submit">Add Medication</Button>
                </Form>

                <Table className="mt-3">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Dosage</th>
                      <th>Frequency</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {medications.map((med) => (
                      <tr key={med.id}>
                        <td>{med.name}</td>
                        <td>{med.dosage}</td>
                        <td>{med.frequency}</td>
                        <td>
                          <Button variant="outline-danger" size="sm">Remove</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card>
              <Card.Header>
                <h5 className="mb-0"><FaNotesMedical /> Symptoms</h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSymptomAdd}>
                  <Form.Group className="mb-3">
                    <Form.Label>Symptom Type</Form.Label>
                    <Form.Control
                      type="text"
                      value={newSymptom.type}
                      onChange={(e) => setNewSymptom({ ...newSymptom, type: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Severity</Form.Label>
                    <Form.Select
                      value={newSymptom.severity}
                      onChange={(e) => setNewSymptom({ ...newSymptom, severity: e.target.value })}
                    >
                      <option value="mild">Mild</option>
                      <option value="moderate">Moderate</option>
                      <option value="severe">Severe</option>
                    </Form.Select>
                  </Form.Group>
                  <Button variant="primary" type="submit">Add Symptom</Button>
                </Form>

                <Table className="mt-3">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Severity</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {symptoms.map((symptom) => (
                      <tr key={symptom.id}>
                        <td>{symptom.type}</td>
                        <td>
                          <Badge bg={
                            symptom.severity === 'mild' ? 'success' :
                            symptom.severity === 'moderate' ? 'warning' : 'danger'
                          }>
                            {symptom.severity}
                          </Badge>
                        </td>
                        <td>{new Date(symptom.date).toLocaleDateString()}</td>
                        <td>
                          <Button variant="outline-danger" size="sm">Remove</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HealthTracking; 