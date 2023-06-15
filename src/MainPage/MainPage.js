import React from "react";
import "./mainpage.css";
import { BrowserRouter as Router, Switch, Route, Link, Navigate } from "react-router-dom";
import { Header } from "./Header";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";

import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="MainPage">
      <Header />
      <div className="MainPagecontainer">
        <div className="box1">
          <div className="imgd">
            <img src={img1} alt="1" onClick={() => navigate("/gymwear")} />
            <div className="image-description">GYM WEAR</div>
          </div>
        </div>
        <div className="box2">
          <div className="imgd">
            <img src={img2} alt="2" />
            <div className="image-description">SUMMER WEAR</div>
          </div>
        </div>
        <div className="box3">
          <div className="imgd">
            <img src={img3} alt="3" />
            <div className="image-description">CASUAL WEAR</div>
          </div>
        </div>
        <div className="box4">
          <div className="imgd">
            <img src={img4} alt="4" />
            <div className="image-description">PARTY WEAR</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
