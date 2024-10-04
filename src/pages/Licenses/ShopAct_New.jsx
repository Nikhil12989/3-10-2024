
import React, {useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import LoginModal from '../../components/LoginModel'; // Import the modal
import { useAuth } from '../../context/auth'; // Import the useAuth hook

const ShopAct_New = () => {
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
    contactNumber: "",
    email: "",
    gender: "",
    dateOfBirth: "",
    addressEnglish: "",
    addressMarathi: "",
    yearsInResidence: "",
    shopName: "",
    shopNameMarathi: "",
    natureOfBusiness: "",
    natureOfBusinessMarathi: "",
    shopAddress: "",
    shopAddressMarathi: "",
    shopPincode: "",
    isShopRented: "",
    maleEmployees: "",
    femaleEmployees: "",
    partnerFullName: "",
    partnerNumber: "",
    partnerEmail: "",
    partnerAddress: "",
    aadharNumber: "",
    // File Uploads
    aadharCard: null,
    signature: null,
    passportPhoto: null,
    panCard: null,
    shopPhoto: null,
    selfDeclaration: null,

    shopActType: "", // New field
    oldShopActNumber: "", // Conditional field
    shopActExpiryDate: "", // Conditional field
    oldShopActLicense: null, // Conditional file
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      const updatedData = { ...prevFormData, [name]: value };
  
      // Show/hide conditional fields
      if (name === 'shopActType' && value === 'renewal') {
        updatedData.oldShopActNumber = '';
        updatedData.shopActExpiryDate = '';
        updatedData.oldShopActLicense = null;
      }
      
      return updatedData;
    });
  };
  
  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: e.target.files[0] }));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Perform form submission logic here
  };

  return (
    <div>
      <Header />
      <div className="page-title py-6 bg-slate-300 flex items-center mb-4" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="text-black text-xl md:text-2xl font-semibold">Shop Act License</h1>
          <style jsx>{`
            @keyframes intenseBlink {
              0%, 100% { opacity: 1; color: #f20000; }
              20% { opacity: 1; color: #000000; }
            }
          `}</style>
          <h1 className="text-lg md:text-xl font-bold underline underline-offset-8 mb-2 lg:mb-0 lg:ml-4 animate-[intenseBlink_1s_ease-in-out_infinite]">
            100% Fees Refundable, if Service is not Completed!
          </h1>
          <nav className="breadcrumbs">
            <ol className="flex space-x-4 text-sm">
              <li><Link to={'/'} className="text-black hover:underline hover:text-black text-base">Home</Link></li>
              <li className="text-black">/</li>
              <li>
                <Link to={'/shop_act'} className="flex items-center text-black hover:underline hover:text-black text-base">
                  Go Back
                  <IoArrowBackCircle className="h-5 w-5 mr-2 ml-2" />
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div>
        <h2 className="text-green-600 text-center font-semibold text-2xl pt-8 sm:mt-0">- Shop Act License -</h2>
      </div>
      <form
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-md p-6 mt-10 mb-10"
        onSubmit={handleSubmit}
      >
        <br /><br />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Shop Act Type */}
          <div className="form-group">
            <label htmlFor="shopActType" className="block text-gray-600 font-semibold mb-2">Shop Act Type</label>
            <select
              name="shopActType"
              id="shopActType"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.shopActType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select Type </option>
              <option value="new">New Shop Act</option>
              <option value="renewal">Renewal Shop Act</option>
            </select>
          </div>

          {/* Old Shop Act Number */}
{formData.shopActType === 'renewal' && (
  <div className="form-group">
    <label htmlFor="oldShopActNumber" className="block text-gray-600 font-semibold mb-2">Old Shop Act Number</label>
    <input
      type="text"
      name="oldShopActNumber"
      id="oldShopActNumber"
      placeholder=" - - - "
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
      value={formData.oldShopActNumber}
      onChange={handleInputChange}
    />
  </div>
)}

