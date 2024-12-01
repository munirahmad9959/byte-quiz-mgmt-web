import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../state"; // Import the logout action
import persistor from "../main"; // Import the persistor for Redux persist
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const dispatch = useDispatch(); // Initialize dispatch
  const user = useSelector((state) => state.auth.user); // Get user data from Redux state
  const navigate = useNavigate();

  // Logout function
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5027/api/QuizMgmt/logout",
        {},
        { withCredentials: true } // Ensures cookies are included
      );
      
      console.log("Logout successful:", response.data);
  
      // Clear Redux state and persist storage
      dispatch(setLogout());
      await persistor.purge(); // Ensure persistence is cleared
      navigate("/"); // Redirect to the login page
    } catch (error) {
      console.error("Error logging out:", error.response?.data || error.message);
    }
  };
  
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
              </button>
              <a href="/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Logo"
                  className="h-8 me-3"
                />
                <span className="text-xl font-semibold sm:text-2xl dark:text-white">
                  Dashboard
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r sm:translate-x-0 dark:bg-gray-800"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 3.25a6.75 6.75 0 100 13.5A6.75 6.75 0 0010 3.25zM10 12a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.6 5a2.8 2.8 0 115.6 0v1h-5.6V5zM3 8.25V13a1 1 0 001 1h12a1 1 0 001-1V8.25H3z"></path>
                </svg>
                <span className="ml-3">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Content */}
      <div className="p-4 sm:ml-64 mt-16">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="text-lg text-gray-800 font-bold">
            Welcome, {user.FirstName || "User"}!
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
