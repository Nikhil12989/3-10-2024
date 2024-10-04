import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Application_incomecertificate = () => {
    const { id } = useParams();
    const [licenseData, setLicenseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [files, setFiles] = useState({});
    const [showDocument, setShowDocument] = useState(null);
    const statusEnum = ['In-Progress', 'Submitted', 'Rejected', 'Completed'];

    useEffect(() => {
        const fetchLicenseData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/incomeCertificate/getbyidincome-certificate/${id}`);
                setLicenseData(response.data);
            } catch (err) {
                setError('Error fetching license data');
            } finally {
                setLoading(false);
            }
        };

        fetchLicenseData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('rejectedNote', licenseData.rejectedNote);
        formData.append('Status', licenseData.Status);

        for (const [key, value] of Object.entries(files)) {
            formData.append(`documents.${key}`, value);
        }

        try {
            const response = await axios.put(
                `http://localhost:5000/api/incomeCertificate/updateincome-certificate/${id}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            toast.success(response.data.message);
        } catch (error) {
            toast.error('Failed to update license.');
        }
    };

    const renderImage = (imageData) => {
        if (imageData && imageData.contentType && imageData.data && imageData.data.data) {
            const byteArray = new Uint8Array(imageData.data.data);
            const base64String = btoa(String.fromCharCode(...byteArray));
            return `data:${imageData.contentType};base64,${base64String}`;
        }
        return null;
    };

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
    if (!licenseData) return <div>No data found</div>;

    return (
        <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Income Certificate Application</h1>

            {/* License Data */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                <div className="bg-white shadow-md p-6 rounded-lg space-y-4">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2">Personal Information</h2>
                    <p className="text-gray-800"><strong className="text-gray-600">Full Name (English):</strong> {licenseData.fullNameEnglish}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">Full Name (Marathi):</strong> {licenseData.fullNameMarathi}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">Father's Name (English):</strong> {licenseData.fatherFullNameEnglish}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">Father's Name (Marathi):</strong> {licenseData.fatherFullNameMarathi}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">Date of Birth:</strong> {new Date(licenseData.dateOfBirth).toLocaleDateString()}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">Age:</strong> {licenseData.age}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">Gender:</strong> {licenseData.gender}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">Mobile Number:</strong> {licenseData.mobileNumber}</p>
                </div>

                <div className="bg-white shadow-md p-6 rounded-lg space-y-4">
                    <h2 className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2">Contact Information</h2>
                    <p className="text-gray-800"><strong className="text-gray-600">Service:</strong> {licenseData.service}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">Address:</strong> {licenseData.address}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">State:</strong> {licenseData.state}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">District:</strong> {licenseData.district}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">Pincode:</strong> {licenseData.pincode}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">Source of Income:</strong> {licenseData.sourceOfIncome}</p>
                    <p className="text-gray-800"><strong className="text-gray-600">Purpose of Income Certificate:</strong> {licenseData.purposeOfIncomeCertificate}</p>
                </div>
            </div>

            {/* Documents Section */}
            <div className="bg-white shadow-md p-6 rounded-lg mb-10">
                <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Documents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {licenseData.documents ? (
                        Object.entries(licenseData.documents).map(([key, value]) => (
                            <div key={key} className="border p-4 rounded-lg text-center bg-gray-100 shadow">
                                <h3 className="font-semibold mb-2 text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                                <button
                                    className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700"
                                    onClick={() => setShowDocument(renderImage(value))}
                                >
                                    View Document
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No documents available</p>
                    )}
                </div>
            </div>

            {/* Modal for Viewing Document */}
            {showDocument && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src={showDocument} alt="Document" className="max-w-full max-h-screen" />
                        <button
                            className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                            onClick={() => setShowDocument(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Update Form */}
            <div className="bg-white shadow-md p-6 rounded-lg mb-10">
                <h1 className="text-2xl font-bold text-gray-700 mb-6">Update License Application</h1>
                <form onSubmit={handleUpdate} className="space-y-6">
                    <div className="space-y-4">
                        <label className="block text-gray-700 font-semibold">Status:</label>
                        <select
                            name="Status"
                            value={licenseData.Status}
                            onChange={(e) => setLicenseData({ ...licenseData, Status: e.target.value })}
                            required
                            className="block w-full p-2 border rounded-lg bg-gray-50"
                        >
                            {statusEnum.map((status) => (
                                <option key={status} value={status}>
                                    {status}
                                </option>
                            ))}
                        </select>
                    </div>

                    {licenseData.Status === 'Rejected' && (
                        <div className="space-y-4">
                            <label className="block text-gray-700 font-semibold">Rejection Note:</label>
                            <input
                                type="text"
                                name="rejectedNote"
                                value={licenseData.rejectedNote || ''}
                                onChange={(e) => setLicenseData({ ...licenseData, rejectedNote: e.target.value })}
                                required
                                className="block w-full p-2 border rounded-lg bg-gray-50"
                            />
                        </div>
                    )}

                    <button type="submit" className="block w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                        Update License
                    </button>
                </form>
            </div>

            <ToastContainer />
        </div>
    );
};

export default Application_incomecertificate;
