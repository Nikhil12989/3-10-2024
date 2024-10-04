import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_incomecertificate = () => {
    const { id } = useParams();
    const [certificateData, setCertificateData] = useState({
        fullNameEnglish: "",
        fullNameMarathi: "",
        fatherFullNameEnglish: "",
        fatherFullNameMarathi: "",
        dateOfBirth: "",
        age: "",
        gender: "Male",
        mobileNumber: "",
        service: "",
        address: "",
        state: "",
        district: "",
        pincode: "",
        sourceOfIncome: "",
        purposeOfIncomeCertificate: "",
        application_type: "",
        formPrice: 0,
        Status: "In-Progress",
        rejectedNote: "",
        submitNote: "",
        completedNote: "",
    });

    const [documents, setDocuments] = useState({
        rationCard: null,
        aadharCard: null,
        photoIdentity: null,
        signature: null,
        talithiIncome: null,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const statusEnum = ["In-Progress", "Submitted", "Rejected", "Completed"];

    useEffect(() => {
        const fetchCertificateData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `http://192.168.1.50:5000/api/incomeCertificate/getbyidincome-certificate/${id}`
                );
                const data = response.data;

                // Populate state with fetched data
                setCertificateData({
                    fullNameEnglish: data.fullNameEnglish || "",
                    fullNameMarathi: data.fullNameMarathi || "",
                    fatherFullNameEnglish: data.fatherFullNameEnglish || "",
                    fatherFullNameMarathi: data.fatherFullNameMarathi || "",
                    dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split("T")[0] : "",
                    age: data.age || "",
                    gender: data.gender || "Male",
                    mobileNumber: data.mobileNumber || "",
                    service: data.service || "",
                    address: data.address || "",
                    state: data.state || "",
                    district: data.district || "",
                    pincode: data.pincode || "",
                    sourceOfIncome: data.sourceOfIncome || "",
                    purposeOfIncomeCertificate: data.purposeOfIncomeCertificate || "",
                    application_type: data.application_type || "",
                    formPrice: data.formPrice || 0,
                    Status: data.Status || "In-Progress",
                    rejectedNote: data.rejectedNote || "",
                    submitNote: data.submitNote || "",
                    completedNote: data.completedNote || "",
                });
            } catch (err) {
                setError("Error fetching income certificate data");
            } finally {
                setLoading(false);
            }
        };
        fetchCertificateData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        
        for (const key in certificateData) {
            formData.append(key, certificateData[key]);
        }
        for (const key in documents) {
            if (documents[key]) {
              formData.append(`documents.${key}`, documents[key]); // Match the structure expected by the backend
            }
          }

        try {
            const response = await axios.put(
                `http://192.168.1.50:5000/api/incomeCertificate/updateincome-certificate/${id}`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            toast.success(response.data.message);
        } catch (error) {
            toast.error("Failed to update income certificate.");
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCertificateData({ ...certificateData, [name]: value });
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
                        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Income Certificate</h1>
                        <form onSubmit={handleUpdate} className="space-y-6">
                            {/* Full Name English */}
                            <div>
                                <label className={labelClass} htmlFor="fullNameEnglish">Full Name (English)</label>
                                <input
                                    id="fullNameEnglish"
                                    name="fullNameEnglish"
                                    type="text"
                                    className={inputClass}
                                    value={certificateData.fullNameEnglish}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Full Name Marathi */}
                            <div>
                                <label className={labelClass} htmlFor="fullNameMarathi">Full Name (Marathi)</label>
                                <input
                                    id="fullNameMarathi"
                                    name="fullNameMarathi"
                                    type="text"
                                    className={inputClass}
                                    value={certificateData.fullNameMarathi}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Father's Full Name English */}
                            <div>
                                <label className={labelClass} htmlFor="fatherFullNameEnglish">Father's Full Name (English)</label>
                                <input
                                    id="fatherFullNameEnglish"
                                    name="fatherFullNameEnglish"
                                    type="text"
                                    className={inputClass}
                                    value={certificateData.fatherFullNameEnglish}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Father's Full Name Marathi */}
                            <div>
                                <label className={labelClass} htmlFor="fatherFullNameMarathi">Father's Full Name (Marathi)</label>
                                <input
                                    id="fatherFullNameMarathi"
                                    name="fatherFullNameMarathi"
                                    type="text"
                                    className={inputClass}
                                    value={certificateData.fatherFullNameMarathi}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label className={labelClass} htmlFor="dateOfBirth">Date of Birth</label>
                                <input
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    type="date"
                                    className={inputClass}
                                    value={certificateData.dateOfBirth}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Age */}
                            <div>
                                <label className={labelClass} htmlFor="age">Age</label>
                                <input
                                    id="age"
                                    name="age"
                                    type="number"
                                    className={inputClass}
                                    value={certificateData.age}
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
                                    value={certificateData.gender}
                                    onChange={handleInputChange}
                                    required
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label className={labelClass} htmlFor="mobileNumber">Mobile Number</label>
                                <input
                                    id="mobileNumber"
                                    name="mobileNumber"
                                    type="text"
                                    className={inputClass}
                                    value={certificateData.mobileNumber}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Service */}
                            <div>
                                <label className={labelClass} htmlFor="service">Service</label>
                                <input
                                    id="service"
                                    name="service"
                                    type="text"
                                    className={inputClass}
                                    value={certificateData.service}
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
                                    value={certificateData.address}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* State */}
                            <div>
                                <label className={labelClass} htmlFor="state">State</label>
                                <input
                                    id="state"
                                    name="state"
                                    type="text"
                                    className={inputClass}
                                    value={certificateData.state}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* District */}
                            <div>
                                <label className={labelClass} htmlFor="district">District</label>
                                <input
                                    id="district"
                                    name="district"
                                    type="text"
                                    className={inputClass}
                                    value={certificateData.district}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Pincode */}
                            <div>
                                <label className={labelClass} htmlFor="pincode">Pincode</label>
                                <input
                                    id="pincode"
                                    name="pincode"
                                    type="text"
                                    className={inputClass}
                                    value={certificateData.pincode}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Source of Income */}
                            <div>
                                <label className={labelClass} htmlFor="sourceOfIncome">Source of Income</label>
                                <input
                                    id="sourceOfIncome"
                                    name="sourceOfIncome"
                                    type="text"
                                    className={inputClass}
                                    value={certificateData.sourceOfIncome}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Purpose of Income Certificate */}
                            <div>
                                <label className={labelClass} htmlFor="purposeOfIncomeCertificate">Purpose of Income Certificate</label>
                                <input
                                    id="purposeOfIncomeCertificate"
                                    name="purposeOfIncomeCertificate"
                                    type="text"
                                    className={inputClass}
                                    value={certificateData.purposeOfIncomeCertificate}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="Status">Status</label>
                                <select
                                disabled
                                    id="Status"
                                    name="Status"
                                    className={inputClass}
                                    value={certificateData.Status}
                                    onChange={handleInputChange}
                                    required
                                >
                                    {statusEnum.map((status) => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Rejected Note */}
                            {certificateData.Status === "Rejected" && (
                                <div>
                                    <label className={labelClass} htmlFor="rejectedNote">Rejected Note</label>
                                    <textarea
                                    disabled
                                        id="rejectedNote"
                                        name="rejectedNote"
                                        className={inputClass}
                                        value={certificateData.rejectedNote}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )}

                            {/* File Uploads */}
                            <div>
                                <label className={labelClass} htmlFor="rationCard">Ration Card</label>
                                <input
                                    type="file"
                                    id="rationCard"
                                    name="rationCard"
                                    className={inputClass}
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="aadharCard">Aadhar Card</label>
                                <input
                                    type="file"
                                    id="aadharCard"
                                    name="aadharCard"
                                    className={inputClass}
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="photoIdentity">Photo Identity</label>
                                <input
                                    type="file"
                                    id="photoIdentity"
                                    name="photoIdentity"
                                    className={inputClass}
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="signature">Signature</label>
                                <input
                                    type="file"
                                    id="signature"
                                    name="signature"
                                    className={inputClass}
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>

                            <div>
                                <label className={labelClass} htmlFor="talithiIncome">Talithi Income</label>
                                <input
                                    type="file"
                                    id="talithiIncome"
                                    name="talithiIncome"
                                    className={inputClass}
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                            </div>

                            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded">
                                Update Income Certificate
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default User_incomecertificate;
