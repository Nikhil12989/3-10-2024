import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_individualpancard = () => {
  const { id } = useParams();
  const [licenseData, setLicenseData] = useState({
    fullName: "",
    fatherFullName: "",
    gender: "Male",
    dateOfBirth: "",
    address: "",
    pincode: "",
    mobileNumber: "",
    email: "",
    adharNumber: "",
    nameAsPerAadhar: "",
    Status: "In-Progress",
    rejectedNote: "",
  });
  const [documents, setDocuments] = useState({
    aadharCard: null,
    signature: null,
    photo: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const statusEnum = ["In-Progress", "Submitted", "Rejected", "Completed"];

  useEffect(() => {
    const fetchLicenseData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.1.50:5000/api/individualPancard/getIndividualPanCard/${id}`
        );

        const data = response.data;
        setLicenseData({
          fullName: data.fullName || "",
          fatherFullName: data.fatherFullName || "",
          gender: data.gender || "Male",
          dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "",
          address: data.address || "",
          pincode: data.pincode || "",
          mobileNumber: data.mobileNumber || "",
          email: data.email || "",
          adharNumber: data.adharNumber || "",
          nameAsPerAadhar: data.nameAsPerAadhar || "",
          Status: data.Status || "In-Progress",
          rejectedNote: data.rejectedNote || ""
        });
      } catch (err) {
        console.error("Error fetching license data: ", err);
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
        formData.append(`documents.${key}`, documents[key]);
      }
    }

    try {
      const response = await axios.put(
        `http://192.168.1.50:5000/api/individualPancard/updateIndividualPanCard/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      console.error("Update failed: ", error);
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
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  const inputClass =
    "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm";
  const labelClass = "block text-sm font-medium text-gray-700";

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Individual Pan Card
            </h1>

            <form onSubmit={handleUpdate} className="space-y-6">
              {/* Existing fields here... */}
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

              <div>
                <label className={labelClass} htmlFor="fatherFullName">
                  Father's Full Name
                </label>
                <input
                  id="fatherFullName"
                  name="fatherFullName"
                  type="text"
                  className={inputClass}
                  value={licenseData.fatherFullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="gender">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className={inputClass}
                  value={licenseData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

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

              <div>
                <label className={labelClass} htmlFor="address">
                  Address
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
                <label className={labelClass} htmlFor="adharNumber">
                  Aadhar Number
                </label>
                <input
                  id="adharNumber"
                  name="adharNumber"
                  type="text"
                  className={inputClass}
                  value={licenseData.adharNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="nameAsPerAadhar">
                  Name as per Aadhar
                </label>
                <input
                  id="nameAsPerAadhar"
                  name="nameAsPerAadhar"
                  type="text"
                  className={inputClass}
                  value={licenseData.nameAsPerAadhar}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="Status">
                  Status
                </label>
                <select
                  disabled
                  id="Status"
                  name="Status"
                  className={inputClass}
                  value={licenseData.Status}
                  onChange={handleInputChange}
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
                    disabled
                    id="rejectedNote"
                    name="rejectedNote"
                    className={inputClass}
                    value={licenseData.rejectedNote}
                    onChange={handleInputChange}
                  />
                </div>
              )}

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

              <button
                type="submit"
                className="mt-5 w-full bg-indigo-600 text-white py-2 px-4 rounded-md"
              >
                Update
              </button>
            </form>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_individualpancard;
