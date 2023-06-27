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
      <div className="clothing">
        <div className="option">
          <h2>Clothing</h2>
        </div>
        <div className="option">
          <input type="checkbox" id="tshirts" name="tshirts" />
          <label htmlFor="tshirts">T-shirts</label>
        </div>
        <div className="option">
          <input type="checkbox" id="trousers" name="trousers" />
          <label htmlFor="trousers">Trousers</label>
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
        <div className="option">
          <h2>Size</h2>
        </div>
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
      <div className="option">
          <h2>Price</h2>
        </div>
        <div className="option">
            <input type="checkbox" id="price-below-500" name="price-below-500" />
            <label htmlFor="price-below-500">Below 500</label>
          </div>
          <div className="option">
            <input type="checkbox" id="price-above-1000" name="price-above-1000" />
            <label htmlFor="price-above-1000">Above 1000</label>
          </div>
          <div className="option">
            <input type="checkbox" id="price-above-1500" name="price-above-1500" />
            <label htmlFor="price-above-1500">Above 1500</label>
          </div>
          <div className="option">
            <input type="checkbox" id="price-above-2000" name="price-above-2000" />
            <label htmlFor="price-above-2000">Above 2000</label>
          </div>
        
        </div>


    </div>
  );
};
