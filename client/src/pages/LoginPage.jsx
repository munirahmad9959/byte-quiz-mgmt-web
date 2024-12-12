import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginComponent from '../components/LoginComponent';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register');
    }

    return (
        <>
            <div className='bg-[#461A42] fixed w-screen left-0 top-0 z-[999]'>
                <div className='flex justify-between items-center h-[90px] max-w-full mr-10 ml-3'>
                    <div className="flex items-center space-x-5">
                        <a href="/"><img src="./images/loginlogo.png" alt="logo" className="w-[200px] cursor-pointer" /></a>
                    </div>

                    <nav className="flex items-center space-x-3">
                        <button className='text-[#8854c0] border border-[#f3f3f3] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#efe5ff]'>Join a game</button>

                        <button className='text-white bg-[#8854c0] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#6a3da5]' onClick={handleClick}>Sign up</button>
                    </nav>
                </div>
            </div>
            <LoginComponent />
        </>

    );
};

export default LoginPage;
