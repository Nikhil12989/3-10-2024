import React, {useEffect, useState } from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Common_form from '../../components/Common_form'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'
import LoginModal from '../../components/LoginModel'; // Import the modal
import { useAuth } from '../../context/auth'; // Import the useAuth hook

const Section_8_company = () => {
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
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Section 8 Company</h1>

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
          <h2 className="text-2xl lg:text-2xl font-bold border-b-4 border-red-600 inline-block pb-2">
            Section 8 Company
          </h2>
          <h3 className='pt-4 text-base font-semibold'>Apply for Section 8 Company Online & Get Approved By Central Govt. Of India

          </h3>
          <p className='pt-4'>Launch Your Section 8 foundation by our Company Registration Experts at
            <span className='text-green-600'>Make Easy</span> <span className='text-orange-600'>Documents</span>™.
            With the best CAs/CSs Panel to handhold you through the entire process, the Drafting till Completion - all documentation of a Section 8 Incorporation is on us</p>
        </div>
        <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}

          <Common_form />

          {/* Right side - Content */}
          <div>
            <h1 className="text-2xl font-bold mb-4">
              Who will be Preparing & Registering Your Section 8 Company?
            </h1>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">

              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>✔ Our esteemed CAs will be preparing will handling your accounts personally
                </li>
                <li>✔ India’s most efficient CA panel</li>
                <li>✔ 360° corporate legal assistance</li>
                <li>✔ Paperless documentation</li>
                <li>✔ A panel of 25+ efficient Chartered Accountants who are always prepared to provide you the adequate online assistance.</li>
              </ul>
            </div>


            <p>
              A company is referred to as Section 8 Company when it registered as a Non-Profit Organization (NPO) or Non-Governmental organizations (NGOs) i.e. when it has motive of promoting arts, commerce, education, charity, protection of environment, sports, science, research, social welfare, religion and intends to
              use its profits (if any) or other income for under section 8(1a, 1b, 1c) of the Companies Act, 2013. </p>
          </div>
        </div>
      </div>
  
  {/* Render Login Modal only if not logged in */}
  {!isLoggedIn && isModalOpen && <LoginModal closeModal={closeModal} />}
      <Footer />
    </div>
  )
}

export default Section_8_company
