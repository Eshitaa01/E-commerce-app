import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  console.log("🔍 id from URL:", id);
  console.log("🔎 product found:", product);
 

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div>
        <h2>{product.name}</h2>
        <p>Price: ₹{product.price}</p>
        <p>{product.description}</p>
        <button style={styles.button} onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
    padding: '2rem',
    flexWrap: 'wrap',
  },
  image: {
    width: '250px',
    borderRadius: '10px',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductDetail;
