import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSidebar from "../components/DashboardSidebar";
import StudentDashboard from "../components/StudentDashboard";
import TeacherDashboard from "../components/TeacherDashboard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-gray-100 ml-64" onClick={toggleDropdown}>
          {/* Navbar */}
          <DashboardNavbar />

          {/* Main Content Body */}
          <main className="flex-1 p-6">

            {user.role === "Student" ? (
              <StudentDashboard />
            ) : user.role === "Teacher" ? (
              <TeacherDashboard />
            ) : (
              <p>Unauthorized access</p>
            )}

            


            {/* Table for teachers */}
            {/* <div className="overflow-x-auto border border-gray-300 rounded">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-4 border">Quiz ID</th>
                    <th className="p-4 border">Topic</th>
                    <th className="p-4 border">User Name</th>
                    <th className="p-4 border">Marks Obtained</th>
                    <th className="p-4 border">Total Marks</th>
                    <th className="p-4 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((record) => (
                      <tr key={record.id} className="hover:bg-gray-100">
                        <td className="p-4 border">{record.id}</td>
                        <td className="p-4 border">{record.topic}</td>
                        <td className="p-4 border">{record.userName}</td>
                        <td className="p-4 border">{record.marksObtained}</td>
                        <td className="p-4 border">{record.totalMarks}</td>
                        <td className="p-4 border text-center">
                          <button className="bg-red-500 text-white px-4 py-1 rounded">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="p-4 text-center">
                        No records found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div> */}
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
