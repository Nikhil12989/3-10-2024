import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Userdetails = () => {


    const [filteredData] = useState([]);    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className="flex-1 overflow-auto relative z-10">
            <h2 className="mt-6 mb-6 mx-5  text-2xl text-white text-center bg-blue-900 p-6 rounded-lg shadow-lg transition-transform duration-300">
                User Details
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
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Name</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Username</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Email</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Address</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Mobile No</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Date</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white">
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">1</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">रमेश पाटील</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">ट्रॅक्टर</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-blue-600 hover:font-semibold cursor-pointer">
                                    View Image
                                </td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">MH 12 DE 1433</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                    19/09/2022 - 11:00 to 13:00
                                </td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                    19/09/2022 - 11:00 to 13:00
                                </td>
                                <td className="px-2 md:px-4 lg:py-4 py-5 border-2 border-[#3f4b74] text-center flex justify-center space-x-4 text-[#797D8C]">
                                    <FaEdit className="cursor-pointer text-blue-500 hover:text-blue-700" />
                                    <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
                                </td>

                            </tr>
                            <tr className="bg-white">
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">1</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">रमेश पाटील</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">ट्रॅक्टर</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-blue-600 hover:font-semibold cursor-pointer">
                                    View Image
                                </td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">MH 12 DE 1433</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                    19/09/2022 - 11:00 to 13:00
                                </td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                    19/09/2022 - 11:00 to 13:00
                                </td>
                                <td className="px-2 md:px-4 lg:py-4 py-5 border-2 border-[#3f4b74] text-center flex justify-center space-x-4 text-[#797D8C]">
                                    <FaEdit className="cursor-pointer text-blue-500 hover:text-blue-700" />
                                    <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
                                </td>

                            </tr>
                            <tr className="bg-white">
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">1</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">रमेश पाटील</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">ट्रॅक्टर</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-blue-600 hover:font-semibold cursor-pointer">
                                    View Image
                                </td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">MH 12 DE 1433</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                    19/09/2022 - 11:00 to 13:00
                                </td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                    19/09/2022 - 11:00 to 13:00
                                </td>
                                <td className="px-2 md:px-4 lg:py-4 py-5 border-2 border-[#3f4b74] text-center flex justify-center space-x-4 text-[#797D8C]">
                                    <FaEdit className="cursor-pointer text-blue-500 hover:text-blue-700" />
                                    <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
                                </td>

                            </tr>
                            <tr className="bg-white">
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">1</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">रमेश पाटील</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">ट्रॅक्टर</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-blue-600 hover:font-semibold cursor-pointer">
                                    View Image
                                </td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">MH 12 DE 1433</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                    19/09/2022 - 11:00 to 13:00
                                </td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                    19/09/2022 - 11:00 to 13:00
                                </td>
                                <td className="px-2 md:px-4 lg:py-4 py-5 border-2 border-[#3f4b74] text-center flex justify-center space-x-4 text-[#797D8C]">
                                    <FaEdit className="cursor-pointer text-blue-500 hover:text-blue-700" />
                                    <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
                                </td>

                            </tr>
                            <tr className="bg-white">
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">1</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">रमेश पाटील</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">ट्रॅक्टर</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-blue-600 hover:font-semibold cursor-pointer">
                                    View Image
                                </td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">MH 12 DE 1433</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                    19/09/2022 - 11:00 to 13:00
                                </td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                    19/09/2022 - 11:00 to 13:00
                                </td>
                                <td className="px-2 md:px-4 lg:py-4 py-5 border-2 border-[#3f4b74] text-center flex justify-center space-x-4 text-[#797D8C]">
                                    <FaEdit className="cursor-pointer text-blue-500 hover:text-blue-700" />
                                    <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
                                </td>

                            </tr>
                            <tr className="bg-white">
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">1</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">रमेश पाटील</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">ट्रॅक्टर</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-blue-600 hover:font-semibold cursor-pointer">
                                    View Image
                                </td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">MH 12 DE 1433</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                    19/09/2022 - 11:00 to 13:00
                                </td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                    19/09/2022 - 11:00 to 13:00
                                </td>
                                <td className="px-2 md:px-4 lg:py-4 py-5 border-2 border-[#3f4b74] text-center flex justify-center space-x-4 text-[#797D8C]">
                                    <FaEdit className="cursor-pointer text-blue-500 hover:text-blue-700" />
                                    <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
                                </td>

                            </tr>
                            {/* Additional rows can follow the same structure */}
                        </tbody>
                    </table>
                </motion.div>
            </div>

            {/* Responsive Pagination */}
            <div className="flex flex-wrap justify-center mt-4">
                <button
                    className={`mx-1 px-3 py-1 md:px-4 md:py-2 text-white bg-blue-500 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        className={`mx-1 px-3 py-1 md:px-4 md:py-2 text-white bg-blue-500 rounded-md ${currentPage === i + 1 ? "bg-blue-700" : ""}`}
                        onClick={() => paginate(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    className={`mx-1 px-3 py-1 md:px-4 md:py-2 text-white bg-blue-500 rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Userdetails;
