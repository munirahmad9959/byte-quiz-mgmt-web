import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginComponent from '../components/LoginComponent';
import { useNavigate } from 'react-router-dom';
import RegisterComponent from '../components/RegisterComponent';
import { setLoading } from '../state';

const RegisterPage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        Role: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {

        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('https://localhost:7093/api/Auth/register', formData);
            console.log(response.data);
            setLoading(false)
        } catch (error) {
            console.error(`Error from RegistrationForm: ${error}`);
        }
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
                        <button className='text-white bg-[#8854c0] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#6a3da5]'>Sign up</button>
                    </nav>
                </div>
            </div>
            {/* code for register form */}
            <div className="container border-2 border-[#ccc] bg-[#ccc] rounded-xl flex justify-center items-center mx-auto w-[850px] mt-28 space-x-10 p-5">
                <div className="left w-1/2">
                    <img src="./images/imageUpscaled.png" alt="register" className="w-full h-full object-cover" />
                </div>
                <div className="rightRegisterForm w-1/2"><RegisterComponent /></div>
            </div>


        </>

    );
};

export default RegisterPage;
