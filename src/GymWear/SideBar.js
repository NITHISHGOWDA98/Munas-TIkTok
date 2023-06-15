import React from "react";
<<<<<<< HEAD
import "./sidebar.css";
export const SideBar = () => {
  return (
    <>
      <div className="sidebarmaincontent">
        <div className="sidebarheader">
        Filter
        </div>
        
        </div>
    </>
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";

export const SideBar = () => {
  return (
    <div className="sidebarmaincontent">
      <div className="headerfilter">
        <div className="filtericon">
          <FontAwesomeIcon icon={faFilter} />
        </div>
        <div className="filtertext">
          <h2>FILTER</h2>
        </div>
      </div>
      
    </div>
>>>>>>> 79954b9605fb8eb560a7565d2a917d230c8da80b
  );
};
