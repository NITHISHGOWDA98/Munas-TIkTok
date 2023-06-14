import React from "react";
import "./mainpage.css";
import { Header } from "./Header";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";

function MainPage() {
  return (
    <div className="MainPage">
      <Header />
      <div className="MainPagecontainer">
        <div className="box1">
          <div className="imgd">
            <img src={img1} alt="1" />
          </div>
          <div className="box-description">
            <b>GYM WEAR</b>
          </div>
        </div>
        <div className="box2">
          <div className="imgd">
            <img src={img2} alt="2" />
          </div>
          <div className="box-description">
            <b>SUMMER WEAR</b>
          </div>
        </div>
        <div className="box3">
          <div className="imgd">
            <img src={img3} alt="3" />
          </div>
          <div className="box-description">
            <b>CASUAL WEAR</b>
          </div>
        </div>
        <div className="box4">
          <div className="imgd">
            <img src={img4} alt="4" />
          </div>
          <div className="box-description">
            <b>PARTY WEAR</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
