import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import img1 from '../assets/About/about.webp';
import img2 from '../assets/About/vision.jpg';


const AboutUs = () => {
    return (
        <div>
            <Header />

            {/* Page Title */}

            <div className="page-title py-6 bg-slate-300" data-aos="fade">
                <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    {/* Title */}
                    <h1 className=" text-black text-xl md:text-2xl font-semibold">About Us</h1>

                    {/* Breadcrumbs */}
                    <nav className="breadcrumbs mt-2 lg:mt-0">
                        <ol className="flex space-x-2 lg:space-x-4 text-sm">
                            <li><Link to={'/'} className="text-black hover:underline text-base">Home</Link></li>
                            <li className="text-black">/</li>
                            <li><Link to={'/about'} className="text-black hover:underline text-base">About Us</Link></li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* About Section */}
            <section id="about" className="py-12 pr-9 pl-9 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <h4 className="text-xl mb-4">
                                <span className="text-green-500">Make Easy</span>
                                <span className="text-red-500">Documents</span> simplifies your paperwork with streamlined solutions, ensuring efficiency and peace of mind.
                            </h4>
                            <div className="overflow-hidden rounded-lg">
                                <img src={img1} className="w-full h-auto rounded-lg mb-6 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out" alt="About Us" />
                            </div>

                            <div className="section-title mb-4" data-aos="fade-down">
                                <h2 className="text-2xl font-semibold">VISION & MISSION</h2>
                            </div>
                            <p className="text-justify leading-relaxed">
                            <span className="text-green-500">Make Easy</span>
                                <span className="text-red-500">Documents</span> in the simplest way presents reputable legal services while addressing clients’ needs in a timely manner. Our mission is to overcome any challenges that our clients may face in a simple manner, creating confidence among our users.                            </p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="250">
                            <div className="content">
                                <p className="italic mb-4 text-justify">
                                Viransh Global Legal Private Limited is a company incorporated under the Companies Act, 2013 and Make Easy is a project registered and approved by the Government of India for the purpose of allowed business activity. Our aim is to help people with the law and to make legal information available to everybody.                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><span>Experienced and competent Lawyers and experts in one place.</span></li>
                                    <li><span>Focusing on strategies for individual, commercial, and corporate clients.</span></li>
                                    <li><span>Helping individuals cope with the day-to-day legal challenges in an expedient manner.</span></li>
                                </ul>

                                <div className="relative mt-6 overflow-hidden rounded-lg">
                                    <img src={img2} className="w-full h-auto rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out" alt="Vision" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <div className="section-title mb-4" data-aos="fade-down">
                            <h2 className="text-2xl font-semibold">OUR AIM</h2>
                        </div>
                        <p className="italic max-w-xl mx-auto text-justify leading-relaxed">
                            <span className="text-green-500">Make Easy</span> <span className="text-red-500">Documents</span> aspires to render services of the highest quality, comprehend the requirements of the clients, and lodge complaints honestly in order to solve problems effectively.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;
