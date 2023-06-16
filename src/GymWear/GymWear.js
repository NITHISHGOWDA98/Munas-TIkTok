import React from "react";
import "./gymwear.css";
import { Header } from "../MainPage/Header";
import { SideBar } from "./SideBar";

export const GymWear = () => {
  const clothingList1 = [
    {
      id: 1,
      name: "Nike Dri-FIT Men's Training T-Shirt",
      price: "700",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ab0abdd-4cc2-47f5-883e-eb4a902c7068/dri-fit-mens-training-t-shirt-ZMzCRw.png"
    },
    {
      id: 2,
      name: "Nike Pro Men's Training Shorts",
      price: "705",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-2ad24be7-f94e-49d0-8f4a-aa39a15fae36/pro-mens-training-shorts-v2CKMc.png"
    },
    {
      id: 3,
      name: "Nike Dri-FIT Men's Training T-Shirt",
      price: "700",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ab0abdd-4cc2-47f5-883e-eb4a902c7068/dri-fit-mens-training-t-shirt-ZMzCRw.png"
    },
    {
      id: 4,
      name: "Nike Pro Men's Training Shorts",
      price: "705",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-2ad24be7-f94e-49d0-8f4a-aa39a15fae36/pro-mens-training-shorts-v2CKMc.png"
    },
    // Add more clothing objects as needed
  ];
  const clothingList2 = [
    {
      id: 1,
      name: "Nike Dri-FIT Men's Training T-Shirt",
      price: "7000",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ab0abdd-4cc2-47f5-883e-eb4a902c7068/dri-fit-mens-training-t-shirt-ZMzCRw.png"
    },
    {
      id: 2,
      name: "Nike Pro Men's Training Shorts",
      price: "705",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-2ad24be7-f94e-49d0-8f4a-aa39a15fae36/pro-mens-training-shorts-v2CKMc.png"
    },
    {
      id: 3,
      name: "Nike Dri-FIT Men's Training T-Shirt",
      price: "700",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ab0abdd-4cc2-47f5-883e-eb4a902c7068/dri-fit-mens-training-t-shirt-ZMzCRw.png"
    },
    {
      id: 4,
      name: "Nike Pro Men's Training Shorts",
      price: "705",
      imageUrl:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-2ad24be7-f94e-49d0-8f4a-aa39a15fae36/pro-mens-training-shorts-v2CKMc.png"
    },
  ]


  return (
    <div>
      <Header />

      <div className="gymwear">
        <SideBar />
        <div className="gymwearcontentobjects"> 
        <div className="gymwearcontent">
          {clothingList1.map((item) => (
            <div className="product-card product-grid__card  css-1xl2eyj" >
            <div key={item.id} className="clothing-item">
              <img src={item.imageUrl} alt={item.name} className="clothing-image" />
              <div className="clothing-details">
                <h3 className="clothing-name">{item.name}</h3>
                <p className="clothing-price">{item.price}</p>
              </div>
            </div>
            </div>
          ))}
        </div>

        <div className="gymwearcontent1">
          {clothingList2.map((item) => (
            <div className="product-card product-grid__card  css-1xl2eyj" >
            <div key={item.id} className="clothing-item">
              <img src={item.imageUrl} alt={item.name} className="clothing-image" />
              <div className="clothing-details">
                <h3 className="clothing-name">{item.name}</h3>
                <p className="clothing-price">{item.price}</p>
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
