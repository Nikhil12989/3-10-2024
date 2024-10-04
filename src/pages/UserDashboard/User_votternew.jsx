import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_votternew = () => {
  const { id } = useParams();
  const [licenseData, setLicenseData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    mobileNumber: "",
    email: "",
    birthState: "",
    birthDistrict: "",
    relation: "",
    relationName: "",
    relationAddress: "",
    relationPincode: "",
    livingAddressSince: "",
    submitNote: "",
    completedNote: "",
    Status: "In-Progress",
    rejectedNote: "", // Ensure rejectedNote is included
  });

  const [documents, setDocuments] = useState({
    aadharCard: null,
    panCard: null,
    photo: null,
    signature: null,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const statusEnum = ["In-Progress", "Submitted", "Rejected", "Completed"];

  useEffect(() => {
    const fetchLicenseData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://192.168.1.50:5000/api/newVoterID/getbyidnew-voter-id/${id}`
        );
        const data = response.data;
        setLicenseData({
          fullName: data.fullName || "",
          gender: data.gender || "",
          dateOfBirth: data.dateOfBirth || "",
          mobileNumber: data.mobileNumber || "",
          email: data.email || "",
          birthState: data.birthState || "",
          birthDistrict: data.birthDistrict || "",
          relation: data.relation || "",
          relationName: data.relationName || "",
          relationAddress: data.relationAddress || "",
          relationPincode: data.relationPincode || "",
          livingAddressSince: data.livingAddressSince || "",
          submitNote: data.submitNote || "",
          completedNote: data.completedNote || "",
          Status: data.Status || "In-Progress",
          rejectedNote: data.rejectedNote || "",
        });

        // Set document data as files or as URLs for preview if necessary
        setDocuments({
          aadharCard: data.documents?.aadharCard?.data || null,
          panCard: data.documents?.panCard?.data || null,
          photo: data.documents?.photo?.data || null,
          signature: data.documents?.signature?.data || null,
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

    // Append all fields from licenseData
    for (const key in licenseData) {
      formData.append(key, licenseData[key]);
    }

    // Append documents to formData
    for (const key in documents) {
      if (documents[key]) {
        formData.append(`documents.${key}`, documents[key]); // Match the structure expected by the backend
      }
    }

    try {
      const response = await axios.put(
        `http://192.168.1.50:5000/api/newVoterID/updateShiftVoterID/${id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Failed to update voter ID.");
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
              Update Voter ID Application
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

              {/* Gender */}
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

              {/* Date of Birth */}
              <div>
                <label className={labelClass} htmlFor="dateOfBirth">
                  Date of Birth
                </label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="text"
                  className={inputClass}
                  value={licenseData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Mobile Number */}
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

              {/* Birth State */}
              <div>
                <label className={labelClass} htmlFor="birthState">
                  Birth State
                </label>
                <input
                  id="birthState"
                  name="birthState"
                  type="text"
                  className={inputClass}
                  value={licenseData.birthState}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Birth District */}
              <div>
                <label className={labelClass} htmlFor="birthDistrict">
                  Birth District
                </label>
                <input
                  id="birthDistrict"
                  name="birthDistrict"
                  type="text"
                  className={inputClass}
                  value={licenseData.birthDistrict}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Relation */}
              <div>
                <label className={labelClass} htmlFor="relation">
                  Relation (Father/Mother/Spouse)
                </label>
                <select
                  id="relation"
                  name="relation"
                  className={inputClass}
                  value={licenseData.relation}
                  onChange={handleInputChange}
                  required
                >
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Spouse">Spouse</option>
                </select>
              </div>

              {/* Relation Name */}
              <div>
                <label className={labelClass} htmlFor="relationName">
                  Relation Name
                </label>
                <input
                  id="relationName"
                  name="relationName"
                  type="text"
                  className={inputClass}
                  value={licenseData.relationName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Relation Address */}
              <div>
                <label className={labelClass} htmlFor="relationAddress">
                  Relation Address
                </label>
                <input
                  id="relationAddress"
                  name="relationAddress"
                  type="text"
                  className={inputClass}
                  value={licenseData.relationAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Relation Pincode */}
              <div>
                <label className={labelClass} htmlFor="relationPincode">
                  Relation Pincode
                </label>
                <input
                  id="relationPincode"
                  name="relationPincode"
                  type="text"
                  className={inputClass}
                  value={licenseData.relationPincode}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Living Address Since */}
              <div>
                <label className={labelClass} htmlFor="livingAddressSince">
                  Living Address Since
                </label>
                <input
                  id="livingAddressSince"
                  name="livingAddressSince"
                  type="text"
                  className={inputClass}
                  value={licenseData.livingAddressSince}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* Rejected Note */}
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
                  required
                >
                  {statusEnum.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              {/* Rejected Note */}
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

              {/* Form Submit */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Update Voter ID
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

export default User_votternew;
