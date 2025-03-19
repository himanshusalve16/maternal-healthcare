import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FAQs from './pages/FAQs';
import Testimonials from './pages/Testimonials';
import Donate from './pages/Donate';
import Dashboard from './pages/Dashboard';
import HealthTracking from './pages/HealthTracking';
import EmergencySupport from './pages/EmergencySupport';
import Education from './pages/Education';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/health-tracking" element={<HealthTracking />} />
            <Route path="/emergency-support" element={<EmergencySupport />} />
            <Route path="/education" element={<Education />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
