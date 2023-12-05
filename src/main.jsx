import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import FindBlood from "./Pages/FindBlood/FindBlood.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/find-blood',
        element:<FindBlood></FindBlood>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <MainLayout />
    </RouterProvider>
  </React.StrictMode>
);
