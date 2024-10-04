import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Forgot_password = () => {
  return (
    <div>
      <Header />
      <br />
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')" }}
        ></div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="h-20 w-30 mr-3" src={logo} alt="Logo" />
          </div>
          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Forgot your password?
          </p>
          <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
            No worries! Enter your email below, <br /> and we’ll send you a reset link.
          </p>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="resetEmail">
              Email Address
            </label>
            <input
              id="resetEmail"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Send Reset Link
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
            <Link to="/sign_in" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">Back to login</Link>
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  )
}

export default Forgot_password
