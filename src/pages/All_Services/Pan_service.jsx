import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import pan from '../../assets/our_services/1.jpg'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'

const Pan_service = () => {
  return (
    <div>
      <Header />
      {/* Page Title */}

      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">PAN Card Services</h1>

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
            PAN Card Services
          </h2>
        </div>

        {/* Flex container to separate content */}
        <div className="flex flex-col pl-7 pr-7 lg:flex-row justify-between items-center gap-8">

          {/* Left Section (Text & Buttons) */}
          <div className="bg-gray-100 py-6 lg:py-12 flex-1">
            <div className="container mx-auto flex flex-col items-center px-4">
              <div className="text-center mb-10 max-w-2xl">
                <p className="text-lg leading-relaxed mb-6">
                  <span className="text-green-600 font-bold">Make Easy </span>
                  <span className="text-red-600 font-bold">Documents</span>
                  <span className="font-bold"> "PAN Card: Your Key to Unlocking Financial Freedom!"</span>
                </p>
                <p className="text-gray-700 mb-2">
                  &nbsp;&nbsp; In our organization, we make the process of opening a PAN card simple and efficient. We provide clear, gradual procedures and make all documents required for the process available to ensure the entire procedure is stress free.
                </p>
                <p className="text-gray-700 mb-2">We help with every single thing, starting from the completion of forms and ending with the delivery of necessary papers, which allows you to fill in a PAN card application quickly and efficiently.</p>
<p className="text-gray-700">This particular strategy has been developed in such a way as to reduce the amount of work that has to be done and to increase levels of convenience, so that you are able to concentrate on carrying out your main duties without getting caught up with administrative work.</p>
              </div>

              {/* Buttons Section */}
              <div className="space-y-4 w-full max-w-sm text-center">
                <Link
                  to={'/pan_Individual'}
                  className="block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-transform duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  Apply for Individual Pan Card
                </Link>
                <Link
                  to={'/pan_Company_trust'}
                  className="block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-transform duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                >Apply for Comapany / Trust (संस्था) Pan Card
                </Link>
              </div>

            </div>
          </div>


          {/* Image section with hover effect */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={pan} // Replace with the correct path for the driving license image
              alt="Pan card"
              className="w-full h-auto max-w-lg lg:max-w-xl xl:max-w-2xl object-contain transform transition-transform duration-500 hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl rounded-lg"
            />
          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Pan_service
