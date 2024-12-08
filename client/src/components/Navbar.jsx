import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }

    return (
        <div className='bg-white fixed w-screen left-0 top-0 z-[999]'>
            <div className='flex justify-between items-center h-[90px] max-w-full mr-10 ml-3'>
                <div className="flex items-center space-x-5">
                    <a href="/"><img src="./images/byteQuiz.png" alt="logo" className="w-[200px] cursor-pointer" /></a>

                    <div>
                        <a href="#home" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">For Schools</a>
                        <a href="#about" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">Plans</a>
                        <a href="#services" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">Solutions</a>
                        <a href="#contact" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">Resources</a>
                        <a href="#contact" className="text-[#090909] hover:text-[rgb(136,84,192)] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">For Business</a>
                    </div>
                </div>

                <nav className="flex items-center space-x-3">
                    <button className='text-[#8854c0] border-2 border-[#f3f3f3] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#efe5ff]'>Get a quote</button>
                    <button className='text-[#8854c0] border-2 border-[#f3f3f3] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#efe5ff]'>Enter code</button>
                    <button className='text-[#8854c0] bg-[#f6f0ff] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#efe5ff]' onClick={handleClick}>Log in</button>
                    <button className='text-white bg-[#8854c0] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#6a3da5]'>Sign up</button>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
