import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import AppManagement from "./ManagementApp/AppManagement";
// import AppStaff from "./StaffApp/AppStaff";
// import AppHR from "./HRApp/AppHR";

const MainLayout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      try {
        const parsedUser = JSON.parse(userCookie);
        setUser(parsedUser);
      } catch (error) {
        console.error("Error parsing user cookie:", error);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return null; // Render nothing or a loading spinner while user state is being set
  }

  return (
    <>
      {/* {user.role === "staff" && <AppStaff />} */}
      {user.role === "management" && <AppManagement />}
      {/* {user.role === "hr" && <AppHR />}
      {user.role === "hod" && <div>HOD Component Here</div>} */}
    </>
  );
};

export default MainLayout;
