import React, {useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Common_form from '../../components/Common_form'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'
import LoginModal from '../../components/LoginModel'; // Import the modal
import { useAuth } from '../../context/auth'; // Import the useAuth hook

const Public_limited_company = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [auth] = useAuth(); // Access auth state from context
  const isLoggedIn = Boolean(auth.token); // Determine if user is logged in based on token

  useEffect(() => {
    // Show the modal if the user is not logged in
    if (!isLoggedIn) {
      setIsModalOpen(true); // Show the modal if not logged in
    }
  }, [isLoggedIn]); // Run effect whenever isLoggedIn changes

  const closeModal = () => {
    setIsModalOpen(false); // Function to close modal
  };
  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Public Limited Company
          </h1>

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
      <div className="container mx-auto px-4 lg:px-16 py-8">
        <div className="text-center mb-8">
          <h2 className="lg:text-2xl font-bold border-b-4 border-red-600 inline-block pb-2">Online Public Limited Company Registration in India | Transparent & Lowest Pricing

          </h2>
          <h3 className='pt-4 text-base font-semibold'>Get relaxed! Keep planning for your business growth & let India’s recommended team of CA/CS register your Public Limited Company with
            extended assistance on Documentation, Preparation, Filing and subsequent Follow-ups with ROC & the MCA.
          </h3>
        </div>
        <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}

          <Common_form />

          {/* Right side - Content */}
          <div>

            <h1 className="text-2xl font-bold mb-4 mt-10">
              Requirements for Public Limited Company Registration
            </h1>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>✔ At least 7 Members on-board</li>
                <li>✔ Minimum 3 Directors, one of them must be a resident of India
                </li>
                <li>✔ The Directors and the Shareholder can be the same individual
                </li>
                <li>✔ Minimum Authorized Capital Rs. 5,00,000
                </li>
                <li>✔ DIN of all the directors
                </li>
                <li>✔ DSC of all the Directors

                </li>
                <li>✔ Address of the Company’s registered office


                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
  {/* Render Login Modal only if not logged in */}
  {!isLoggedIn && isModalOpen && <LoginModal closeModal={closeModal} />}
      <Footer />
    </div>
  )
}

export default Public_limited_company
