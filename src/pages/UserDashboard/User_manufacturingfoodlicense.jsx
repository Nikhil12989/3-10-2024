import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_manufacturingfoodlicense = () => {
    const { id } = useParams();
    const [licenseData, setLicenseData] = useState({
      fullName: "",
      businessName: "",
      natureOfBusiness: "",
      ownerQualification: "",
      email: "",
      mobileNumber: "",
      businessAddress: "",
      licenseRequireYears: "",
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
      rentAggrement: null,
      shopActLicense: null,
      uddyamAadhar: null,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const statusEnum = ["In-Progress", "Submitted", "Rejected", "Completed"];

    useEffect(() => {
      const fetchLicenseData = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            `http://192.168.1.50:5000/api/foodManufacturingLicense/getFoodManufacturingLicense/${id}`
          );
          const data = response.data;
          setLicenseData({
            fullName: data.fullName || "",
            businessName: data.businessName || "",
            natureOfBusiness: data.natureOfBusiness || "",
            ownerQualification: data.ownerQualification || "",
            email: data.email || "",
            mobileNumber: data.mobileNumber || "",
            businessAddress: data.businessAddress || "",
            licenseRequireYears: data.licenseRequireYears || "",
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
          formData.append(key, documents[key]);
        }
      }
      try {
        const response = await axios.put(
          `http://192.168.1.50:5000/api/foodManufacturingLicense/updatefoodmanufacturinglicense/${id}`,
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
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

    const inputClass = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm";
    const labelClass = "block text-sm font-medium text-gray-700";
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:p-6">
                        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">foodManufacturingLicense</h1>
                        <form onSubmit={handleUpdate} className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label className={labelClass} htmlFor="fullName">Full Name</label>
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

                            {/* Business Name */}
                            <div>
                                <label className={labelClass} htmlFor="businessName">Business Name</label>
                                <input
                                    id="businessName"
                                    name="businessName"
                                    type="text"
                                    className={inputClass}
                                    value={licenseData.businessName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Nature of Business */}
                            <div>
                                <label className={labelClass} htmlFor="natureOfBusiness">Nature of Business</label>
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

                            {/* Owner Qualification */}
                            <div>
                                <label className={labelClass} htmlFor="ownerQualification">Owner Qualification</label>
                                <input
                                    id="ownerQualification"
                                    name="ownerQualification"
                                    type="text"
                                    className={inputClass}
                                    value={licenseData.ownerQualification}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label className={labelClass} htmlFor="mobileNumber">Mobile Number</label>
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

                            {/* Business Address */}
                            <div>
                                <label className={labelClass} htmlFor="businessAddress">Business Address</label>
                                <input
                                    id="businessAddress"
                                    name="businessAddress"
                                    type="text"
                                    className={inputClass}
                                    value={licenseData.businessAddress}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* License Require Years */}
                            <div>
                                <label className={labelClass} htmlFor="licenseRequireYears">License Require Years</label>
                                <input
                                    id="licenseRequireYears"
                                    name="licenseRequireYears"
                                    type="text"
                                    className={inputClass}
                                    value={licenseData.licenseRequireYears}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Status */}
                            <div>
                                <label className={labelClass} htmlFor="Status">Status</label>
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
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Rejected Note */}
                            {licenseData.Status === "Rejected" && (
                                <div>
                                    <label className={labelClass} htmlFor="rejectedNote">Rejected Note</label>
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
                                <label className={labelClass} htmlFor="aadharCard">Aadhar Card</label>
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
                                <label className={labelClass} htmlFor="panCard">Pan Card</label>
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
                                <label className={labelClass} htmlFor="photo">Photo</label>
                                <input
                                    id="photo"
                                    name="photo"
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

export default User_manufacturingfoodlicense
