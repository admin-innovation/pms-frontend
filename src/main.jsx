import React from "react";
import ReactDOM from "react-dom/client";
import AppManagement from "./ManagementApp/AppManagement";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";

let host = window.location.host;
let parts = host.split(".");
let subdomain = parts[0];
console.log(parts);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      {subdomain === "management" ? (
        <AppManagement />
      ) : (
        "what are you looking for?redirect to login"
      )}
      {subdomain === "hr" ?(
        <AppManagement />) : (
        "Vem uses too much foul language : 404"
      )}
    </NextUIProvider>
  </React.StrictMode>
);
