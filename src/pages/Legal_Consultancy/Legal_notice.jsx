import React, {useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Common_form from '../../components/Common_form'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'
import LoginModal from '../../components/LoginModel'; // Import the modal
import { useAuth } from '../../context/auth'; // Import the useAuth hook

const Legal_notice = () => {
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
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Legal Notice</h1>

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
          <h2 className="text-2xl lg:text-3xl font-bold border-b-4 border-red-600 inline-block pb-2">
            Legal Notice
          </h2>
          <h3 className='pt-4 text-base font-semibold'>Online Legal Advice | Guaranteed Solution To Every Legal Issue
          </h3>
          <p className='pt-4'>A Legal Notice refers to the written communication sent by one entity to another, usually to remind a person of some legal duty, demand, or intention to sue. It also constitutes the important prerequisite for any legal action, its scope of application in civil and criminal issues.

          </p>
        </div>
        <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}

          <Common_form />

          {/* Right side - Content */}
          <div>
            <h1 className="text-2xl font-bold mb-4">
              What is a Legal Notice? What purpose does it serve?
            </h1>
            <p className="mb-4">
              A “Legal Notice” is a legal intimation sent to the opponent indicating that the aggrieved is preparing to file a lawsuit against the concern in case the demand mentioned in the relevant notice is not fulfilled. Therefore, in a nutshell a legal notice can be defined as a formal communication to any person or a legal entity, informing the other party of your intention to undertake legal proceedings against them. This notice, when sent, <br /> conveys your intention prior to the legal proceedings and thus, makes the party aware of your grievance.            </p>
            <h2 className="text-xl font-semibold mb-2">When to send a Legal Notice?</h2>
            <p>
              A legal notice is generally issued by an advocate appointed by the victim, on behalf of his/her client for the purpose of soliciting a settlement.
              <br />
              There are numerous reasons for which one can send a legal notice to a person or a legal entity. However, the most common reasons are as follows:
              <br />
              • Property related disputes for example mortgage, delay in possession delivery by the builder, eviction of the tenant on unreasonable grounds, partition of family property, etc.</p>
          </div>
        </div>
      </div>
  {/* Render Login Modal only if not logged in */}
  {!isLoggedIn && isModalOpen && <LoginModal closeModal={closeModal} />}
      <Footer />
    </div>
  )
}

export default Legal_notice
