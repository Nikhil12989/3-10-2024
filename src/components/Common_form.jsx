import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../context/auth';


const Common_form = () => {
  // Define the initial form data
  const initialFormData = {
    fullName: '',
    email: '',
    address: '',
    state: '',
    pincode: '',
    mobileNumber: '',
    dateOfBirth: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [auth] = useAuth(); // Get authentication status from your context

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
      {/* Left side - Form */}
      <div className="bg-white p-10 rounded-lg shadow-xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
      <ToastContainer />
    </div>
  );
};

export default Common_form;