import React,{useEffect,useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import shop from '../../assets/services/shop.png'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'

const Shop_act = () => {

  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Shop Act License</h1>

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

      <div className="container mx-auto py-10 px-4">
        {/* Main Container */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold border-b-4 border-orange-600 inline-block pb-2">
            Shop Act License
          </h2>
          <h3 className='pt-4 text-base'>" Make Easy Documents : Empowering Your Business with Shop Act Licenses!"
          </h3>
        </div>

        {/* Flex container to separate content */}
        <div className="flex flex-col pl-7 pr-7 lg:flex-row justify-between items-center gap-8">

          {/* Left Section (Text & Buttons) */}
          <div className="bg-gray-100 py-6 lg:py-12 flex-1">
            <div className="container mx-auto flex flex-col items-center px-4">
              <div className="bg-gray-100 px-4 sm:px-6 lg:px-8">
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">
                    Shop Act Registration :
                  </h3>
                  <p className="text-gray-600">
                  &nbsp;&nbsp;&nbsp;&nbsp;The term Clerks includes those employed in the hospitality sector, in shops, commercial establishments, and even rest houses, restaurants, movie halls, and other entertainment places and institutions.</p>
                  <br />
                  
                  <p> &nbsp;&nbsp;&nbsp;&nbsp; As regards to these servants and the work they perform, the state has enacted Gamasta Act. In the majority of countries around the globe, the situation of the working class as a whole remained as it was before the industrial revolution</p>
                <br />
                <p>After the industrial revolution there was an about turn in the paradigm of employment relations and the position of the working class began to improve very fast, several legislations were enacted for them.</p>
                
                </div>
              </div>

              {/* Buttons Section */}
              <div className="space-y-4 w-full max-w-sm text-center">
                <Link
                  to={'/shop_act_new'}
                  className="block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-transform duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  Apply for New Shop Act
                </Link>
              </div>

            </div>
          </div>


          {/* Image section with hover effect */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={shop} // Replace with the correct path for the driving license image
              alt="Shop act license at home"
              className="w-full h-auto max-w-lg lg:max-w-xl xl:max-w-2xl object-contain transform transition-transform duration-500 hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl rounded-lg"
            />
          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Shop_act
