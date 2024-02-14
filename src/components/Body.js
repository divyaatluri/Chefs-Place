import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import "./Body.css";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();

      setListOfRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    fetchData();
  }, []);
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
