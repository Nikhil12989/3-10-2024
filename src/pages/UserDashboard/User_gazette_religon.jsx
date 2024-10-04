import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_gazette_religon = () => {
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
        Status: "In-Progress",
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
    const statusEnum = ["In-Progress", "Submitted", "Rejected", "Completed"];

    useEffect(() => {
        const fetchFormData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `http://192.168.1.50:5000/api/gazetteReligionChange/getbyidgazette-religion-change/${id}`
                );
                const data = response.data;

                setFormData({
                    fullName: data.fullName || "",
                    mobileNumber: data.mobileNumber || "",
                    email: data.email || "",
                    address: data.address || "",
                    gender: data.gender || "",
                    dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split("T")[0] : "",
                    oldReligion: data.oldReligion || "",
                    newReligion: data.newReligion || "",
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
                setError("Error fetching form data");
            } finally {
                setLoading(false);
            }
        };
        fetchFormData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }
        for (const key in documents) {
            if (documents[key]) {
                formDataToSend.append(key, documents[key]);
            }
        }
        try {
            const response = await axios.put(
                `http://192.168.1.50:5000/api/gazetteReligionChange/updategazette-religion-change/${id}`,
                formDataToSend,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            toast.success(response.data.message);
        } catch (error) {
            toast.error("Failed to update data.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
                    <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">DOB reiligion change</h1>
                    <form onSubmit={handleUpdate} className="space-y-6">
                        {/* Full Name */}
                        <div>
                            <label className={labelClass} htmlFor="fullName">Full Name</label>
                            <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                className={inputClass}
                                value={formData.fullName}
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
                                value={formData.mobileNumber}
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
                                value={formData.email}
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
                                value={formData.address}
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
                                value={formData.gender}
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
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Old DOB */}
                        <div>
                            <label className={labelClass} htmlFor="oldReligion">old Religion</label>
                            <input
                                id="oldReligion"
                                name="oldReligion"
                                type="text"
                                className={inputClass}
                                value={formData.oldReligion}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* New DOB */}
                        <div>
                            <label className={labelClass} htmlFor="newReligion">new Religion</label>
                            <input
                                id="newReligion"
                                name="newReligion"
                                type="text"
                                className={inputClass}
                                value={formData.newReligion}
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
                                value={formData.casteType}
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
                                value={formData.reasonForChange}
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
                                value={formData.application_type}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Form Price */}
                        

                        {/* Submit Note */}
                       

                        {/* Status */}
                        <div>
                            <label className={labelClass} htmlFor="Status">Status</label>
                            <select
                                disabled
                                id="Status"
                                name="Status"
                                className={inputClass}
                                value={formData.Status}
                                onChange={handleInputChange}
                                required
                            >
                                {statusEnum.map((status) => (
                                    <option key={status} value={status}>{status}</option>
                                ))}
                            </select>
                        </div>

                        {/* Rejected Note */}
                        {formData.Status === "Rejected" && (
                            <div>
                                <label className={labelClass} htmlFor="rejectedNote">Rejected Note</label>
                                <textarea
                                    disabled
                                    id="rejectedNote"
                                    name="rejectedNote"
                                    className={inputClass}
                                    value={formData.rejectedNote}
                                    onChange={handleInputChange}
                                />
                            </div>
                        )}

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
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

export default User_gazette_religon
