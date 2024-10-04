import { Link, useLocation } from 'react-router-dom';
import { X, Home, BarChart2, Settings, ChevronDown, ChevronUp, FileText, Folder, Globe } from 'lucide-react'; // Updated icons
import { useState } from 'react';

function Usidebar({ sidebarOpen, setSidebarOpen }) {
  const [reportDropdownOpen, setReportDropdownOpen] = useState(false);
  const location = useLocation(); // Get the current location

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed inset-y-0 left-0 z-50 w-64 bg-blue-100 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-16 bg-blue-900 px-4">
        <span className="text-white text-2xl font-bold text-center">User Panel</span>
        <button className="text-white focus:outline-none lg:hidden" onClick={() => setSidebarOpen(false)}>
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="mt-5">
        <Link
          to="/dashboard/dashboard"
          className={`flex items-center px-6 py-3 text-black hover:bg-green-400 ${isActive('/dashboard/dashboard') ? 'bg-orange-300 text-blue-800' : 'text-black'
            }`}
        >
          <Home className="h-5 w-5 mr-3" />
          Dashboard
        </Link>
        <Link
          to="/dashboard/my_application"
          className={`flex items-center px-6 py-3 mt-2 ${isActive('/dashboard/my_application') ? 'bg-orange-300 text-blue-800' : 'text-black'
            } hover:bg-green-400`}
        >
          <BarChart2 className="h-5 w-5 mr-3" />
          My Applications
        </Link>
        <Link
          to="/dashboard/allServices"
          className={`flex items-center px-6 py-3 mt-2 ${isActive('/dashboard/allServices') ? 'bg-orange-300 text-blue-800' : 'text-black'
            } hover:bg-green-400`}
        >
          <Folder className="h-5 w-5 mr-3" />
          All Services
        </Link>
        <div className="relative">
          <button
            className="flex items-center px-6 py-3 mt-2 text-black hover:bg-green-400 w-full text-left"
            onClick={() => setReportDropdownOpen(!reportDropdownOpen)}
          >
            <Settings className="h-5 w-5 mr-3" />
            Reports
            {reportDropdownOpen ? (
              <ChevronUp className="h-5 w-5 ml-auto" />
            ) : (
              <ChevronDown className="h-5 w-5 ml-auto" />
            )}
          </button>
          {reportDropdownOpen && (
            <div className="absolute left-0 mt-2 w-full bg-orange-100 border border-gray-300 rounded-lg shadow-lg z-10">
              <Link to="/dashboard/transactionHistory">
                <button
                  className="flex items-center px-6 py-3 text-black hover:bg-gray-200 w-full text-left rounded-t-lg"
                  onClick={() => setReportDropdownOpen(false)} // Close dropdown on click
                >
                  <FileText className="h-5 w-5 mr-3" />
                  Transaction History
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Add 'Go to Website' button */}
        <Link
          to="/"
          className={`flex items-center justify-center px-4 py-3 mt-9 text-green-700 font-semibold rounded-lg shadow-md transition-all duration-300 mx-8 ${('/') ? 'bg-green-500 text-white' : 'bg-green-200 text-green-800'
            } hover:bg-orange-500 hover:text-white hover:shadow-lg transform hover:scale-105`}
        >
          <Globe className="h-5 w-5 mr-2" />
          Go to Website
        </Link>

      </nav>
      <div className="lg:hidden absolute bottom-4 left-4 right-4">
        <button
          className="w-full flex items-center justify-center px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="h-6 w-6 mr-2" />
          Close Sidebar
        </button>
      </div>
    </div>
  );
}

export default Usidebar;
