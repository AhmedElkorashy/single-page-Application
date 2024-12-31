/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  
  let pages = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={pages}></RouterProvider>;
}

export default App;
