import React from 'react';

const Navbar = () => {
    return (
        // <div className="absolute top-0 left-0 w-full bg-indigo-300">
        //     <div className='flex justify-between max-w-full mx-10'>
        //         <img src="./images/logo-removebg-preview.png" alt="logo" className="w-50 h-20" />

        //         <nav className="flex items-center space-x-10">
        //             <a href="#home" className="text-white">Home</a>
        //             <a href="#about" className="text-white">About</a>
        //             <a href="#services" className="text-white">Services</a>
        //             <a href="#contact" className="text-white">Contact</a>
        //         </nav>

        //     </div>
        // </div>

        <div className='bg-white top-0 sticky z-[999]'>
            <div className='flex justify-between items-center h-[90px] max-w-full mr-10 ml-3'>
                <div className="flex items-center space-x-5">
                    <img src="./images/logo.svg" alt="logo" className=" max-w-[800px]" />

                    <div>
                        <a href="#home" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">For Schools</a>
                        <a href="#about" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">Plans</a>
                        <a href="#services" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">Solutions</a>
                        <a href="#contact" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">Resources</a>
                        <a href="#contact" className="text-[#090909] hover:text-[#8854c0] transition duration-300 hover:bg-[#efe5ff] px-4 py-3 rounded-lg">For Business</a>
                    </div>
                </div>

                <nav className="flex items-center space-x-3">
                    <button className='text-[#8854c0] border-2 border-[#f3f3f3] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#efe5ff]'>Get a quote</button>
                    <button className='text-[#8854c0] border-2 border-[#f3f3f3] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#efe5ff]'>Enter code</button>
                    <button className='text-[#8854c0] bg-[#f6f0ff] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#efe5ff]'>Log in</button>
                    <button className='text-white bg-[#8854c0] px-4 py-2 rounded-lg transition duration-200 hover:bg-[#6a3da5]'>Sign up</button>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
