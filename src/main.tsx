import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./layout/container/Container";
import Navbar from "./layout/navbar/Navbar";
import Setup from "./utils/setup/Setup";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container setup={<Setup />}>
      <Navbar />
      <Outlet />
    </Container>,
    children: [
      {
        path: "/",
        element: <h1>Teacher's Pet</h1>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
