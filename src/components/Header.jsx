import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaChevronDown, FaChevronUp, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth'; // Import useAuth from your context

const MenuItem = ({ item, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (item.children) {
    return (
      <div className={isMobile ? 'w-full' : 'relative'} ref={dropdownRef}>
        <button
          className={`flex gap-3 items-center justify-between w-full ${isMobile ? 'px-3 py-2 bg-orange-500 text-white' : 'hover:text-yellow-400'}`}
          onClick={toggleOpen}
        >
          <span>{item.label}</span>
          {isOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
        </button>
        {isOpen && (
          <div
            className={`${isMobile ? 'bg-orange-500 pl-4' : 'absolute left-0 mt-2 w-64 z-50 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
              } max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100`}
          >
            {item.children.map((child, index) => (
              <Link
                key={index}
                to={child.to}
                className={`block px-4 py-2 text-sm ${isMobile ? 'text-black hover:bg-gray-600' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                {child.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.to}
      className={`block ${isMobile ? 'px-3 py-2 hover:bg-gray-700 text-white' : 'hover:text-yellow-500'}`}
    >
      {item.label}
    </Link>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Use authentication context
  const [auth, setAuth] = useAuth();

  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    setAuth({ user: null, token: "" }); // Clear auth context
    localStorage.removeItem("auth"); // Clear auth from localStorage
  };

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    {
      label: 'License',
      children: [
        { label: 'Driving License', to: '/driving_Lic' },
        { label: 'Food License', to: '/food_lic' },
        { label: 'Food Manufacturing License', to: '/food_manufacturing' },
        { label: 'Shop Act License', to: '/shop_act' },
      ],
    },
    {
      label: 'All Services',
      children: [
        { label: 'PAN Services (UTI / NSDL)', to: '/pan_service' },
        { label: 'Shop Act License', to: '/shop_act' },
        { label: 'Food Services (FASSI)', to: '/food_lic' },
        { label: 'Passport', to: '/passport' },
        { label: 'Driving License', to: '/driving_Lic' },
        { label: 'GST Registration', to: '/gst_registration' },
        { label: 'Company Registration', to: '/company_registration' },
        { label: 'Gazette Rajpatra', to: '/gazzette' },
        { label: 'Income certificate', to: '/income_certificate' },
        { label: 'Trademark', to: '/tredmark' },
        { label: 'Import Export Code Registration', to: '/import_Export' },
        { label: 'Digital signature', to: '/digital_signature' },
        { label: 'Legal consultancy', to: '/legal_consultancy' },
        { label: 'Domicile certificate', to: '/domicie' },
        { label: 'Udyam Aadhar', to: '/uddyam_aadhar' },
        { label: 'Voter ID', to: '/votter_id' },
        { label: 'ITR Filing Online', to: '/itr_filing_online' },
        { label: 'IT Services', to: '/it_services' },
        { label: 'Kisan Point', to: '/kisan_point' },
      ],
    },
    
    {
      label: 'Company Registration',
      children: [
        { label: '   ---- INCORPORATION ----' },
        { label: 'Private Limited Company', to: '/pvt_ltd_company' },
        { label: 'LLP Registration', to: '/llp_registration' },
        { label: 'One Person Company', to: '/one_person_company' },
        { label: 'Public Limited Company', to: '/public_limited_company' },
        { label: 'Section 8 Company', to: '/section_8_company' },
        { label: 'Business Registration License', to: '/business_registration' },
        { label: 'Nidhi Registration License', to: '/nidhi_registration_lic' },
        { label: 'India Subsidiary Registration', to: '/india_subdiary_lic' },
        { label: '   ---- COMPLIANCE ----' },
        { label: 'Director DIN e KYC Update', to: '/director_DIN_eKYC_update' },
        { label: 'Appointment of Director', to: '/appointment_director' },
        { label: 'Removal of Director', to: '/removal_director' },
        { label: 'Pvt. Ltd. Winding up', to: '/pvt_ltd_winding_up' },
        { label: 'LLP Winding up', to: '/llp_winding_up' },
        { label: 'Increase Authorized Capital', to: '/increase_authorized_capital' },
        { label: 'Registered Office Change', to: '/registerd_office_change' },
        { label: 'Change Company Name', to: '/change_company_name' },
        { label: 'MOA Amendment of Pvt. Ltd', to: '/moa_amendmend_pvt_ltd' },
        { label: 'MOA Amendment of Public Ltd', to: '/moa_amendmend_public_ltd' },
        { label: 'MOA Amendment of Section 8', to: '/moa_amendmend_section8' },
        { label: 'Share Transfer', to: '/share_tranfer' },
        { label: 'JanSamarth Registration', to: '/jansamarth_registration' },
        { label: 'Credit Management Analysis', to: '/credit_management_analysis' }
      ],
    },
    {
      label: 'Tax & Compliance',
      children: [
        { label: 'GST', to: '/gst' },
        { label: 'Annual Compliances & Others', to: '/annual_compliances_other' },
        { label: 'Payroll Compliance', to: '/payroll_compliance' },
      ],
    },
    {
      label: 'Legal Consultancy',
      children: [
        { label: 'Online Legal Advice', to: '/online_legal_advice' },
        { label: 'Legal Notice', to: '/legal_notice' },
        { label: 'Advice on Divorce', to: '/advice_on_divorce' },
        { label: 'Revenue Legal', to: '/mahsule' },
      ],
    },
    {
      label: 'More',
      children: [
        { label: 'Contact', to: '/contact' },
        { label: 'Blogs', to: '/blogs' },
        { label: 'Gallery', to: '/gallery' },
        { label: 'Team', to: '/team' },
        { label: 'Reviews', to: '/reviews' },
      ],
    },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-2 shadow-xl">
      <div className="container mx-auto">
        <div className="flex lg:justify-center justify-between items-center px-4 lg:px-0">
          <h1 className='block md:hidden text-center mb-4 px-4'>
            <span className='text-3xl font-bold text-[#03ac26]'>Make Easy </span>
            <span className='text-2xl font-bold text-[#fe3600]'>Documents</span> <br />
            <span className='text-xl font-semibold'> Documents </span> Is Now
            <span className='text-xl font-semibold'> Simple</span>
          </h1>

          <nav className="hidden md:flex space-x-4 items-center">
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                <MenuItem item={item} isMobile={false} />
                {index !== menuItems.length - 1 && (
                  <div className="border-[1.5px] border-yellow-400 h-6"></div> // Desktop separator
                )}
              </React.Fragment>
            ))}

            {/* Profile Button */}
            <div className="relative">
              {auth.user ? (
                <div ref={dropdownRef} className="profile-button">
                  <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center gap-1 px-3 py-2 bg-orange-500 hover:bg-blue-600 rounded"
                  >
                    <FaUser className="w-5 h-4" />
                    <span>{auth.user.name}</span> {/* Show user's name */}
                    <FaChevronDown className="w-4 h-4" />
                  </button>
                  {isProfileDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      <Link
                        to="/dashboard/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Log Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/sign_in"
                  className="flex items-center gap-1 px-3 py-2 bg-orange-500 hover:bg-blue-600 rounded"
                >
                  <FaUser className="w-5 h-4" />
                  <span>Log In</span>
                </Link>
              )}
            </div>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="block md:hidden py-2 space-y-2 text-center">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} isMobile={true} />
          ))}

          <div className="px-4">
            {auth.user ? (
              <div className="space-y-2">
                <Link
                  to="/user_dashboard"
                  className="block px-3 py-2 hover:bg-gray-700 text-white"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 hover:bg-gray-700 text-white"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link
                to="/sign_in"
                className="block px-3 py-2 hover:bg-gray-700 text-white"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
