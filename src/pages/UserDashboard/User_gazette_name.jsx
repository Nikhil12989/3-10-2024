import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_gazette_name = () => {
    const { id } = useParams();
    const [licenseData, setLicenseData] = useState({
        fullName: "",
        oldName: "",
        newName: "",
        mobileNumber: "",
        email: "",
        address: "",
        gender: "",
        dateOfBirth: "",
        casteType: "",
        reasonForChange: "",
        application_type: "",
        formPrice: "",
        submitNote: "",
        completedNote: "",
        Status: "In-Progress",
        rejectedNote: "",
    });

    const [documents, setDocuments] = useState({
        aadharCard: null,
        photo: null,
        signature: null,
        schoolLC: null,
        nameChangeAffidavit: null,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const statusEnum = ["In-Progress", "Submitted", "Rejected", "Completed"];

    useEffect(() => {
        const fetchLicenseData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `http://192.168.1.50:5000/api/nameChangeGazette/getGazetteNameChange/${id}`
                );
                const data = response.data;

                setLicenseData({
                    fullName: data.fullName || "",
                    oldName: data.oldName || "",
                    newName: data.newName || "",
                    mobileNumber: data.mobileNumber || "",
                    email: data.email || "",
                    address: data.address || "",
                    gender: data.gender || "",
                    dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split("T")[0] : "",
                    casteType: data.casteType || "",
                    reasonForChange: data.reasonForChange || "",
                    application_type: data.application_type || "",
                    formPrice: data.formPrice || "",
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
         // Append document data
         for (const key in documents) {
            if (documents[key]) {
                formData.append(`documents.${key}`, documents[key]); // Match the structure expected by the backend
            }
          }
        try {
            const response = await axios.put(
                `http://192.168.1.50:5000/api/nameChangeGazette/updateGazetteNameChange/${id}`,
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
                        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Name Change Gazette</h1>
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

                            {/* Old Name */}
                            <div>
                                <label className={labelClass} htmlFor="oldName">Old Name</label>
                                <input
                                    id="oldName"
                                    name="oldName"
                                    type="text"
                                    className={inputClass}
                                    value={licenseData.oldName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* New Name */}
                            <div>
                                <label className={labelClass} htmlFor="newName">New Name</label>
                                <input
                                    id="newName"
                                    name="newName"
                                    type="text"
                                    className={inputClass}
                                    value={licenseData.newName}
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

                            {/* Email */}
                            <div>
                                <label className={labelClass} htmlFor="email">Email</label>
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
                                <label className={labelClass} htmlFor="address">Address</label>
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

                            {/* Gender */}
                            <div>
                                <label className={labelClass} htmlFor="gender">Gender</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    className={inputClass}
                                    value={licenseData.gender}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="" disabled>Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label className={labelClass} htmlFor="dateOfBirth">Date of Birth</label>
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

                            {/* Caste Type */}
                            <div>
                                <label className={labelClass} htmlFor="casteType">Caste Type</label>
                                <input
                                    id="casteType"
                                    name="casteType"
                                    type="text"
                                    className={inputClass}
                                    value={licenseData.casteType}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Reason for Change */}
                            <div>
                                <label className={labelClass} htmlFor="reasonForChange">Reason for Change</label>
                                <input
                                    id="reasonForChange"
                                    name="reasonForChange"
                                    type="text"
                                    className={inputClass}
                                    value={licenseData.reasonForChange}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Application Type */}
                            <div>
                                <label className={labelClass} htmlFor="application_type">Application Type</label>
                                <input
                                    id="application_type"
                                    name="application_type"
                                    type="text"
                                    className={inputClass}
                                    value={licenseData.application_type}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Form Price */}
                        

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

                            <div>
                                <label className={labelClass} htmlFor="signature">Signature</label>
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
                                <label className={labelClass} htmlFor="schoolLC">School Leaving Certificate</label>
                                <input
                                    id="schoolLC"
                                    name="schoolLC"
                                    type="file"
                                    className={inputClass}
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="nameChangeAffidavit">Name Change Affidavit</label>
                                <input
                                    id="nameChangeAffidavit"
                                    name="nameChangeAffidavit"
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

export default User_gazette_name;
