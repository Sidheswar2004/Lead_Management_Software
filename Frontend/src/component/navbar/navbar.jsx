// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-300 m-1 rounded-md shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-700">
              Lead Management System
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
            <button
            
              className="text-white-700 hover:text-blue-500 border-2 bg-red-700 px-3 py-2 rounded-md text-bold font-medium"
            >
              <Link to="/signin">logout</Link>
            </button>
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu.classList.toggle('hidden');
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-menu" className="hidden md:hidden">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
          >
            About
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
