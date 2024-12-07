import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const HeroSection = () => {
    return (
        <div className="h-screen w-screen flex justify-between items-center box-border relative overflow-hidden">
            {/* Left Section */}
            <div className="left w-[20vw] absolute top-0 left-0 h-full">
                <img
                    src="./images/rightHeroSection.svg"
                    alt="Left Decorative"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Center Text */}
            <div className="text-center max-w-[50vw] mx-auto z-10 mt-20">
                <span className="text-4xl font-normal text-[#090909] mb-4 mr-2">
                    Introducing
                </span>
                <span className='text-[#ae7dd9] text-4xl font-semibold'>Instructional Suite</span>
                <p className="text-6xl font-bold text-[#090909] italic my-2">
                    "I had no idea Quizizz could do that."
                </p>
                <p className="text-[22px] text-[#666]">- Almost everybody</p>
                <span className="spacer block h-[1px] border border-gray-300 w-[50vw] mx-auto mt-4"></span>
                <p className='mt-4 text-2xl max-w-[38vw] mx-auto text-[#090909] font-normal mb-14'>Create and deliver bell-to-bell curriculum
                    resources that meet the needs of every student.</p>

                <div className="buttons flex space-x-5 justify-center">
                    {/* Teacher Button */}
                    <button
                        className="py-[10px] px-[20px] min-w-[200px] bg-[#8854c0] text-white rounded-xl shadow-lg transform transition 
               hover:translate-y-1 hover:shadow-none active:translate-y-2 active:shadow-sm"
                    style={{
                        boxShadow: "0 5px 0 #6C4298"
                    }}>
                        <div className="flex flex-col items-start">
                            <span className="font-bold text-lg text-[#B493D7] text-left">Teachers</span>
                            <span className="text-white text-lg font-bold flex items-center">
                                Sign up for free <MdOutlineKeyboardArrowRight className="ml-1 font-medium text-xl" />
                            </span>
                        </div>
                    </button>

                    {/* Admin Button */}
                    <button
                        className="py-[10px] px-[20px] min-w-[200px] bg-white text-[#6c4298] rounded-xl shadow-lg transform transition 
               hover:translate-y-1 hover:shadow-none active:translate-y-2 active:shadow-sm"
                    style={{
                        boxShadow: "0 5px 0 #CCCCCC",
                        
                    }}>
                        <div className="flex flex-col items-start">
                            <span className="text-left text-lg text-gray-600 font-bold">Admins</span>
                            <span className="text-[#6c4298] text-lg font-bold flex items-center">
                                Learn more <MdOutlineKeyboardArrowRight className="ml-1 font-medium text-xl" />
                            </span>
                        </div>
                    </button>
                </div>


            </div>

            {/* Right Section */}
            <div className="right w-[20vw] absolute top-0 right-0 h-full">
                <img
                    src="./images/leftHeroSection.svg"
                    alt="Right Decorative"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

export default HeroSection;
