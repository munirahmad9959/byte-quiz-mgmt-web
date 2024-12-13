import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLogout } from '../state'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import axios from 'axios';


const DashboardNavbar = () => {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [isOpen, setIsOpen] = useState(false);

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


    return (
        <>
            <nav className="bg-white shadow p-2 flex items-center justify-end pr-5">
                <div className="space-x-3 flex items-center">
                    <button className="border border-[#bababa] rounded-lg px-2 py-1">
                        <IoMdNotificationsOutline style={{ fontSize: "1.5rem", color: "#666" }} />
                    </button>
                    <button className="px-3 py-1 border border-[#bababa] text-[#666] rounded-lg">Enter Code</button>
                    <button className="px-3 py-1 border border-[#bababa] text-[#666] rounded-lg">Get Help</button>

                    {/* Dropdown Button */}
                    <div className="relative">
                        <button
                            id="dropdownInformationButton"
                            onClick={toggleDropdown}
                            className="px-3 py-1 border border-[#bababa] text-[#666] rounded-3xl flex items-center bg-white hover:bg-gray-100"
                            type="button"
                        >
                            <img src="./images/avatar.png" className="w-[20px]" alt="User Avatar" />
                            {/* <span className="ml-2">Dropdown</span> */}
                            <IoIosArrowDown
                                className={`ml-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div
                                id="dropdownInformation"
                                className="absolute z-10 mt-2 right-0  bg-white rounded-lg shadow w-44"
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
    )
}

export default DashboardNavbar
