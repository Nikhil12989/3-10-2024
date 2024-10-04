import React, { useEffect } from 'react';
import { useAuth } from '../../context/auth'; // Adjust the import path based on your project structure
import axios from 'axios';
import logo from "../../assets/logo.png";
const Uprofile = () => {
  const [auth] = useAuth();
  const [profileData, setProfileData] = React.useState(null); // State to hold profile data

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://192.168.1.50:5000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${auth.token}`, // Use token from context
          },
        });
        setProfileData(response.data.user);
      } catch (error) {
        console.error("Error fetching profile data", error);
      }
    };

    if (auth.token) {
      fetchUserProfile();
    }
  }, [auth.token]); // Dependency on token

  return (
    <div className="">

      <div className='flex pt-14 flex-col items-center justify-center'>

        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-200 to-blue-500 p-6 text-white flex justify-center items-center">
            <div className="w-auto h-24 overflow-hidden flex justify-center items-center">
              <img
                src={logo}
                alt="Make Easy Documents Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>


          {/* User Info */}
          <div className=" rounded-lg p-6 m-4 sm:m-8 grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* User Profile Section */}
            <div className="flex flex-col justify-center items-center sm:items-start">
              <h1 className="text-3xl font-bold text-blue-900">{profileData ? profileData.firstname + ' ' + profileData.lastname : 'Loading...'}</h1>
              <p className="text-sm mt-1 text-gray-600">{profileData ? profileData.email : 'Loading...'}</p>
              <p className="text-lg text-blue-600 mt-2">User Of Make Easy Documents</p>
            </div>

            {/* Contact Information Section */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
              <h2 className="font-semibold text-gray-800 text-lg border-b pb-2">Contact Information</h2>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li><strong>Phone : </strong> {profileData ? profileData.phone : 'Loading...'}</li>
                <li><strong>Address : </strong> {profileData ? profileData.address : 'Loading...'}</li>
                <li><strong>Website : </strong> www.makeeasydocuments.com</li>
              </ul>
            </div>

          </div>


          {/* Profile Actions */}
          <div className="bg-gray-50 p-6 border-t flex justify-end space-x-3">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-orange-600">
              Edit Profile
            </button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md shadow hover:bg-gray-400">
              Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uprofile;