import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import { useAuth } from '../../context/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify
import LoginModal from '../../components/LoginModel'; // Import the modal
const Dl_Permanent = () => {

  
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
    state: "",
    rto: "",
    vehicleType: "",
    fatherOrHusbandFullName: "",
    gender: "",
    dateOfBirth: "",
    qualification: "",
    identificationMarks: "",
    bloodGroup: "",
    emergencyContact: "",
    email: "",
    address: "",
    district: "",
    taluka: "",
    addressProof: null,
    passportPhoto: null,
    signature: null,
    medicalCertificate: null,
    learningLicenseNumber: "",
    learningLicenseFile: null,
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
        form.append(key.startsWith('addressProof') ? 'documents.addressProof' :
          key.startsWith('passportPhoto') ? 'documents.passportPhoto' :
            key.startsWith('signature') ? 'documents.signature' :
              key.startsWith('medicalCertificate') ? 'documents.medicalCertificate' :
                key, formData[key]);
      }
    }

    try {
      // Post form data to API
      const response = await axios.post('http://192.168.1.50:5000/api/permanentLicense/createPermanentDL', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${auth.token}` // Use backticks for string interpolation
        }
      });

      // Notify user of success
      toast.success('Application submitted successfully!');
    } catch (error) {
      // Notify user of error
      toast.error('Error submitting application.');
    }
  };

  return (
    <div>
      <Header />

      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Permanent Driving License</h1>

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
                <Link to={'/driving_Lic'} className="flex items-center text-black hover:underline hover:text-black text-base">
                  Go Back
                  <IoArrowBackCircle className="h-5 w-5 mr-2 ml-2" /> {/* Icon with margin */}
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div>
        <h2 className="text-green-600 text-center font-semibold text-2xl pt-8 sm:mt-0">- Permanent Driving License -</h2>
      </div>

      <form
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-md p-6 mt-10 mb-10"
        onSubmit={handleSubmit}
      >
         <br /> <br />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

          {/* State */}
          <div className="form-group">
            <label htmlFor="state" className="block text-gray-600 font-semibold mb-2">Select State</label>
            <select
              name="state"
              id="state"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.state}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select State</option>
              {/* Add options as per your requirement */}
              <option value="State1">State1</option>
              <option value="State2">State2</option>
            </select>
          </div>

          {/* RTO */}
          <div className="form-group">
            <label htmlFor="rto" className="block text-gray-600 font-semibold mb-2">Select RTO</label>
            <select
              name="rto"
              id="rto"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.rto}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select RTO</option>
              {/* Add options as per your requirement */}
              <option value="RTO1">RTO1</option>
              <option value="RTO2">RTO2</option>
            </select>
          </div>

          {/* Learning License Number (new) */}
          <div className="form-group">
            <label htmlFor="learningLicenseNumber" className="block text-gray-600 font-semibold mb-2">Learning License Number</label>
            <input
              type="text"
              name="learningLicenseNumber"
              id="learningLicenseNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.learningLicenseNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Vehicle Type */}
          <div className="form-group">
            <label htmlFor="vehicleType" className="block text-gray-600 font-semibold mb-2">Select Vehicle Type</label>
            <select
              name="vehicleType"
              id="vehicleType"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.vehicleType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="motorcycle">Motor Cycle</option>
              <option value="twowheeler">Two Wheeler</option>
              <option value="fourwheeler">Four Wheeler</option>
              <option value="fourwheelerTR">Four Wheeler TR</option>
              <option value="fourPlusTwo">Four + Two Wheeler</option>
            </select>
          </div>

          {/* Father / Husband Full Name */}
          <div className="form-group">
            <label htmlFor="fatherOrHusbandFullName" className="block text-gray-600 font-semibold mb-2">Father / Husband Full Name</label>
            <input
              type="text"
              name="fatherOrHusbandFullName"
              id="fatherOrHusbandFullName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.fatherOrHusbandFullName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label className="block text-gray-600 font-semibold mb-2">Gender</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="mr-2"
                  checked={formData.gender === 'Male'}
                  onChange={handleInputChange}
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="mr-2"
                  checked={formData.gender === 'Female'}
                  onChange={handleInputChange}
                />
                Female
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  className="mr-2"
                  checked={formData.gender === 'Other'}
                  onChange={handleInputChange}
                />
                Other
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

          {/* Qualification */}
          <div className="form-group">
            <label htmlFor="qualification" className="block text-gray-600 font-semibold mb-2">Qualification</label>
            <input
              type="text"
              name="qualification"
              id="qualification"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.qualification}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Identification Marks */}
          <div className="form-group">
            <label htmlFor="identificationMarks" className="block text-gray-600 font-semibold mb-2">Identification Marks</label>
            <input
              type="text"
              name="identificationMarks"
              id="identificationMarks"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.identificationMarks}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Blood Group */}
          <div className="form-group">
            <label htmlFor="bloodGroup" className="block text-gray-600 font-semibold mb-2">Blood Group</label>
            <input
              type="text"
              name="bloodGroup"
              id="bloodGroup"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.bloodGroup}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Emergency Number */}
          <div className="form-group">
            <label htmlFor="emergencyContact" className="block text-gray-600 font-semibold mb-2">Emergency Number</label>
            <input
              type="text"
              name="emergencyContact"
              id="emergencyContact"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.emergencyContact}
              onChange={handleInputChange}
              required
            />
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
            <textarea
              name="address"
              id="address"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* state */}
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

          {/* Taluka */}
          <div className="form-group">
            <label htmlFor="taluka" className="block text-gray-600 font-semibold mb-2">Taluka</label>
            <input
              type="text"
              name="taluka"
              id="taluka"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.taluka}
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

        {/* File Uploads */}
        <div className="mt-6 mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Address Proof */}
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Address Proof</label>
              <input
                type="file"
                name="addressProof"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            {/* Passport Photo */}
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Passport Photo</label>
              <input
                type="file"
                name="passportPhoto"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            {/* Signature */}
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Signature</label>
              <input
                type="file"
                name="signature"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            {/* Medical Certificate */}
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Medical Certificate</label>
              <input
                type="file"
                name="medicalCertificate"
                onChange={handleFileChange}
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none"
              />
            </div>

            {/* Learning License File (new) */}
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold mb-2">Learning License File</label>
              <input
                type="file"
                name="learningLicenseFile"
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
      <ToastContainer/>
      <Footer />
    </div>
  );
};

export default Dl_Permanent;
