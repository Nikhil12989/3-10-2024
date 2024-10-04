import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import food from '../../assets/food/f.jpg'
import foo1 from "../../assets/food/1.webp";
import foo2 from "../../assets/food/2.webp";
import foo3 from "../../assets/food/3.webp";
import foo4 from "../../assets/food/4.webp";
import foo5 from "../../assets/food/5.webp";
import foo6 from "../../assets/food/6.webp";
import foo7 from "../../assets/food/7.webp";
import foo8 from "../../assets/food/8.webp";
import foo9 from "../../assets/food/9.webp";
import foo10 from "../../assets/food/10.webp";
import foo11 from "../../assets/food/11.webp";
import foo12 from "../../assets/food/12.webp";
import { AiFillHome, AiOutlineAppstore } from 'react-icons/ai'; // Import the simpler icon

const Food_lic = () => {


  const categories = [
    { name: "", icon: foo1 },
    { name: "", icon: foo2 },
    { name: "", icon: foo3 },
    { name: "", icon: foo4 },
    { name: "", icon: foo5 },
    { name: "", icon: foo6 },
    { name: "", icon: foo7 },
    { name: "", icon: foo8 },
    { name: "", icon: foo9 },
    { name: "", icon: foo10 },
    { name: "", icon: foo11 },
    { name: "", icon: foo12 },
  ];
  return (
    <div>
      <Header />

      {/* Page Title */}
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">FSSAI FoSCos Food License</h1>

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

      <div className="container mx-auto py-10 px-4">
        {/* Main Container */}
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold border-b-4 border-orange-600 inline-block pb-2">
            FSSAI FoSCos Food License
          </h2>
          <h3 className='pt-4 text-base'>"Our Expertise Will Make Easy for You to Get a Food License From The Government."</h3>
        </div>

        {/* Flex container to separate content */}
        <div className="flex flex-col pl-7 pr-7 lg:flex-row justify-between items-center gap-8">

          {/* Left Section (Text & Buttons) */}
          <div className="bg-gray-100 py-6 lg:py-12 flex-1">
            <div className="container mx-auto flex flex-col items-center px-4">
              <div className="bg-gray-100 px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  FSSAI News Update
                </h2>
                <p className="text-gray-700 mb-6">
                  Food Businesses Can Now Be Fined Rs. 5 Lakh & 6 Months Jail for Not Having Food License.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <h3 className="text-lg font-semibold text-orange-600 mb-2">
                    Food Registration or License
                  </h3>
                  <p className="text-gray-600">
                    Food Registration Or License is Required For All Food Businesses in The Manufacturing, Distribution, Retail
                    And Transportation. <br /> <span className='font-semibold'>Make Your Food License Now With <span className='text-green-600'>Make Easy</span> <span className='text-orange-600'>Documents</span>.</span>
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>✔ Food License Service & Support Across All Over <span className='font-semibold'>India</span></li>
                    <li>✔ 3 Types of License : Local, State & Central</li>
                    <li>✔ Make Your Food License Seating at Home </li>
                    <li>✔ 10 yrs Experienced Food Expert</li>
                    <li>✔ Affordable Rates & Fast Service  </li>
                  </ul>
                </div>
              </div>

              {/* Buttons Section */}
              <div className="space-y-4 w-full max-w-sm text-center">
                <Link
                  to={'/food_Local'}
                  className="block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-transform duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  Apply Local Food License / Registration
                </Link>
                <Link
                  to={'/food_State'}
                  className="block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-transform duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  Apply State Food License
                </Link>
                <Link
                  to={'/food_Central'}
                  className="block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-transform duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  Apply Central Food License
                </Link>
                <Link
                  to={'/food_manufacturing'}
                  className="block w-full text-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-transform duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                >
                  Apply  Food Manufacturing License
                </Link>
              </div>

            </div>
          </div>


          {/* Image section with hover effect */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={food} // Replace with the correct path for the driving license image
              alt="Make food License Sitting at Home"
              className="w-full h-auto max-w-lg lg:max-w-xl xl:max-w-2xl object-contain transform transition-transform duration-500 hover:scale-110 hover:rotate-1 shadow-lg hover:shadow-2xl rounded-lg"
            />
          </div>

        </div>

      </div>


      <div className="container mx-auto text-center py-8">
        <div className="text-center mb-9">
          <h2 className="text-2xl lg:text-3xl font-bold border-b-4 border-red-600 inline-block pb-2">
            Who Needs a FSSAI FoSCos Food License?
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              {/* Use img tags to display icons */}
              <img
                src={category.icon}
                alt={category.name}
                className=" h-36"
              />
              <p className="mt-4 text-lg font-medium">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Food_lic
