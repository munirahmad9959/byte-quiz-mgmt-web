import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import StudentDashboardSidebar from "../components/StudentDashboardSidebar";
import StudentDashboard from "../components/StudentDashboard";
import TeacherDashboardSidebar from "../components/TeacherDashboardSidebar";
import TeacherDashboard from "../components/TeacherDashboard";
import AddQuizForm from "../components/AddQuizForm";
import { setLoading } from "../state";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState("Records");
  const [showSidebar, setShowSidebar] = useState(false);
  const [navDropDown, setNavDropDown] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderTeacherView = () => {
    switch (currentView) {
      case "Records":
        return <TeacherDashboard setShowSidebar={setShowSidebar} setNavDropDown={setNavDropDown}/>;
      case "Add Quizzes":
        return <AddQuizForm setShowSidebar={setShowSidebar} setNavDropDown={setNavDropDown}/>;
      default:
        return <div>Invalid View</div>;
    }
  };

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        {user.role === "Teacher" ? (
          <TeacherDashboardSidebar setCurrentView={setCurrentView} showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        ) : user.role === "Student" ? (
          <StudentDashboardSidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        ) : null}

        {/* Main Content */}
        <div
          className="flex-1 flex flex-col bg-gray-100 md:ml-64 w-full"
          onClick={toggleDropdown}
        >
          {/* Navbar */}
          <DashboardNavbar setShowSidebar={setShowSidebar} navDropDown={navDropDown} setNavDropDown={setNavDropDown}/>

          {/* Main Content Body */}
          <main className="flex-1 p-1 md:p-6 w-full">
            {user.role === "Student" ? (
              <StudentDashboard setShowSidebar={setShowSidebar} setNavDropDown={setNavDropDown}/>
            ) : user.role === "Teacher" ? (
              renderTeacherView()
            ) : null}
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
