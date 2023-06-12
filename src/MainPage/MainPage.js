import React from 'react';
import landingImage from '../assets/landing.jpg';
import './mainpage.css';

function MainPage() {
  return (
    <div className=" MainPage">
      <h1>Image Demo</h1>
      <img src={landingImage} alt="Demo " className="responsive-image" />
    </div>
  );
}

export default MainPage;
