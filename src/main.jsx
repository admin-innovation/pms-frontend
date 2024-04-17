import React from "react";
import ReactDOM from "react-dom/client";
import AppManagement from "./ManagementApp/AppManagement";
import AppStaff from "./StaffApp/AppStaff";

import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import AppHR from "./HRApp/AppHR";
import Signin from "./Signin";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import store from "./backend/store/store";

let host = window.location.host;
let parts = host.split(".");
let subdomain = parts[0];
// const user =

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>
            <Route
              index
              path="*"
              element={
                subdomain === "management" ? (
                  <AppManagement />
                ) : subdomain === "staff" ? (
                  <AppStaff />
                ) : subdomain === "hod" ? (
                  <AppHod />
                ) : subdomain === "hr" ? (
                  <AppHR />
                ) : (
                  <Signin />
                )
              }
            />
          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>
);
