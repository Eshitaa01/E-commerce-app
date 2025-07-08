// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './backgroundImage.jpeg'; // ✅ correct import

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ ...styles.hero, backgroundImage: `url(${backgroundImage})` }}> {/* ✅ applied here */}
      <div style={styles.overlay}>
        <div style={styles.container}>
          <h1 style={styles.heading}>
            Welcome to <span style={styles.brand}>FitWear</span> 👕
          </h1>
          <p style={styles.subtext}>
            Your one-stop shop for trendy clothes and stylish accessories.
          </p>
          <button style={styles.cta} onClick={() => navigate('/products')}>
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    textAlign: 'center',
    maxWidth: '700px',
    padding: '3rem',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2.8rem',
    marginBottom: '1rem',
    color: '#000',
  },
  brand: {
    color: '#000',
  },
  subtext: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    color: '#222',
  },
  cta: {
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Home;