{/* Shop Act Expiry Date */}
{formData.shopActType === 'renewal' && (
  <div className="form-group">
    <label htmlFor="shopActExpiryDate" className="block text-gray-600 font-semibold mb-2">Shop Act Expiry Date</label>
    <input
      type="date"
      name="shopActExpiryDate"
      id="shopActExpiryDate"
      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
      value={formData.shopActExpiryDate}
      onChange={handleInputChange}
    />
  </div>
)}




          {/* Other existing fields */}
          {/* Full Name English */}
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

          {/* Full Name Marathi */}
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

          {/* Contact Number */}
          <div className="form-group">
            <label htmlFor="contactNumber" className="block text-gray-600 font-semibold mb-2">Contact Number</label>
            <input
              type="tel"
              name="contactNumber"
              id="contactNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.contactNumber}
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
            />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender" className="block text-gray-600 font-semibold mb-2">Gender</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" name="gender" value="male" onChange={handleInputChange} className="mr-2" /> Male
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="gender" value="female" onChange={handleInputChange} className="mr-2" /> Female
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="gender" value="other" onChange={handleInputChange} className="mr-2" /> Other
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

          {/* Address English */}
          <div className="form-group">
            <label htmlFor="addressEnglish" className="block text-gray-600 font-semibold mb-2">Address (English)</label>
            <input
              type="text"
              name="addressEnglish"
              id="addressEnglish"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.addressEnglish}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Address marathi */}
          <div className="form-group">
            <label htmlFor="addressMarathi" className="block text-gray-600 font-semibold mb-2">Address (Marathi)</label>
            <input
              type="text"
              name="addressMarathi"
              id="addressMarathi"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.addressMarathi}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* No of Years In Residency */}
          <div className="form-group">
            <label htmlFor="yearsInResidence" className="block text-gray-600 font-semibold mb-2">No. of Years in Residence</label>
            <input
              type="number"
              name="yearsInResidence"
              id="yearsInResidence"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.yearsInResidence}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Shop Name */}
          <div className="form-group">
            <label htmlFor="shopName" className="block text-gray-600 font-semibold mb-2">Shop Name</label>
            <input
              type="text"
              name="shopName"
              id="shopName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.shopName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Shop Name Marathi */}
          <div className="form-group">
            <label htmlFor="shopNameMarathi" className="block text-gray-600 font-semibold mb-2">Shop Name (Marathi)</label>
            <input
              type="text"
              name="shopNameMarathi"
              id="shopNameMarathi"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.shopNameMarathi}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Nature of Business */}
          <div className="form-group">
            <label htmlFor="natureOfBusiness" className="block text-gray-600 font-semibold mb-2">Nature of Business</label>
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

          {/* Nature of Business Marathi */}
          <div className="form-group">
            <label htmlFor="natureOfBusinessMarathi" className="block text-gray-600 font-semibold mb-2">Nature of Business (Marathi)</label>
            <input
              type="text"
              name="natureOfBusinessMarathi"
              id="natureOfBusinessMarathi"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.natureOfBusinessMarathi}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Shop Address */}
          <div className="form-group">
            <label htmlFor="shopAddress" className="block text-gray-600 font-semibold mb-2">Shop Address</label>
            <input
              type="text"
              name="shopAddress"
              id="shopAddress"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.shopAddress}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Shop Address Marathi */}
          <div className="form-group">
            <label htmlFor="shopAddressMarathi" className="block text-gray-600 font-semibold mb-2">Business Address (Marathi)</label>
            <input
              type="text"
              name="shopAddressMarathi"
              id="shopAddressMarathi"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.shopAddressMarathi}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Pincode */}
          <div className="form-group">
            <label htmlFor="shopPincode" className="block text-gray-600 font-semibold mb-2">Pincode</label>
            <input
              type="text"
              name="shopPincode"
              id="shopPincode"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.shopPincode}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Is Shop Rented? */}
          <div className="form-group">
            <label htmlFor="isShopRented" className="block text-gray-600 font-semibold mb-2">Is Shop Rented?</label>
            <div className="flex items-center space-x-4">
              <label className="inline-flex items-center">
                <input type="radio" name="isShopRented" value="yes" onChange={handleInputChange} className="mr-2" /> Yes
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="isShopRented" value="no" onChange={handleInputChange} className="mr-2" /> No
              </label>
            </div>
          </div>

          {/* Male Employees */}
          <div className="form-group">
            <label htmlFor="maleEmployees" className="block text-gray-600 font-semibold mb-2">No. of Male Employees</label>
            <input
              type="number"
              name="maleEmployees"
              id="maleEmployees"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.maleEmployees}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Female Employees */}
          <div className="form-group">
            <label htmlFor="femaleEmployees" className="block text-gray-600 font-semibold mb-2">No. of Female Employees</label>
            <input
              type="number"
              name="femaleEmployees"
              id="femaleEmployees"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.femaleEmployees}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Partner Full Name */}
          <div className="form-group">
            <label htmlFor="partnerFullName" className="block text-gray-600 font-semibold mb-2">Partner Full Name</label>
            <input
              type="text"
              name="partnerFullName"
              id="partnerFullName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.partnerFullName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Partner Number */}
          <div className="form-group">
            <label htmlFor="partnerNumber" className="block text-gray-600 font-semibold mb-2">Partner Mobile Number</label>
            <input
              type="tel"
              name="partnerNumber"
              id="partnerNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.partnerNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Partner Email */}
          <div className="form-group">
            <label htmlFor="partnerEmail" className="block text-gray-600 font-semibold mb-2">Partner Email</label>
            <input
              type="email"
              name="partnerEmail"
              id="partnerEmail"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.partnerEmail}
              onChange={handleInputChange}
            />
          </div>

          {/* Partner Address */}
          <div className="form-group">
            <label htmlFor="partnerAddress" className="block text-gray-600 font-semibold mb-2">Partner Address</label>
            <input
              type="text"
              name="partnerAddress"
              id="partnerAddress"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.partnerAddress}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Aadhar Number */}
          <div className="form-group">
            <label htmlFor="aadharNumber" className="block text-gray-600 font-semibold mb-2">Aadhar Number</label>
            <input
              type="text"
              name="aadharNumber"
              id="aadharNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.aadharNumber}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-green-600 font-semibold text-2xl">- Upload Required Documents -</h2>
        </div>

        <div className="flex flex-wrap justify-between gap-4 mt-6">
          {/* Aadhar Card */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="form-group">
              <label htmlFor="aadharCard" className="block text-gray-600 font-semibold mb-2">Aadhar Card</label>
              <input
                type="file"
                name="aadharCard"
                id="aadharCard"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Signature */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="form-group">
              <label htmlFor="signature" className="block text-gray-600 font-semibold mb-2">Signature</label>
              <input
                type="file"
                name="signature"
                id="signature"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Passport Photo */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="form-group">
              <label htmlFor="passportPhoto" className="block text-gray-600 font-semibold mb-2">Photo</label>
              <input
                type="file"
                name="passportPhoto"
                id="passportPhoto"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 mt-6">
          {/* PAN Card */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="form-group">
              <label htmlFor="panCard" className="block text-gray-600 font-semibold mb-2">Pan Card</label>
              <input
                type="file"
                name="panCard"
                id="panCard"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Shop Photo */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="form-group">
              <label htmlFor="shopPhoto" className="block text-gray-600 font-semibold mb-2">Shop Photo</label>
              <input
                type="file"
                name="shopPhoto"
                id="shopPhoto"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                onChange={handleFileChange}
              />
            </div>
          </div>

          {/* Old Shop Act License */}
{formData.shopActType === 'renewal' && (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
    <div className="form-group">
      <label htmlFor="oldShopActLicense" className="block text-gray-600 font-semibold mb-2">Old Shop Act License</label>
      <input
        type="file"
        name="oldShopActLicense"
        id="oldShopActLicense"
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
        onChange={handleFileChange}
      />
    </div>
  </div>
)}
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 focus:outline-none"
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

export default ShopAct_New;

