import React, { useState, useEffect } from 'react';
import image1 from "../assets/slider/1.png";
import image2 from "../assets/slider/2.png";
import image3 from "../assets/slider/3.png";
import image4 from "../assets/slider/4.png";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            src: image4,
            alt: '100 refund policy',
        },
        {
            src: image2,
            alt: 'Pan services Legal Actions services from seating at home',
        },
        {
            src: image3,
            alt: 'Company registration from seating at home',
        },
        {
            src: image1,
            alt: 'Tredmark registration ',
        },
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    const handleSlideTo = (index) => {
        setActiveIndex(index);
    };

    // Auto-slide effect
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [activeIndex]);

    return (
        <div className="relative max-w-12xl mx-auto">
            <div className="relative">
                {/* Carousel wrapper */}
                <div className="overflow-hidden relative h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-108 rounded-lg">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                                }`}
                        >
                            <img
                                src={item.src}
                                className="block w-full h-full object-contain"
                                alt={item.alt}
                            />
                        </div>
                    ))}
                </div>

                {/* Slider indicators */}
                <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-orange-600' : 'bg-gray-300'
                                }`}
                            aria-current={index === activeIndex ? 'true' : 'false'}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => handleSlideTo(index)}
                        />
                    ))}
                </div>

                {/* Slider controls */}
                {/* <button
                    type="button"
                    className="flex absolute top-0 left-0 z-30 justify-center items-center h-full cursor-pointer group focus:outline-none"
                    onClick={handlePrev}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="hidden">Previous</span>
                </button>
                <button
                    type="button"
                    className="flex absolute top-0 right-0 z-30 justify-center items-center h-full cursor-pointer group focus:outline-none"
                    onClick={handleNext}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="hidden">Next</span>
                </button> */}
            </div>
        </div>
    );
};

export default Carousel;
