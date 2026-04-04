import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/EduRegistration.css';

const AdminLoginPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/edu/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Login failed');
      
      localStorage.setItem('edu_admin_token', data.token);
      navigate('/tensorskeamadmin/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edu-registration-container" style={{ minHeight: '100vh' }}>
      <div className="edu-registration-box" style={{ maxWidth: '400px' }}>
        <div className="edu-registration-header">
          <h2>Admin Login</h2>
          <p>Enter the admin password to access registrations</p>
        </div>

        {error && <div className="edu-alert edu-alert-error">{error}</div>}

        <form className="edu-reg-form" onSubmit={handleLogin}>
          <div className="edu-form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter password" 
            />
          </div>
          <button type="submit" className="edu-submit-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
