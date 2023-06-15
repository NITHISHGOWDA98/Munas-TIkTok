import React from "react";
import "./header.css";
import Logo from '../assets/logo2.png';
import {  useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="mainheader">
      <div className="headercontent">
      <img src={Logo} alt="Demo " className="logo" />
        <h1 onClick={()=> navigate("/")}>
          Munas TikTok
        </h1>
      </div>
    </div>
  );
};
