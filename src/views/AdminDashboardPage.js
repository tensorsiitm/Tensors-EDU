import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/EduRegistration.css';

const AdminDashboardPage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('edu_admin_token');
    if (!token) {
      navigate('/tensorskeamadmin');
      return;
    }

    const fetchRegistrations = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/edu/admin/registrations`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await response.json();
        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem('edu_admin_token');
            navigate('/tensorskeamadmin');
            return;
          }
          throw new Error(data.message || 'Failed to fetch registrations');
        }
        setRegistrations(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('edu_admin_token');
    navigate('/tensorskeamadmin');
  };

  const dashboardStyle = {
    padding: '40px',
    background: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: "'Josefin Sans', sans-serif"
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    background: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden'
  };

  const thStyle = {
    background: '#28a745',
    color: '#fff',
    padding: '15px',
    textAlign: 'left'
  };

  const tdStyle = {
    padding: '15px',
    borderBottom: '1px solid #eee'
  };

  return (
    <div style={dashboardStyle}>
      <div style={headerStyle}>
        <h2>Admin Dashboard - Registrations</h2>
        <button onClick={handleLogout} className="edu-submit-btn" style={{ width: 'auto', padding: '10px 20px', marginTop: 0 }}>
          Logout
        </button>
      </div>

      {error && <div className="edu-alert edu-alert-error">{error}</div>}

      {loading ? (
        <p>Loading registrations...</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Email</th>
                <th style={thStyle}>Phone</th>
                <th style={thStyle}>School/College</th>
                <th style={thStyle}>Target Exam</th>
                <th style={thStyle}>City</th>
              </tr>
            </thead>
            <tbody>
              {registrations.length === 0 ? (
                <tr>
                  <td colSpan="7" style={{ padding: '20px', textAlign: 'center' }}>No registrations found.</td>
                </tr>
              ) : (
                registrations.map(reg => (
                  <tr key={reg.id}>
                    <td style={tdStyle}>{new Date(reg.createdAt).toLocaleDateString()}</td>
                    <td style={tdStyle}>{reg.name}</td>
                    <td style={tdStyle}>{reg.email}</td>
                    <td style={tdStyle}>{reg.phone}</td>
                    <td style={tdStyle}>{reg.schoolOrCollege}</td>
                    <td style={tdStyle}>{reg.targetExam}</td>
                    <td style={tdStyle}>{reg.city}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;
