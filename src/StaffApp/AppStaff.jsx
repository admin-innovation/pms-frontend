import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Analytics from "./pages/Analytics";
import Error from "./pages/Error";
import Report from "./pages/Report";
import Department from "./components/Department";
import Settings from "./pages/Settings";
import OngoingTask from "./pages/OngoingTask";
import TaskReview from "./pages/TaskReview";
import TaskHistory from "./pages/TaskHistory";
import Complaints from "./pages/Complaints";
import Evaluation from "./pages/Evaluation";
import SettingsLayout from "./pages/SettingsLayout";
import TaskLayout from "./pages/TaskLayout";

function AppStaff() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="dashboard" index element={<Home />} />
        <Route path="tasks/*" element={<TaskLayout />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="reports" element={<Report />}>
          <Route path="complaints" element={<Complaints />} />
          <Route path="evaluation" element={<Evaluation />} />
        </Route>
        <Route path="settings/*" element={<SettingsLayout />} />
        <Route path="*" element={<Error />} />
        <Route path="OngoingTasks" element={<OngoingTask />} />
        <Route path="TaskHistory" element={<TaskHistory />} />
        <Route path="TaskReview" element={<TaskReview />} />
      </Route>
    </Routes>
  );
}

export default AppStaff;
