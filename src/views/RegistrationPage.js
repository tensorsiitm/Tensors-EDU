import React, { useEffect } from 'react';
import '../css/EduRegistration.css';
import Top from '../components/NavComponent';
import Footer from '../components/FooterComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RegistrationPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="edu-reg-page-wrap">
      <Top />
      
      <div className="edu-registration-container">
        <div className="edu-reg-layout" data-aos="fade-up" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4rem 2rem' }}>
          <div style={{ textAlign: 'center', background: '#ffffff', padding: '4rem 2rem', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', maxWidth: '600px', width: '100%' }}>
            <div style={{ fontSize: '4rem', color: '#059669', marginBottom: '1.5rem' }}><i className="fa fa-lock" /></div>
            <h1 style={{ fontSize: '2.5rem', color: '#111827', fontWeight: '800', marginBottom: '1rem', fontFamily: 'Inter, sans-serif' }}>Registration Full / Closed</h1>
            <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: '1.6' }}>
              Thank you for the incredible response! Registrations for the upcoming KEAM 2026 Mock Test are now officially closed as we have reached max capacity.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a href="/" style={{ display: 'inline-block', background: '#059669', color: '#fff', padding: '0.75rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '600', transition: 'background 0.3s' }}>
                Return to Homepage
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegistrationPage;
