import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import "./Body.css";
import Shimmer from "./Shimmer";
import { RESTAURANT_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(RESTAURANT_API);
      const jsonData = await data.json();

      setListOfRestaurants(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredList(
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    fetchData();
  }, []);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container">
        <div className="search-container">
          <input
            className="input-search"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const list = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredList(list);
            }}
          >
            Search
          </button>
        </div>
        <div className="btn-container">
          <button
            className="topRated-btn"
            onClick={() => {
              const filteredlistOfRestaurants = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredList(filteredlistOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <Restaurant resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
