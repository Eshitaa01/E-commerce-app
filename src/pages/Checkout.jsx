import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

function Checkout() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const gst = parseFloat((subtotal * 0.18).toFixed(2));
  const delivery = subtotal > 0 ? 50 : 0;
  const discount = subtotal > 1000 ? 100 : 0;
  const total = subtotal + gst + delivery - discount;

  const handleOrder = () => {
    if (!address || !phone) {
      setError('Please enter shipping address and phone number.');
      return;
    }
    alert(`✅ Order placed successfully!\n\nTotal: ₹${total}`);
    clearCart();
    setAddress('');
    setPhone('');
    setError('');
  };

  if (cart.length === 0) {
    return <h2 style={{ padding: '2rem' }}>🛒 Your cart is empty.</h2>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h2>🧾 Your Items</h2>
        {cart.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price} × {item.qty}</p>
              <p><strong>Subtotal:</strong> ₹{item.price * item.qty}</p>
              <button style={styles.remove} onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.right}>
        <h3>📦 Shipping Info</h3>
        <input
          type="text"
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.input}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
        />

        <h3>💳 Bill Summary</h3>
        <p>Subtotal: ₹{subtotal}</p>
        <p>GST (18%): ₹{gst}</p>
        <p>Delivery Charges: ₹{delivery}</p>
        {discount > 0 && <p style={{ color: 'green' }}>Discount: ₹{discount}</p>}
        <h3>Total Payable: ₹{total}</h3>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button style={styles.placeOrder} onClick={handleOrder}>
          Place Order
        </button>
        <button style={styles.cancelOrder} onClick={() => {
            if (window.confirm('Are you sure you want to cancel the order?')) {
                clearCart();
                setAddress('');
                setPhone('');
                setError('');
                alert('❌ Order canceled.');
            }
        }}>
         Cancel Order
        </button>

      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '2rem',
    padding: '2rem',
    flexWrap: 'wrap',
  },
  left: {
    flex: 2,
    minWidth: '300px',
  },
  right: {
    flex: 1,
    minWidth: '300px',
    backgroundColor: '#f8f9fa',
    padding: '1.5rem',
    borderRadius: '8px',
  },
  card: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#f5f5f5',
    padding: '1rem',
    borderRadius: '8px',
  },
  image: {
    width: '100px',
    borderRadius: '6px',
  },
  input: {
    width: '100%',
    padding: '0.6rem',
    marginBottom: '1rem',
    fontSize: '1rem',
  },
  remove: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  placeOrder: {
    marginTop: '1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    width: '100%',
  },
  cancelOrder: {
  marginTop: '1rem',
  backgroundColor: '#6c757d',
  color: '#fff',
  border: 'none',
  padding: '0.75rem 1.5rem',
  fontSize: '1rem',
  borderRadius: '6px',
  cursor: 'pointer',
  width: '100%',
 },
};

export default Checkout;
