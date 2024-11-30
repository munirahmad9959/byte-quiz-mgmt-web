import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            &copy; 2024 Byteslasher.inc All Rights Reserved.
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            {/* <i className="fab fa-facebook-f"></i> */}
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            {/* <i className="fab fa-twitter"></i> */}
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            {/* <i className="fab fa-linkedin-in"></i> */}
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            {/* <i className="fab fa-instagram"></i> */}
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
