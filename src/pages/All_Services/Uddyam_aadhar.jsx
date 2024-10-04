import React, {useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineAppstore } from "react-icons/ai";
import { useAuth } from "../../context/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for Toastify
import axios from "axios";
import LoginModal from '../../components/LoginModel'; // Import the modal

const Uddyam_aadhar = () => {
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
    // Owner Details
    ownerFullName: "",
    PanCardNumber: "",
    AadharCardNumber: "",
    casteCategory: "",
    gender: "",
    businessName: "",
    mobileNumber: "",
    email: "",
    businessStartDate: "",
    numberOfEmployees: "",
    natureOfBusiness: "",
    bussinessInvestment: "", // Ensure this is spelled consistently
    bankName: "",
    accountNumber: "",
    IFSC: "",
    // File uploads
    aadharCard: null,
    panCard: null,
  });

  console.log(formData)

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
      toast.error("Please login to fill out the form.");
      return;
    }
    // Create FormData object
    const form = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        // Use 'documents.' prefix for file inputs to match backend
        form.append(
          key.startsWith("aadharCard")
            ? "documents.aadharCard"
            : key.startsWith("panCard")
            ? "documents.panCard"
            : key.startsWith("photo")
            ? "documents.photo"
            : key.startsWith("electricBill")
            ? "documents.electricBill"
            : key.startsWith("rentAgreement")
            ? "documents.rentAgreement"
            : key.startsWith("uddyamAadhar")
            ? "documents.uddyamAadhar"
            : key.startsWith("shopActLicense")
            ? "documents.shopActLicense"
            : key,
          formData[key]
        );
      }
    }

    try {
      // Post form data to API
      const response = await axios.post(
        "http://localhost:5000/api/udyamAadhar/createudyam-aadhar",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${auth.token}`, // Use backticks for string interpolation
          },
        }
      );

      console.log(response)

      // Notify user of success
      toast.success("Application submitted successfully!");
    } catch (error) {
      // Notify user of error
      toast.error("Error submitting application.");
    }
  };

  return (
    <div>
      <Header />
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className="text-black text-xl md:text-2xl font-semibold">
            Udyam Aadhar{" "}
          </h1>
          <style jsx>{`
            @keyframes intenseBlink {
              0%,
              100% {
                opacity: 1;
                color: #f20000;
              }
              20% {
                opacity: 1;
                color: #000000;
              }
            }
          `}</style>
          <h1
            className="text-lg md:text-xl font-bold underline underline-offset-8 mb-2 lg:mb-0 lg:ml-4 
          animate-[intenseBlink_1s_ease-in-out_infinite]"
          >
            100% Fees Refundable, if Service is not Completed!
          </h1>
          <nav className="breadcrumbs mt-2 lg:mt-0">
            <ol className="flex space-x-2 lg:space-x-4 text-sm items-center">
              <li className="flex items-center">
                <AiFillHome className="mr-1 text-base hover:underline" />
                <Link to={"/"} className="text-black hover:underline text-base">
                  Home
                </Link>
              </li>
              <li className="text-black">/</li>
              <li className="flex items-center">
                <AiOutlineAppstore className="mr-1 text-base" />
                <Link
                  to={"/all_service"}
                  className="text-black hover:underline text-base"
                >
                  All Services
                </Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <form
        className="max-w-6xl mx-auto bg-white shadow-2xl rounded-md p-6 mt-10 mb-10"
        onSubmit={handleSubmit}
      >
        {/* Owner Details Section */}
        <div className="mt-10 text-center pb-6">
          <h2 className="text-green-600 font-semibold text-2xl">
            - Udyam Aadhar -
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label
              htmlFor="ownerFullName"
              className="block text-gray-600 font-semibold mb-2"
            >
              Owner Full Name
            </label>
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

            <div className="form-group">
            <label htmlFor="PanCardNumber" className="block text-gray-600 font-semibold mb-2">PAN Card Number</label>
            <input
              type="text"
              name="PanCardNumber"
              id="PanCardNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.PanCardNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="AadharCardNumber" className="block text-gray-600 font-semibold mb-2">Aadhar Card Number</label>
            <input
              type="text"
              name="AadharCardNumber"
              id="AadharCardNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.AadharCardNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="casteCategory"
              className="block text-gray-600 font-semibold mb-2"
            >
              Select Type Of Caste
            </label>
            <select
              name="casteCategory"
              id="casteCategory"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.casteCategory}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Type Of Caste
              </option>
              <option value="Open/OBC">Open / OBC</option>
              <option value="SC">SC</option>
              <option value="SBC">SBC</option>
              <option value="ST">ST</option>
              <option value="VJ">VJ</option>
              <option value="NT">NT</option>
            </select>
          </div>

          <div className="form-group">
            <label
              htmlFor="gender"
              className="block text-gray-600 font-semibold mb-2"
            >
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.gender}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label
              htmlFor="businessName"
              className="block text-gray-600 font-semibold mb-2"
            >
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              id="businessName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.businessName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="mobileNumber"
              className="block text-gray-600 font-semibold mb-2"
            >
              Mobile Number
            </label>
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
            <label
              htmlFor="email"
              className="block text-gray-600 font-semibold mb-2"
            >
              Email
            </label>
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
            <label
              htmlFor="businessStartDate"
              className="block text-gray-600 font-semibold mb-2"
            >
              Business Start Date
            </label>
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
            <label
              htmlFor="numberOfEmployees"
              className="block text-gray-600 font-semibold mb-2"
            >
              Number Of Employees
            </label>
            <input
              type="number"
              name="numberOfEmployees"
              id="numberOfEmployees"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.numberOfEmployees}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="natureOfBusiness"
              className="block text-gray-600 font-semibold mb-2"
            >
              Nature Of Business
            </label>
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

          <div className="form-group">
            <label
              htmlFor="bussinessInvestment"
              className="block text-gray-600 font-semibold mb-2"
            >
              Business Investment
            </label>
            <input
              type="text"
              name="bussinessInvestment" // Keep it consistent
              id="bussinessInvestment" // Keep it consistent
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.bussinessInvestment} // Ensure this is the same name as in useState
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="bankName"
              className="block text-gray-600 font-semibold mb-2"
            >
              Bank Name
            </label>
            <input
              type="text"
              name="bankName"
              id="bankName"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.bankName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="accountNumber"
              className="block text-gray-600 font-semibold mb-2"
            >
              Account Number
            </label>
            <input
              type="text"
              name="accountNumber"
              id="accountNumber"
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.accountNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="IFSC"
              className="block text-gray-600 font-semibold mb-2"
            >
              IFSC Code
            </label>
            <input
              type="text"
              name="IFSC" // Match this with useState and backend
              id="IFSC" // Match this with useState and backend
              placeholder=" - - - "
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              value={formData.IFSC} // Ensure this is the same name as in useState
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="mt-10 text-center pb-6">
          <h2 className="text-green-600 font-semibold text-2xl">
            - Upload Required Documents -
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label
              htmlFor="aadharCard"
              className="block text-gray-600 font-semibold mb-2"
            >
              Aadhar Card{" "}
            </label>
            <input
              type="file"
              name="aadharCard"
              id="aadharCard"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              onChange={handleFileChange}
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="panCard"
              className="block text-gray-600 font-semibold mb-2"
            >
              PAN Card
            </label>
            <input
              type="file"
              name="panCard"
              id="panCard"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 focus:outline-none"
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

export default Uddyam_aadhar;
