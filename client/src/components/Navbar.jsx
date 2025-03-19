import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }

    return (
        <div className='bg-white fixed w-screen left-0 top-0 z-[999]'>
            <div className='flex justify-between items-center h-[90px] mr-2 md:mr-10 md:ml-3'>
                <div className="flex items-center space-x-5 max-w-[70%]">
                    <a href="/"><img src="./images/byteQuiz.png" alt="logo" className="w-[170px] md:w-[180px] cursor-pointer" /></a>

                    <div className='hidden md:block items-center'>
                        <a href="#home" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">For Schools</a>
                        <a href="#about" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">Plans</a>
                        <a href="#services" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">Solutions</a>
                        <a href="#contact" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">Resources</a>
                        <a href="#contact" className="text-[#090909] hover:text-[rgb(136,84,192)] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">For Business</a>
                    </div>
                </div>

                <nav className="flex items-center space-x-3">
                    <button className='text-[#8854c0] border-2 border-[#f3f3f3] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#efe5ff] hidden md:flex items-center'>Get a quote</button>
                    <button className='text-[#8854c0] border-2 border-[#f3f3f3] px-2 py-1 md:px-4 md:py-2 rounded-lg transition duration-200 hover:bg-[#efe5ff] hidden md:flex items-center'>Enter code</button>
                    <button className='text-[#8854c0] bg-[#f6f0ff] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#efe5ff]' onClick={handleClick}>Log in</button>
                    <button
                        className="p-2 md:hidden"
                        onClick={() => setShowSidebar((prev) => !prev)} // **Toggle Sidebar on click**
                    >
                        <FiMenu className="text-2xl text-[#5D2057]" />
                    </button>
                    <button className='text-white bg-[#8854c0] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#6a3da5] hidden md:flex items-center'>Sign up</button>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
