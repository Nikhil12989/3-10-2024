import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Reviews = () => {
  const reviews = [
    { name: "Amit Kumar", rating: 5, review: "Make Easy Documents made the entire process seamless. Got my PAN card within days!", verified: true },
    { name: "Priya Sharma", rating: 5, review: "Excellent service! The document verification was fast and hassle-free.", verified: true },
    { name: "Rahul Verma", rating: 4, review: "The support team was quick to respond, and I received my documents in no time.", verified: true },
    { name: "Sneha Patel", rating: 5, review: "Very impressed with the service. The team made it super easy to file my documents.", verified: true },
    { name: "Vikram Singh", rating: 4, review: "Good service, received my documents earlier than expected. Highly recommend.", verified: true },
    { name: "Anjali Mehta", rating: 5, review: "I couldn’t believe how fast and simple the process was. Great company!", verified: true },
    { name: "Ravi Desai", rating: 5, review: "Received my Aadhar updates in just a few days. Wonderful experience!", verified: true },
    { name: "Kavita Joshi", rating: 5, review: "Super fast and reliable service. I’ll be using them for all my document needs.", verified: true },
    { name: "Suresh Rao", rating: 4, review: "The service was good, though I had a small issue with uploading my photo.", verified: true },
    { name: "Neha Gupta", rating: 5, review: "Amazing! Got my documents processed so quickly, saved me a lot of time.", verified: true },
    { name: "Rajesh Nair", rating: 5, review: "I was skeptical at first, but Make Easy Documents delivered faster than expected!", verified: true },
    { name: "Pooja Kapoor", rating: 4, review: "Good service overall, though I had a minor delay due to a missing document.", verified: true },
    { name: "Rohan Iyer", rating: 5, review: "Got my voter ID and Aadhar update done in record time. Excellent!", verified: true },
    { name: "Megha Chawla", rating: 5, review: "The easiest process I’ve ever experienced for getting legal documents.", verified: true },
    { name: "Sandeep Kaur", rating: 5, review: "Great experience! My income certificate was processed within two days.", verified: true },
    { name: "Nikhil Bhardwaj", rating: 4, review: "Fast service, although I faced a small issue with document uploads initially.", verified: true },
    { name: "Swati Deshmukh", rating: 5, review: "Highly recommend Make Easy Documents for their fast and efficient service.", verified: true },
    { name: "Aakash Chandra", rating: 5, review: "Got my legal documents faster than I imagined! Great service.", verified: true },
    { name: "Bhavana Menon", rating: 5, review: "They made the document process stress-free and easy. Kudos to the team!", verified: true },
    { name: "Vivek Mishra", rating: 4, review: "Very reliable, though I faced a small delay due to document corrections.", verified: true },
    { name: "Rina Yadav", rating: 5, review: "Fast and hassle-free service. Will definitely use them again for my needs.", verified: true },
    { name: "Arjun Prasad", rating: 5, review: "Excellent service! The document delivery was quicker than promised.", verified: true },
    { name: "Komal Jain", rating: 4, review: "Overall good experience, but I had to resubmit a document which caused a small delay.", verified: true },
    { name: "Manish Shah", rating: 5, review: "Incredible! They processed my documents in just 48 hours.", verified: true },
    { name: "Shalini Reddy", rating: 5, review: "Best service for document processing. Fast, easy, and convenient.", verified: true },
    { name: "Karan Ahuja", rating: 5, review: "Effortless and quick process. My PAN card update was done within a day.", verified: true },
    { name: "Divya Shetty", rating: 5, review: "Impressive service! Got my Aadhar and PAN details updated fast.", verified: true },
    { name: "Tarun Kapoor", rating: 5, review: "Make Easy Documents made filing for my gazette notification a breeze!", verified: true },
    { name: "Isha Srivastava", rating: 5, review: "Unbelievably fast service. My documents were processed before I expected.", verified: true },
    { name: "Vimal Kulkarni", rating: 4, review: "Very fast and professional, but could improve on follow-up communications.", verified: true },
  ];

  return (
    <div>
      <Header />
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Customer Reviews</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-blue-50 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:bg-gray-100 transition-all duration-300 ease-in-out"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={`https://via.placeholder.com/50?text=${review.name.charAt(0)}`}
                    alt="Reviewer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                  />
                  <div>
                    <p className="text-md sm:text-lg font-semibold text-gray-800">{review.name}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Verified Buyer</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700">{review.review}</p>
                <div className="mt-4 flex items-center">
                  <span className="text-yellow-500">
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
