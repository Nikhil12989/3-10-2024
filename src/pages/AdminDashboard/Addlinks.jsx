import React from 'react'
import { motion } from 'framer-motion';
import { FaTrash } from 'react-icons/fa';
const Addlinks = () => {
    return (
        <div className='flex1'>
            <h2 className="mt-6 mb-6 ml-5 mr-5 text-2xl text-white text text-center bg-blue-900 p-6 rounded-lg shadow-lg transition-transform duration-300 ">
                Add Video Link (For user Dashboard)
            </h2>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className='overflow-x-auto w-full'
            >
                <section class="max-w-4xl p-6 mb-12 mt-10 mx-auto bg-gradient-to-r from-blue-500 to-blue-800 rounded-md shadow-xl dark:bg-gray-800">
                    <form>
                        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label class="text-white font-semibold text-xl dark:text-gray-200" for="username">
                                    Video Title<span class="text-red-500 ml-1">*</span>
                                </label>
                                <input id="username" type="text" placeholder='Enter Video Title...' class="block w-full px-4 py-2 mt-2 
     text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
      dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 
      focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                            </div>


                            <div>
                                <label class="text-white font-semibold text-xl dark:text-gray-200" for="videolinks">Video Link<span class="text-red-500 ml-1">*</span></label>
                                <input id="videolinks" type="text" placeholder='Enter Video Link...' class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div class="flex justify-end mt-6">
                                <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-400 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Uploade</button>
                            </div>
                            <div class="flex justify-end mt-6">
                                <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform  rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 bg-green-400">Cancel</button>
                            </div>
                        </div>
                    </form>
                </section>
            </motion.div>

            <div className='mx-5 mb-20  '>
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
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Video Title </th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Video Link </th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Date</th>
                                <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white">
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">1</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">XYZ</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">XYZ</td>
                                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center text-[#797D8C]">07/02/2024</td>
                                <td className="px-2 md:px-4 lg:py-4 py-5 border-2 border-[#3f4b74] text-center flex justify-center space-x-4 text-[#797D8C]">
                                    <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </div>
    )
}

export default Addlinks
