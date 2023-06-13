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
      <div className=" MainPagecontainer">
        <div className="box1">
          <img src={img1} alt="1" />
          {/* <div className="desc">
            <h1>GYM WEAR</h1>
          </div> */}
        </div>
        <div className="box2">
          <img src={img2} alt="1" />
        </div>
        <div className="box3">
          <img src={img3} alt="1" />
        </div>
        <div className="box4">
          <img src={img4} alt="1" />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
