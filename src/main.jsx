import React from "react";
import ReactDOM from "react-dom/client";
import {Router, RouterProvider } from "react-router-dom";
import "./index.css";
import { routes } from "./core/router/index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
