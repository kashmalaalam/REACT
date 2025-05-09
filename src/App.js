import React, { useState } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import logo from './Assets/logo.png';
import shoesImg from './Assets/shoes.jpeg';
import bagImg from './Assets/bag.jpeg';
import watchImg from './Assets/watch.jpeg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Contact from './Components/Contact';
import Home from './Components/Home';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: 'Women Shoes', price: 100, imgSrc: shoesImg, description: "Elegant & comfy." },
    { id: 2, name: 'Hand Bags', price: 150, imgSrc: bagImg, description: "Stylish leather bag." },
    { id: 3, name: 'Smart Watches', price: 200, imgSrc: watchImg, description: "Tech meets fashion." },
  ];

  const addToCart = (product) => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);
    if (!alreadyInCart) {
      setCartItems((prev) => [...prev, product]);
    } else {
      alert("Item already in cart!");
    }
    setSelectedProduct(null); // Close popup
  };

  const removeFromCart = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img src={logo} alt="ShopCraft Logo" className="logo" />
        <h1>CozyCorner</h1>
      </header>
      <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<ProductList products={products} onViewDetail={setSelectedProduct} />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>

  <Cart items={cartItems} onRemove={removeFromCart} />  {/* <-- This will make it visible on every page */}

  {selectedProduct && (
    <div className="popup-overlay" onClick={() => setSelectedProduct(null)}>
      <div className="popup-window" onClick={(e) => e.stopPropagation()}>
        <img src={selectedProduct.imgSrc} alt={selectedProduct.name} className="popup-image" />
        <h2>{selectedProduct.name}</h2>
        <p className="popup-description">{selectedProduct.description}</p>
        <p className="popup-price">${selectedProduct.price}</p>
        <button className="popup-add" onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
        <button className="popup-close" onClick={() => setSelectedProduct(null)}>X</button>
      </div>
    </div>
  )}
</Router>

    </div>
  );
};

export default App;
