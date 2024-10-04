import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_companyregistration = () => {
  const { id } = useParams();
  const [licenseData, setLicenseData] = useState({
    fullName: "",
    companyName: "", // Updated to match schema
    email: "",
    address: "", // Updated to match schema
    pincode: "", // Updated to match schema
    mobileNumber: "",
    dateOfBirth: "", // Updated to match schema
    formPrice: "",
    application_type: "",
    submitNote: "",
    completedNote: "",
    Status: "In-Progress",
  });

  const [documents, setDocuments] = useState({
    aadharCard: null,
    panCard: null,
    photo: null,
    electricBill: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const statusEnum = ["In-Progress", "Submitted", "Rejected", "Completed"];

  useEffect(() => {
    const fetchLicenseData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:5000/api/companyRegistration/getCompanyRegistration/${id}`
        );
        const data = response.data;
        setLicenseData({
          fullName: data.fullName || "",
          companyName: data.companyName || "", // Match schema
          email: data.email || "",
          address: data.address || "", // Match schema
          pincode: data.pincode || "", // Match schema
          mobileNumber: data.mobileNumber || "",
          dateOfBirth: data.dateOfBirth || "", // Match schema
          formPrice: data.formPrice || "",
          application_type: data.application_type || "",
          submitNote: data.submitNote || "",
          completedNote: data.completedNote || "",
          Status: data.Status || "In-Progress",
          rejectedNote: data.rejectedNote || "",
        });
      } catch (err) {
        setError("Error fetching license data");
      } finally {
        setLoading(false);
      }
    };
    fetchLicenseData();
  }, [id]);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (const key in licenseData) {
      formData.append(key, licenseData[key]);
    }
    for (const key in documents) {
      if (documents[key]) {
        formData.append(`documents.${key}`, documents[key]); // Match schema structure
      }
    }
    try {
      const response = await axios.put(
        `http://192.168.1.50:5000/api/companyRegistration/updateCompanyRegistration/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Failed to update license.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLicenseData({ ...licenseData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setDocuments({ ...documents, [name]: files[0] });
    }
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  const inputClass =
    "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm";
  const labelClass = "block text-sm font-medium text-gray-700";

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Company Registration
            </h1>
            <form onSubmit={handleUpdate} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className={labelClass} htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className={inputClass}
                  value={licenseData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Company Name */}
              <div>
                <label className={labelClass} htmlFor="companyName">
                  Company Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  className={inputClass}
                  value={licenseData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Other fields go here */}

              {/* Email */}
              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={inputClass}
                  value={licenseData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label className={labelClass} htmlFor="address">
                  Business Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  className={inputClass}
                  value={licenseData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Pincode */}
              <div>
                <label className={labelClass} htmlFor="pincode">
                  Pincode
                </label>
                <input
                  id="pincode"
                  name="pincode"
                  type="text"
                  className={inputClass}
                  value={licenseData.pincode}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className={labelClass} htmlFor="dateOfBirth">
                  Date of Birth
                </label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  className={inputClass}
                  value={licenseData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Document Uploads */}
              <div>
                <label className={labelClass} htmlFor="aadharCard">
                  Aadhar Card
                </label>
                <input
                  id="aadharCard"
                  name="aadharCard"
                  type="file"
                  className={inputClass}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="panCard">
                  Pan Card
                </label>
                <input
                  id="panCard"
                  name="panCard"
                  type="file"
                  className={inputClass}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="photo">
                photo
                </label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  className={inputClass}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="electricBill">
                electricBill
                </label>
                <input
                  id="electricBill"
                  name="electricBill"
                  type="file"
                  className={inputClass}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Update License
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default User_companyregistration;
