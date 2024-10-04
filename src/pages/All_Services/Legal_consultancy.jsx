import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom'
import legal1 from '../../assets/services/legal/1.jpg'
import legal2 from '../../assets/services/legal/2.jpg'
import legal3 from '../../assets/services/legal/3.jpg'
import legal4 from '../../assets/services/legal/4.jpg'
import legal5 from '../../assets/services/legal/5.jpg'
import legal6 from '../../assets/services/legal/6.jpg'
import legal7 from '../../assets/services/legal/7.jpg'
import legal8 from '../../assets/services/legal/8.jpg'
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai';

// Card Component
const ServiceCard = ({ image, title, description, linkText }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="h-48 w-full object-cover" src={image} alt={title} />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <a href="#" className="text-red-600 font-semibold hover:underline">{linkText}</a>
      </div>
    </div>
  );
};

// Legal Consultancy Section Component
const LegalConsultancy = () => {
  const services = [
    {
      image: 'https://via.placeholder.com/300', // Add real images here
      title: 'Legal Advice Online',
      description: 'Online Legal Help is the way to provide assistance to the people who is not able to access the court easily.',
      linkText: 'Learn more',
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Send Legal Notice',
      description: 'Draft your Legal Notice online with the help of experienced advocates in India through Make easy documents.',
      linkText: 'Learn more',
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Rent Deed Drafting',
      description: 'Draft your rent agreement by top lawyers online. Save Money, Save Time, Hassle Free Service, 100% Online.',
      linkText: 'Learn more',
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Partnership Deed Drafting',
      description: 'A team of lawyers from Online Legal India will draft your partnership deed online. No need to visit office.',
      linkText: 'Learn more',
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Sale Deed Drafting',
      description: 'A team of expert from Online Legal India will draft your sale deed. No need to visit office.',
      linkText: 'Learn more',
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Lease Deed Drafting',
      description: 'A team of expert from Online Legal India will draft your Lease Deed. No need to visit office.',
      linkText: 'Learn more',
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Divorce Online',
      description: 'Get Advice from An Experienced Divorce Lawyer | On Call Support | Divorce Filing',
      linkText: 'Learn more',
    },
    {
      image: '',
      title: 'Joint Venture Deed',
      description: 'Lawyer of Online Legal India can assist you to draft Joint Venture Agreement online.',
      linkText: 'Learn more',
    },
  ];

  return (
    <div className="py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-2">Get Legal Consultancy Online</h1>
      <p className="text-center mb-12">Legal Clarity, Online Convenience</p>
      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
            linkText={service.linkText}
          />
        ))}
      </div>
    </div>
  );
};

// Main Component with Header, Legal Consultancy, and Footer
const Legal_consultancy = () => {
  return (
      <div>
        <Header />

        {/* Page Title */}
        
        <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Legal Consultancy</h1>

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
        {/* Services */}

        <div className="text-center mb-4 mt-5">
          <h2 className="text-3xl font-bold mb-2">Get Legal consultancy Online</h2>
          <p className="text-lg">
            "Legal Clarity, Online Convenience" </p>
        </div>

        <div className="flex justify-center px-4 sm:px-0 pt-6 pb-6">
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <Link to={'/legal_consultancy'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="object-cover w-full h-48"
                src={legal1}
                alt="legal consultancy"
              />
              <div className="py-4 text-center ml-3 mr-3">
                <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                  Legal Advice Online
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-200">Make Easy Documents has an online platform for professional legal advice services
                </span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to={'/legal_consultancy'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="object-cover w-full h-48"
                src={legal2}
                alt="legal consultancy"
              />
              <div className="py-4 text-center ml-3 mr-3">
                <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                  Send Legal Notice
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-200">We present an easier way to serve legal notice online with the assistance of Make Easy Documents
                </span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to={'/legal_consultancy'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="object-cover w-full h-48"
                src={legal3}
                alt="legal consultancy"
              />
              <div className="py-4 text-center ml-3 mr-3">
                <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                  Rent Deed Drafting
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-200">
                Make Easy Documents helps you draft a rent agreement with the help of professionals.                          </span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link to={'/legal_consultancy'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="object-cover w-full h-48"
                src={legal4}
                alt="legal consultancy"
              />
              <div className="py-4 text-center ml-3 mr-3">
                <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                  Partnership Deed Drafting
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-200">
                Through Make Easy Documents, we offer professional services in drafting a partnership deed.
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-center px-4 sm:px-0 pt-6 pb-11">
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <Link to={'/legal_consultancy'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="object-cover w-full h-48"
                src={legal5}
                alt="legal consultancy"
              />
              <div className="py-4 text-center ml-3 mr-3">
                <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                  Sale Deed Drafting
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-200">
                Speaking of your selling or buying any property, our team makes sure that the sale deed is well drafted as per the applicable laws and as per your interests.                           </span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to={'/legal_consultancy'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="object-cover w-full h-48"
                src={legal6}
                alt="legal consultancy"
              />
              <div className="py-4 text-center ml-3 mr-3">
                <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                  Lease Deed Drafting
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-200">
                Be it a landlord or a rental, you can be assured that our experts will draft a complete lease agreement to meet your requirements and within the confines of the law.                           </span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to={'/legal_consultancy'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="object-cover w-full h-48"
                src={legal7}
                alt="legal consultancy"
              />
              <div className="py-4 text-center ml-3 mr-3">
                <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                  Divorce Online
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-200">
                We provide all-inclusive online divorce facilitation services at Make Easy Documents </span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link to={'/legal_consultancy'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="object-cover w-full h-48"
                src={legal8}
                alt="legal_consultancy"
              />
              <div className="py-4 text-center ml-3 mr-3">
                <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                  Joint Venture Deed
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-200">
                Best Experts of Make Easy will guide to draft Joint Venture Agreement                             </span>
              </div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default Legal_consultancy;
