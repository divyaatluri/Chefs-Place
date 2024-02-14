import React from "react";
import "./Restaurant.css";
import { RES_IMG } from "../utils/constants";

const Restaurant = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    props.resData?.info || {};
  return (
    <div className="res-card" style={{ backgroundColor: "LightGray" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_IMG + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default Restaurant;
