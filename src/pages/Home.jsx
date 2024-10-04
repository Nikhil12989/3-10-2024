import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaSearch, FaSlidersH } from 'react-icons/fa'; // React Icons
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';

// brand img
import happy from '../assets/services/happy.webp';
import brand1 from '../assets/brands/brand1.png';
import brand2 from '../assets/brands/brand2.png';
import brand3 from '../assets/brands/brand3.png';
import brand4 from '../assets/brands/brand4.png';
import brand5 from '../assets/brands/brand6.png';
import brand6 from '../assets/brands/brand5.png';
// why us img
import feature1 from '../assets/why/recognized.svg'
import feature2 from '../assets/why/happy_customers.svg'
import feature3 from '../assets/why/iso-mark.webp'
import feature4 from '../assets/why/data_security.svg'
import feature5 from '../assets/why/experts.svg'
import feature6 from '../assets/why/on-time.svg'
import feature7 from '../assets/why/quick.svg'
import feature8 from '../assets/why/users_oli_Jan_22.svg'
// sevices imgs
import service1 from '../assets/our_services/1.jpg'
import service2 from '../assets/our_services/2.webp'
import service3 from '../assets/our_services/3.webp'
import service4 from '../assets/our_services/4.webp'
import service5 from '../assets/our_services/5.webp'
import service6 from '../assets/our_services/6.webp'
import service7 from '../assets/our_services/7.jpg'
import service8 from '../assets/our_services/8.webp'
import service9 from '../assets/our_services/9.webp'
import service10 from '../assets/our_services/10.webp'
import service11 from '../assets/our_services/11.webp'
import service12 from '../assets/our_services/12.jpg'
import Top from '../components/Top';

