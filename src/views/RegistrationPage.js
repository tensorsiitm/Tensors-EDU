import React, { useState } from 'react';
import '../css/EduRegistration.css';
import Top from '../components/NavComponent';
import Footer from '../components/FooterComponent';

const RegistrationPage = () => {
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
    <>
      <Top />
      <div className="edu-registration-container">
        <div className="edu-registration-box">
          <div className="edu-registration-header">
            <h2>Register for KEAM 2026 Mock Test</h2>
            <p>Fill out the form below to secure your spot for the upcoming exam.</p>
          </div>

          {status.success && (
            <div className="edu-alert edu-alert-success">
             Registration successful! We will contact you shortly.
            </div>
          )}
          {status.error && (
            <div className="edu-alert edu-alert-error">
              ❌ {status.error}
            </div>
          )}

          <form className="edu-reg-form" onSubmit={handleSubmit}>
            <div className="edu-form-group">
              <label>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
            </div>

            <div className="edu-form-group">
              <label>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Eg: student@example.com" />
            </div>

            <div className="edu-form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="10-digit mobile number" />
            </div>

            <div className="edu-form-group">
              <label>School / Coaching Institute</label>
              <input type="text" name="schoolOrCollege" value={formData.schoolOrCollege} onChange={handleChange} required placeholder="Current school or coaching institute name" />
            </div>

            <div className="edu-form-group">
              <label>Target Exam</label>
              <input type="text" name="targetExam" value="KEAM 2026" readOnly disabled style={{ backgroundColor: '#e9ecef', cursor: 'not-allowed', color: '#6c757d' }} />
            </div>

            <div className="edu-form-group">
              <label>City</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required placeholder="E.g., Kochi, Trivandrum" />
            </div>

            <div className="edu-form-group">
              <label>Message (Optional)</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any questions or comments?" rows="3"></textarea>
            </div>

            <button type="submit" className="edu-submit-btn" disabled={status.loading}>
              {status.loading ? 'Registering...' : 'Complete Registration'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegistrationPage;
