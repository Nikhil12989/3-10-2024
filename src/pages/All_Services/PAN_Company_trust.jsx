import React, {useEffect, useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link ,  useNavigate } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useAuth } from '../../context/auth'; // Import useAuth
import LoginModal from '../../components/LoginModel'; // Import the modal


const PAN_Company_trust = () => {
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

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    companyFullName: "",
    ownerFullName: "",
    email: "",
    companyAddress: "",
    pincode: "",
    gender: "",
    dateOfBirth: "",
    mobileNumber: "",
    companyRegisterNumber: "",
    aadharCard: null,
    signature: null,
    photo: null,
    registerCertificate: null
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
      toast.error('Please login to fill out the form.');
      return;
    }

    // Create FormData object
    const form = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        // Use 'documents.' prefix for file inputs to match backend
        form.append(
          key.startsWith('aadharCard') ? 'documents.aadharCard' :
            key.startsWith('signature') ? 'documents.signature' :
              key.startsWith('photo') ? 'documents.photo' :
                key.startsWith('registerCertificate') ? 'documents.registerCertificate' :
                  key,
          formData[key]
        );
      }
    }

    try {
      // Post form data to API
      const response = await axios.post('http://192.168.1.50:5000/api/companyPancard/createCompanyPancard', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${auth.token}` // Use backticks for string interpolation
        }
      });

      navigate('/dashboard/my_application')

      // Notify user of success
      toast.success('Company/Trust PAN Card submitted successfully!');
    } catch (error) {
      // Notify user of error
      toast.error('Error submitting Company/Trust PAN Card.');
    }
  };

  return (
    <div>
      <Header />
      {/* Page Title */}

      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className="text-black text-xl md:text-2xl font-semibold">Company / Trust ( संस्था ) Pan Card</h1>

          {/* Refund message */}
          <style jsx>{`
            @keyframes intenseBlink {
              0%, 100% { opacity: 1; color: #f20000; }
              20% { opacity: 1; color: #000000; }
            }
          `}</style>
          <h1 className="
            text-lg md:text-xl font-bold underline underline-offset-8 
            mb-2 lg:mb-0 lg:ml-4 
            animate-[intenseBlink_1s_ease-in-out_infinite]
          ">
            100% Fees Refundable, if Service is not Completed!
          </h1>

          {/* Breadcrumbs */}
          <nav className="breadcrumbs">
            <ol className="flex space-x-4 text-sm">
              <li><Link to={'/ '} className="text-black hover:underline hover:text-black text-base">Home</Link></li>
              <li className="text-black">/</li>
              <li>
                <Link to={'/pan_service'} className="flex items-center text-black hover:underline hover:text-black text-base">
                  Go Back
                  <IoArrowBackCircle className="h-5 w-5 mr-2 ml-2" /> {/* Icon with margin */}
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div>
        <h2 className="text-green-600 text-center font-semibold text-2xl pt-8 sm:mt-0">- Company / Trust ( संस्था ) Pan Card -</h2>
      </div>
      <form
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-md p-6 mt-10 mb-10"
        onSubmit={handleSubmit}
      > <br /> <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Full Name */}
          <div className="form-group">
            <label htmlFor="companyFullName" className="block text-gray-600 font-semibold mb-2">Company Full Name</label>
            <input
              type="text"
              name="companyFullName"
              id="companyFullName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.companyFullName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Owner Full Name */}
          <div className="form-group">
            <label htmlFor="ownerFullName" className="block text-gray-600 font-semibold mb-2">Owner Full Name</label>
            <input
              type="text"
              name="ownerFullName"
              id="ownerFullName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.ownerFullName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
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

          {/* Company Address */}
          <div className="form-group">
            <label htmlFor="companyAddress" className="block text-gray-600 font-semibold mb-2">Company Address</label>
            <input
              type="text"
              name="companyAddress"
              id="companyAddress"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.companyAddress}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Pincode */}
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

          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender" className="block text-gray-600 font-semibold mb-2">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" name="gender" value="Male" onChange={handleInputChange} className="mr-2" /> Male
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="gender" value="Female" onChange={handleInputChange} className="mr-2" /> Female
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="gender" value="Other" onChange={handleInputChange} className="mr-2" /> Other
              </label>
            </div>
          </div>

          {/* Date of Birth */}
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

          {/* Mobile Number */}
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

          {/* Company Register Number */}
          <div className="form-group">
            <label htmlFor="companyRegisterNumber" className="block text-gray-600 font-semibold mb-2">Company Register Number</label>
            <input
              type="text"
              name="companyRegisterNumber"
              id="companyRegisterNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.companyRegisterNumber}
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

        <div className="flex justify-center items-center">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">

            {/* Aadhar Card */}
            <div className="form-group">
              <label htmlFor="aadharCard" className="block text-gray-600 font-semibold mb-2 text-center">Aadhar Card</label>
              <input
                type="file"
                name="aadharCard"
                id="aadharCard"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={handleFileChange}
              />
            </div>

            {/* Signature */}
            <div className="form-group">
              <label htmlFor="signature" className="block text-gray-600 font-semibold mb-2 text-center">Signature</label>
              <input
                type="file"
                name="signature"
                id="signature"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={handleFileChange}
              />
            </div>

            {/* Photo */}
            <div className="form-group">
              <label htmlFor="photo" className="block text-gray-600 font-semibold mb-2 text-center">Photo</label>
              <input
                type="file"
                name="photo"
                id="photo"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={handleFileChange}
              />
            </div>

            {/* Register Certificate */}
            <div className="form-group">
              <label htmlFor="registerCertificate" className="block text-gray-600 font-semibold mb-2 text-center">Register Certificate</label>
              <input
                type="file"
                name="registerCertificate"
                id="registerCertificate"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                onChange={handleFileChange}
              />
            </div>

          </div>
        </div>
        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      </form>
        {/* Render Login Modal only if not logged in */}
        {!isLoggedIn && isModalOpen && <LoginModal closeModal={closeModal} />}
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default PAN_Company_trust;