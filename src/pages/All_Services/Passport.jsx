import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import voat from '../../assets/services/1111.avif'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'

const Passport = () => {
  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Passport  </h1>

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
            Passport
          </h2> <br />
          <p>Get Your Passport with Make Easy Documents <br />
            A passport is a travel document issued by a country's government to its citizens that verifies the identity and nationality of the holder for the purpose of international travel.</p>
        </div>

        {/* Flex container to separate content */}
        <div className="flex flex-col pl-7 pr-7 lg:flex-row justify-between items-center gap-8">

          {/* Left Section (Text & Buttons) */}
          <div className="bg-gray-100 py-6 lg:py-12 flex-1">
            <div className="container mx-auto flex flex-col items-center px-4">
              <div className="text-center mb-10 max-w-2xl">
                <p className="text-lg leading-relaxed mb-6">
                  <span className="text-green-600 font-bold">How much passport documents required?</span>
                </p>
                <p className="text-gray-700 mb-8">
                A passport is your country's official ID that allows you to travel internationally.
                A visa is a stamp from another country's embassy that lets you enter for a particular reason and time.
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>✔ Proof of age Birth Certificate, School Leaving Certificate,</li>
                    <li>✔ Proof of nationality (Birth Certificate, Voter ID card, etc.)</li>
                    <li>✔ Proof of address (Aadhaar card, Voter ID card, Electricity bill, etc.) </li>
                  </ul>
              </div>

              {/* Buttons Section */}
              <div className="space-y-4 w-full max-w-sm text-center">
                <Link
                  to={'/passport_fresh'}
                  className="block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-transform duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  Apply for Fresh Passport 
                </Link>
                <Link
                  to={'/passport_Reissue'}
                  className="block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-transform duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  Apply for Re-Issue Passport
                </Link>
              </div>

            </div>
          </div>


          {/* Image section with hover effect */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={voat} // Replace with the correct path for the driving license image
              alt="votter License"
              className="w-full h-auto max-w-lg lg:max-w-xl xl:max-w-2xl object-contain transform transition-transform duration-500 hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl rounded-lg"
            />
          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Passport
