import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ErrorAlert from '../../components/ErrorAlert';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate('/recipes');
    } catch (err: any) {
      setError(err?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: 480 }}>
      <div className="form-card">
        <h2 className="mb-3">Login</h2>
        <p className="text-muted mb-4">Access your saved favorites and share recipes.</p>
        {error && <ErrorAlert message={error} onClose={() => setError(null)} />}
        <form onSubmit={handleSubmit} className="d-grid gap-3">
          <div>
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p className="mt-2 mb-0 text-muted">
            No account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
