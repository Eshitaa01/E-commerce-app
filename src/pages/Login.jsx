import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { login, signup, isAuthenticated, logout } = useAuth();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;

    if (!username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    const success = isSignup ? signup(username, password) : login(username, password);
    if (success) {
      navigate('/checkout');
    } else {
      setError(isSignup ? 'Username already exists!' : 'Invalid credentials!');
    }
  };

  return (
    <div style={styles.container}>
      <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>

      {isAuthenticated ? (
        <>
          <p>Welcome, you're already logged in.</p>
          <button onClick={() => { logout(); navigate('/'); }}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button}>
            {isSignup ? 'Sign Up' : 'Login'}
          </button>

          <p>
            {isSignup ? 'Already have an account?' : 'New user?'}{' '}
            <span
              style={styles.link}
              onClick={() => {
                setIsSignup(!isSignup);
                setError('');
              }}
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </span>
          </p>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '3rem',
  },
  form: {
    display: 'inline-block',
    textAlign: 'left',
    maxWidth: '300px',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    fontSize: '1rem',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  link: {
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  error: {
    color: 'red',
    marginBottom: '1rem',
  },
};

export default Login;
