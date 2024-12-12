import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../state";
import persistor from "../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosAdd, IoIosArrowDown } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { FaBook, FaChartPie } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { BiDonateHeart } from "react-icons/bi";
import { BsFillUnlockFill } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Logout function
  const handleLogout = async () => {
    try {
      await axios.post("https://localhost:7093/api/Auth/logout");
      dispatch(setLogout());
      await persistor.purge();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => { }

  return (
    <>
      {/* Navbar */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-[#fff] text-white p-4 fixed h-full">
          <a href="/"><img src="./images/byteQuiz.png" alt="logo" className="w-[130px] cursor-pointer" /></a>

          <div className="flex flex-col max-w-[240px]">
            {/* Create Button */}
            <div className="flex items-center mx-auto">
              <div className="flex font-semibold items-center space-x-1 button text-white bg-[#7847b8] px-20 py-3 mt-3 rounded-md transition duration-200 hover:bg-[#8854c0] cursor-pointer">
                <span><IoIosAdd style={{ fontSize: "1.3rem", strokeWidth: '10px', color: "#fff" }} /></span>
                <span className="text-[15px]">Create</span>
              </div>
            </div>

            <div className="flex flex-col space-y-36">
              <ul className="text-[#666]">
                <li className="flex flex-col space-y-2 mt-5 justify-start">

                  <div className="item flex items-center space-x-2 text-[16px] hover:bg-[#F6F0FF] p-2 rounded-xl hover:text-[#6A3DA5] cursor-pointer">
                    <span>
                      <TiHome style={{ fontSize: "1.2rem", marginRight: '5px' }} />
                    </span>
                    <a href="#" className=""> Explore</a>
                  </div>

                  <div className="item flex items-center space-x-2 text-[16px] hover:bg-[#F6F0FF] p-2 rounded-xl hover:text-[#6A3DA5] cursor-pointer">
                    <span>
                      <FaBook style={{ fontSize: "1rem", marginRight: '9px' }} />
                    </span>
                    <a href="#" className=""> Library</a>
                  </div>
                  <div className="item flex items-center space-x-2 text-[16px] hover:bg-[#F6F0FF] p-2 rounded-xl hover:text-[#6A3DA5] cursor-pointer">
                    <span>
                      <FaChartPie style={{ fontSize: "1rem", marginRight: '9px' }} />
                    </span>
                    <a href="#" className=""> Reports</a>
                  </div>
                  <div className="item flex items-center space-x-2 text-[16px] hover:bg-[#F6F0FF] p-2 rounded-xl hover:text-[#6A3DA5] cursor-pointer">
                    <span>
                      <SiGoogleclassroom style={{ fontSize: "1rem", marginRight: '9px' }} />
                    </span>
                    <a href="#" className=""> Classes</a>
                  </div>
                  <div className="item flex items-center space-x-2 text-[16px] hover:bg-[#F6F0FF] p-2 rounded-xl hover:text-[#6A3DA5] cursor-pointer">
                    <span>
                      <BiDonateHeart style={{ fontSize: "1rem", marginRight: '9px' }} />
                    </span>
                    <a href="#" className=""> Accomodations</a>
                  </div>
                </li>
              </ul>

              <div className="bottomElements w-full">
                <span className="ml-2 text-[#000]">0/20 activities created</span>
                <div className="flex justify-center items-center mx-auto">
                  <div className="flex font-semibold items-center space-x-1 button text-black px-[76px] py-3 mt-3 rounded-md transition duration-200 bg-[#ffc933] hover:bg-[#fdd356] cursor-pointer">
                    <span><BsFillUnlockFill /></span>
                    <span className="text-[15px]">Upgrade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-gray-100 ml-64" onClick={toggleDropdown}>
          {/* Navbar */}
          <nav className="bg-white shadow p-2 flex items-center justify-end pr-5">
            <div className="space-x-3 flex items-center">
              <button className="border border-[#bababa] rounded-lg px-2 py-1">
                <IoMdNotificationsOutline style={{ fontSize: "1.5rem", color: "#666" }} />
              </button>
              <button className="px-3 py-1 border border-[#bababa] text-[#666] rounded-lg">Enter Code</button>
              <button className="px-3 py-1 border border-[#bababa] text-[#666] rounded-lg">Get Help</button>
              {/* <button className="px-4 py-2 border border-[#bababa] text-[#666] rounded-3xl flex items-center">
                <img src="./images/avatar.png" className="w-[20px]" alt="" />
                <span className="ml-2"><IoIosArrowDown /></span>
              </button> */}

              <div className="relative">
                {/* Dropdown Button */}
                <button
                  id="dropdownInformationButton"
                  onClick={toggleDropdown}
                  className="px-3 py-1 border border-[#bababa] text-[#666] rounded-3xl flex items-center bg-white hover:bg-gray-100"
                  type="button"
                >
                  <img src="./images/avatar.png" className="w-[20px]" alt="User Avatar" />
                  <span className="ml-2">Dropdown</span>
                  <IoIosArrowDown
                    className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div
                    id="dropdownInformation"
                    className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                  >
                    <div className="px-4 py-3 text-sm text-gray-900">
                      <div>{user?.FirstName + user?.LastName}</div>
                      <div className="font-medium truncate font-sans text-[12px]">{user?.Email}</div>
                    </div>
                    <ul
                      className="py-2 text-sm text-gray-700"
                      aria-labelledby="dropdownInformationButton"
                    >
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Earnings
                        </a>
                      </li>
                    </ul>
                    <div className="py-2">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Main Content Body */}
          <main className="flex-1 p-6">
            <h1 className="text-xl font-bold mb-4">Main Content</h1>
            <p></p>
          </main>
        </div>
      </div>




    </>
  );
};

export default Dashboard;
