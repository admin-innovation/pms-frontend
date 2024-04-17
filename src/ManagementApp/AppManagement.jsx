import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Analytics from "./pages/Analytics";
import Error from "./pages/Error";
import Goals from "./pages/Goals";
import Signin from "../Signin";
import SettingsLayout from "./pages/SettingsLayout";
import Department from "./components/Department";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import About from "./pages/About";
function AppManagement() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="dashboard" element={<Home />} />
        <Route path="departments" element={<Departments />} />
        <Route path="departments/:department_id" element={<Department />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="goals" element={<Goals />} />
        <Route path="settings/*" element={<SettingsLayout />} />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default AppManagement;
