import React, {useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { IoArrowBackCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import axios from 'axios';
import { toast } from 'react-toastify';
import LoginModal from '../../components/LoginModel'; // Import the modal


const Gazzette_religon_change = () => {
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
    casteType: "",
    email: "",
    address: "",
    gender: "",
    dateOfBirth: "",
    oldReligion: "",
    newReligion: "",
    reasonForChange: "",
    aadharCard: null,
    photo: null,
    signature: null,
    schoolLC: null,
    religionChangeAffidavit: null,
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
                  key.startsWith('schoolLC') ? 'documents.schoolLC' :
                    key.startsWith('religionChangeAffidavit') ? 'documents.religionChangeAffidavit' :
                      key,
          formData[key]
        );
      }
    }

    try {
      // Post form data to API
      const response = await axios.post(
        'http://192.168.1.49:5000/api/gazetteReligionChange/creategazette-religion-change',
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
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Gazette Religion Change</h1>

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
          <nav className="breadcrumbs">
            <ol className="flex space-x-4 text-sm">
              <li><Link to={'/ '} className="text-black hover:underline hover:text-black text-base">Home</Link></li>

              <li className="text-black">/</li>
              <li>
                <Link to={'/gazzette'} className="flex items-center text-black hover:underline hover:text-black text-base">
                  Go Back
                  <IoArrowBackCircle className="h-5 w-5 mr-2 ml-2" /> {/* Icon with margin */}
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div>
        <h2 className="text-green-600 text-center font-semibold text-2xl pt-8 sm:mt-0">- Gazette Religion Change -</h2>
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

          {/* Select Type of Caste */}
          <div className="form-group">
            <label htmlFor="typeOfCaste" className="block text-gray-600 font-semibold mb-2">Select Type Of Caste</label>
            <select
              name="casteType"
              id="casteType"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.casteType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Type Of Caste</option>
              <option value="vehicle1">Open / OBC</option>
              <option value="vehicle2">SC</option>
              <option value="vehicle3">SBC</option>
              <option value="vehicle4">ST</option>
              <option value="vehicle5">VJ</option>
              <option value="vehicle6">NT</option>
            </select>
          </div>

          {/* Email Id */}
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

          {/* Old Religion */}
          <div className="form-group">
            <label htmlFor="oldReligion" className="block text-gray-600 font-semibold mb-2">Old Religion</label>
            <input
              type="text"
              name="oldReligion"
              id="oldReligion"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.oldReligion}
              onChange={handleInputChange}
            />
          </div>

          {/* New Religion */}
          <div className="form-group">
            <label htmlFor="newReligion" className="block text-gray-600 font-semibold mb-2">New Religion</label>
            <input
              type="text"
              name="newReligion"
              id="newReligion"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.newReligion}
              onChange={handleInputChange}
            />
          </div>

          {/* Reason for Change */}
          <div className="form-group">
            <label htmlFor="reasonForChange" className="block text-gray-600 font-semibold mb-2">Reason For Change</label>
            <textarea
              name="reasonForChange"
              id="reasonForChange"
              rows="4"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.reasonForChange}
              onChange={handleInputChange}
            />
          </div>

        </div>

        <div className="mt-10 text-center">
          <h2 className="text-green-600 font-semibold text-2xl">
            - Upload Required Documents -
          </h2>
        </div>

        {/* File Uploads */}
        <div className="mt-6 mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Aadhar Card</label>
              <input
                type="file"
                name="aadharCard"
                id="aadharCard"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Passport Photo</label>
              <input
                type="file"
                name="photo"
                id="photo"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Signature</label>
              <input
                type="file"
                name="signature"
                id="signature"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">School LC</label>
              <input
                type="file"
                name="schoolLC"
                id="schoolLC"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Religion Change Affidavit</label>
              <input
                type="file"
                name="religionChangeAffidavit"
                id="religionChangeAffidavit"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 focus:outline-none"
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

export default Gazzette_religon_change
