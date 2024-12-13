import React from 'react'
import { TiHome } from "react-icons/ti";
import { FaBook, FaChartPie } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { BiDonateHeart } from "react-icons/bi";
import { BsFillUnlockFill } from "react-icons/bs";
import { IoIosAdd } from "react-icons/io";

const DashboardSidebar = () => {
    return (
        <>
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
        </>
    )
}

export default DashboardSidebar
