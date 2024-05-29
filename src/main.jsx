import React from "react";
import ReactDOM from "react-dom/client";

import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import Signin from "./Signin";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./backend/store/store";
import MainLayout from "./MainLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Signin />} />
            <Route path="/*" element={<MainLayout />} />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
