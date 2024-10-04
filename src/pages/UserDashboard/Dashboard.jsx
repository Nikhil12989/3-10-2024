import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {

  return (
    <div className="p-4 sm:p-6 bg-slate-100">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0"></h1>
        <Link
          to="/dashboard/allServices"
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg border border-transparent hover:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-4 sm:mt-0"
        >
          See All Services
        </Link>

      </div>


      {/* Advertisement Blogs - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
  {/* Blog Post 1 */}
  <div className="bg-white p-4 rounded-lg shadow-xl flex flex-col">
    <img src="path/to/image1.jpg" alt="Boost Your Sales" className="w-full h-60 object-cover rounded-t-lg mb-4" />
    <h3 className="text-2xl text-center sm:text-2xl font-medium text-gray-600 mb-2">How to Boost Your Sales</h3>
  </div>

  <div className="bg-white p-4 rounded-lg shadow-xl flex flex-col">
    <img src="path/to/image1.jpg" alt="Boost Your Sales" className="w-full h-60 object-cover rounded-t-lg mb-4" />
    <h3 className="text-2xl text-center sm:text-2xl font-medium text-gray-600 mb-2">How to Boost Your Sales</h3>
  </div>
</div>


      {/* Featured Advertisements - Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl flex flex-col">
    <video controls className="w-full h-60 object-cover rounded-t-lg mb-4">
      <source src="path/to/video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h3 className="text-2xl text-center sm:text-2xl font-medium text-gray-600 mb-2">New Product Launch</h3>
    <a href="/advertisements/product-launch" className="bg-green-500 text-white px-4 py-2 rounded-lg text-center hover:bg-green-600 transition">Learn More</a>
  </div>

  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl flex flex-col">
    <video controls className="w-full h-60 object-cover rounded-t-lg mb-4">
      <source src="path/to/video2.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h3 className="text-2xl text-center sm:text-2xl font-medium text-gray-600 mb-2">New Product Launch</h3>
    <a href="/advertisements/product-launch" className="bg-red-500 text-white px-4 py-2 rounded-lg text-center hover:bg-red-600 transition">Learn More</a>

  </div>
</div>


    </div>
  );
};

export default Dashboard;
