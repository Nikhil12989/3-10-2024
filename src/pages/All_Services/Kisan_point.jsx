import React, {useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import LoginModal from '../../components/LoginModel'; // Import the modal
import { useAuth } from '../../context/auth'; // Import the useAuth hook

const Kisan_point = () => {
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
    kissanPointType: '',
    fullName: '',
    email: '',
    address: '',
    state: '',
    pincode: '',
    mobileNumber: '',
    dateOfBirth: '',
    surveGatNumber: '',
    khataNumber: '',
    dist: '',
    tel: '',
    village: '',
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
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Kisan Point </h1>

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
            Kisan Point
          </h2>
        </div>
        <hr className="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}
          <div className="bg-white p-10 rounded-lg shadow-xl">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols- gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Kissan Point Type</label>
                  <select
                    name="kissanPointType"
                    value={formData.kissanPointType}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                    required
                  >
                    <option value="">-- Select Kissan Point Type --</option>
                    <option value="Digital 7 / 12">Digital 7 / 12</option>
                    <option value="8 अ उत्तरा">8 अ उत्तरा</option>
                    <option value="Fair Far">Fair Far</option>
                    <option value="PM Kisan Nidhi Yojana">PM Kisan Nidhi Yojana</option>
                    <option value="पिक विमा">पिक विमा</option>
                  </select>
                </div>
              </div>

              {/* Conditionally render based on Kissan Point Type */}
              {formData.kissanPointType === 'Digital 7 / 12' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Survey / गट Number</label>
                    <input
                      type="text"
                      name="surveGatNumber"
                      value={formData.surveGatNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Surve / Gat Number"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter Full Name"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">District</label>
                    <input
                      type="text"
                      name="dist"
                      value={formData.dist}
                      onChange={handleInputChange}
                      placeholder="Enter District"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Tehsil</label>
                    <input
                      type="text"
                      name="tel"
                      value={formData.tel}
                      onChange={handleInputChange}
                      placeholder="Enter Tehsil"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Village</label>
                    <input
                      type="text"
                      name="village"
                      value={formData.village}
                      onChange={handleInputChange}
                      placeholder="Enter Village"
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
                      placeholder="Enter Mobile Number"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              )}

              {formData.kissanPointType === '8 अ उत्तरा' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Khata ( खाता ) Number</label>
                    <input
                      type="text"
                      name="khataNumber"
                      value={formData.khataNumber}
                      onChange={handleInputChange}
                      placeholder="Enter Khata Number"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter Full Name"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">District</label>
                    <input
                      type="text"
                      name="dist"
                      value={formData.dist}
                      onChange={handleInputChange}
                      placeholder="Enter District"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Tehsil</label>
                    <input
                      type="text"
                      name="tel"
                      value={formData.tel}
                      onChange={handleInputChange}
                      placeholder="Enter Tehsil"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Village</label>
                    <input
                      type="text"
                      name="village"
                      value={formData.village}
                      onChange={handleInputChange}
                      placeholder="Enter Village"
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
                      placeholder="Enter Mobile Number"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              )}

              {/* Render default fields when no type or other types are selected */}
              {(!formData.kissanPointType || (formData.kissanPointType !== 'Digital 7 / 12' && formData.kissanPointType !== '8 अ उत्तरा')) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter Full Name"
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
                      placeholder="Enter Email"
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
                      placeholder="Enter Address"
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
                      placeholder="Enter Pincode"
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
                      placeholder="Enter Mobile Number"
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
              )}

              <button
                type="submit"
                className="w-full bg-green-600 font-semibold text-white py-3 mt-5 rounded-md hover:bg-green-700 transition-all duration-200 tracking-wide"
              >
                SUBMIT
              </button>

            </form>
          </div>

          {/* Right side - Content */}
          <div>
            <h1 className='font-semibold text-2xl'>Make Easy Agro Market :</h1> <br />
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-2 text-center">
                Your Kisan Point for Farm Fresh Solutions!
              </h3>
              <h3 className="text-lg font-semibold text-green-600 mb-2 text-center">
                * Do Enquiry For Apply : -
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 list-inside text-gray-600 mt-2">
                <li>✔ Digital 7 / 12</li>
                <li>✔ Fair Far</li>
                <li>✔ 8 अ उत्तरा</li>
                <li>✔ PM kisan Nidhi Yojana</li>
                <li>✔ पिक विमा</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
      {/* Render Login Modal only if not logged in */}
      {!isLoggedIn && isModalOpen && <LoginModal closeModal={closeModal} />}
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Kisan_point;
