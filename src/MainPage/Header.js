import React from "react";
import "./header.css";
import Logo from '../assets/logo2.png';
export const Header = () => {
  return (
    <div className="mainheader">
      <div className="headercontent">
      <img src={Logo} alt="Demo " className="logo" />
        <h1>
          Munas TikTok
        </h1>
      </div>
    </div>
  );
};
