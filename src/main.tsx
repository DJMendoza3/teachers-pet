import React from "react";
import ReactDOM from "react-dom/client";
import Container from "layout/container/Container";
import Navbar from "layout/navbar/Navbar";
import Setup from "utils/setup/Setup";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "redux/store";
import "./index.css";

import Main from "layout/main/Main";
import TestDisplay from "pages/generator/TestDisplay";
import Credentials from "pages/credentials/Credentials";
import Form from "lib/ezforms-react/Form";

import { LoginForm, RegisterForm } from "lib/ezforms-react/forms";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Container setup={<Setup />}>
        <Outlet />
      </Container>
    ),
    children: [
      {
        path: "/",
        element: <p>Home</p>,
      },
      {
        path: "/credentials",
        element: <Credentials />,
        children: [
          {
            path: "",
            element: <Form form={LoginForm} />,
          },
          {
            path: "register",
            element: <Form form={RegisterForm} />,
          },
        ],
      },
      {
        path: "/portal",
        element: (
          <>
            <Navbar />
            <Main>
              <Outlet />
            </Main>
          </>
        ),
        children: [
          {
            path: "",
            element: <p>Portal</p>,
          },
          {
            path: "generator",
            element: <Outlet />,
            children: [
              {
                path: "",
                element: <p>Test Form</p>,
              },
              {
                path: "test-display",
                element: <TestDisplay />,
              }
            ]
          },
          {
            path: "tests",
            element: <p>Tests</p>,
          },
          {
            path: "profile",
            element: <p>Profile</p>,
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
