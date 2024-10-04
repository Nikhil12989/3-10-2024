import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User_Udyam = () => {
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
          `http://192.168.1.50:5000/api/udyamAadhar/getbyidudyam-aadhar/${id}`
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
    formData.append("ownerFullName", licenseData.ownerFullName);
    formData.append("PanCardNumber", licenseData.PanCardNumber);
    formData.append("AadharCardNumber", licenseData.AadharCardNumber);
    formData.append("casteCategory", licenseData.casteCategory);
    formData.append("gender", licenseData.gender);
    formData.append("businessName", licenseData.businessName);
    formData.append("mobileNumber", licenseData.mobileNumber);
    formData.append("email", licenseData.email);
    formData.append("businessStartDate", licenseData.businessStartDate);
    formData.append("numberOfEmployees", licenseData.numberOfEmployees);
    formData.append("natureOfBusiness", licenseData.natureOfBusiness);
    formData.append("bussinessInvestment", licenseData.bussinessInvestment);
    formData.append("bankName", licenseData.bankName);
    formData.append("accountNumber", licenseData.accountNumber);
    formData.append("IFSC", licenseData.IFSC);
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
        `http://192.168.1.50:5000/api/udyamAadhar/updateudyam-aadhar/${id}`,
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
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  if (!licenseData) return <div>No data found</div>;
  const inputClass =
    "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm";
  const labelClass = "block text-sm font-medium text-gray-700";

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Udyam Registration
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
                      <label htmlFor="ownerFullName" className={labelClass}>
                        Owner Full Name
                      </label>
                      <input
                        type="text"
                        id="ownerFullName"
                        className={inputClass}
                        value={licenseData.ownerFullName}
                        onChange={(e) =>
                          setLicenseData({
                            ...licenseData,
                            ownerFullName: e.target.value,
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
                      <label htmlFor="PanCardNumber" className={labelClass}>
                        PAN Card Number
                      </label>
                      <input
                        type="text"
                        id="PanCardNumber"
                        className={inputClass}
                        value={licenseData.PanCardNumber}
                        onChange={(e) =>
                          setLicenseData({
                            ...licenseData,
                            PanCardNumber: e.target.value,
                          })
                        }
                        placeholder="Enter PAN number"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="AadharCardNumber" className={labelClass}>
                        Aadhar Card Number
                      </label>
                      <input
                        type="text"
                        id="AadharCardNumber"
                        className={inputClass}
                        value={licenseData.AadharCardNumber}
                        onChange={(e) =>
                          setLicenseData({
                            ...licenseData,
                            AadharCardNumber: e.target.value,
                          })
                        }
                        placeholder="Enter Aadhar number"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Business Information Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Business Information
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="businessName" className={labelClass}>
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="businessName"
                        className={inputClass}
                        value={licenseData.businessName}
                        onChange={(e) =>
                          setLicenseData({
                            ...licenseData,
                            businessName: e.target.value,
                          })
                        }
                        placeholder="Enter business name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="natureOfBusiness" className={labelClass}>
                        Nature of Business
                      </label>
                      <input
                        type="text"
                        id="natureOfBusiness"
                        className={inputClass}
                        value={licenseData.natureOfBusiness}
                        onChange={(e) =>
                          setLicenseData({
                            ...licenseData,
                            natureOfBusiness: e.target.value,
                          })
                        }
                        placeholder="Enter business nature"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="businessStartDate" className={labelClass}>
                        Business Start Date
                      </label>
                      <input
                        type="date"
                        id="businessStartDate"
                        className={inputClass}
                        value={licenseData.businessStartDate}
                        onChange={(e) =>
                          setLicenseData({
                            ...licenseData,
                            businessStartDate: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="bussinessInvestment"
                        className={labelClass}
                      >
                        Business Investment
                      </label>
                      <input
                        type="text"
                        id="bussinessInvestment"
                        className={inputClass}
                        value={licenseData.bussinessInvestment}
                        onChange={(e) =>
                          setLicenseData({
                            ...licenseData,
                            bussinessInvestment: e.target.value,
                          })
                        }
                        placeholder="Enter investment amount"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                      <label htmlFor="mobileNumber" className={labelClass}>
                        Mobile Number
                      </label>
                      <input
                        type="text"
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
                  </div>
                </div>

                {/* Bank Details Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Bank Details
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="bankName" className={labelClass}>
                        Bank Name
                      </label>
                      <input
                        type="text"
                        id="bankName"
                        className={inputClass}
                        value={licenseData.bankName}
                        onChange={(e) =>
                          setLicenseData({
                            ...licenseData,
                            bankName: e.target.value,
                          })
                        }
                        placeholder="Enter bank name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="accountNumber" className={labelClass}>
                        Account Number
                      </label>
                      <input
                        type="text"
                        id="accountNumber"
                        className={inputClass}
                        value={licenseData.accountNumber}
                        onChange={(e) =>
                          setLicenseData({
                            ...licenseData,
                            accountNumber: e.target.value,
                          })
                        }
                        placeholder="Enter account number"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="IFSC" className={labelClass}>
                        IFSC Code
                      </label>
                      <input
                        type="text"
                        id="IFSC"
                        className={inputClass}
                        value={licenseData.IFSC}
                        onChange={(e) =>
                          setLicenseData({
                            ...licenseData,
                            IFSC: e.target.value,
                          })
                        }
                        placeholder="Enter IFSC code"
                        required
                      />
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
                  </div>
                </div>

                {/* Document Upload Section */}
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Document Upload
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="aadharCard" className={labelClass}>
                        Aadhar Card
                      </label>
                      <input
                        type="file"
                        id="aadharCard"
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        onChange={(e) =>
                          setFiles({ ...files, aadharCard: e.target.files[0] })
                        }
                      />
                    </div>

                    <div>
                      <label htmlFor="panCard" className={labelClass}>
                        PAN Card
                      </label>
                      <input
                        type="file"
                        id="panCard"
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        onChange={(e) =>
                          setFiles({ ...files, panCard: e.target.files[0] })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Status Section */}
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update Registration
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

export default User_Udyam;
