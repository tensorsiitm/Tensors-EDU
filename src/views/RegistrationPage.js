import React, { useState, useEffect } from 'react';
import '../css/EduRegistration.css';
import Top from '../components/NavComponent';
import Footer from '../components/FooterComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import brochure from '../assets/Tensors Keam 2026 Brochure.pdf';
import eduportLogo from '../assets/eduport.png';


const RegistrationPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    schoolOrCollege: '',
    targetExam: 'KEAM 2026',
    city: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, error: '', success: false });
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: false });
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/edu/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Something went wrong');
      setStatus({ loading: false, error: '', success: true });
      setFormData({ name: '', email: '', phone: '', schoolOrCollege: '', targetExam: 'KEAM 2026', city: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, error: err.message, success: false });
    }
  };

  return (
    <div className="edu-reg-page-wrap">
      <Top />
      
      <div className="edu-registration-container">
        <div className="edu-reg-layout" data-aos="fade-up">
          {/* Left Panel: Info & Highlights */}
          <div className="edu-reg-info-panel">
            <div className="reg-info-content">
              <div className="powered-by-box">
                <span className="powered-by-text">Powered By</span>
                <img src={eduportLogo} alt="Eduport" className="powered-by-logo" />
              </div>
              <span className="info-badge">KEAM 2026 MOCK TEST</span>
              <h1>Take the First Step to <br /><span>Engineering Excellence!</span></h1>
              <p>Experience the most realistic KEAM simulation designed by senior IIT Madras students. Test your limits before the real deal.</p>
              
              <div className="reg-highlights">
                <div className="highlight-item">
                  <div className="h-icon"><i className="fa fa-superscript" /></div>
                  <div className="h-text">
                    <h4>Exact Pattern</h4>
                    <p>Mathematics, Physics & Chemistry as per 2026 KEAM standards.</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="h-icon"><i className="fa fa-line-chart" /></div>
                  <div className="h-text">
                    <h4>Detailed Analytics</h4>
                    <p>Get performance insights and state-level ranking after completion.</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="h-icon"><i className="fa fa-trophy" /></div>
                  <div className="h-text">
                    <h4>IITM Mentorship</h4>
                    <p>Top performers get direct counseling from IIT Madras seniors.</p>
                  </div>
                </div>
              </div>

              <div className="reg-footer-stats">
                  <div className="reg-stat">
                    <strong>150</strong>
                    <span>MCQs</span>
                  </div>
                  <div className="reg-stat">
                    <strong>180</strong>
                    <span>MINUTES</span>
                  </div>
                  <div className="reg-stat">
                    <strong>600</strong>
                    <span>MARKS</span>
                  </div>
              </div>
            </div>
          </div>

          {/* Right Panel: The Form Card */}
          <div className="edu-reg-form-panel">
            <div className="edu-registration-box">
              <div className="edu-registration-header">
                <h2>Registration Form</h2>
                <p>Register today to receive your test login credentials.</p>
              </div>

              {status.success && (
                <div className="edu-alert edu-alert-success">
                  <i className="fa fa-check-circle" /> Registration successful! Check your email for next steps.
                </div>
              )}
              {status.error && (
                <div className="edu-alert edu-alert-error">
                  <i className="fa fa-exclamation-triangle" /> {status.error}
                </div>
              )}

              <form className="edu-reg-form" onSubmit={handleSubmit}>
                <div className="edu-form-row">
                  <div className="edu-form-group">
                    <label><i className="fa fa-user" /> Full Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Student's Name" />
                  </div>
                  <div className="edu-form-group">
                    <label><i className="fa fa-phone" /> Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="10-digit mobile" />
                  </div>
                </div>

                <div className="edu-form-group">
                  <label><i className="fa fa-envelope" /> Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Eg: student@example.com" />
                </div>

                <div className="edu-form-group">
                  <label><i className="fa fa-university" /> School / Coaching Institute</label>
                  <input type="text" name="schoolOrCollege" value={formData.schoolOrCollege} onChange={handleChange} required placeholder="Your institution name" />
                </div>

                <div className="edu-form-row">
                  <div className="edu-form-group">
                    <label><i className="fa fa-map-marker" /> City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder="E.g., Kochi" />
                  </div>
                  <div className="edu-form-group">
                    <label><i className="fa fa-file-text-o" /> Target Exam</label>
                    <input type="text" name="targetExam" value="KEAM 2026" readOnly disabled className="locked-input" />
                  </div>
                </div>

                <div className="edu-form-group terms-group">
                  <label className="checkbox-container">
                    <input 
                      type="checkbox" 
                      checked={agreed} 
                      onChange={(e) => setAgreed(e.target.checked)} 
                    />
                    <span className="checkmark"></span>
                    <span className="terms-text">
                      I agree to the <a href={brochure} target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
                    </span>
                  </label>
                </div>

                <button type="submit" className="edu-premium-btn" disabled={status.loading || !agreed}>
                  {status.loading ? <span>Processing... <i className="fa fa-spinner fa-spin" /></span> : <span>Complete Registration <i className="fa fa-arrow-right" /></span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegistrationPage;
