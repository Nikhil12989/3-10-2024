import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_votternew = () => {
    const { id } = useParams();
    const [licenseData, setLicenseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [files, setFiles] = useState({});
    const [showDocument, setShowDocument] = useState(null);
    const statusEnum = ["In-Progress", "Submitted", "Rejected", "Completed"];

    useEffect(() => {
        const fetchLicenseData = async () => {
            try {
                const response = await axios.get(
                    `http://192.168.1.50:5000/api/shiftVoterID/getShiftVoterID/${id}`
                );
                console.log(response);
                setLicenseData(response.data);
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
        formData.append("fullName", licenseData.fullName);
        formData.append("gender", licenseData.gender);
        formData.append("dateOfBirth", licenseData.dateOfBirth);
        formData.append("mobileNumber", licenseData.mobileNumber);
        formData.append("email", licenseData.email);
        formData.append("birthState", licenseData.birthState);
        formData.append("birthDistrict", licenseData.birthDistrict);
        formData.append("relation", licenseData.relation);
        formData.append("relationName", licenseData.relationName);
        formData.append("relationAddress", licenseData.relationAddress);
        formData.append("relationPincode", licenseData.relationPincode);
        formData.append("livingAddressSince", licenseData.livingAddressSince);
        formData.append("oldVoterIDNumber", licenseData.oldVoterIDNumber);
        formData.append("previousConstituencyState", licenseData.previousConstituencyState);
        formData.append("previousConstituency", licenseData.previousConstituency);
        formData.append("rejectedNote", licenseData.rejectedNote);
        formData.append("submitNote", licenseData.submitNote);
        formData.append("completedNote", licenseData.completedNote);
        formData.append("rejectedAt", licenseData.rejectedAt);
        formData.append("submitedAt", licenseData.submitedAt);
        formData.append("CompletedAt", licenseData.CompletedAt);
        formData.append("Status", licenseData.Status);

        // Append files to formData
        for (const [key, value] of Object.entries(files)) {
            formData.append(`documents.${key}`, value);
        }

        try {
            const response = await axios.put(
                `http://192.168.1.50:5000/api/shiftVoterID/updateShiftVoterID/${id}`,
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

    const renderImage = (imageData) => {
        if (
            imageData &&
            imageData.contentType &&
            imageData.data &&
            imageData.data.data
        ) {
            const byteArray = new Uint8Array(imageData.data.data);
            const base64String = btoa(String.fromCharCode(...byteArray));
            return `data:${imageData.contentType};base64,${base64String}`;
        }
        return null;
    };

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
    if (!licenseData) return <div>No data found</div>;

    const inputClass = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm";
    const labelClass = "block text-sm font-medium text-gray-700";

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="px-4 py-5 sm:p-6">
                        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
                        Votter new
                        </h1>

                        <form onSubmit={handleUpdate} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {/* Personal Information Section */}
                                <div className="col-span-2">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                        Personal Information
                                    </h2>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="fullName" className={labelClass}>
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="fullName"
                                                className={inputClass}
                                                value={licenseData.fullName}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        fullName: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter full name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="gender" className={labelClass}>
                                                Gender
                                            </label>
                                            <select
                                                id="gender"
                                                className={inputClass}
                                                value={licenseData.gender}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        gender: e.target.value,
                                                    })
                                                }
                                                required
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="dateOfBirth" className={labelClass}>
                                                Date of Birth
                                            </label>
                                            <input
                                                type="date"
                                                id="dateOfBirth"
                                                className={inputClass}
                                                value={licenseData.dateOfBirth}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        dateOfBirth: e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="mobileNumber" className={labelClass}>
                                                Mobile Number
                                            </label>
                                            <input
                                                type="number"
                                                id="mobileNumber"
                                                className={inputClass}
                                                value={licenseData.mobileNumber}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        mobileNumber: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter mobile number"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className={labelClass}>
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className={inputClass}
                                                value={licenseData.email}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        email: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter email"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="birthState" className={labelClass}>
                                                Birth State
                                            </label>
                                            <input
                                                type="text"
                                                id="birthState"
                                                className={inputClass}
                                                value={licenseData.birthState}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        birthState: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter birth state"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="birthDistrict" className={labelClass}>
                                                Birth District
                                            </label>
                                            <input
                                                type="text"
                                                id="birthDistrict"
                                                className={inputClass}
                                                value={licenseData.birthDistrict}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        birthDistrict: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter birth district"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Relation Information Section */}
                                <div className="col-span-2">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                        Relation Information
                                    </h2>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="relation" className={labelClass}>
                                                Relation
                                            </label>
                                            <input
                                                type="text"
                                                id="relation"
                                                className={inputClass}
                                                value={licenseData.relation}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        relation: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter relation"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="relationName" className={labelClass}>
                                                Relation Name
                                            </label>
                                            <input
                                                type="text"
                                                id="relationName"
                                                className={inputClass}
                                                value={licenseData.relationName}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        relationName: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter relation name"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="relationAddress" className={labelClass}>
                                                Relation Address
                                            </label>
                                            <input
                                                type="text"
                                                id="relationAddress"
                                                className={inputClass}
                                                value={licenseData.relationAddress}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        relationAddress: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter relation address"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="relationPincode" className={labelClass}>
                                                Relation Pincode
                                            </label>
                                            <input
                                                type="text"
                                                id="relationPincode"
                                                className={inputClass}
                                                value={licenseData.relationPincode}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        relationPincode: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter relation pincode"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Information Section */}
                                <div className="col-span-2">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                        Additional Information
                                    </h2>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="livingAddressSince" className={labelClass}>
                                                Living Address Since
                                            </label>
                                            <input
                                                type="date"
                                                id="livingAddressSince"
                                                className={inputClass}
                                                value={licenseData.livingAddressSince}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        livingAddressSince: e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="oldVoterIDNumber" className={labelClass}>
                                                Old Voter ID Number
                                            </label>
                                            <input
                                                type="text"
                                                id="oldVoterIDNumber"
                                                className={inputClass}
                                                value={licenseData.oldVoterIDNumber}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        oldVoterIDNumber: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter old Voter ID number"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="previousConstituencyState" className={labelClass}>
                                                Previous Constituency State
                                            </label>
                                            <input
                                                type="text"
                                                id="previousConstituencyState"
                                                className={inputClass}
                                                value={licenseData.previousConstituencyState}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        previousConstituencyState: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter previous constituency state"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="previousConstituency" className={labelClass}>
                                                Previous Constituency
                                            </label>
                                            <input
                                                type="text"
                                                id="previousConstituency"
                                                className={inputClass}
                                                value={licenseData.previousConstituency}
                                                onChange={(e) =>
                                                    setLicenseData({
                                                        ...licenseData,
                                                        previousConstituency: e.target.value,
                                                    })
                                                }
                                                placeholder="Enter previous constituency"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Document Upload Section */}
                                <div className="col-span-2">
                                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                        Documents
                                    </h2>
                                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        {['aadhaarCard', 'voterID', 'addressProof', 'photo'].map((doc) => (
                                            <div key={doc}>
                                                <label htmlFor={doc} className={labelClass}>
                                                    {doc.replace(/([A-Z])/g, ' $1').toUpperCase()}
                                                </label>
                                                <input
                                                    type="file"
                                                    id={doc}
                                                    className={inputClass}
                                                    onChange={(e) => setFiles({ ...files, [doc]: e.target.files[0] })}
                                                    accept=".jpg,.jpeg,.png,.pdf"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                      <label htmlFor="Status" className={labelClass}>
                        Status{" "}
                      </label>
                      <input
                        disabled
                        type="text"
                        id="Status"
                        className={inputClass}
                        value={licenseData.Status}
                        onChange={(e) =>
                          setLicenseData({
                            ...licenseData,
                            Status: e.target.value,
                          })
                        }
                        placeholder="Status"
                        required
                      />
                    </div>
                    {licenseData.Status === "Rejected" && (
                      <div>
                        <label htmlFor="rejectedNote" className={labelClass}>
                          Rejected Note
                        </label>
                        <input
                          disabled
                          type="text"
                          id="rejectedNote"
                          className={inputClass}
                          value={licenseData.rejectedNote}
                          required
                        />
                      </div>
                    )}
            
                               

                                {/* Status Section */}
                               

                                {/* Update Button */}
                                <div className="col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full rounded-md bg-indigo-600 py-2 px-4 text-white font-semibold shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>

                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User_votternew
