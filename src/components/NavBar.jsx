import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

function NavBar() {
  const { cart } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const itemCount = cart.reduce((total, item) => total + item.qty, 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>🛍️ FitWear</Link>

      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/products" style={styles.link}>Products</Link>
        <Link to="/checkout" style={styles.cartIcon}>
          🛒
          {itemCount > 0 && <span style={styles.badge}>{itemCount}</span>}
        </Link>

        {isAuthenticated ? (
          <button onClick={handleLogout} style={styles.authButton}>Logout</button>
        ) : (
          <Link to="/login" style={styles.link}>Login</Link>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#111',
    color: '#fff',
    marginBottom: '1rem',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    textDecoration: 'none',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  cartIcon: {
    position: 'relative',
    fontSize: '1.5rem',
    textDecoration: 'none',
    color: '#fff',
  },
  badge: {
    position: 'absolute',
    top: '-8px',
    right: '-10px',
    backgroundColor: 'red',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '0.8rem',
    color: 'white',
  },
  authButton: {
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    padding: '0.4rem 1rem',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '0.9rem',
  },
};

export default NavBar;
