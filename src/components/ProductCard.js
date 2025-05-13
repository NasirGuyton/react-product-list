import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '15px',
        margin: '10px',
        maxWidth: '300px'
      }}
    >
      <h3>{product.name}</h3>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Units:</strong> {product.units}</p>
      <p><em>{product.description}</em></p>
    </div>
  );
};

export default ProductCard;
