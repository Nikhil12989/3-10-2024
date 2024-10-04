import React, {useEffect, useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { IoArrowBackCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai';
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoginModal from '../../components/LoginModel'; // Import the modal

const Income_certificate = () => {
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
    fullNameEnglish: "",
    fullNameMarathi: "",
    fatherFullNameEnglish: "",
    fatherFullNameMarathi: "",
    incomeCertificate: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    mobileNumber: "",
    service: "",
    address: "",
    state: "",
    district: "",
    pincode: "",
    sourceOfIncome: "",
    purposeOfIncomeCertificate: "",
    businessFullName: "",
    // File uploads
    rationCard: null,
    aadharCard: null,
    photoIdentity: null,
    signature: null,
    talithiIncome: null,
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
        let fieldName = key;
        // List all document fields that need the 'documents.' prefix
        const documentFields = ['aadharCard', 'signature', 'photoIdentity', 'talithiIncome', 'rationCard'];
        if (documentFields.includes(key)) {
          fieldName = `documents.${key}`;
        }
        form.append(fieldName, formData[key]);
      }
    }

    try {
      // Post form data to API
      const response = await axios.post(
        'http://192.168.1.49:5000/api/incomeCertificate/createincome-certificate',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${auth.token}`
          }
        }
      );

      // Notify user of success
      toast.success('Income Certificate submitted successfully!');
    } catch (error) {
      // Notify user of error
      toast.error('Error submitting Income Certificate.');
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
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Income Certificate</h1>

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
      <div>
        <h2 className="text-green-600 text-center font-semibold text-2xl pt-8 sm:mt-0">- Income Certificate -</h2>
      </div>
      <form className="max-w-6xl mx-auto bg-white shadow-2xl rounded-md p-6 mt-10 mb-10" onSubmit={handleSubmit}>
         <br /> <br />

        {/* Personal Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Full Name in English */}
          <div className="form-group">
            <label htmlFor="fullNameEnglish" className="block text-gray-600 font-semibold mb-2">Full Name (English)</label>
            <input
              type="text"
              name="fullNameEnglish"
              id="fullNameEnglish"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.fullNameEnglish}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Full Name in Marathi */}
          <div className="form-group">
            <label htmlFor="fullNameMarathi" className="block text-gray-600 font-semibold mb-2">Full Name (Marathi)</label>
            <input
              type="text"
              name="fullNameMarathi"
              id="fullNameMarathi"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.fullNameMarathi}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Father's Full Name in English */}
          <div className="form-group">
            <label htmlFor="fatherFullNameEnglish" className="block text-gray-600 font-semibold mb-2">Father's Full Name (English)</label>
            <input
              type="text"
              name="fatherFullNameEnglish"
              id="fatherFullNameEnglish"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.fatherFullNameEnglish}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Father's Full Name in Marathi */}
          <div className="form-group">
            <label htmlFor="fatherFullNameMarathi" className="block text-gray-600 font-semibold mb-2">Father's Full Name (Marathi)</label>
            <input
              type="text"
              name="fatherFullNameMarathi"
              id="fatherFullNameMarathi"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.fatherFullNameMarathi}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Income Certificate */}
          <div className="form-group">
            <label htmlFor="incomeCertificate" className="block text-gray-600 font-semibold mb-2">Income Certificate</label>
            <select
              name="incomeCertificate"
              id="incomeCertificate"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.incomeCertificate}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Duration</option>
              <option value="1-year">1 Year</option>
              <option value="3-year">3 Year</option>
            </select>
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

          {/* Age */}
          <div className="form-group">
            <label htmlFor="age" className="block text-gray-600 font-semibold mb-2">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender" className="block text-gray-600 font-semibold mb-2">Gender</label>
            <select
              name="gender"
              id="gender"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
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

          {/* Service */}
          <div className="form-group">
            <label htmlFor="service" className="block text-gray-600 font-semibold mb-2">Service</label>
            <input
              type="text"
              name="service"
              id="service"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.service}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Address */}
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

          {/* State */}
          <div className="form-group">
            <label htmlFor="state" className="block text-gray-600 font-semibold mb-2">State</label>
            <input
              type="text"
              name="state"
              id="state"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.state}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* District */}
          <div className="form-group">
            <label htmlFor="district" className="block text-gray-600 font-semibold mb-2">District</label>
            <input
              type="text"
              name="district"
              id="district"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.district}
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

          {/* Source of Income */}
          <div className="form-group">
            <label htmlFor="sourceOfIncome" className="block text-gray-600 font-semibold mb-2">Source of Income</label>
            <input
              type="text"
              name="sourceOfIncome"
              id="sourceOfIncome"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.sourceOfIncome}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Purpose of Income Certificate */}
          <div className="form-group">
            <label htmlFor="purposeOfIncomeCertificate" className="block text-gray-600 font-semibold mb-2">Purpose of Income Certificate</label>
            <input
              type="text"
              name="purposeOfIncomeCertificate"
              id="purposeOfIncomeCertificate"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.purposeOfIncomeCertificate}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>



        {/* Upload Required Documents */}
        <div className="mt-10 text-center">
          <h2 className="text-green-600 font-semibold text-2xl">- Upload Required Documents -</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Upload Ration Card */}
          <div className="form-group">
            <label htmlFor="rationCard" className="block text-gray-600 font-semibold mb-2">Ration Card</label>
            <input
              type="file"
              name="rationCard"
              id="rationCard"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Upload Aadhar Card */}
          <div className="form-group">
            <label htmlFor="aadharCard" className="block text-gray-600 font-semibold mb-2">Aadhar Card</label>
            <input
              type="file"
              name="aadharCard"
              id="aadharCard"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Upload Passport Photo */}
          <div className="form-group">
            <label htmlFor="photoIdentity" className="block text-gray-600 font-semibold mb-2">Passport Photo</label>
            <input
              type="file"
              name="photoIdentity"
              id="photoIdentity"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Upload Signature */}
          <div className="form-group">
            <label htmlFor="signature" className="block text-gray-600 font-semibold mb-2">Signature</label>
            <input
              type="file"
              name="signature"
              id="signature"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              onChange={handleFileChange}
              required
            />
          </div>

          {/* Talathi Income Certificate */}
          <div className="form-group">
            <label htmlFor="talithiIncome" className="block text-gray-600 font-semibold mb-2">Talathi Income Certificate</label>
            <input
              type="file"
              name="talithiIncome"
              id="talithiIncome"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              onChange={handleFileChange}
              required
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-lg"
          >
            Submit Form
          </button>
        </div>
      </form>
  {/* Render Login Modal only if not logged in */}
  {!isLoggedIn && isModalOpen && <LoginModal closeModal={closeModal} />}
      <Footer />
    </div>
  )
}

export default Income_certificate;
