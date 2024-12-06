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
            <div className="text-center max-w-[50vw] mx-auto z-10">
                <span className="text-4xl font-normal text-[#090909] mb-4 mr-2">
                    Introducing
                </span>
                <span className='text-[#ae7dd9] text-4xl font-semibold'>Instructional Suite</span>
                <p className="text-6xl font-bold text-[#090909] italic my-2">
                    "I had no idea Quizizz could do that.";
                </p>
                <p className="text-[22px] text-[#666]">- Almost everybody</p>
                <span className="spacer block h-[1px] border border-gray-300 w-[50vw] mx-auto mt-4"></span>
                <p className='mt-4 text-2xl max-w-[38vw] mx-auto text-[#090909] font-normal'>Create and deliver bell-to-bell curriculum
                    resources that meet the needs of every student.</p>
                <div className="buttons flex space-x-5 justify-center mt-5">
                    <button
                        className="py-[16px] px-[20px] min-w-[200px] bg-[#8854c0] hover:shadow-md rounded-xl"
                        style={{
                            boxShadow: '0 5px #6c4298',
                        }}
                    >
                        <div className='flex justify-start'>
                            <span className='font-bold text-[#B493D7] text-left'>Teachers</span>
                        </div>
                        <div className='flex'>
                            <span className='text-white text-lg font-bold'>Sign up for free<MdOutlineKeyboardArrowRight /></span>
                        </div>
                    </button>
                    <button
                        className="py-2 px-3 bg-[#fff] hover:shadow-md rounded-xl"
                        style={{
                            boxShadow: '0 5px #ccc',
                            
                        }}
                    >
                        <span>Admins</span>
                        <p>Learn more</p>
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
