import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./layout/container/Container";
import Navbar from "./layout/navbar/Navbar";
import Setup from "./utils/setup/Setup";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Container setup={<Setup />}>
        <Navbar />
        <h1>Teacher's Pet</h1>
      </Container>
    </Provider>
  </React.StrictMode>
);
