import React from "react";
import './deliveryitems.css'
const DeliveryItems = ({ item }) => {
  return (
    <div >
      <div className="delivery-item-cover" >
        <img src={item.cover} alt="nothing" className="delivery-img-cover" />
      </div>
      <div className="delivery-item-title">{item.title}</div>
    </div>
  );
};

export default DeliveryItems;
