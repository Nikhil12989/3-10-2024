import React ,{useEffect,useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Common_form from '../../components/Common_form'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'
import LoginModal from '../../components/LoginModel'; // Import the modal
import { useAuth } from '../../context/auth'; // Import the useAuth hook

const Annual_compliances_other = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [auth] = useAuth(); // Access auth state from context
  const isLoggedIn = Boolean(auth.token); // Determine if user is logged in based on token

  useEffect(() => {
    // Show the modal if the user is not logged in
    if (!isLoggedIn) {
      setIsModalOpen(true); // Show the modal if not logged in
    }
  }, [isLoggedIn]); // Run effect whenever isLoggedIn changes

  const closeModal = () => {
    setIsModalOpen(false); // Function to close modal
  };
  return (
    <div>
      <Header />
      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Annual Compliance & Filing</h1>

          {/* Refund message */}
          <style jsx>{`
    @keyframes intenseBlink {
      0%, 100% { opacity: 1; color: #f20000; }
      20% { opacity: 1; color: #000000; }
    }
  `}</style>
          <h1
            className="
      text-lg md:text-xl font-bold underline underline-offset-8 
      mb-2 lg:mb-0 lg:ml-4 
      animate-[intenseBlink_1s_ease-in-out_infinite]
    "
          >
            100% Fees Refundable, if Service is not Completed!
          </h1>

          {/* Breadcrumbs */}
          <nav className="breadcrumbs mt-2 lg:mt-0">
            <ol className="flex space-x-2 lg:space-x-4 text-sm items-center">
              <li className="flex items-center">
                <AiFillHome className="mr-1 text-base hover:underline" />
                <Link to={'/'} className="text-black hover:underline text-base">Home</Link>
              </li>
              <li className="text-black">/</li>
              <li className="flex items-center">
                <AiOutlineAppstore className="mr-1 text-base" />
                <Link to={'/all_service'} className="text-black hover:underline text-base">All Services</Link>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-16 py-8">
        <div className="text-center mb-8">
          <h2 className=" lg:text-2xl font-bold border-b-4 border-red-600 inline-block pb-2">
            Annual Compliance & Filing
          </h2>

          <h3 className='pt-4 text-base font-semibold'>Complete Annual Filing & Compliance for All Types of Pvt. Limited
            / One Person / LLP Company at an Unbeatable Price!
          </h3>
          <p className='pt-4'>Let our CA Experts Start Filing Your Annual Compliance Today! India’s Best CA Panel Ready to Provide 360° Online Assistance for Your Annual Compliances

          </p>
        </div>
        <hr class="h-px my-9 bg-gray-700 border-none dark:bg-gray-700" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form */}

          <Common_form />

          {/* Right side - Content */}
          <div>
            <p className='pt-4 mb-4'>
              The Companies Act, 2013 of Indian Govt. legally mandates every entity in the country to follow the declarations of the Annual Compliance. For the Private Limited Companies (Pvt. Ltd.), One Person Companies (OPC), or Limited Liability Partnerships (LLP), Annual Compliance acts as a regular update to the Govt. that the entity is conducting its business under the particular Act.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-semibold text-orange-600 mb-2 text-center">
                Benefits of Filing from Make Easy Documents ™
              </h3>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 list-inside text-gray-600 mt-2">
                <li>✔ Customer support available in 6 languages including English</li>
                <li>✔ Free Annual Compliance Drafting</li>
                <li>✔ Free Consultations – Readily available!</li>
                <li>✔ Statutory Audit with Audit Fees</li>
                <li>✔ Point-to-point update for upcoming compliances & requirements</li>
                <li>✔ Call, E-mail, Chat support</li>
                <li>✔ Recommendable service at an unbeatable price</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
{/* Render Login Modal only if not logged in */}
{!isLoggedIn && isModalOpen && <LoginModal closeModal={closeModal} />}
      <Footer />
    </div>
  )
}

export default Annual_compliances_other
