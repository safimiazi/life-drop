import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import Register from "./Pages/Register/Register.jsx";
import FindBlood from "./Pages/FindBlood/FindBlood.jsx";
import Login from "./Pages/Login/Login.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

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

        path: '/register',
        element: <Register></Register>
      },
    {

        path: "/find-blood",
        element: <FindBlood></FindBlood>,
      },
      {

        path: "/login",
        element: <Login />
      },
      {
        path: "/profile",
        element: <Profile />,
 
      },

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
