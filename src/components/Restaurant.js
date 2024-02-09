import React from "react";
import "./Restaurant.css";
import { RES_IMG } from "../utils/constants";

const Restaurant = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "LightGray" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_IMG + props.resData?.info?.cloudinaryImageId}
      />
      <h3>{props.resData?.info?.name}</h3>
      <h4>{props.resData?.info?.cuisines.join(", ")}</h4>
      <h4>{props.resData?.info?.avgRating}</h4>
      <h4>{props.resData?.info?.costForTwo}</h4>
    </div>
  );
};

export default Restaurant;
