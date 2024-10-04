import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const All_service = () => {
  return (
    <div>
      <Header />
      <div className="p-4 sm:p-6 lg:p-8 bg-gray-200">

        <div className="p-4 sm:p-6 lg:p-8">
          <h1 className='font-bold text-2xl sm:text-3xl text-center text-blue-800 mb-4'>- All Services -</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <Link
              to="/shop_act_new"
              className="bg-white text-center border p-2  shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">Shop Act License</h5>
              <hr className="w-8 mx-auto h-1 bg-green-700 mt-2" />
            </Link>
            <Link
              to="/pan_service"
              className="bg-white text-center border p-2  shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">PAN Services</h5>
              <hr className="w-8 mx-auto h-1 bg-yellow-700 mt-2" />
            </Link>
            <Link
              to="/driving_Lic"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 0, 255, 0.5)' }} // Blue shadow initially (matching the blue accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 0, 255, 0.5)')} // Revert to blue after hover
            >
              <h5 className="text-xl font-semibold mt-3">Driving License</h5>
              <hr className="w-8 mx-auto h-1 bg-pink-700 mt-2" />
            </Link>
            <Link
              to="/food_lic"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 165, 0, 0.5)' }} // Orange shadow initially (matching the orange accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 165, 0, 0.5)')} // Revert to orange after hover
            >
              <h5 className="text-xl font-semibold mt-3">Food Services (FSSAI)</h5>
              <hr className="w-8 mx-auto h-1 bg-orange-700 mt-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <Link
              to="/income_certificate"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 0, 255, 0.5)' }} // Blue shadow initially (matching the blue accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 0, 255, 0.5)')} // Revert to blue after hover
            >
              <h5 className="text-xl font-semibold mt-3">Income certificate</h5>
              <hr className="w-8 mx-auto h-1 bg-black mt-2" />
            </Link>
            <Link
              to="/company_registration"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">Company registration</h5>
              <hr className="w-8 mx-auto h-1 bg-slate-500 mt-2" />
            </Link>
            <Link
              to="/gazzette"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 165, 0, 0.5)' }} // Orange shadow initially (matching the orange accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 165, 0, 0.5)')} // Revert to orange after hover
            >
              <h5 className="text-xl font-semibold mt-3">Gazette</h5>
              <hr className="w-8 mx-auto h-1 bg-green-700 mt-2" />
            </Link>
            <Link
              to="/gst_registration"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Gst registration</h5>
              <hr className="w-8 mx-auto h-1 bg-green-900 mt-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <Link
              to="/tredmark"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Tredmark</h5>
              <hr className="w-8 mx-auto h-1 bg-blue-900 mt-2" />
            </Link>
            <Link
              to="/digital_signature"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 165, 0, 0.5)' }} // Orange shadow initially (matching the orange accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 165, 0, 0.5)')} // Revert to orange after hover
            >
              <h5 className="text-xl font-semibold mt-3">Digital signature</h5>
              <hr className="w-8 mx-auto h-1 bg-orange-500 mt-2" />
            </Link>
            <Link
              to="/legal_consultancy"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 0, 255, 0.5)' }} // Blue shadow initially (matching the blue accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 0, 255, 0.5)')} // Revert to blue after hover
            >
              <h5 className="text-xl font-semibold mt-3">Legal consultancy</h5>
              <hr className="w-8 mx-auto h-1 bg-green-500 mt-2" />
            </Link>
            <Link
              to="/import_Export"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">Import Export</h5>
              <hr className="w-8 mx-auto h-1 bg-blue-500 mt-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <Link
              to="/uddyam_aadhar"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">Udyam aadhar</h5>
              <hr className="w-8 mx-auto h-1 bg-green-500 mt-2" />
            </Link>
            <Link
              to="/itr_filing_online"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 0, 255, 0.5)' }} // Blue shadow initially (matching the blue accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 0, 255, 0.5)')} // Revert to blue after hover
            >
              <h5 className="text-xl font-semibold mt-3">Itr filing online</h5>
              <hr className="w-8 mx-auto h-1 bg-black mt-2" />
            </Link>
            <Link
              to="/domicie"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Domicile</h5>
              <hr className="w-8 mx-auto h-1 bg-orange-500 mt-2" />
            </Link>
            <Link
              to="/votter_id"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 165, 0, 0.5)' }} // Orange shadow initially (matching the orange accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 165, 0, 0.5)')} // Revert to orange after hover
            >
              <h5 className="text-xl font-semibold mt-3">Voter id</h5>
              <hr className="w-8 mx-auto h-1 bg-blue-500 mt-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <Link
              to="/it_services"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">IT services</h5>
              <hr className="w-8 mx-auto h-1 bg-green-500 mt-2" />
            </Link>
            <Link
              to="/kisan_point"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">kisan point</h5>
              <hr className="w-8 mx-auto h-1 bg-gray-500 mt-2" />

            </Link>
            <Link
              to="/mahsule"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">Mahsul / Revenue Legal</h5>
              <hr className="w-8 mx-auto h-1 bg-orange-500 mt-2" />
            </Link>
            <Link
              to="/legal_notice"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Legal notice</h5>
              <hr className="w-8 mx-auto h-1 bg-blue-500 mt-2" />
            </Link>
          </div>

        </div>


        <div className="p-4 sm:p-6 lg:p-8 ">
          <h1 className='font-bold text-3xl text-center text-blue-900'>- Company Registration -</h1>
          <h1 className='font-semibold text-xl text-center text-orange-600 pt-3'>INCORPORATION & COMPLIANCE</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <Link
              to="/appointment_director"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-1 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">Appointment Director</h5>
              <hr className="w-8 mx-auto h-1 bg-green-500 mt-2" />
            </Link>
            <Link
              to="/business_registration"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Business Registration</h5>
              <hr className="w-8 mx-auto h-1 bg-black mt-2" />
            </Link>
            <Link
              to="/change_company_name"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 0, 255, 0.5)' }} // Blue shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 0, 255, 0.5)')} // Revert to blue after hover
            >
              <h5 className="text-xl font-semibold mt-3">Change Company Name</h5>
              <hr className="w-8 mx-auto h-1 bg-yellow-500 mt-2" />
            </Link>
            <Link
              to="/credit_management_analysis"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 165, 0, 0.5)' }} // Orange shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 165, 0, 0.5)')} // Revert to orange after hover
            >
              <h5 className="text-xl font-semibold mt-3">Credit Management Analysis</h5>
              <hr className="w-8 mx-auto h-1 bg-green-500 mt-2" />
            </Link>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <Link
              to="/director_din_ekyc_update"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 0, 255, 0.5)' }} // Blue shadow initially (matching the blue accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 0, 255, 0.5)')} // Revert to blue after hover
            >
              <h5 className="text-xl font-semibold mt-3">Director din ekyc update</h5>
              <hr className="w-8 mx-auto h-1 bg-blue-800 mt-2" />
            </Link>
            <Link
              to="/increase_authorized_capital"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">Increase authorized capital</h5>
              <hr className="w-8 mx-auto h-1 bg-orange-500 mt-2" />
            </Link>
            <Link
              to="/india_subdiary_lic"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 165, 0, 0.5)' }} // Orange shadow initially (matching the orange accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 165, 0, 0.5)')} // Revert to orange after hover
            >
              <h5 className="text-xl font-semibold mt-3">India subdiary lic</h5>
              <hr className="w-8 mx-auto h-1 bg-green-500 mt-2" />
            </Link>
            <Link
              to="/jansamarth_registration"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Jansamarth registration</h5>
              <hr className="w-8 mx-auto h-1 bg-yellow-800 mt-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <Link
              to="/llp_registration"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">LLP registration</h5>
              <hr className="w-8 mx-auto h-1 bg-orange-500 mt-2" />
            </Link>
            <Link
              to="/llp_winding_up"
              className="bg-white text-center border p-2shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 165, 0, 0.5)' }} // Orange shadow initially (matching the orange accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 165, 0, 0.5)')} // Revert to orange after hover
            >
              <h5 className="text-xl font-semibold mt-3">LLP winding up</h5>
              <hr className="w-8 mx-auto h-1 bg-gray-500 mt-2" />
            </Link>
            <Link
              to="/moa_amendmend_public_ltd"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 0, 255, 0.5)' }} // Blue shadow initially (matching the blue accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 0, 255, 0.5)')} // Revert to blue after hover
            >
              <h5 className="text-xl font-semibold mt-3">MOA amendmend public ltd</h5>
              <hr className="w-8 mx-auto h-1 bg-red-800 mt-2" />
            </Link>
            <Link
              to="/moa_amendmend_pvt_ltd"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">MOA amendmend pvt ltd</h5>
              <hr className="w-8 mx-auto h-1 bg-orange-500 mt-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <Link
              to="/moa_amendmend_section8"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">MOA amendmend section8</h5>
              <hr className="w-8 mx-auto h-1 bg-green-900 mt-2" />
            </Link>
            <Link
              to="/nidhi_registration_lic"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 0, 255, 0.5)' }} // Blue shadow initially (matching the blue accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 0, 255, 0.5)')} // Revert to blue after hover
            >
              <h5 className="text-xl font-semibold mt-3">Nidhi registration lic</h5>
              <hr className="w-8 mx-auto h-1 bg-blue-700 mt-2" />
            </Link>
            <Link
              to="/domicie"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Domicile</h5>
              <hr className="w-8 mx-auto h-1 bg-orange-500 mt-2" />
            </Link>
            <Link
              to="/one_person_company"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 165, 0, 0.5)' }} // Orange shadow initially (matching the orange accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 165, 0, 0.5)')} // Revert to orange after hover
            >
              <h5 className="text-xl font-semibold mt-3">One person company</h5>
              <hr className="w-8 mx-auto h-1 bg-pink-500 mt-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            {/* PAN Services */}
            <Link
              to="/public_limited_company"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Public limited company</h5>
              <hr className="w-8 mx-auto h-1 bg-green-600 mt-2" />
            </Link>
            <Link
              to="/pvt_ltd_company"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">Pvt ltd company</h5>
              <hr className="w-8 mx-auto h-1 bg-blue-500 mt-2" />
            </Link>
            <Link
              to="/pvt_ltd_winding_up"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">Pvt ltd winding up</h5>
              <hr className="w-8 mx-auto h-1 bg-red-500 mt-2" />
            </Link>
            <Link
              to="/legal_notice"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Legal notice</h5>
              <hr className="w-8 mx-auto h-1 bg-green-500 mt-2" />
            </Link>
            <Link
              to="/registerd_office_change"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Registerd office change</h5>
              <hr className="w-8 mx-auto h-1 bg-black mt-2" />
            </Link>
            <Link
              to="/removal_director"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Removal director</h5>
              <hr className="w-8 mx-auto h-1 bg-orange-500 mt-2" />
            </Link>
            <Link
              to="/section_8_company"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Section 8 company</h5>
              <hr className="w-8 mx-auto h-1 bg-green-500 mt-2" />
            </Link>
            <Link
              to="/share_tranfer"
              className="bg-white text-center border p-2 shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Share tranfer</h5>
              <hr className="w-8 mx-auto h-1 bg-yellow-500 mt-2" />
            </Link>
          </div>
        </div>


        <div className="p-4 sm:p-6 lg:p-8">
          <h1 className='font-bold text-2xl sm:text-3xl text-center text-blue-800 mb-4'>- Legal consultancy -</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <Link
              to="/advice_on_divorce"
              className="bg-white text-center border p-2  shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">Advice on divorce</h5>
              <hr className="w-8 mx-auto h-1 bg-red-500 mt-2" />
            </Link>
            <Link
              to="/legal_notice"
              className="bg-white text-center border p-2  shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">legal_notice</h5>
              <hr className="w-8 mx-auto h-1 bg-pink-500 mt-2" />
            </Link>
            <Link
              to="/mahsule"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 0, 255, 0.5)' }} // Blue shadow initially (matching the blue accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 0, 255, 0.5)')} // Revert to blue after hover
            >
              <h5 className="text-xl font-semibold mt-3">Mahsule</h5>
              <hr className="w-8 mx-auto h-1 bg-orange-500 mt-2" />
            </Link>
            <Link
              to="/online_legal_advice"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 165, 0, 0.5)' }} // Orange shadow initially (matching the orange accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 165, 0, 0.5)')} // Revert to orange after hover
            >
              <h5 className="text-xl font-semibold mt-3">Online legal advice</h5>
              <hr className="w-8 mx-auto h-1 bg-black mt-2" />
            </Link>
          </div>

        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          <h1 className='font-bold text-2xl sm:text-3xl text-center text-blue-800 mb-4'>- Tax & Compliances -</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
            <Link
              to="/annual_compliances_other"
              className="bg-white text-center border p-2  shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(255, 105, 180, 0.5)' }} // Pink shadow initially (matching the pink accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(255, 105, 180, 0.5)')} // Revert to pink after hover
            >
              <h5 className="text-xl font-semibold mt-3">Annual compliances other</h5>
              <hr className="w-8 mx-auto h-1 bg-orange-500 mt-2" />
            </Link>
            <Link
              to="/gst"
              className="bg-white text-center border p-2  shadow-lg hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 128, 0, 0.5)' }} // Green shadow initially
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 128, 0, 0.5)')} // Revert to green after hover
            >
              <h5 className="text-xl font-semibold mt-3">Gst</h5>
              <hr className="w-8 mx-auto h-1 bg-green-500 mt-2" />
            </Link>
            <Link
              to="/payroll_compliance"
              className="bg-white text-center border p-2 shadow-lg hover:-translate-y-2 transition-transform duration-300"
              style={{ boxShadow: '0 2px 3px rgba(0, 0, 255, 0.5)' }} // Blue shadow initially (matching the blue accent color)
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)')} // Black shadow on hover
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 3px rgba(0, 0, 255, 0.5)')} // Revert to blue after hover
            >
              <h5 className="text-xl font-semibold mt-3">Payroll compliance</h5>
              <hr className="w-8 mx-auto h-1 bg-blue-500 mt-2" />
            </Link>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  )
}

export default All_service
