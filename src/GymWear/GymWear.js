import React from "react";
import "./gymwear.css";
import { Header } from "../MainPage/Header";
import { SideBar } from "./SideBar";

export const GymWear = () => {
  return (
    <div>
      <Header />
     
      <div className="gymwear">
      <SideBar/>
      <div className="gymwearcontent">GymWear</div>
        </div>
    </div>
  );
};
