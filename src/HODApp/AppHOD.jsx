import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Analytics from "./pages/Analytics";
import Error from "./pages/Error";
import Goals from "./pages/Goals";
import SettingsLayout from "./layouts/SettingsLayout";
import Task from "./pages/TaskLayout";
import Department from "./components/Staff";
import ReviewLayout from "./pages/ReviewLayout";
import Staff from "./components/Staff";
function AppHOD() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/dashboard" index element={<Home />} />
        <Route path="/tasks/*" element={<Task />} />
        <Route path="/reviews/*" element={<ReviewLayout />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/analytics" element={<Goals />} />
        <Route path="/settings/*" element={<SettingsLayout />} />
        <Route path="*" element={<Navigate to="dashboard" />} />
      </Route>
    </Routes>
  );
}

export default AppHOD;
