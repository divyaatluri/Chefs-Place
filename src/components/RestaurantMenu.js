import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);
  const { resId } = useParams();
  //.log(resId);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(RES_MENU_API + resId);
      const json = await data.json();
      setResData(json.data);
    };
    fetchData();
  }, []);

  if (resData === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resData?.cards[2]?.card?.card?.info || [];

  const itemCards =
    resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards || [];

  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMessage}</p>
      <h2>Recommended Menu</h2>
      {itemCards.map((item) => (
        <li key={item.card.info.id}>
          {item.card.info.name} - Rs {item.card.info.price / 100}
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
