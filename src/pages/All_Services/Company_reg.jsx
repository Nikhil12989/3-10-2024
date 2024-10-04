import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import company from '../../assets/our_services/cmp.jpg'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'

const Company_reg = () => {
  return (
    <div>
      <Header />
      {/* Page Title */}
      
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Company Registration</h1>

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
                <AiFillHome
                 className="mr-1 text-base hover:underline" />
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
            Company Registration

          </h2>
        </div>

        {/* Flex container to separate content */}
        <div className="flex flex-col pl-7 pr-7 lg:flex-row justify-between items-center gap-8">

          {/* Left Section (Text & Buttons) */}
          <div className="bg-gray-100 py-6 lg:py-12 flex-1">
            <div className="container mx-auto flex flex-col items-center px-4">
              <div className="text-center mb-10 max-w-2xl">
                <p className="text-lg leading-relaxed mb-6">
                  <span className="font-bold"> "<span className='text-orange-600'> Company Registration </span> : Building the Foundation for Your Business Success ! "</span>
                </p>
                <p className="text-gray-700 mb-8">
                  &nbsp;&nbsp;  We at the firm understand how complicated it may be to register a company and hence find ways to make it simple and bother-free. We provide an easy to follow step-by-step walkthrough to assist you in filling out the necessary documents and complying with legal obligations
                </p>
                <p className="text-gray-700 mb-8">
                  &nbsp;&nbsp;   Vetting and collating required documentation, filing of forms and undertaking any legal registration processes, our team is ready to assist you in each and every aspect.
                </p>
                <p className="text-gray-700 mb-8">
                  &nbsp;&nbsp;   In providing simplicity and clear guidelines, we guarantee that the registration of your company is effectively done allowing you to direct your energy into starting up and expanding your business without any worries.
                </p>

              </div>

              {/* Buttons Section */}
              <div className="space-y-4 w-full max-w-sm text-center">
                <Link
                  to={'/company_reg_new'}
                  className="block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-transform duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  Apply for Company Registration
                </Link>
              </div>

            </div>
          </div>


          {/* Image section with hover effect */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={company} // Replace with the correct path for the driving license image
              alt="company registration"
              className="w-full h-auto max-w-lg lg:max-w-xl xl:max-w-2xl object-contain transform transition-transform duration-500 hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl rounded-lg"
            />
          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Company_reg
