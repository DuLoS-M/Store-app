import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Test from "./test";
import React from "react";
import BasicStructure from "./components/layout/BasicStructure";
import Home from "./pages/Home/Home";
import Checkout from "./pages/Checkout/Checkout";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BasicStructure />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/checkout", element: <Checkout /> },
      ],
    },
    // {
    //   path: "/checkout",
    //   element: <BasicStructure />,
    //   children []
    // },
  ]);

  return <RouterProvider router={router} />;
}
