import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css";

export const SideBar = () => {
  return (
    <>
    <div className="sidebarmaincontent">
      <div className="headerfilter">
        <div className="filtericon">
          <FontAwesomeIcon icon={faFilter} />
        </div>
        <div className="filtertext">
          <h2>FILTER</h2>
        </div>
      </div>
      <div className="options">
        <div className="option">
          <input type="checkbox" id="tshirts" name="tshirts" />
          <label htmlFor="tshirts">T-shirts</label>
        </div>
        <div className="option">
          <input type="checkbox" id="trousers" name="trousers" />
          <label htmlFor="trousers">Trousers and Tights</label>
        </div>
        <div className="option">
          <input type="checkbox" id="tracksuits" name="tracksuits" />
          <label htmlFor="tracksuits">Track-suits</label>
        </div>
        <div className="option">
          <input type="checkbox" id="shorts" name="shorts" />
          <label htmlFor="shorts">Shorts</label>
        </div>
      </div>
      <div className="size">
        <h2>Size</h2>
        <div className="option">
          <input type="checkbox" id="size-s" name="size-s" />
          <label htmlFor="size-s">Small</label>
        </div>
        <div className="option">
          <input type="checkbox" id="size-m" name="size-m" />
          <label htmlFor="size-m">Medium</label>
        </div>
        <div className="option">
          <input type="checkbox" id="size-l" name="size-l" />
          <label htmlFor="size-l">Large</label>
        </div>
        <div className="option">
          <input type="checkbox" id="size-xl" name="size-xl" />
          <label htmlFor="size-xl">Extra Large</label>
        </div>
      </div>
      <div className="price">
        <h2>Price</h2>
        </div>
    </div>
    </>
  );
};
