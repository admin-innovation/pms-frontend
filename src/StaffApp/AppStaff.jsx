import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Analytics from "./pages/Analytics";
import Error from "./pages/Error";
import Review from "./pages/Review";
import Department from "./components/Department";
import Settings from "./pages/Settings";
import Complaints from "./pages/Complaints";

function AppStaff() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="dashboard" element={<Home />} />
        <Route path="task/*" element={<Task />} />
        <Route path="departments/:pathId" element={<Department />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="settings" element={<Settings />} />
        <Route path="review/*" element={<Review />} />
        <Route path="complaints" element={<Complaints />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
}

export default AppStaff;
