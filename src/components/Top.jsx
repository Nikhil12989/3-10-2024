import React from 'react';
import logo from "../assets/logo.png";
import feed from '../assets/feedback.svg';
import feed1 from '../assets/feed.svg';
import { Link } from 'react-router-dom';

const Top = () => {
    return (
        <div className='bg-slate-200 p-2 mb-1'>
            <div className="flex flex-col md:flex-row items-center justify-between md:justify-around">
                {/* Logo visible on all screen sizes */}
                <img src={logo} alt="Make Easy Documents logo" className="h-16 w-auto md:h-20 md:ml-20" />

                {/* Text content hidden on small and medium screens, shown on large screens */}
                <div className="hidden lg:block text-center md:text-left">
                    <h1>
                        <span className='text-3xl font-bold text-[#03ac26]'>Make Easy </span>
                        <span className='text-3xl font-bold text-[#FD3400]'>Documents</span> <br />
                        <span className='text-xl font-bold ml-11'> Documents </span> Is Now
                        <span className='text-xl font-bold'> Simple</span>
                    </h1>
                </div>

                {/* Feedback icons and rating hidden on small and medium screens, shown on large screens */}
                <div className="hidden lg:flex items-center md:ml-20 space-x-2">
                    <Link to="/reviews" className="flex items-center space-x-2">
                        <img src={feed} className='h-10' alt="Feedback" />
                        <img src={feed1} className='h-10' alt="Feed 1" />
                        <h1 className='text-lg'>4.4/5 (16k+ Reviews)</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Top;
