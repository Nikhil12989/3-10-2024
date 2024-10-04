import React from 'react';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Formprice = () => {
    return (
        <div className='flex-1'>
            <h2 className="mt-6 mb-6 ml-5 mr-5 text-2xl text-white text text-center bg-blue-900 p-6 rounded-lg shadow-lg transition-transform duration-300 ">
                Form Price
            </h2>

            <div className='mx-5'>
                {/* Container holding the table with overflow-x-auto to make table scrollable */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-x-auto w-full max-w-[20rem] sm:max-w-full" // Set max width for mobile and full width for larger screens
                >
                    <table className="w-full min-w-[700px] mx-auto text-sm md:text-md lg:text-lg bg-white shadow-md rounded-lg border-collapse">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-500 to-blue-950">
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Sr no</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Form Name</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Old Price</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">New Price</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">GST Percentage</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white">
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">1</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">Learning Driving Lic</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">₹ 150</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">₹ 200</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]"> 20 %</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">₹ 220</td>
                                
                                
                            </tr>
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </div>
    );
};

export default Formprice;
