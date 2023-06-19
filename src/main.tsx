import React from "react";
import ReactDOM from "react-dom/client";
import Container from "layout/container/Container";
import Navbar from "layout/navbar/Navbar";
import Setup from "utils/setup/Setup";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "redux/store";
import "./index.css";

import LandingPage from "pages/landing/LandingPage";
import Home from "pages/landing/Home";
import Main from "layout/main/Main";
import TestDisplay from "pages/generator/TestDisplay";
import Credentials from "pages/credentials/Credentials";
import Form from "lib/ezforms-react/Form";
import TestCreator from "pages/test/TestCreator";
import UnderConstruction from "pages/underConstruction/UnderConstruction";

import { LoginForm, RegisterForm } from "components/forms/forms";

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
        element: <LandingPage />,
        children: [
          {
            path: "",
            element: <Home />,
          },
        ],
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
                element: <TestCreator />,
              },
              {
                path: "test-display",
                element: <TestDisplay />,
              }
            ]
          },
          {
            path: "grading",
            element: <UnderConstruction />,
          },
          {
            path: "lessons",
            element: <UnderConstruction />,
          },
          {
            path: "documents",
            element: <UnderConstruction />,
          },
          {
            path: "students",
            element: <UnderConstruction />,
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
