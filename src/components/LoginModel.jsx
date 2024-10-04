import React from 'react';
import { Link } from 'react-router-dom';

const LoginModel = ({ closeModal }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
            <div className="bg-white p-6 rounded-md shadow-lg w-11/12 md:w-1/3 relative transform transition-transform duration-300 ease-in-out scale-100 opacity-100 hover:scale-105">
                {/* Close Button (Cross Sign) */}
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-6 text-red-600 hover:text-red-800 text-4xl font-bold" // Increased font size
                >
                    &times; 
                </button>

                <h2 className="text-xl font-bold mb-4 text-red-600 text-center">Login Required</h2>
                <p className="mb-4 text-center text-lg">Please login first to use our services..!</p>
                <Link
                    to="/sign_in" // Adjust this path to your login route
                    className="block text-center bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}

export default LoginModel;
