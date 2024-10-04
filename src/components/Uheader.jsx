import React, { useState } from 'react';
import { Menu, Search, User, ChevronDown, ChevronUp, LogOut } from 'lucide-react'; // Import ChevronUp
import { Link, useNavigate } from 'react-router-dom';

const Uheader = ({ setSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // Use navigate to redirect

  const handleLogout = () => {
    // Clear auth data (assuming stored in local storage)
    localStorage.removeItem('auth');
    
    // Optionally clear other user data if needed
    // localStorage.clear(); // If you want to clear all data

    // Redirect to sign-in page after logout
    navigate('/sign_in');

    // Optionally, you can show a toast or message
    console.log('User logged out');
  };

  return (
    <header className="bg-gradient-to-r from-blue-200 to-blue-100 shadow-md w-full px-4 lg:px-6 h-16 flex justify-between items-center border-b border-gray-200"
>
      {/* Sidebar Toggle Button for Mobile */}
      <button
        className="lg:hidden text-gray-500 focus:outline-none"
        onClick={() => setSidebarOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Dashboard Title */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-2xl font-bold text-[#03ac26] lg:text-3xl">
          Make Easy <span className='text-[#fe3600]'>Documents</span>
        </h1>
      </div>

      {/* Search Input */}
      <div className="hidden sm:flex items-center space-x-4">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search documents..."
            className="border border-gray-300 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#03ac26] w-full transition-all"
          />
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      {/* Add space between search and profile */}
      <div className="ml-6"></div>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          className={`flex items-center focus:outline-none text-gray-700 hover:text-gray-900 transition-colors ${dropdownOpen ? 'active' : ''}`}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <User className={`h-6 w-6 ${dropdownOpen ? 'animate-blink' : ''}`} />
          {dropdownOpen ? (
            <ChevronUp className="h-4 w-4 ml-1" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-1" />
          )}
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-2 z-10">
            <Link to="/dashboard/uprofile">
              <button
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full transition-colors"
                onClick={() => setDropdownOpen(false)} // Close dropdown on click
              >
                <User className="h-4 w-4 mr-2" />
                User Profile
              </button>
            </Link>
            <button
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full transition-colors"
              onClick={handleLogout} // Trigger logout function
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Uheader;
