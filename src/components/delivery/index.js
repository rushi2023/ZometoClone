import React from "react";
import { restaurants } from "../../data/restorent";
import ExploreSEction from "../common/exploresection";
import Filters from "../common/filters";
import DeliveryCollection from "./deliveryCollection";
import TopBrend from "./topBrend";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters  filtersList={deliveryFilters}/>
      </div>
      <DeliveryCollection/>
      <TopBrend/>
      <ExploreSEction list={restaurants} collectionName='Delivery Restaurants in Ahamdabad'/>
    </div>
  );
};

export default Delivery;
