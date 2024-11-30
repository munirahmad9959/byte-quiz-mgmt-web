import React from 'react';

const Navbar = () => {
    return (
        <div className="absolute top-0 left-0 w-full bg-indigo-300">
            <div className='flex justify-between max-w-full mx-10'>
                <img src="./images/logo-removebg-preview.png" alt="logo" className="w-50 h-20" />

                <nav className="flex items-center space-x-10">
                    <a href="#home" className="text-white">Home</a>
                    <a href="#about" className="text-white">About</a>
                    <a href="#services" className="text-white">Services</a>
                    <a href="#contact" className="text-white">Contact</a>
                </nav>

            </div>
        </div>
    );
};

export default Navbar;
