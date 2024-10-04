import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useAuth } from '../../context/auth'; // Adjust the path as needed
import axios from 'axios';
import { toast } from 'react-toastify';
import LoginModal from '../../components/LoginModel'; // Import the modal

const Company_Reg_ApplyNew = () => {
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
  
  const [formData, setFormData] = useState({

    fullName: "",
    companyName: "",
    email: "",
    address: "",
    pincode: "",
    mobileNumber: "",
    dateOfBirth: "",
    
    aadharCard: null,
    pancard: null,
    electricBill: null,
    photo: null,

  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is authenticated
    if (!auth.token) {
      toast.error('Please login to submit the form.');
      return;
    }

    // Create FormData object
    const form = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        form.append(
          key.startsWith('aadharCard') ? 'documents.aadharCard' :
            key.startsWith('pancard') ? 'documents.pancard' :
              key.startsWith('electricBill') ? 'documents.electricBill' :
                key.startsWith('photo') ? 'documents.photo' :
                  key,
          formData[key]
        );
      }
    }



    try {
      // Post form data to API
      const response = await axios.post(
        'http://192.168.1.50:5000/api/companyRegistration/createCompanyRegistration',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${auth.token}`
          }
        }
      );

      // Notify user of success
      toast.success('Company Registration submitted successfully!');
    } catch (error) {
      // Notify user of error
      toast.error('Error submitting Company Registration.');
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="text-black text-xl md:text-2xl font-semibold">Company Registration</h1>
          <h1
            className="text-lg md:text-xl font-bold underline underline-offset-8 mb-2 lg:mb-0 lg:ml-4 animate-[intenseBlink_1s_ease-in-out_infinite]"
          >
            100% Fees Refundable, if Service is not Completed!
          </h1>
          <nav className="breadcrumbs">
            <ol className="flex space-x-4 text-sm">
              <li><Link to={'/'} className="text-black hover:underline hover:text-black text-base">Home</Link></li>
              <li className="text-black">/</li>
              <li>
                <Link to={'/company_registration'} className="flex items-center text-black hover:underline hover:text-black text-base">
                  Go Back
                  <IoArrowBackCircle className="h-5 w-5 mr-2 ml-2" />
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div>
        <h2 className="text-green-600 text-center font-semibold text-2xl pt-8 sm:mt-0">- Company Registration -</h2>
      </div>
      <form
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-md p-6 mt-10 mb-10"
        onSubmit={handleSubmit}
      >
        <br /><br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form Fields */}
          <div className="form-group">
            <label htmlFor="fullName" className="block text-gray-600 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="companyName" className="block text-gray-600 font-semibold mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.companyName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address" className="block text-gray-600 font-semibold mb-2">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="pincode" className="block text-gray-600 font-semibold mb-2">Pincode</label>
            <input
              type="text"
              name="pincode"
              id="pincode"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.pincode}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber" className="block text-gray-600 font-semibold mb-2">Mobile Number</label>
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth" className="block text-gray-600 font-semibold mb-2">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="mt-10 text-center">
          <h2 className="text-green-600 font-semibold text-2xl">
            - Upload Required Documents -
          </h2>
        </div> <br />
        {/* File Uploads */}
        <div className="mt-6 mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Aadhar Card</label>
              <input
                type="file"
                name="aadharCard"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Pan Card</label>
              <input
                type="file"
                name="pancard"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Electricity Bill</label>
              <input
                type="file"
                name="electricBill"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
  {/* Render Login Modal only if not logged in */}
  {!isLoggedIn && isModalOpen && <LoginModal closeModal={closeModal} />}
      <Footer />
    </div>
  );
};

export default Company_Reg_ApplyNew;
