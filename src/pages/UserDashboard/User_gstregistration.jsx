import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_gstregistration = () => {

  const { id } = useParams();
  
  // State for user data and documents
  const [licenseData, setLicenseData] = useState({
    businessFullName: "",
    ownerFullName: "",
    mobileNumber: "",
    panNumber: "",
    email: "",
    businessStartDate: "",
    natureOfBusiness: "",
    Status: "In-Progress",
    rejectedNote: "",
  });
  
  // State for document uploads
  const [documents, setDocuments] = useState({
    aadharCard: null,
    panCard: null,
    signature: null,
    photo: null,
    electricityBill: null,
    shopActLicense: null,
    rentAggreement: null,
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const statusEnum = ["In-Progress", "Submitted", "Rejected", "Completed"];

  useEffect(() => {
    const fetchLicenseData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://192.168.1.50:5000/api/gstRegistration/getbyidgst-registration/${id}`
        );

        const data = response.data;
        setLicenseData({
          businessFullName: data.businessFullName || "",
          ownerFullName: data.ownerFullName || "",
          mobileNumber: data.mobileNumber || "",
          panNumber: data.panNumber || "",
          email: data.email || "",
          businessStartDate: data.businessStartDate || "",
          natureOfBusiness: data.natureOfBusiness || "",
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

    // Append all fields from licenseData to formData
    for (const key in licenseData) {
      formData.append(key, licenseData[key]);
    }

    // Append files to formData
    for (const key in documents) {
      if (documents[key]) {
        formData.append(`documents.${key}`, documents[key]); // Match the structure expected by the backend
      }
    }

    try {
      const response = await axios.put(
        `http://192.168.1.50:5000/api/gstRegistration/updategst-registration/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
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
              GST Registration
            </h1>

            <form onSubmit={handleUpdate} className="space-y-6">
              {/* Form fields */}
              <div>
                <label className={labelClass} htmlFor="businessFullName">
                  Business Full Name
                </label>
                <input
                  id="businessFullName"
                  name="businessFullName"
                  type="text"
                  className={inputClass}
                  value={licenseData.businessFullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="ownerFullName">
                  Owner's Full Name
                </label>
                <input
                  id="ownerFullName"
                  name="ownerFullName"
                  type="text"
                  className={inputClass}
                  value={licenseData.ownerFullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="panNumber">
                  PAN Number
                </label>
                <input
                  id="panNumber"
                  name="panNumber"
                  type="text"
                  className={inputClass}
                  value={licenseData.panNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="mobileNumber">
                  Mobile Number
                </label>
                <input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="text"
                  className={inputClass}
                  value={licenseData.mobileNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

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

              <div>
                <label className={labelClass} htmlFor="businessStartDate">
                  Business Start Date
                </label>
                <input
                  id="businessStartDate"
                  name="businessStartDate"
                  type="date"
                  className={inputClass}
                  value={licenseData.businessStartDate}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="natureOfBusiness">
                  Nature of Business
                </label>
                <input
                  id="natureOfBusiness"
                  name="natureOfBusiness"
                  type="text"
                  className={inputClass}
                  value={licenseData.natureOfBusiness}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Status field */}
              <div>
                <label className={labelClass} htmlFor="Status">
                  Status
                </label>
                <select
                  id="Status"
                  name="Status"
                  className={inputClass}
                  value={licenseData.Status}
                  onChange={handleInputChange}
                  disabled
                >
                  {statusEnum.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {/* Conditionally render the rejected note input */}
              {licenseData.Status === "Rejected" && (
                <div>
                  <label className={labelClass} htmlFor="rejectedNote">
                    Rejected Note
                  </label>
                  <textarea
                    id="rejectedNote"
                    name="rejectedNote"
                    className={inputClass}
                    value={licenseData.rejectedNote}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              )}

              {/* Document uploads */}
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
                  PAN Card
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
                <label className={labelClass} htmlFor="signature">
                  Signature
                </label>
                <input
                  id="signature"
                  name="signature"
                  type="file"
                  className={inputClass}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="photo">
                  Photo
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
                <label className={labelClass} htmlFor="electricityBill">
                  Electricity Bill
                </label>
                <input
                  id="electricityBill"
                  name="electricityBill"
                  type="file"
                  className={inputClass}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="shopActLicense">
                  Shop Act License
                </label>
                <input
                  id="shopActLicense"
                  name="shopActLicense"
                  type="file"
                  className={inputClass}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="rentAggreement">
                  Rent Agreement
                </label>
                <input
                  id="rentAggreement"
                  name="rentAggreement"
                  type="file"
                  className={inputClass}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600"
                >
                  Update GST Registration
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

export default User_gstregistration;