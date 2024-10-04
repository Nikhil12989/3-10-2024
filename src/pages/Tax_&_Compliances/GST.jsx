import React, {useEffect, useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import gst1 from '../../assets/gst/1.jpg'
import gst2 from '../../assets/gst/2.jpg'
import gst3 from '../../assets/gst/3.jpg'
import gst4 from '../../assets/gst/4.jpg'
import gst5 from '../../assets/gst/5.jpg'
import gst6 from '../../assets/gst/6.jpg'
import gst7 from '../../assets/gst/7.jpg'
import gst8 from '../../assets/gst/8.jpg'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'
import LoginModal from '../../components/LoginModel'; // Import the modal

const GST = () => {

  return (
    <div>
      <Header />

      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">GST Services</h1>

          {/* Refund message */}
          <style jsx>{`
    @keyframes intenseBlink {
      0%, 100% { opacity: 1; color: #f20000; }
      20% { opacity: 1; color: #000000; }
    }
  `}</style>
          <h1
            className="
      text-lg md:text-xl font-bold underline underline-offset-8 
      mb-2 lg:mb-0 lg:ml-4 
      animate-[intenseBlink_1s_ease-in-out_infinite]
    "
          >
            100% Fees Refundable, if Service is not Completed!
          </h1>

          {/* Breadcrumbs */}
          <nav className="breadcrumbs mt-2 lg:mt-0">
            <ol className="flex space-x-2 lg:space-x-4 text-sm items-center">
              <li className="flex items-center">
                <AiFillHome className="mr-1 text-base hover:underline" />
                <Link to={'/'} className="text-black hover:underline text-base">Home</Link>
              </li>
              <li className="text-black">/</li>
              <li className="flex items-center">
                <AiOutlineAppstore className="mr-1 text-base" />
                <Link to={'/all_service'} className="text-black hover:underline text-base">All Services</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Services */}

      <div className="text-center mb-4 mt-5">
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-lg">
          "Connecting Goods and Services with Simplicity: GST Services" </p>
      </div>

      <div className="flex justify-center px-4 sm:px-0 pt-6 pb-6">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <Link to={'/gst_registration'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              className="object-cover w-full h-48"
              src={gst1}
              alt="avatar"
            />
            <div className="py-4 text-center ml-3 mr-3">
              <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                GST Registration
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Become a Govt. registered taxpayer in India. GST expert of <span
                  className='text-green-600'> Make Easy </span> <span className='text-red-600'>Documents </span>
                will help you in every single step to get GST number. Apply for GSTIN from any states of India.
              </span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to={'/gstreturn'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              className="object-cover w-full h-48"
              src={gst2}
              alt="avatar"
            />
            <div className="py-4 text-center ml-3 mr-3">
              <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                GST Return Filing
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Simplify compliance with GST expert assisted online GST return filing.
                Purchase plan and let us handle the GST Returns for you.
              </span>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to={'/gstEwaybill'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              className="object-cover w-full h-48"
              src={gst8}
              alt="avatar"
            />
            <div className="py-4 text-center ml-3 mr-3">
              <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                GST E-WayBills
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Trusted by over 1,20,000+ Corporate Entities | 360° GST Online E-Way Bill
                Generation Assistance from anywhere in our Nation.                            </span>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to={'/gstmodification'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              className="object-cover w-full h-48"
              src={gst4}
              alt="avatar"
            />
            <div className="py-4 text-center ml-3 mr-3">
              <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                GST Modification Update
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                <span
                  className='text-green-600'> Make Easy </span> <span className='text-red-600'>Documents </span>
                will help you fulfil all the formalities regarding the GST
                modification and amendment of GST registration.
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex justify-center px-4 sm:px-0 pt-6 pb-11">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <Link to={'/gstnillreturn'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              className="object-cover w-full h-48"
              src={gst5}
              alt="avatar"
            />
            <div className="py-4 text-center ml-3 mr-3">
              <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                GST NIL Return Filing
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Let the country’s leading business taxation experts Evaluate, Manage, and
                File your GST Nil Returns | Complete Digital Assistance at your Fingertips.                            </span>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to={'/gstr'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              className="object-cover w-full h-48"
              src={gst6}
              alt="avatar"
            />
            <div className="py-4 text-center ml-3 mr-3">
              <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                GSTR-9 Annual Filing
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Our Legal Tax Experts are Never Late in Filing Annual GSTR-9 for You | Get
                360° Professional Guidance in Each Step from Collecting Documents to GST Filing.                            </span>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to={'/gstlutt'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              className="object-cover w-full h-48"
              src={gst7}
              alt="avatar"
            />
            <div className="py-4 text-center ml-3 mr-3">
              <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                GST LUT Filing
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Launch your Export Business in the Foreign Market with GST LUT Filing from
                our Specialised Taxation Team at <span
                  className='text-green-600'> Make Easy </span> <span className='text-red-600'>Documents </span>™ | Get Approval Quickly.                            </span>
            </div>
          </Link>

          {/* Card 4 */}
          <Link to={'/gstcancle'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <img
              className="object-cover w-full h-48"
              src={gst3}
              alt="avatar"
            />
            <div className="py-4 text-center ml-3 mr-3">
              <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                GST Surrender/Cancel
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Your GST registration can be cancelled at anytime due to various reasons. You
                can easily cancel a GST registration online through <span
                  className='text-green-600'> Make Easy </span> <span className='text-red-600'>Documents </span> .                            </span>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GST
