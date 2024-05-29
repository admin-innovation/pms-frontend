import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Analytics from "./pages/Analytics";
import Error from "./pages/Error";

import SettingsLayout from "./pages/SettingsLayout";
import TaskLayout from "./pages/TaskLayout";
import ReportsLayout from "./pages/ReportsLayout";

function AppStaff() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="dashboard" index element={<Home />} />
        <Route path="tasks/*" element={<TaskLayout />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reports/*" element={<ReportsLayout />} />
        <Route path="settings/*" element={<SettingsLayout />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default AppStaff;
