import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import StudentDashboardSidebar from "../components/StudentDashboardSidebar";
import StudentDashboard from "../components/StudentDashboard";
import TeacherDashboardSidebar from "../components/TeacherDashboardSidebar";
import TeacherDashboard from "../components/TeacherDashboard";
import AddQuizForm from "../components/AddQuizForm";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState("Records");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderTeacherView = () => {
    switch (currentView) {
      case "Records":
        return <TeacherDashboard />;
      case "Add Quizzes":
        return <AddQuizForm />;
      default:
        return <div>Invalid View</div>;
    }
  };

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        {user.role === "Teacher" ? (
          <TeacherDashboardSidebar setCurrentView={setCurrentView} />
        ) : user.role === "Student" ? (
          <StudentDashboardSidebar />
        ) : null}

        {/* Main Content */}
        <div
          className="flex-1 flex flex-col bg-gray-100 ml-64"
          onClick={toggleDropdown}
        >
          {/* Navbar */}
          <DashboardNavbar />

          {/* Main Content Body */}
          <main className="flex-1 p-6">
            {user.role === "Student" ? (
              <StudentDashboard />
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
