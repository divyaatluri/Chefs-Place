import ReactDOM from "react-dom";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AboutUs from "./components/AboutUs";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
]);

ReactDOM.render(
  <RouterProvider router={appRouter} />,
  document.getElementById("root")
);
