import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/EduRegistration.css';

const AdminDashboardPage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRegistrations = async () => {
      const token = localStorage.getItem('edu_admin_token');
      if (!token) {
        navigate('/tensorskeamadmin');
        return;
      }

      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/edu/admin/registrations`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Failed to fetch');
        setRegistrations(data.data || []);
      } catch (err) {
        setError(err.message);
        if (err.message.includes('Unauthorized')) {
          localStorage.removeItem('edu_admin_token');
          navigate('/tensorskeamadmin');
        }
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

  const exportToCSV = () => {
    if (registrations.length === 0) return;

    // Headers
    const headers = ["ID", "Name", "Email", "Phone", "Institute", "Exam", "City", "Message", "Date"];
    
    // Rows
    const rows = registrations.map(reg => [
      reg.id,
      `"${reg.name.replace(/"/g, '""')}"`,
      reg.email,
      reg.phone,
      `"${(reg.schoolOrCollege || "").replace(/"/g, '""')}"`,
      reg.targetExam,
      reg.city,
      `"${(reg.message || "").replace(/"/g, '""')}"`,
      new Date(reg.createdAt).toLocaleDateString()
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(e => e.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `KEAM_Registrations_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <div>
          <h2 style={{ margin: 0, color: '#0F6C7A' }}>Admin Dashboard</h2>
          <p style={{ margin: '5px 0 0 0', color: '#666' }}>Total Registrations: <strong>{registrations.length}</strong></p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={exportToCSV} 
            className="edu-premium-btn" 
            style={{ width: 'auto', padding: '10px 20px', marginTop: 0, background: '#28a745', fontSize: '14px' }}
          >
            <i className="fa fa-file-excel-o" /> Download Excel
          </button>
          <button 
            onClick={handleLogout} 
            className="edu-premium-btn" 
            style={{ width: 'auto', padding: '10px 20px', marginTop: 0, background: '#dc3545', fontSize: '14px' }}
          >
            <i className="fa fa-sign-out" /> Logout
          </button>
        </div>
      </div>

      {error && <div className="edu-alert edu-alert-error">{error}</div>}

      {loading ? (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <i className="fa fa-spinner fa-spin" style={{ fontSize: '30px', color: '#0F6C7A' }} />
            <p>Loading registrations...</p>
        </div>
      ) : (
        <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={tableStyle}>
                <thead>
                <tr style={{ background: '#f8fbfb' }}>
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
                    <td colSpan="7" style={{ padding: '40px', textAlign: 'center', color: '#999' }}>No registrations found yet.</td>
                    </tr>
                ) : (
                    registrations.map(reg => (
                    <tr key={reg.id} style={{ transition: 'background 0.2s' }}>
                        <td style={tdStyle}>{new Date(reg.createdAt).toLocaleDateString()}</td>
                        <td style={tdStyle}><strong>{reg.name}</strong></td>
                        <td style={tdStyle}>{reg.email}</td>
                        <td style={tdStyle}>{reg.phone}</td>
                        <td style={tdStyle}>{reg.schoolOrCollege}</td>
                        <td style={tdStyle}><span style={{ padding: '4px 10px', background: '#e6f7f0', borderRadius: '20px', fontSize: '12px', color: '#1b8a5e', fontWeight: 'bold' }}>{reg.targetExam}</span></td>
                        <td style={tdStyle}>{reg.city}</td>
                    </tr>
                    ))
                )}
                </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardPage;
