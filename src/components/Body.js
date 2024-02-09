import React from "react";
import Restaurant from "./Restaurant";
import "./Body.css";
import { restaurants } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurants.map((restaurant) => {
          return <Restaurant key={restaurant.info.id} resData={restaurant} />;
        })}
        <Restaurant />
      </div>
    </div>
  );
};

export default Body;
