import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Application_companypancard = () => {
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
        const response = await axios.get(`http://192.168.1.50:5000/api/companyPancard/getCompanyPancard/${id}`);
        console.log(response.data); // Debugging line
        setLicenseData(response.data); // Adjusted to access the right data
      } catch (err) {
        console.error(err); // Debugging line
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
        `http://192.168.1.50:5000/api/companyPancard/updateCompanyPancard/${id}`,
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

  // Handle document viewing
  const handleViewDocument = (document) => {
    const image = renderImage(document);
    setShowDocument(image);
  };

  const closeDocumentViewer = () => {
    setShowDocument(null);
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!licenseData) return <div>No data found</div>;

  return (
    <div className="p-4 sm:p-6 md:p-8 mt-5 mb-10 max-w-6xl mx-auto bg-gray-200 rounded-lg shadow-lg">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Company Pancard Application</h1>

      {/* License Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div className="bg-white shadow-md p-4 sm:p-6 rounded-lg space-y-4">
          <h2 className="text-lg font-bold text-center text-gray-700 border-b-2 border-gray-400 pb-2">
            Personal Information
          </h2>

          {/* Update the fields to match the new design */}
          {[
            { label: 'Company Name', value: licenseData.companyFullName },
            { label: 'Owner Full Name', value: licenseData.ownerFullName },
            { label: 'Company Register Number', value: licenseData.companyRegisterNumber },
            { label: 'Company Address', value: licenseData.companyAddress },
            { label: 'Pincode', value: licenseData.pincode },
            { label: 'Application Type', value: licenseData.application_type },
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between text-gray-800">
              <strong className="text-gray-600 w-1/2">{label}:</strong>
              <span className="w-3/4 text-gray-700 border border-gray-300 bg-gray-50 p-2 rounded">{value}</span>
            </div>
          ))}
        </div>


        <div className="bg-white shadow-md p-4 sm:p-6 rounded-lg space-y-4">
          <h2 className="text-lg font-bold text-center text-gray-700 border-b-2 border-gray-400 pb-2">
            Contact Information
          </h2>

          {/* Update the fields to match the new design */}
          {[
            { label: 'Mobile Number', value: licenseData.mobileNumber },
            { label: 'Email', value: licenseData.email },
            { label: 'Gender', value: licenseData.gender },
            { label: 'Date of Birth', value: new Date(licenseData.dateOfBirth).toLocaleDateString() },
            
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between text-gray-800">
              <strong className="text-gray-600 w-1/2">{label}:</strong>
              <span className="w-3/4 text-gray-700 border border-gray-300 bg-gray-50 p-2 rounded">{value}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Documents Section */}
      <div className="bg-white shadow-md p-4 sm:p-6 rounded-lg mb-10">
      <h2 className="text-lg sm:text-xl text-center font-bold mb-4 text-gray-700 border-b-2 border-gray-400 pb-2">
        Application Documents
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {licenseData.documents ? (
          Object.entries(licenseData.documents).map(([key, value]) => (
            <div key={key} className="border p-4 rounded-lg text-center bg-gray-100 shadow">
              <h3 className="font-semibold mb-2 text-gray-700 tracking-normal">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h3>
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
            <div className="mt-4 flex justify-between">
              <button
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                onClick={() => setShowDocument(null)}
              >
                Close
              </button>
              <a
                href={showDocument}
                download
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Update Form Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Update Form */}
        <div className="bg-white shadow-md p-4 sm:p-6 rounded-lg mb-6 lg:mb-0 lg:mr-4 w-full lg:w-1/2">
          <h2 className="text-lg sm:text-xl text-center font-bold mb-4 text-gray-700 border-b-2 border-gray-400 pb-2">
            Update License Application
          </h2>
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
                <textarea
                  name="rejectedNote"
                  value={licenseData.rejectedNote}
                  onChange={(e) => setLicenseData({ ...licenseData, rejectedNote: e.target.value })}
                  className="block w-full p-2 border rounded-lg bg-gray-50"
                  rows="2"
                ></textarea>
              </div>
            )}

            <button type="submit" className="block w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
              Update License
            </button>
          </form>
        </div>

        {/* Application History */}
        <div className="bg-green-50 shadow-md p-6 rounded-lg w-full lg:w-1/2 space-y-4">
          <h2 className="text-xl text-center font-bold mb-4 text-gray-700 border-b-2 border-gray-400 pb-2">
            Application History
          </h2>

          <div className="flex justify-between text-gray-800">
            <strong className="text-gray-600 flex-1">Created At (Date & Time):</strong>
            <span className="flex-1 text-center text-gray-700 border border-gray-300 bg-gray-50 p-1 rounded">
              {new Date(licenseData.createdAt).toLocaleString('en-IN', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true, // Change to true for 12-hour format
              })}
            </span>
          </div>

          <div className="flex justify-between text-gray-800">
            <strong className="text-gray-600 flex-1">Updated At (Date & Time):</strong>
            <span className="flex-1 text-center text-gray-700 border border-gray-300 bg-gray-50 p-1 rounded">
              {licenseData.updatedAt ? new Date(licenseData.updatedAt).toLocaleString('en-IN', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true, // Change to true for 12-hour format
              }) : 'N/A'}
            </span>
          </div>

          <div className="flex justify-between text-gray-800">
            <strong className="text-gray-600 flex-1">Current Status:</strong>
            <span className="flex-1 text-center text-gray-700 border border-gray-300 bg-gray-50 p-1 rounded">
              {licenseData.Status ? licenseData.Status : 'N/A'}
            </span>
          </div>

        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Application_companypancard;
