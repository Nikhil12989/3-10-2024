import React from 'react';
import {
    FaBell, FaQuestionCircle, FaVideo, FaTasks
} from 'react-icons/fa';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
    { name: 'Learning License', count: 24 },
    { name: 'Renewal License', count: 18 },
    { name: 'Permanent License', count: 22 },
    { name: 'GST', count: 30 },
    { name: 'Gazette', count: 14 },
    { name: 'Shop Act', count: 20 },
    { name: 'Domicile', count: 16 },
];

const pieData = data.map((item) => ({ name: item.name, value: item.count }));

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#ffbb28', '#00C49F', '#FF8042'];

const Dashboard = () => {
    return (
        <div className='flex-1 overflow-auto relative z-10'>
            <h2 className="mt-6 mb-6 ml-5 mr-5 text-2xl text-white text text-center bg-blue-900 p-6 rounded-lg shadow-lg transition-transform duration-300 ">
                Empower Your Decisions with the Admin Dashboard
            </h2>

            {/* Grid Section for Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
                {/* Card 1 */}
                <div className='bg-blue-50 border border-blue-300 shadow-md rounded-lg p-4 flex items-center transform hover:scale-105 cursor-pointer'>
                    <FaBell className='text-blue-600 text-3xl mr-4' />
                    <div className=''>
                        <h3 className='font-semibold text-lg sm:text-xl text-blue-600'>Forms In-Progress</h3>
                    </div>
                </div>
                
                {/* Card 2 */}
                <div className='bg-yellow-50 border border-yellow-300 shadow-md rounded-lg p-4 flex items-center transform hover:scale-105 cursor-pointer'>
                    <FaQuestionCircle className='text-yellow-600 text-3xl mr-4' />
                    <div className=''>
                        <h3 className='text-lg sm:text-xl font-semibold text-yellow-600'>Forms Submitted</h3>
                    </div>
                </div>
                
                {/* Card 3 */}
                <div className='bg-green-50 border border-green-300 shadow-md rounded-lg p-4 flex items-center transform hover:scale-105 cursor-pointer'>
                    <FaVideo className='text-green-600 text-3xl mr-4' />
                    <div className=''>
                        <h3 className='text-lg sm:text-xl font-semibold text-green-600'>Forms Completed</h3>
                    </div>
                </div>

                {/* Card 4 */}
                <div className='bg-purple-50 border border-purple-300 shadow-md rounded-lg p-4 flex items-center transform hover:scale-105 cursor-pointer'>
                    <FaTasks className='text-purple-600 text-3xl mr-4' />
                    <div className=''>
                        <h3 className='text-lg sm:text-xl font-semibold text-purple-600'>Payment History</h3>
                    </div>
                </div>
            </div>

            {/* Bar and Pie Chart Section */}
            <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className='bg-white border border-gray-300 shadow-md rounded-lg p-4'>
                    <h3 className="text-lg sm:text-xl text-gray-700 mb-4 font-semibold">Forms Breakdown (Bar Chart)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#4A90E2" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='bg-white border border-gray-300 shadow-md rounded-lg p-4'>
                    <h3 className="text-lg sm:text-xl text-gray-700 mb-4 font-semibold">Forms Breakdown (Pie Chart)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
