import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterComponent from '../components/RegisterComponent';
import { setLoading } from '../state';
import { useSelector } from 'react-redux';
import PlayLoading from '../components/PlayLoading';

const RegisterPage = () => {
    const navigate = useNavigate();
    const loading = useSelector((state) => state.auth.loading);

    const handleClick = () => {
        navigate('/login');
    }


    return (
        <>
            {loading && <PlayLoading />}
            <div className="bg-[#461A42] min-h-screen">
                <div className="fixed w-screen left-0 top-0 z-[999] bg-[#461A42]">
                    <div className="flex justify-between items-center h-[80px] max-w-full mr-10 ml-3">
                        <div className="flex items-center space-x-5">
                            <a href="/"><img src="./images/loginlogo.png" alt="logo" className="w-[200px] cursor-pointer" /></a>
                        </div>
                        <nav className="flex items-center space-x-3">
                            <button className="text-[#8854c0] border border-[#f3f3f3] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#efe5ff] hidden sm:block">
                                Join a game
                            </button>
                            <button className="text-white bg-[#8854c0] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#6a3da5]" onClick={handleClick}>
                                Log in
                            </button>
                        </nav>
                    </div>
                </div>

                <div className="flex justify-center items-center px-4 py-24 sm:px-0">
                    <div className="container border-2 border-[#ccc] bg-[#ccc] rounded-xl flex flex-col md:flex-row justify-center items-center mx-auto w-full max-w-[850px] space-y-5 md:space-y-0 md:space-x-10 p-5">
                        <div className="left w-full md:w-1/2">
                            <img src="./images/imageUpscaled.png" alt="register" className="w-full h-full object-cover rounded-lg hidden sm:block" />
                        </div>
                        <div className="rightRegisterForm w-full md:w-1/2">
                            <RegisterComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
