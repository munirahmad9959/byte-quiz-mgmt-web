import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import AddQuizForm from "../components/AddQuizForm";
import TeacherDashboard from "../components/TeacherDashboard";

const Dashboard = () => {
  const [currentView, setCurrentView] = useState("Records"); // Default view

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <DashboardSidebar setCurrentView={setCurrentView} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-100 ml-64">
        <DashboardNavbar />
        <main className="flex-1 p-6">
          {currentView === "Records" ? (
            <TeacherDashboard />
          ) : currentView === "Add Quizzes" ? (
            <AddQuizForm />
          ) : (
            <p>Invalid view</p>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
