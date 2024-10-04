import React, {useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { IoArrowBackCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { toast , ToastContainer } from 'react-toastify';
import LoginModal from '../../components/LoginModel'; // Import the modal

const GST_registration_apply = () => {
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
    mobileNumber: "",
    panNumber: "",
    email: "",
    businessStartDate: "",
    natureOfBusiness: "",
    businessFullName: "",
    ownerFullName: "",
    aadharCard: null,
    panCard: null,
    photo: null,
    signature: null,
    electricityBill: null,
    shopActLicense: null,
    rentAggreement: null
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
            key.startsWith('photo') ? 'documents.photo' :
              key.startsWith('signature') ? 'documents.signature' :
                key.startsWith('photo') ? 'documents.photo' :
                  key.startsWith('panCard') ? 'documents.panCard' :
                    key.startsWith('electricityBill') ? 'documents.electricityBill' :
                      key.startsWith('shopActLicense') ? 'documents.shopActLicense' :
                        key.startsWith('schoolLC') ? 'documents.schoolLC' :
                          key.startsWith('rentAggreement') ? 'documents.rentAggreement' :
                            key,
          formData[key]
        );
      }
    }

    try {
      // Post form data to API
      const response = await axios.post(
        'http://192.168.1.50:5000/api/gstRegistration/creategst-registration',
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
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">GST Registration</h1>

          {/* Refund message */}
          <style jsx>{`
          @keyframes intenseBlink {
            0%, 100% { opacity: 1; color: #f20000; }
            20% { opacity: 1; color: #000000; }
          }
        `}</style>
          <h1 className="text-lg md:text-xl font-bold underline underline-offset-8 
            mb-2 lg:mb-0 lg:ml-4 
            animate-[intenseBlink_1s_ease-in-out_infinite]">
            100% Fees Refundable, if Service is not Completed!
          </h1>

          {/* Breadcrumbs */}
          <nav className="breadcrumbs">
            <ol className="flex space-x-4 text-sm">
              <li><Link to={'/ '} className="text-black hover:underline hover:text-black text-base">Home</Link></li>

              <li className="text-black">/</li>
              <li>
                <Link to={'/gst_registration'} className="flex items-center text-black hover:underline hover:text-black text-base">
                  Go Back
                  <IoArrowBackCircle className="h-5 w-5 mr-2 ml-2" /> {/* Icon with margin */}
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div>
        <h2 className="text-green-600 text-center font-semibold text-2xl pt-8 sm:mt-0">- GST Registration Form -</h2>
      </div>
      <form
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-md p-6 mt-10 mb-10"
        onSubmit={handleSubmit}
      >
        <br /> <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
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

          {/* Mobile Number */}
          <div className="form-group">
            <label htmlFor="mobileNumber" className="block text-gray-600 font-semibold mb-2">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              id="mobileNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Pan Number */}
          <div className="form-group">
            <label htmlFor="panNumber" className="block text-gray-600 font-semibold mb-2">Pan Number</label>
            <input
              type="text"
              name="panNumber"
              id="panNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.panNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">Email Id</label>
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

          {/* Business Start Date */}
          <div className="form-group">
            <label htmlFor="businessStartDate" className="block text-gray-600 font-semibold mb-2">Business Start Date</label>
            <input
              type="date"
              name="businessStartDate"
              id="businessStartDate"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.businessStartDate}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="businessStartDate" className="block text-gray-600 font-semibold mb-2">business FullName</label>
            <input
              type="text"
              name="businessFullName"
              id="businessFullName"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.businessFullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="businessStartDate" className="block text-gray-600 font-semibold mb-2">owner FullName</label>
            <input
              type="text"
              name="ownerFullName"
              id="ownerFullName"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.ownerFullName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Nature Of Business */}
          <div className="form-group">
            <label htmlFor="natureOfBusiness" className="block text-gray-600 font-semibold mb-2">Nature Of Business</label>
            <input
              type="text"
              name="natureOfBusiness"
              id="natureOfBusiness"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.natureOfBusiness}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-green-600 font-semibold text-2xl">
            - Upload Required Documents -
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Aadhar Card */}
          <div className="form-group">
            <label htmlFor="aadharCard" className="block text-gray-600 font-semibold mb-2">Upload Aadhar Card</label>
            <input
              type="file"
              name="aadharCard"
              id="aadharCard"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Pan Card */}
          <div className="form-group">
            <label htmlFor="panCard" className="block text-gray-600 font-semibold mb-2">Upload Pan Card</label>
            <input
              type="file"
              name="panCard"
              id="panCard"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Photo */}
          <div className="form-group">
            <label htmlFor="photo" className="block text-gray-600 font-semibold mb-2">Upload Photo</label>
            <input
              type="file"
              name="photo"
              id="photo"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Signature */}
          <div className="form-group">
            <label htmlFor="signature" className="block text-gray-600 font-semibold mb-2">Upload Signature</label>
            <input
              type="file"
              name="signature"
              id="signature"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Electricity Bill */}
          <div className="form-group">
            <label htmlFor="electricityBill" className="block text-gray-600 font-semibold mb-2">Upload Electricity Bill</label>
            <input
              type="file"
              name="electricityBill"
              id="electricityBill"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Shop Act License */}
          <div className="form-group">
            <label htmlFor="shopActLicense" className="block text-gray-600 font-semibold mb-2">Upload Shop Act License</label>
            <input
              type="file"
              name="shopActLicense"
              id="shopActLicense"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Rent Agreement */}
          <div className="form-group">
            <label htmlFor="rentAgreement" className="block text-gray-600 font-semibold mb-2">Upload Rent Agreement</label>
            <input
              type="file"
              name="rentAggreement"
              id="rentAggreement"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
        {/* Render Login Modal only if not logged in */}
        {!isLoggedIn && isModalOpen && <LoginModal closeModal={closeModal} />}
      <Footer />
    </div>
  )
}

export default GST_registration_apply
