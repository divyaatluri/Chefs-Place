import React, { useState } from "react";
import Restaurant from "./Restaurant";
import "./Body.css";
import { restaurants } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurants);
  return (
    <div className="body-container">
      <div className="btn-container">
        <button
          className="topRated-btn"
          onClick={() => {
            const filteredlistOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurants(filteredlistOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
          return <Restaurant key={restaurant.info.id} resData={restaurant} />;
        })}
        <Restaurant />
      </div>
    </div>
  );
};

export default Body;
