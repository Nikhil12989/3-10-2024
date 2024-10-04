import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_Learning = () => {
  const { id } = useParams();
  const [licenseData, setLicenseData] = useState({
    fullName: "",
    fatherOrHusbandFullName: "",
    gender: "Male",
    dateOfBirth: "",
    qualification: "",
    bloodGroup: "",
    email: "",
    emergencyContact: "",
    state: "",
    district: "",
    taluka: "",
    rto: "",
    vehicleType: "",
    Status: "In-Progress",
    formPrice: "",
    application_type: "",
    submitNote: "",
    completedNote: "",
  });
  const [documents, setDocuments] = useState({
    addressProof: null,
    passportPhoto: null,
    signature: null,
    medicalCertificate: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const statusEnum = ["In-Progress", "Submitted", "Rejected", "Completed"];

  useEffect(() => {
    const fetchLicenseData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://192.168.1.50:5000/api/learningLicense/getLearningDL/${id}`
        );
        const data = response.data;
        console.log("Fetched Data: ", data);
        setLicenseData({
          fullName: data.fullName || "",
          fatherOrHusbandFullName: data.fatherOrHusbandFullName || "",
          gender: data.gender || "Male",
          dateOfBirth: data.dateOfBirth ? data.dateOfBirth.split("T")[0] : "",
          qualification: data.qualification || "",
          bloodGroup: data.bloodGroup || "",
          email: data.email || "",
          emergencyContact: data.emergencyContact || "",
          state: data.state || "",
          district: data.district || "",
          taluka: data.taluka || "",
          rto: data.rto || "",
          vehicleType: data.vehicleType || "",
          Status: data.Status || "In-Progress",
          formPrice: data.formPrice || "",
          application_type: data.application_type || "",
          submitNote: data.submitNote || "",
          completedNote: data.completedNote || "",
          rejectedNote: data.rejectedNote || "",
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

    for (const key in licenseData) {
      formData.append(key, licenseData[key]);
    }

    for (const key in documents) {
      if (documents[key]) {
        formData.append(`documents.${key}`, documents[key]); // Match the structure expected by the backend
      }
    }

    try {
      const response = await axios.put(
        `http://192.168.1.50:5000/api/learningLicense/updateLearningLicense/${id}`,
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
              Learning License Application
            </h1>

            <form onSubmit={handleUpdate} className="space-y-6">
              

              {/* Add remaining fields like fullName, qualification, etc. */}
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
                <label className={labelClass} htmlFor="fatherOrHusbandFullName">
                  Father/Husband's Full Name
                </label>
                <input
                  id="fatherOrHusbandFullName"
                  name="fatherOrHusbandFullName"
                  type="text"
                  className={inputClass}
                  value={licenseData.fatherOrHusbandFullName}
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
                <label className={labelClass} htmlFor="qualification">
                  Qualification
                </label>
                <input
                  id="qualification"
                  name="qualification"
                  type="text"
                  className={inputClass}
                  value={licenseData.qualification}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="bloodGroup">
                  Blood Group
                </label>
                <input
                  id="bloodGroup"
                  name="bloodGroup"
                  type="text"
                  className={inputClass}
                  value={licenseData.bloodGroup}
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
                <label className={labelClass} htmlFor="emergencyContact">
                  Emergency Contact
                </label>
                <input
                  id="emergencyContact"
                  name="emergencyContact"
                  type="text"
                  className={inputClass}
                  value={licenseData.emergencyContact}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="state">
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  className={inputClass}
                  value={licenseData.state}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="district">
                  District
                </label>
                <input
                  id="district"
                  name="district"
                  type="text"
                  className={inputClass}
                  value={licenseData.district}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="taluka">
                  Taluka
                </label>
                <input
                  id="taluka"
                  name="taluka"
                  type="text"
                  className={inputClass}
                  value={licenseData.taluka}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="rto">
                  RTO
                </label>
                <input
                  id="rto"
                  name="rto"
                  type="text"
                  className={inputClass}
                  value={licenseData.rto}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="vehicleType">
                  Vehicle Type
                </label>
                <input
                  id="vehicleType"
                  name="vehicleType"
                  type="text"
                  className={inputClass}
                  value={licenseData.vehicleType}
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

             

              {/* Document Uploads */}
              <div>
                <label className={labelClass} htmlFor="addressProof">
                  Address Proof
                </label>
                <input
                  id="addressProof"
                  name="addressProof"
                  type="file"
                  className={inputClass}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="passportPhoto">
                  Passport Photo
                </label>
                <input
                  id="passportPhoto"
                  name="passportPhoto"
                  type="file"
                  className={inputClass}
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="signature">
                  Passport Photo
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
                <label className={labelClass} htmlFor="medicalCertificate">
                  Medical Certificate
                </label>
                <input
                  id="medicalCertificate"
                  name="medicalCertificate"
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

export default User_Learning;
