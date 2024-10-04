import React, { useState } from 'react';
import { motion } from 'framer-motion';



const TransactionHistory = () => {
    const sampleData = [
        { id: 1, name: 'रमेश पाटील', username: 'ट्रॅक्टर', email: 'ramesh@mail.com', address: 'MH 12 DE 1433', mobile: '9876543210', date: '19/09/2022 - 11:00 to 13:00' },
        { id: 2, name: 'सुरेश यादव', username: 'फॉर्च्युनर', email: 'suresh@mail.com', address: 'MH 14 XY 9876', mobile: '9876543211', date: '20/09/2022 - 10:00 to 12:00' },
        { id: 3, name: 'महेश सिंह', username: 'स्विफ्ट', email: 'mahesh@mail.com', address: 'MH 12 AB 4321', mobile: '9876543212', date: '21/09/2022 - 12:00 to 14:00' },
        { id: 4, name: 'नितेश जोशी', username: 'स्कॉर्पियो', email: 'nitesh@mail.com', address: 'MH 13 CD 8765', mobile: '9876543213', date: '22/09/2022 - 09:00 to 11:00' },
        { id: 5, name: 'संदीप शहा', username: 'होंडा सिटी', email: 'sandeep@mail.com', address: 'MH 11 EF 5432', mobile: '9876543214', date: '23/09/2022 - 08:00 to 10:00' },
        { id: 6, name: 'प्रकाश पाटील', username: 'फोर्ड', email: 'prakash@mail.com', address: 'MH 10 GH 6789', mobile: '9876543215', date: '24/09/2022 - 07:00 to 09:00' },
        { id: 7, name: 'मोहित राठोड', username: 'ऑल्टो', email: 'mohit@mail.com', address: 'MH 09 IJ 1234', mobile: '9876543216', date: '25/09/2022 - 06:00 to 08:00' },
        { id: 8, name: 'राहुल मिश्रा', username: 'इनोव्हा', email: 'rahul@mail.com', address: 'MH 08 KL 2345', mobile: '9876543217', date: '26/09/2022 - 05:00 to 07:00' },
        { id: 9, name: 'विकास नायक', username: 'फिएट', email: 'vikas@mail.com', address: 'MH 07 MN 3456', mobile: '9876543218', date: '27/09/2022 - 04:00 to 06:00' },
        { id: 10, name: 'रोहित देशमुख', username: 'सियाज', email: 'rohit@mail.com', address: 'MH 06 OP 4567', mobile: '9876543219', date: '28/09/2022 - 03:00 to 05:00' }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sampleData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(sampleData.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flex-1 overflow-auto relative z-10">
            <h2 className="mt-6 mb-6 mx-5 text-2xl text-white text-center bg-blue-900 p-6 rounded-lg shadow-lg transition-transform duration-300">
                Transaction History 
            </h2>
            <div className="mx-5">
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-x-auto w-full max-w-[20rem] sm:max-w-full"
                >
                    <table className="w-full min-w-[700px] mx-auto text-sm md:text-md lg:text-lg bg-white shadow-md rounded-lg border-collapse">
                        <thead>
                            <tr className="bg-gradient-to-r from-blue-500 to-blue-950">
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">ID</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Appication Name</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Date</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Time</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Transaction ID</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((user, index) => (
                                <tr key={user.id} className="bg-white">
                                    <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">
                                        {index + 1 + (currentPage - 1) * itemsPerPage}
                                    </td>
                                    <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">{user.name}</td>
                                    <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">{user.username}</td>
                                    <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-blue-600 hover:font-semibold cursor-pointer">
                                        {user.email}
                                    </td>
                                    <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">{user.address}</td>
                                    <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">{user.mobile}</td>
                                   
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
                <div className="flex justify-between mt-4">
                    <button
                        onClick={prevPage}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span className="text-gray-600">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={nextPage}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransactionHistory;
