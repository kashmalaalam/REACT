import React from 'react';
import './Home.css';
import img1 from '../Assets/img1.jpeg';
import img2 from '../Assets/img2.jpeg';
import img3 from '../Assets/img3.jpeg';
import img4 from '../Assets/img4.jpeg';
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to CozyCorner</h1>

      <div className="product-slider">
        <div className="slide-item">
          <img src={img1} alt="Shoes" />
          <h3>Fill Your Cart Now!</h3>
        </div>
        <div className="slide-item">
          <img src={img2} alt="Bag" />
          <h3>Wanna Get Trendy Bags At Your DoorStep?</h3>
        </div>
        <div className="slide-item">
          <img src={img3} alt="Watch" />
          <h3>Now Enjoy Discounted Prices!!</h3>
        </div>
        <div className="slide-item">
          <img src={img4} alt="Watch" />
          <h3>All Girl Essentials At Best Prices!!</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
