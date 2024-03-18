import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Analytics from "./pages/Analytics";
import Error from "./pages/Error";
import Goals from "./pages/Goals";
import Signin from "./pages/Signin";
import Department from "./components/Department";
import Settings from "./pages/Settings";
import HomeManagement from "./pages/HomeManagement";
function App() {
  let host = window.location.host;
  let protocol = window.location.protocol;
  let parts = host.split(".");
  let subdomain = parts[0];
  console.log(parts);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signin" element={<Signin />} />
        {/* {subdomain == "management" ? (
          <Route index element={<HomeManagement />} />
        ) : (
          <Route index element={<Home />} />
        )} */}
        <Route path="dashboard" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="departments" element={<Departments />} />
          <Route path="departments/:department_id" element={<Department />} />

          <Route path="analytics" element={<Analytics />} />
          <Route path="goals" element={<Goals />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
