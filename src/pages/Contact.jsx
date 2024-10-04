import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="page-title py-6 bg-slate-300" data-aos="fade">
        <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <h1 className=" text-black text-xl md:text-2xl font-semibold">Contact</h1>


          {/* Breadcrumbs */}
          <nav className="breadcrumbs mt-2 lg:mt-0">
            <ol className="flex space-x-2 lg:space-x-4 text-sm">
              <li><Link to={'/'} className="text-black hover:underline text-base">Home</Link></li>
              <li className="text-black">/</li>
              <li><Link to={'/contact'} className="text-black hover:underline text-base">Contact</Link></li>
            </ol>
          </nav>
        </div>
      </div>
      <main className="main">
        {/* Contact Section */}
        <section id="contact" className="contact section">
          
          {/* End Google Maps */}

          <div className="container mx-auto py-10 pl-10 pr-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Contact Info */}
              <div className="p-5 bg-white shadow-lg rounded-md border-t-4 border-red-600">
                <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
                <p className="text-gray-700 mb-5">
                  Get in Touch with <span className="text-green-600">Make Easy</span> <span className="text-red-500">Documents</span> – Simplifying Your Paperwork Hassle-Free!
                </p>

                {/* Location Info */}
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <i className="bi bi-geo-alt text-red-600 text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-red-600">Location:</h4>
                    <p className="text-gray-700">
                      1034, 10<sup>th</sup> Floor, Gera Imperium Rise, Wipro Circle, Rajiv Gandhi InfoTech Park-Phase 2, Hinjawadi, Pune.
                    </p>
                  </div>
                </div>

                {/* Email Info */}
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <i className="bi bi-envelope text-red-600 text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-red-600">Email:</h4>
                    <p className="text-gray-700">info@example.com</p>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="bi bi-phone text-red-600 text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-red-600">Call:</h4>
                    <p className="text-gray-700">+1 5589 55488 55</p>
                    <p className="text-gray-700">+1 5589 55488 55</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 p-8 bg-white shadow-lg rounded-md border-t-4 border-red-600">
                <form action="#" method="POST">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      name="message"
                      id="message"
                      className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-red-600 text-white py-3 px-8 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
