// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { useTheme } from './context/ThemeContext';
import { useAuth } from './context/AuthContext';
import NavBar from './components/NavBar';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { login, logout, isAuthenticated } = useAuth();

  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#121212',
    color: theme === 'light' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '1rem',
  };

  return (
    <Router>
      <div style={appStyle}>
        <NavBar />
        
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        {/* Optional Login/Logout button */}
        <button onClick={isAuthenticated ? logout : login}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
