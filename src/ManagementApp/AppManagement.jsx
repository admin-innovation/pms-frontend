import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Analytics from "./pages/Analytics";
import Error from "./pages/Error";
import Goals from "./pages/Goals";
import SettingsLayout from "./layouts/SettingsLayout";
import Department from "./components/Department";

function AppManagement() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/dashboard" index element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:department_id" element={<Department />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/settings/*" element={<SettingsLayout />} />
        <Route path="*" element={<Navigate to="dashboard" />} />
      </Route>
    </Routes>
  );
}

export default AppManagement;
