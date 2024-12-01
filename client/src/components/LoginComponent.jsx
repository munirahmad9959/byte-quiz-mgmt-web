import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLogin } from '../state';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5027/api/QuizMgmt/login', data);
            dispatch(setLogin({
                user: response.data.user,
                token: response.data.token,
            }));

            alert("Login successful!");

            const userRole = response.data.user.role; 
            if (userRole === "Teacher") {
                navigate('/teacher-dashboard');
            } else if (userRole === "Student") {
                navigate('/student-dashboard');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert(error.response?.data?.message || 'Login failed! Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded shadow-md" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-2xl mb-4">Login</h2>
                <input {...register("email", { required: true })} placeholder="Email" className="mb-2 p-2 border rounded w-full" />
                {errors.email && <p className="text-red-500 text-sm">Email is required.</p>}
                <input {...register("password", { required: true })} type="password" placeholder="Password" className="mb-2 p-2 border rounded w-full" />
                {errors.password && <p className="text-red-500 text-sm">Password is required.</p>}
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
            </form>
        </div>
    );
};

export default LoginComponent;
