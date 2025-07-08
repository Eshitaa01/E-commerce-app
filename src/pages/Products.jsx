import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products';

function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = productsData.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h2>All Products</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '300px' }}
      />
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default Products;
