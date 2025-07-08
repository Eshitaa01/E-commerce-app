import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e) => {
    e.preventDefault(); // Prevent link navigation if clicking the button
    setIsLiked(!isLiked);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <h3>{product.name}</h3>
        <p>Price: ₹{product.price}</p>
        <p style={styles.desc}>{product.description}</p>
        <button onClick={toggleLike}>
          {isLiked ? 'Liked ❤️' : 'Like 🤍'}
        </button>
      </div>
    </Link>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    margin: '1rem',
    borderRadius: '8px',
    width: '200px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '0.5rem',
  },
  desc: {
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: '0.5rem',
  },
};

export default ProductCard;
