import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Analytics from "./pages/Analytics";
import Error from "./pages/Error";
import Goals from "./pages/Goals";
import Complaints from "./pages/Complaints";
import Evaluation from "./pages/Evaluation";
import Vacancies from "./pages/Vacancies";
//import Signin from "./pages/Signin";
import Department from "./components/Department";
import Settings from "./pages/Settings";
import ReviewLayout from "./pages/ReviewLayout";
//import HomeManagement from "./pages/HomeManagement";

function AppHR() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="dashboard" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/departments/:department_id" element={<Department />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/goals/*" element={<Goals />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/review/*" element={<ReviewLayout />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default AppHR;
