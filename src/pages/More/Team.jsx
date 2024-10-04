import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import tean1 from '../../assets/team/1.png';
import tean2 from '../../assets/team/2.png';
import tean3 from '../../assets/team/3.png';
import tean4 from '../../assets/team/4.png';
import tean5 from '../../assets/team/5.png';
import tean6 from '../../assets/team/6.png';
import tean7 from '../../assets/team/7.png';
import tean8 from '../../assets/team/8.png';
import tean9 from '../../assets/team/9.png';
import tean10 from '../../assets/team/10.png';

const Team = () => {
    const teamMembers = [
        {
            name: 'Sapana Salunke',
            role: 'HR Manager',
            photo: tean4,
        },
        {
            name: 'Ajit Salunke',
            role: 'App Developer',
            photo: tean1,
        },
        {
            name: 'Sandeep Thorat',
            role: 'Back Office',
            photo: tean2,
        },
        {
            name: 'Tanmay Raut',
            role: 'App Developer',
            photo: tean3,
        },
        {
            name: 'Nikhil Salwade',
            role: 'Full Stack Developer',
            photo: tean5,
        },
        {
            name: 'Saurabh Amkar',
            role: 'BDE Developer',
            photo: tean9,
        },
        {
            name: 'Sanjana Vanjare',
            role: 'Sales Executive',
            photo: tean6,
        },
        {
            name: 'Harshada Patil',
            role: 'Digital marketing / Sales Executive',
            photo: tean10,
        },
        {
            name: 'Shruti Hulavale',
            role: 'Sales Executive',
            photo: tean8,
        },
        {
            name: 'Rohit Kalkhaire',
            role: 'Back Office',
            photo: tean9,
        },
        {
            name: 'Akash Mhatugad',
            role: 'Back Office',
            photo: tean9,
        },
        {
            name: 'Ajay Ladi',
            role: 'Frontend Developer',
            photo: tean7,
        },
    ];

    return (
        <div>
            <Header />
            <div className="min-h-screen bg-blue-50 p-6">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-900">Meet Our Team</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-blue-100 text-center"
                            >
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="w-28 h-28 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6"
                                />
                                <h2 className="text-2xl font-semibold text-blue-800 mb-1">{member.name}</h2>
                                <p className="text-blue-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Team;
