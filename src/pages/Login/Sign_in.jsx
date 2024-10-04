import React, { useState, useContext } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth'; // useAuth hook from AuthContext
import { toast } from 'react-toastify';
import logo from "../../assets/logo.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Sign_in = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const [auth, setAuth] = useAuth(); // access auth context
  const navigate = useNavigate(); // to redirect users

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://192.168.1.50:5000/api/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.error) {
            toast.error(data.error); // handle error
        } else {
            // Extract user ID from the JWT token manually
            const tokenParts = data.token.split('.');
            if (tokenParts.length !== 3) {
                throw new Error('Invalid token format');
            }

            const payload = JSON.parse(atob(tokenParts[1])); // Decode the payload
            const userId = payload._id; // Extract the user ID

            // Set auth state and store in local storage
            const userWithId = {
                ...data.user,  // Include the existing user data
                _id: userId,   // Add user ID from decoded token
            };

            setAuth({
                user: userWithId,
                token: data.token,
            });
            localStorage.setItem('auth', JSON.stringify({ user: userWithId, token: data.token })); // Store user data with ID

            // Redirect based on user role
            if (data.user.role === 1) {
                navigate('/admin/adashboard');
            } else {
                navigate('/dashboard/dashboard');
            }

            toast.success('Logged in successfully!');
        }
    } catch (err) {
        console.error(err);
        toast.error('Something went wrong!');
    }
};


  return (
    <div>
      <Header />
      <br /> <br /> <br />
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-800 lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')" }}
        ></div>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="h-20 w-30 mr-3" src={logo} alt="Logo" />
          </div>
          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="password"
                >
                  Password
                </label>
                <Link
                  to="/forgot_password"
                  className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type={showPassword ? "text" : "password"} // Toggle between text and password
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-600 dark:text-gray-300"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                </button>
              </div>
            </div>

            <div className="mt-6">
              <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            <Link to="/sign_up" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</Link>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
      <Footer />
    </div>
  );
};

export default Sign_in;