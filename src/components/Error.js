import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops some thing went wrong!</h1>
    </div>
  );
};

export default Error;
