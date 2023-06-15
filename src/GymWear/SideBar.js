import React from "react";
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
  );


};
