import React from 'react';
import './Cart.css';
import { FaShoppingBag } from 'react-icons/fa';

const Cart = ({ items, onRemove }) => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <FaShoppingBag className="cart-icon" />
        <h2>Your Sack</h2>
      </div>
      <ul className="cart-items">
        {items.length === 0 ? (
          <p className="empty-cart">Your sack is empty!</p>
        ) : (
          items.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.imgSrc} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button onClick={() => onRemove(item)} className="remove-btn">Remove</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
