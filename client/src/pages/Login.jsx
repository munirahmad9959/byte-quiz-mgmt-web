import React from 'react';
import Navbar from '../components/Navbar';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
import Footer from '../components/Footer';

const Login = () => {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-indigo-300 mt-14">
                <div className="logincard flex max-w-4xl w-full rounded-2xl overflow-hidden shadow-lg">
                    {/* Left Side with Image */}
                    <div className="w-1/2">
                        <img src="./images/login.png" alt="login pic" className="w-full h-full object-cover" />
                    </div>

                    {/* Right Side with Form */}
                    <div className="w-1/2 text-gray-700 bg-white flex items-center justify-center px-10 py-6">
                        <form className="w-full max-w-sm space-y-5">
                            <h2 className="text-2xl font-bold mb-5 text-center text-gray-800">Login</h2>

                            {/* Email Field */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-700"
                                >
                                    Enter email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-gray-50 text-black rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2.5"
                                    placeholder="username@email.com"
                                    required
                                />
                            </div>

                            {/* Password Field */}
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-700"
                                >
                                    Enter password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 p-2.5"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                            >
                                Submit
                            </button>

                            <div className="separator h-[1px] bg-gray-400 my-5" />
                            <div className='text-center text-sm text-gray-600'>or continue with</div>

                            {/* Social Media Buttons */}
                            <div className="flex justify-center space-x-4">
                                <button
                                    type="button"
                                    className="flex items-center justify-center w-full bg-white text-gray-600 py-2 focus:ring-4 focus:ring-red-300 rounded-full border border-gray-600 shadow-md"
                                >
                                    <FcGoogle className='mr-2 text-xl' />
                                    Google
                                </button>
                                <button
                                    type="button"
                                    className="flex items-center justify-center w-full bg-white text-gray-600 py-2 focus:ring-4 focus:ring-blue-300 rounded-full border border-gray-600 shadow-md"
                                >
                                    <FaFacebook className='mr-2 text-blue-700 text-xl' />
                                    Facebook
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>

    );
};

export default Login;
