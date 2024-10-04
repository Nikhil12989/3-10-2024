import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import dr1 from '../../assets/services/dr.jpg';
import shop from '../../assets/services/shop.png'

const blogs = [
  {
    id: 1,
    title: 'The Future of Real Estate',
    description: 'Exploring the technological trends shaping the future of property buying.',
    image: dr1,
    date: 'September 14, 2024',
  },
  {
    id: 2,
    title: 'Investing in Land: What You Need to Know',
    description: 'A complete guide for beginners looking to invest in land.',
    image: 'https://via.placeholder.com/300',
    date: 'August 28, 2024',
  },
  {
    id: 3,
    title: 'Maharashtra’s Real Estate Boom',
    description: 'How the real estate market in Maharashtra is evolving post-pandemic.',
    image: 'https://via.placeholder.com/300',
    date: 'July 19, 2024',
  },
  {
    id: 4,
    title: 'Understanding Property Documentation in India',
    description: 'Learn about the various documents needed for property transactions.',
    image: 'https://via.placeholder.com/300',
    date: 'June 7, 2024',
  },
];

const Blogs = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Latest Blogs</h1>

        <div className="grid gap-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl  mx-auto px-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="w-full">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 mb-4">{blog.description}</p>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
