import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { motion } from 'framer-motion';
import axios from "axios";

const Applicationconsole = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [applicationType, setApplicationType] = useState("");
  const [searchData, setSearchData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.50:5000/api/getAll/Form11",
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );

        const modifiedData = response.data.map((item) => ({
          id: item._id,
          application_type: item.application_type,
          applicantName: item.fullName || item.companyFullName || item.ownerFullName || item.fullNameEnglish ,
          Status: item.Status || "In-Progress",
          viewed: item.viewed || false, // Assuming you have a 'viewed' property
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        }));

        setAllData(modifiedData);
        setFilteredData(modifiedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [auth.token]);

  const filterData = () => {
    let filtered = allData;

    if (applicationType) {
      filtered = filtered.filter(
        (item) => item.application_type === applicationType
      );
    }

    setFilteredData(filtered);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchData(value);

    const searchResults = allData.filter((item) =>
      item.applicantName.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(searchResults);
  };

  useEffect(() => {
    filterData();
  }, [applicationType]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleApplicationTypeClick = (applicationType, id) => {
    const trimmedApplicationType = applicationType.trim(); // Trim the application type
    console.log("Navigating to:", trimmedApplicationType, "with ID:", id); // Debugging line
    switch (trimmedApplicationType) {
      case "Voter Card":
        navigate(`/admin/application_votercard/${id}`);
        break;
      case "Shop Act":
        navigate(`/admin/application_shopact/${id}`);
        break;
      case "Learning License":
        navigate(`/admin/application_learning/${id}`);
        break;
      case "Company GST":
        navigate(`/admin/application_companygst/${id}`);
        break;
      case "Company Registration":
        navigate(`/admin/Application_companyregistration/${id}`);
        break;
      case "Individual GST":
        navigate(`/admin/application_individualgst/${id}`);
        break;
      case "Local Food License":
        navigate(`/admin/application_localfoodlicense/${id}`);
        break;
      case "State Food License":
        navigate(`/admin/application_statefoodlicense/${id}`);
        break;
      case "Central Food License":  // Ensure this matches exactly
        navigate(`/admin/application_centralfoodlicense/${id}`);
        break;
      case "New VoterCard":  // Ensure this matches exactly
        navigate(`/admin/application_newVoterid/${id}`);
        break;
      case "Food Manufacturing License":  // Ensure this matches exactly
        navigate(`/admin/application_foodmanufacturing/${id}`);
        break;
      case "Domicile Certificate":  // Ensure this matches exactly
        navigate(`/admin/application_domicile/${id}`);
        break;
      case "GST Registration":  // Ensure this matches exactly
        navigate(`/admin/application_gstregistration/${id}`);
        break;
      case "Company Pancard":
        navigate(`/admin/application_companypancard/${id}`);
        break;
      case "Individual Pancard":
        navigate(`/admin/application_individualpancard/${id}`);
        break;
      case "Fresh Passport":
        navigate(`/admin/Application_passport_fresh/${id}`);
        break;
      case "Re-Issue Passport":
        navigate(`/admin/Application_passport_reissue/${id}`);
        break;
      case "Permanent License":
        navigate(`/admin/application_permanent/${id}`);
        break;
      case "Gazette Name Change":
        navigate(`/admin/application_gazettenamechange/${id}`);
        break;
      case "Gazette DOB Change":
        navigate(`/admin/application_gazettedobchange/${id}`);
        break;
      case "Gazette Religion Change":
        navigate(`/admin/application_gazettereligionchange/${id}`);
        break;
      case "Shift Voter ID":
        navigate(`/admin/Application_votershift/${id}`);
        break;
      case "Udyam Aadhar":
        navigate(`/admin/application_udhyam/${id}`);
        break;
      case "Income Certificate":
        navigate(`/admin/Application_incomecertificate/${id}`);
        break;
      default:
        console.log("Unknown application type:", trimmedApplicationType); // Logging unknown types
    }
  };

  // Function to get the status class based on the status value
  const getStatusClass = (status, viewed) => {
    let className = "font-bold "; // Default bold for all statuses
    switch (status) {
      case "In-Progress":
        className += "text-yellow-500"; // Yellow for In-Progress
        break;
      case "Submitted":
        className += "text-blue-500"; // Blue for Submitted
        break;
      case "Completed":
        className += "text-green-500"; // Green for Completed
        break;
      case "Rejected":
        className += "text-red-500"; // Red for Rejected
        break;
      default:
        className += "text-gray-500"; // Default color for unknown status
        break;
    }
    return viewed ? className : `${className} font-bold`; // Additional bold if not viewed
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
  <h2 className="mt-6 mb-6 ml-5 mr-5 text-2xl text-white text-center bg-blue-900 p-6 rounded-lg shadow-lg transition-transform duration-300">
    Application Console
  </h2>

  <div className="mx-5 mb-4 md:mx-8 lg:mx-12">
    <div className="flex flex-col md:flex-row md:space-x-4">
      {/* Certificate Name */}
      <div className="flex flex-col w-full md:w-1/2">
        <label
          htmlFor="certificateName"
          className="text-gray-700 mb-2 text-sm md:text-base lg:text-lg"
        >
          Certificate Name*
        </label>
        <select
          id="certificateName"
          className="border border-gray-300 rounded-md p-2 w-full"
          onChange={(e) => setApplicationType(e.target.value)}
        >
          <option value="">--Select Certificate Name--</option>
          <option value="Voter Card">Voter Card</option>
          <option value="Shop Act">Shop Act</option>
          <option value="Learning DL">Learning DL</option>
          <option value="Company GST">Company GST</option>
          <option value="Individual GST">Individual GST</option>
          <option value="Local Food License">Local Food License</option>
          <option value="Company Pancard">Company Pancard</option>
        </select>
      </div>

      {/* Applicant Name */}
      <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0">
        <label
          htmlFor="applicantName"
          className="text-gray-700 mb-2 text-sm md:text-base lg:text-lg"
        >
          Applicant Name*
        </label>
        <input
          type="text"
          id="applicantName"
          value={searchData}
          onChange={handleSearch}
          placeholder="Search by applicant name"
          className="border border-gray-300 rounded-md p-1.5 w-full text-sm md:text-base lg:text-lg"
        />
      </div>
    </div>
  </div>

  {/* Responsive Table */}
  <div className="flex-1 overflow-auto mx-5 mt-10 relative z-10">
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="overflow-x-auto w-full max-w-[20rem] sm:max-w-full"
    >
      <table className="w-full min-w-[700px] mx-auto text-sm md:text-md lg:text-lg bg-white shadow-md rounded-lg border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500 to-blue-950">
            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">New</th>
            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Application Type</th>
            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Applicant</th>
            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Status</th>
            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Created On</th>
            <th className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-white">Updated</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-100 transition duration-300">
                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-center">
                  {!item.viewed && <span className="text-red-500">New</span>}
                </td>
                <td
                  className="px-2 md:px-4 py-2 border-2 border-[#3f4b74] text-blue-600 cursor-pointer hover:font-bold"
                  onClick={() => handleApplicationTypeClick(item.application_type, item.id)}
                >
                  {item.application_type}
                </td>
                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74]">{item.applicantName}</td>
                <td className={`px-2 md:px-4 py-2 border-2 border-[#3f4b74] ${getStatusClass(item.Status, item.viewed)}`}>
                  {item.Status}
                </td>
                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74]">{new Date(item.createdAt).toLocaleString()}</td>
                <td className="px-2 md:px-4 py-2 border-2 border-[#3f4b74]">{new Date(item.updatedAt).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-2">No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </motion.div>
  </div>

  {/* Responsive Pagination */}
  <div className="flex flex-wrap justify-center mt-4">
    <button
      className={`mx-1 px-3 py-1 md:px-4 md:py-2 text-white bg-blue-500 rounded-md ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={() => paginate(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Prev
    </button>

    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i}
        className={`mx-1 px-3 py-1 md:px-4 md:py-2 text-white bg-blue-500 rounded-md ${currentPage === i + 1 ? "bg-blue-700" : ""}`}
        onClick={() => paginate(i + 1)}
      >
        {i + 1}
      </button>
    ))}

    <button
      className={`mx-1 px-3 py-1 md:px-4 md:py-2 text-white bg-blue-500 rounded-md ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={() => paginate(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
</div>

  );
};

export default Applicationconsole;
