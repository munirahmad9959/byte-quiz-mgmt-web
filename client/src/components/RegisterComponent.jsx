import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../state';
import { ApiClient } from '../../utils';

const RegisterComponent = () => {
    const loading = useSelector((state) => state.auth.loading);
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
        dispatch(setLoading(true));
        try {
            await ApiClient.post('/Auth/register', formData);
            navigate('/login');
        } catch (error) {
            console.error(`Error from RegistrationForm: ${error}`);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6 md:mt-7">Registration</h2>
            <form
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
                onSubmit={handleRegister}
            >
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        required
                        type="text"
                        name="FirstName"
                        placeholder="Enter Your Name"
                        value={formData.FirstName}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        required
                        type="text"
                        name="LastName"
                        placeholder="Enter Your Username"
                        value={formData.LastName}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        required
                        type="email"
                        name="Email"
                        placeholder="Enter Your E-mail"
                        value={formData.Email}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        required
                        type="password"
                        name="Password"
                        placeholder="Enter Your Password"
                        value={formData.Password}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        required
                        type="password"
                        name="ConfirmPassword"
                        placeholder="Confirm Your Password"
                        value={formData.ConfirmPassword}
                        onChange={handleChange}
                        className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Roles</label>
                    <div className="mt-2 flex space-x-4">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="Role"
                                value="Teacher"
                                checked={formData.Role === 'Teacher'}
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                            />
                            <span className="ml-2">Teacher</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="Role"
                                value="Student"
                                checked={formData.Role === 'Student'}
                                onChange={handleChange}
                                className="form-radio h-4 w-4 text-indigo-600"
                            />
                            <span className="ml-2">Student</span>
                        </label>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-3 bg-[#8854c0] hover:bg-[#6a3da5] text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        {loading ? "Loading" : "Register"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default RegisterComponent;
