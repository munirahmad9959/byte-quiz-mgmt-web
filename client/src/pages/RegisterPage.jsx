import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterComponent from '../components/RegisterComponent';

const RegisterPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/login');
    }
    

    return (
        <div className="bg-[#461A42] min-h-screen">
            <div className="fixed w-screen left-0 top-0 z-[999]">
                <div className="flex justify-between items-center h-[80px] max-w-full mr-10 ml-3">
                    <div className="flex items-center space-x-5">
                        <a href="/"><img src="./images/loginlogo.png" alt="logo" className="w-[200px] cursor-pointer" /></a>
                    </div>
                    <nav className="flex items-center space-x-3">
                        <button className="text-[#8854c0] border border-[#f3f3f3] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#efe5ff]">
                            Join a game
                        </button>
                        <button className="text-white bg-[#8854c0] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#6a3da5]" onClick={handleClick}>
                            Log in
                        </button>
                    </nav>
                </div>
            </div>

            {/* Registration Form Section */}
            <div className="flex justify-center items-center">
                <div className="container border-2 border-[#ccc] bg-[#ccc] rounded-xl flex justify-center items-center mx-auto w-[850px] mt-28 space-x-10 p-5">
                    <div className="left w-1/2">
                        <img src="./images/imageUpscaled.png" alt="register" className="w-full h-full object-cover" />
                    </div>
                    <div className="rightRegisterForm w-1/2">
                        <RegisterComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
