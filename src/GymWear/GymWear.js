
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./gymwear.css";
import { Header } from "../MainPage/Header";
import { SideBar } from "./SideBar";

export const GymWear = () => {
  const [clothingList, setClothingList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/users") // Replace with your API endpoint
      .then((response) => setClothingList(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="gymwear">
        <Header />

        <div className="gymwearcontentobjects">
          <SideBar />

          <div className="gymwearcontent">
            
            {clothingList.map((item) => (
              <div
                className="product-card product-grid__card  css-1xl2eyj"
                key={item.id}
              >
                <div className="clothing-item">
                  <img
                    src={item.username}
                    alt={item.name}
                    className="clothing-image"
                  />
                  <div className="clothing-details">
                    <h3 className="clothing-name">{item.name}</h3>
                    <p className="clothing-price">{item.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

