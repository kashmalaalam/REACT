import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';

const ProductList = ({ products, onViewDetail }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item" onClick={() => onViewDetail(product)}>
          <img src={product.imgSrc} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onViewDetail: PropTypes.func.isRequired,
};

export default ProductList;