const Home = () => {
    return (
        <div>
            <Top />
            <Header />
            {/* <h1 className='text-center pt-6 text-4xl font-semibold mb-4 text-gray-700'>India's <span className='text-orange-500'>Top Rated </span>
             Professional Services Platform </h1> */}
            <h1 className='text-center pt-6 text-4xl font-semibold mb-2 text-gray-700'>
                "India's Trusted Platform for Simplified  <span className='text-[#FD3400]'>Documentation</span>"</h1>

            {/* <h3 className='text-center text-xl mb-4 text-gray-700'>Connecting You With Experts To Simplify Your Legal, Tax & Compliance.</h3> */}

            <h3 className='text-center text-xl mb-2 text-gray-700'>It keeps the essence of being a top-rated, professional, and user-friendly service ..!</h3>

            <form className="flex items-center max-w-sm mx-auto mb-2 w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
                <label htmlFor="simple-search" className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <FaSlidersH className="w-4 h-4 text-gray-500 dark:text-gray-500" aria-hidden="true" />
                    </div>
                    <input
                        type="text"
                        id="simple-search"
                        className="rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-base focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-100 dark:border-green-600 dark:placeholder-gray-800 dark:text-black dark:font-semibold dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Service Here ..!"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-[#FD3400] rounded-full border border-red-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-red-800"
                >
                    <FaSearch className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">Search</span>
                </button>
            </form>



            {/* slider */}
            <div>
                <Carousel />
            </div>

            {/* call to action */}
            <section id="call-to-action" className="call-to-action py-12 relative p-14 bg-gray-200">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 xl:grid-cols-3 items-center">
                        <div className="xl:col-span-2">
                            <h3 className="text-4xl font-bold text-orange-600">Call to Action <span className='text-black'>&</span> <span className='text-green-600'> View All Services </span></h3>
                            <p className="text-gray-700 mt-4">

                                Get digital and self-sufficient and make up all the necessary documents that your business / personal needs via our website and mobile application with our unmatched services and bring your company to new heights by securing it. <br /> At <span className="text-green-600">Make Easy</span><span className="text-red-600"> Documents</span>,
                                we are dedicated to providing top-notch quality and exceptional customer service throughout the entire process.
                                Whether you want to improve the efficiency of your operations, increase productivity, or unlock new possibilities, our skilled team is ready to take the driver seat of your success and get in touch with us to better and quicker achieve your goals.
                            </p>
                        </div>

                        <div className="flex flex-col items-center xl:items-end mt-6 xl:mt-0 space-y-4">
                            {/* Call To Action Button */}
                            <Link
                                to={'/contact'}
                                className="cta-btn bg-orange-600 text-white font-medium text-lg px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-orange-600 transition-all duration-300"
                            >
                                Call Us To  Action
                            </Link>

                            {/* All Services Button */}
                            <Link
                                to={'/all_service'}
                                className="cta-btn bg-green-600 text-white font-medium text-lg px-8 py-4 rounded-lg border-2 border-white hover:bg-white hover:text-green-600 transition-all duration-300"
                            >
                                View All Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* Services */}

            <div className="text-center mb-4 mt-5">
                <h2 className="text-3xl font-bold mb-2">Our Services</h2>
                <p className="text-lg">
                    " Empowering Your Tomorrow, Today ! "</p>
            </div>

            <div className="flex justify-center px-4 sm:px-0 pt-6 pb-6">
                <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1 */}
                    <Link to={'/pan_service'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={service1}
                            alt="Make pan card Sitting at Home"
                        />
                        <div className="py-4 text-center ml-3 mr-3">
                            <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                                PAN Services
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                Receive Your PAN Card Online Easily and with Convenience of Your Home via make easy documents
                            </span>
                        </div>
                    </Link>

                    {/* Card 2 */}
                    <Link to={'/Tredmark'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={service2}
                            alt="Make Tredmark Sitting at Home"
                        />
                        <div className="py-4 text-center ml-3 mr-3">
                            <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                                Trademark Registration
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                Apply for trademark registration in any part of India and safeguard your Brand Name/Logo/Slogan.                            </span>
                        </div>
                    </Link>

                    {/* Card 3 */}
                    <Link to={'/gst'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={service3}
                            alt="Make gst Registration Sitting at Home"
                        />
                        <div className="py-4 text-center ml-3 mr-3">
                            <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                                GST Services
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                Outsource your GST compliance to Make Easy Documents. India’s fastest growing online corporate services.
                            </span>
                        </div>
                    </Link>

                    {/* Card 4 */}
                    <Link to={'/food_lic'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={service4}
                            alt="Make Food license Sitting at Home"
                        />
                        <div className="py-4 text-center ml-3 mr-3">
                            <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                                FSSAI Registration
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                Make Easy Documents makes it easy to renew FSSAI registration and obtain an FSSAI license. As the date approaches the time allowed for continued service, reach out to us.
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex justify-center px-4 sm:px-0 pt-6 pb-6">
                <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1 */}
                    <Link to={'/company_registration'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={service5}
                            alt="Make Company registration Sitting at Home"
                        />
                        <div className="py-4 text-center ml-3 mr-3">
                            <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                                Company Registration
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                Company registration has never been fast and easy before. The entire process can be done from your house with little or no effort channeled towards it. Just upload your documents, and everything else will be done for you!                            </span>
                        </div>
                    </Link>

                    {/* Card 2 */}
                    <Link to={'/Import_Export'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={service6}
                            alt="Make Import Export Code Sitting at Home"
                        />
                        <div className="py-4 text-center ml-3 mr-3">
                            <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                                Import Export Code
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                We offer online registration service for Import Export Code (IEC) through makes easy documents apply for your IEC from the ease of your home with our procedure as well as secure.
                            </span>
                        </div>
                    </Link>

                    {/* Card 3 */}
                    <Link to={'/digital_signature'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={service7}
                            alt="Make Digital Signature Sitting at Home"
                        />
                        <div className="py-4 text-center ml-3 mr-3">
                            <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                                Digital Signature
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                .Apply for a digital signature because it is very easy and fast which does not require you to step out of your residence.                            </span>
                        </div>
                    </Link>

                    {/* Card 4 */}
                    <Link to={'/legal_consultancy'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={service8}
                            alt="Make Legal Consultancy Sitting at Home"
                        />
                        <div className="py-4 text-center ml-3 mr-3">
                            <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                                Legal Consultancy
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                We provide legal advice online by qualified lawyers, so you can have easier access to professional legal services right in the comfort of your house                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex justify-center px-4 sm:px-0 pt-6 pb-6">
                <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1 */}
                    <Link to={'/itr_filing_online'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={service9}
                            alt="Make ITR Filing Sitting at Home"
                        />
                        <div className="py-4 text-center ml-3 mr-3">
                            <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                                ITR Filing
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                Through Make Easy Documents, you can easily and accurately prepare and file your income tax returns without stepping out of your home. All you need is to upload your documents and that’s it! We take care of everything else!                            </span>
                        </div>
                    </Link>

                    {/* Card 2 */}
                    <Link to={'/food_lic'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={service10}
                            alt="Make FSSAI Annual return filling Sitting at Home"
                        />
                        <div className="py-4 text-center ml-3 mr-3">
                            <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                                FSSAI Annual return filling
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                Make Easy Documents provides online annual return filing services with FSSAI that are easy and convenient to use.                             </span>
                        </div>
                    </Link>

                    {/* Card 3 */}
                    <Link to={'/payroll_compliance'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={service11}
                            alt="Make PF ESIC Registration Sitting at Home"
                        />
                        <div className="py-4 text-center ml-3 mr-3">
                            <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                                PF ESIC Registration
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                Blend your compliance concerns and make it a little easier to cover your employees without wasting any more time and effort from your place.                            </span>
                        </div>
                    </Link>

                    {/* Card 4 */}
                    <Link to={'/mahsule'} className="group w-full max-w-[18rem] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <img
                            className="object-cover w-full h-48"
                            src={service12}
                            alt="Make Mahsul Legal / revenu Sitting at Home"
                        />
                        <div className="py-4 text-center ml-3 mr-3">
                            <div className="block text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                                Mahsul Legal
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-200">
                                Services :- नवीन शर्यत , महारवतन , कुळ कायदा , ३२ ग , पुनर वसण , सरकार आकारी पड , अधिवाशी ३६ ब , ३६ अ , कोर्ट matters
                            </span>
                        </div>
                    </Link>
                </div>
            </div>


            {/* Our brands */}
            <div className="bg-slate-100 mt-5 mb-5">
                <h3 className="text-4xl font-semibold text-orange-900 text-center pt-5">Our Brands</h3>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-x-10 md:space-y-0">
                    
                <img
                        className="w-32 md:w-48 transition-transform duration-300 hover:scale-105"
                        src={brand5}
                        alt="Viransh global legal"
                    />
                    <img
                        className="w-32 md:w-48 transition-transform duration-300 hover:scale-105"
                        src={brand2}
                        alt="Make easy Documents"
                    />
                    

                    <img
                        className="w-32 md:w-48 transition-transform duration-300 hover:scale-105"
                        src={brand3}
                        alt="Ambiance"
                    />
                    <img
                        className="w-32 md:w-40 transition-transform duration-300 hover:scale-105"
                        src={brand1}
                        alt="maharashtra e seva"
                    />
                    <img
                        className="w-24 md:w-28 transition-transform duration-300 hover:scale-105"
                        src={brand6}
                        alt="7/12 maza"
                    />
                    <img
                        className="w-24 md:w-32 transition-transform duration-300 hover:scale-105"
                        src={brand4}
                        alt="Digital legal india"
                    />
                </div>
            </div>


            {/* why us */}
            <section id="feature" className="p-6">
                <div className="container mx-auto">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl font-bold mb-2">Why Us?</h2>
                        <p className="text-lg">
                            " Choose Quality, Choose Us – Where Excellence Meets Expectations ! "
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pr-6 pl-6">
                        {/* Feature 1 */}
                        <div className="text-center border-2 border-gray-300 hover:border-gray-800 p-6 rounded-lg hover:shadow-lg transition-all">
                            <span className="inline-block p-2 bg-orange-500 rounded-full">
                                <img className="w-12" src={feature1} alt="Recognized by Govt. of India" />
                            </span>
                            <h5 className="mt-3 text-xl font-semibold">Recognized by Govt. of India</h5>
                            <hr className="my-3 mx-auto w-1/2 border-gray-300" />
                        </div>
                        {/* Feature 2 */}
                        <div className="text-center border-2 border-gray-300 hover:border-gray-800 p-6 rounded-lg hover:shadow-lg transition-all">
                            <span className="inline-block p-2 bg-green-500 rounded-full">
                                <img className="w-14" src={feature2} alt="Happy Customers" />
                            </span>
                            <h5 className="mt-3 text-xl font-semibold">550+ Happy Customers</h5>
                            <hr className="my-3 mx-auto w-1/2 border-gray-300" />
                        </div>
                        {/* Feature 3 */}
                        <div className="text-center border-2 border-gray-300 hover:border-gray-800 p-6 rounded-lg hover:shadow-lg transition-all">
                            <span className="inline-block p-2 bg-orange-500 rounded-full">
                                <img className="w-14" src={feature3} alt="ISO Certified" />
                            </span>
                            <h5 className="mt-3 text-xl font-semibold">ISO Certified</h5>
                            <hr className="my-3 mx-auto w-1/2 border-gray-300" />
                        </div>
                        {/* Feature 4 */}
                        <div className="text-center border-2 border-gray-300 hover:border-gray-800 p-6 rounded-lg hover:shadow-lg transition-all">
                            <span className="inline-block p-2 bg-green-500 rounded-full">
                                <img className="w-14" src={feature4} alt="Data Security" />
                            </span>
                            <h5 className="mt-3 text-xl font-semibold">Data Security & Trust</h5>
                            <hr className="my-3 mx-auto w-1/2 border-gray-300" />
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 pr-6 pl-6">
                        {/* Feature 5 */}
                        <div className="text-center border-2 border-gray-300 hover:border-gray-800 p-6 rounded-lg hover:shadow-lg transition-all">
                            <span className="inline-block p-2 bg-green-500 rounded-full">
                                <img className="w-14" src={feature5} alt="Trained & Professional Experts" />
                            </span>
                            <h5 className="mt-3 text-xl font-semibold">Trained & Professional Experts</h5>
                            <hr className="my-3 mx-auto w-1/2 border-gray-300" />
                        </div>

                        {/* Feature 6 */}
                        <div className="text-center border-2 border-gray-300 hover:border-gray-800 p-6 rounded-lg hover:shadow-lg transition-all">
                            <span className="inline-block p-2 bg-orange-500 rounded-full">
                                <img className="w-14" src={feature6} alt="On Time Service" />
                            </span>
                            <h5 className="mt-3 text-xl font-semibold">On Time Service</h5>
                            <hr className="my-3 mx-auto w-1/2 border-gray-300" />
                        </div>

                        {/* Feature 7 */}
                        <div className="text-center border-2 border-gray-300 hover:border-gray-800 p-6 rounded-lg hover:shadow-lg transition-all">
                            <span className="inline-block p-2 bg-green-500 rounded-full">
                                <img className="w-14" src={feature7} alt="Super Fast Service" />
                            </span>
                            <h5 className="mt-3 text-xl font-semibold">Super Fast Service</h5>
                            <hr className="my-3 mx-auto w-1/2 border-gray-300" />
                        </div>

                        {/* Feature 8 */}
                        <div className="text-center border-2 border-gray-300 hover:border-gray-800 p-6 rounded-lg hover:shadow-lg transition-all">
                            <span className="inline-block p-2 bg-orange-500 rounded-full">
                                <img className="w-14" src={feature8} alt="Quick Response" />
                            </span>
                            <h5 className="mt-3 text-xl font-semibold">Quick Response Team</h5>
                            <hr className="my-3 mx-auto w-1/2 border-gray-300" />
                        </div>
                    </div>

                </div>
            </section>




            <section id="call-to-action" className="bg-[rgba(52,152,219,0.1)] py-12 p-5 relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-7/12">
                            <h3 className="text-2xl lg:text-3xl font-bold text-black">
                                How does <br />
                                <span className="text-green-600"> Make Easy </span> <span className="text-red-600">Documents</span><br />
                                Ensure Customer Satisfaction
                            </h3>
                            <p className="mt-4 text-black">Our <span className="font-bold"> HAPPY CODE </span> system has been developed to measure customer satisfaction. In line with this, our customers are sent a unique alphanumeric code,
                                consisting of 8 characters. <br /> We monitor the customer's happiness by requesting the
                                customers to give us their agents only if they are satisfied with our services. <br /> We are,
                                therefore, a client-focused organization that emphasizes the success of our clients and the
                                <span className="font-bold"> HAPPY CODE </span> program measures the customer’s happiness and loyalty
                                to our products or services.
                            </p>
                        </div>
                        <div className="lg:w-5/12 mt-6 lg:mt-0">
                            <img className="w-full h-auto rounded-lg" src={happy} alt="Happy Code" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home
