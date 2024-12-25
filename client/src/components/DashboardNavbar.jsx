import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from '../state';
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';
import { setLoading } from '../state';
import PlayLoading from './PlayLoading';
import { ApiClient } from '../../utils';
import { FiMenu } from 'react-icons/fi';
import { set } from 'react-hook-form';

const DashboardNavbar = ({ setShowSidebar, navDropDown, setNavDropDown }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    // const [isOpen, setIsOpen] = useState(false);
    const loading = useSelector((state) => state.auth.loading);

    const handleLogout = async () => {
        dispatch(setLoading(true));
        try {
            await ApiClient.post("/Auth/logout");
            dispatch(setLogout());
            await persistor.purge();
            navigate("/login", { replace: true });
        } catch (error) {
            console.error("Logout failed:", error.message);
        } finally {
            setTimeout(() => {
                dispatch(setLoading(false));
            }, 1500);
        }
    };

    const toggleDropdown = () => {
        // setIsOpen(!isOpen);
        setNavDropDown(!navDropDown);
    };

    return (
        <>
            {loading && <PlayLoading />}
            <nav className="bg-white shadow p-2 flex items-center justify-between pr-5">

                {/* Burger Icon on the top-left */}
                <button
                    className="p-2 md:hidden"
                    onClick={() => setShowSidebar((prev) => !prev)} // **Toggle Sidebar on click**
                >
                    <FiMenu className="text-2xl text-gray-700" />
                </button>

                {/* Right section: Notifications, Help, and User Dropdown */}
                <div className="space-x-3 flex ml-auto items-center">
                    <button className="border border-[#bababa] rounded-lg px-2 py-1">
                        <IoMdNotificationsOutline style={{ fontSize: "1.5rem", color: "#666" }} />
                    </button>
                    <button className="px-3 py-1 border border-[#bababa] text-[#666] rounded-lg hidden sm:block">Enter Code</button>
                    <button className="px-3 py-1 border border-[#bababa] text-[#666] rounded-lg hidden sm:block">Get Help</button>
                    {/* Dropdown Button */}
                    <div className="relative">
                        <button
                            id="dropdownInformationButton"
                            onClick={toggleDropdown}
                            className="px-3 py-1 border border-[#bababa] text-[#666] rounded-3xl flex items-center bg-white hover:bg-gray-100"
                            type="button"
                        >
                            <img src="./images/avatar.png" className="w-[20px]" alt="User Avatar" />
                            <IoIosArrowDown
                                className={`ml-2 transition-transform duration-300 ${navDropDown ? "rotate-180" : ""}`}
                            />
                        </button>
                        {/* Dropdown Menu */}
                        {navDropDown && (
                            <div
                                id="dropdownInformation"
                                className="absolute z-10 mt-2 right-0 bg-white rounded-lg shadow w-44"
                                style={{ borderColor: "#cecece" }} // Divider color applied only to specific sections
                            >
                                {/* User Info Section */}
                                <div className="px-4 py-3 text-sm text-gray-900 border-b" style={{ borderColor: "#cecece" }}>
                                    <div>{user.firstName + " " + user.lastName}</div>
                                    <div className="font-medium truncate font-sans text-[12px]">{user.Email}</div>
                                </div>
                                {/* Links Section */}
                                <ul
                                    className="py-2 text-sm text-gray-700"
                                    aria-labelledby="dropdownInformationButton"
                                >
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900">
                                            Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900">
                                            Earnings
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-gray-900" onClick={handleLogout}>
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default DashboardNavbar;
