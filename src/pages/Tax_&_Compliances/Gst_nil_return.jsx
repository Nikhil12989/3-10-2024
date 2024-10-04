
import React, {useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import dr1 from '../../assets/gst/5.jpg'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'; // Import the simpler icon
import Common_form from '../../components/Common_form'
import LoginModal from '../../components/LoginModel'; // Import the modal
import { useAuth } from '../../context/auth'; // Import the useAuth hook

const Gst_nil_return = () => {
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
                    <h1 className=" text-black text-xl md:text-2xl font-semibold">GST NIL Return Filing</h1>

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
                    GST NIL Return Filing
                    </h2>
                </div>

                {/* Flex container to separate content */}
                <div className="flex flex-col pl-7 pr-7 lg:flex-row justify-between items-center gap-8">

                    {/* Left Section (Text & Buttons) */}
                    <Common_form />

                    {/* Image section with hover effect */}
                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src={dr1} // Replace with the correct path for the driving license image
                            alt="Driving License"
                            className="w-full h-auto max-w-lg lg:max-w-xl xl:max-w-2xl object-contain transform transition-transform duration-500 hover:scale-105 hover:rotate-0 shadow-lg hover:shadow-2xl rounded-lg"
                        />
                    </div>

                </div>

            </div>
  {/* Render Login Modal only if not logged in */}
  {!isLoggedIn && isModalOpen && <LoginModal closeModal={closeModal} />}
            <Footer />
        </div>
    )
}

export default Gst_nil_return
