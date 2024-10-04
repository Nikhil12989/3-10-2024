import React, {useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/auth';
import LoginModal from '../../components/LoginModel'; // Import the modal 

const Online_legal_advice = () => {

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
  // Define the initial form data
  const initialFormData = {
    typeofadvice: '',
    fullName: '',
    email: '',
    address: '',
    state: '',
    pincode: '',
    mobileNumber: '',
    dateOfBirth: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is authenticated
    if (!auth.token) {
      toast.error('Please log in to fill out the form.');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.49:5000/api/commonForm/createcommon-form', formData);
      toast.success('Form submitted successfully!');
      console.log(response.data); // Handle the response as needed

      // Reset the form fields to their initial state after successful submission
      setFormData(initialFormData);
    } catch (error) {
      toast.error('Error submitting the form.');
      console.error(error); // Handle the error as needed
    }
  };
  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Online Legal Advice</h1>

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
            Online Legal Advice
          </h2>
          <h3 className='pt-4 text-base font-semibold'>Online Legal Advice | Guaranteed Solution To Every Legal Issue
          </h3>
          <p className='pt-4'>Resolve your Legal Dispute | Intimation sent on Virtual Mode! We give Legal Advice and provide a solution to every legal disagreement.

          </p>
        </div>
        <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}

          {/* Left side - Form */}
          <div className="bg-white p-10 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Type Of Advice ?</label>
                  <input
                    type="text"
                    name="typeofadvice"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Describe Your Problem..."
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Enter Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="---"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="---"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="---"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="---"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="---"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Mobile Number</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="---"
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Date of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 font-semibold text-white py-3 mt-5 rounded-md hover:bg-green-700 transition-all duration-200 tracking-wide"
              >
                SUBMIT
              </button>

            </form>
          </div>

          {/* Right side - Content */}
          <div> <br />
            <h1 className="text-2xl font-bold mb-4">
              " <span className='text-green-600'>Make Easy</span> <span className='text-orange-600'>Documents</span>  : Simplifying Legal Complexity "
            </h1>
            <p>
              Legal Help is the way to assist the people who are not able to access the court easily. Legal Help includes various kinds of advice, providing service, forming draft or agreement etc. Legal advice is the way of giving professional opinion relating to any factual matter or any situation.
            </p> <br />
            <p className="mb-4">
              Our company provides the solution by taking aid from virtual support to serve our clients based on the requirement. We provide the best of advice in exchange for monetary compensation.</p>
            <h2 className="text-xl font-semibold mb-2">We can help, you seek legal advice from <span className='text-green-600'>Make Easy</span> <span className='text-orange-600'>Documents</span> and make this entire process seamless.</h2>
            <p>
              In our common law system, in criminal and civil law, the advice is being provided by the advocates or lawyers, or other professionals (such as tax experts, professional advisors, etc). </p>
          </div>
        </div>
      </div>
      <ToastContainer />
        {/* Render Login Modal only if not logged in */}
        {!isLoggedIn && isModalOpen && <LoginModal closeModal={closeModal} />}
      <Footer />
    </div>
  )
}

export default Online_legal_advice
