import ReactDom from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Body from "./components/Body";
import Header from "./components/Header";
import Error from "./components/Error";

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
