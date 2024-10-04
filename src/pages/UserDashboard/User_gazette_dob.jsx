import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_gazette_dob = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        fullName: "",
        mobileNumber: "",
        email: "",
        address: "",
        gender: "",
        dateOfBirth: "",
        oldDOB: "",
        newDOB: "",
        casteType: "",
        reasonForChange: "",
        application_type: "",
        formPrice: "",
        submitNote: "",
        completedNote: "",
        Status: "In-Progress", // Initial status
        rejectedNote: "",
    });

    const [documents, setDocuments] = useState({
        aadharCard: null,
        photo: null,
        signature: null,
        schoolLC: null,
        DOBChangeAffidavit: null,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Style classes
    const inputClass = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm";
    const labelClass = "block text-sm font-medium text-gray-700";

    const renderImage = (imageData) => {
        if (imageData && imageData.contentType && imageData.data && imageData.data.data) {
            const byteArray = new Uint8Array(imageData.data.data);
            const base64String = btoa(String.fromCharCode(...byteArray));
            return `data:${imageData.contentType};base64,${base64String}`;
        }
        return null;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            console.log(`Selected file for ${name}:`, files[0].name, files[0]);
            setDocuments(prev => ({
                ...prev,
                [name]: files[0]
            }));
        }
    };
    
    const handleUpdate = async (event) => {
        event.preventDefault();
        const formDataToSend = new FormData();

        // Append form data
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        // Append documents nested under "documents"
        for (const key in documents) {
            if (documents[key]) {
                formDataToSend.append(`documents.${key}`, documents[key]);
            }
        }
    
        // Log the FormData entries
        for (const [key, value] of formDataToSend.entries()) {
            if (value instanceof File) {
                console.log(key, value.name, value.size);
            } else {
                console.log(key, value);
            }
        }
    
        try {
            const response = await axios.put(
                `http://192.168.1.50:5000/api/gazetteDOBChange/updategazette-dob-change/${id}`,
                formDataToSend,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            toast.success(response.data.message);
        } catch (error) {
            console.error('Upload error:', error.response?.data || error.message);
            toast.error("Failed to update data.");
        }
    };
    
    useEffect(() => {
        const fetchFormData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `http://192.168.1.50:5000/api/gazetteDOBChange/getbyidgazette-dob-change/${id}`
                );
                const data = response.data;

                setFormData({
                    fullName: data.fullName || "",
                    mobileNumber: data.mobileNumber || "",
                    email: data.email || "",
                    address: data.address || "",
                    gender: data.gender || "",
                    dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split("T")[0] : "",
                    oldDOB: data.oldDOB || "",
                    newDOB: data.newDOB || "",
                    casteType: data.casteType || "",
                    reasonForChange: data.reasonForChange || "",
                    application_type: data.application_type || "",
                    formPrice: data.formPrice || "",
                    submitNote: data.submitNote || "",
                    completedNote: data.completedNote || "",
                    Status: data.Status || "In-Progress",
                    rejectedNote: data.rejectedNote || "",
                });

                if (data.documents) {
                    setDocuments(data.documents);
                }
            } catch (err) {
                setError("Error fetching form data");
            } finally {
                setLoading(false);
            }
        };
        fetchFormData();
    }, [id]);

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:p-6">
                        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">DOB Change Gazette</h1>
                        
                        <form onSubmit={handleUpdate} className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label className={labelClass} htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label className={labelClass} htmlFor="mobileNumber">Mobile Number</label>
                                <input
                                    type="text"
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    value={formData.mobileNumber}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className={labelClass} htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <label className={labelClass} htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            {/* Gender */}
                            <div>
                                <label className={labelClass} htmlFor="gender">Gender</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label className={labelClass} htmlFor="dateOfBirth">Date of Birth</label>
                                <input
                                    type="date"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            {/* Old DOB */}
                            <div>
                                <label className={labelClass} htmlFor="oldDOB">Old DOB</label>
                                <input
                                    type="text"
                                    id="oldDOB"
                                    name="oldDOB"
                                    value={formData.oldDOB}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            {/* New DOB */}
                            <div>
                                <label className={labelClass} htmlFor="newDOB">New DOB</label>
                                <input
                                    type="text"
                                    id="newDOB"
                                    name="newDOB"
                                    value={formData.newDOB}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            {/* Caste Type */}
                            <div>
                                <label className={labelClass} htmlFor="casteType">Caste Type</label>
                                <input
                                    type="text"
                                    id="casteType"
                                    name="casteType"
                                    value={formData.casteType}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            {/* Reason for Change */}
                            <div>
                                <label className={labelClass} htmlFor="reasonForChange">Reason for Change</label>
                                <textarea
                                    id="reasonForChange"
                                    name="reasonForChange"
                                    value={formData.reasonForChange}
                                    onChange={handleInputChange}
                                    className={inputClass}
                                    required
                                />
                            </div>

                            {/* Status */}
                            <div>
                                <label className={labelClass} htmlFor="Status">Status</label>
                                <input
                                disabled
                                    type="text"
                                    id="Status"
                                    name="Status"
                                    value={formData.Status}
                                    readOnly
                                    className={inputClass + " bg-gray-100"}
                                />
                            </div>

                            {/* Rejected Note */}
                            {formData.Status === "Rejected" && (
                                <div>
                                    <label className={labelClass} htmlFor="rejectedNote">Rejected Note</label>
                                    <input
                                    disabled
                                        type="text"
                                        id="rejectedNote"
                                        name="rejectedNote"
                                        value={formData.rejectedNote}
                                        readOnly
                                        className={inputClass + " bg-gray-100"}
                                    />
                                </div>
                            )}

                            {/* File Inputs */}
                            <div>
                                <label className={labelClass}>Documents</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Aadhar Card */}
                                    <div>
                                        <label className={labelClass} htmlFor="aadharCard">Aadhar Card</label>
                                        <input
                                            type="file"
                                            id="aadharCard"
                                            name="aadharCard"
                                            onChange={handleFileChange}
                                            className={inputClass}
                                            accept="image/*"
                                        />
                                    </div>

                                    {/* Photo */}
                                    <div>
                                        <label className={labelClass} htmlFor="photo">Photo</label>
                                        <input
                                            type="file"
                                            id="photo"
                                            name="photo"
                                            onChange={handleFileChange}
                                            className={inputClass}
                                            accept="image/*"
                                        />
                                    </div>

                                    {/* Signature */}
                                    <div>
                                        <label className={labelClass} htmlFor="signature">Signature</label>
                                        <input
                                            type="file"
                                            id="signature"
                                            name="signature"
                                            onChange={handleFileChange}
                                            className={inputClass}
                                            accept="image/*"
                                        />
                                    </div>

                                    {/* School LC */}
                                    <div>
                                        <label className={labelClass} htmlFor="schoolLC">School Leaving Certificate</label>
                                        <input
                                            type="file"
                                            id="schoolLC"
                                            name="schoolLC"
                                            onChange={handleFileChange}
                                            className={inputClass}
                                            accept="image/*"
                                        />
                                    </div>

                                    {/* DOB Change Affidavit */}
                                    <div>
                                        <label className={labelClass} htmlFor="DOBChangeAffidavit">DOB Change Affidavit</label>
                                        <input
                                            type="file"
                                            id="DOBChangeAffidavit"
                                            name="DOBChangeAffidavit"
                                            onChange={handleFileChange}
                                            className={inputClass}
                                            accept="image/*"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
                                    Update
                                </button>
                            </div>
                        </form>

                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User_gazette_dob;
