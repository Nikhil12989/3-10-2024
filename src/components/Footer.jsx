import React, { useState, useEffect } from 'react'
import logo from "../assets/footer_logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show or hide the button based on scroll position
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    return (
        <footer class="bg-center bg-fixed bg-gradient-to-t from-blue-800 to-blue-900">
            <div class="container p-6 mx-auto">
                <div class="lg:flex">
                    <div class="w-full -mx-6 lg:w-2/5">
                        <div class="flex flex-col items-center justify-center px-6 text-center">
                            <Link to={'/home'} class="flex justify-center">
                                <img src={logo} alt="Make Easy Documents" className="h-32" />
                            </Link>
                            <br />
                            <p className="max-w-md mx-auto mt-2 text-white text-center px-4">
                                1034, 10th Floor, Gera Imperium Rise, Wipro Circle,
                                Rajiv Gandhi InfoTech Park - Phase 2, Hinjawadi, Pune.
                            </p>
                        </div>
                    </div>

                    <div class="mt-6 lg:mt-0 lg:flex-1">
                        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div class="text-center lg:text-left">
                                <h3 class="text-white uppercase dark:text-white font-bold">Usefull Links</h3> <br />
                                <Link to={'/about'

                                    
                                } class="block mt-2 text-sm text-white dark:text-white hover:underline">About us</Link>
                                <Link to={'/all_service'} class="block mt-2 text-sm text-white dark:text-white hover:underline">ALL Services</Link>
                                <Link to={'/contact'} class="block mt-2 text-sm text-white dark:text-white hover:underline">Contact Us</Link>
                                <Link to={'/gst'} class="block mt-2 text-sm text-white dark:text-white hover:underline">GST Services</Link>
                            </div>

                            <div class="text-center lg:text-left">
                                <h3 class="text-white uppercase dark:text-white font-bold">Our Services</h3> <br />
                                <Link to={'/driving_Lic'} class="block mt-2 text-sm text-white dark:text-white hover:underline">Driving  Licenses</Link>
                                <Link to={'/company_registration'} class="block mt-2 text-sm text-white dark:text-white hover:underline">Company Registration</Link>
                                <Link to={'/legal_consultancy'} class="block mt-2 text-sm text-white dark:text-white hover:underline">Legal Consultancy</Link>
                                <Link to={'/pan_service'} class="block mt-2 text-sm text-white dark:text-white hover:underline">PAN Services </Link>
                            </div>

                            <div class="text-center lg:text-left">
                                <h3 class="text-white uppercase  font-bold">Our Services</h3> <br />
                                <Link to={'/it_services'} class="block mt-2 text-sm text-white dark:text-white hover:underline">Digital Marketing</Link>
                                <Link to={'/annual_compliances_other'} class="block mt-2 text-sm text-white dark:text-white hover:underline">Tax & Compliances</Link>
                                <Link to={'/mahsule'} class="block mt-2 text-sm text-white dark:text-white hover:underline">Mahsul Legal </Link>
                                <Link to={'/'} class="block mt-2 text-sm text-white dark:text-white hover:underline">Privacy policy</Link>
                            </div>

                            <div class="text-center lg:text-left">
                                <h3 class="text-white uppercase  font-bold">Contact</h3> <br />
                                <span class="block mt-2 text-sm text-white dark:text-white">+ 91 9168741515</span>
                                <span class="block mt-2 text-sm text-white dark:text-white">info@makeeasydocuments.com</span>

                                <div class="flex justify-center mt-6 -mx-2 lg:justify-start">
                                    <a href="#" class="mx-2 text-white transition-colors duration-300 hover:text-green-400 " aria-label="WhatsApp">
                                        <svg class="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.001 0C7.164 0 0 7.163 0 15.999c0 2.816.736 5.548 2.128 7.962L.193 31.806l8.08-2.104a15.921 15.921 0 0 0 7.729 1.965c8.837 0 16-7.163 16-16C32.001 7.163 24.838 0 16.001 0zm0 29.318c-2.569 0-5.073-.681-7.271-1.969l-.521-.311-4.801 1.251 1.278-4.676-.34-.541A13.161 13.161 0 0 1 2.71 15.999c0-7.358 5.992-13.35 13.352-13.35 7.358 0 13.35 5.992 13.35 13.35.001 7.359-5.992 13.352-13.351 13.352zm7.316-9.867c-.398-.199-2.365-1.164-2.734-1.296-.368-.134-.637-.199-.906.2s-1.041 1.296-1.276 1.562c-.234.268-.468.299-.866.1-.399-.2-1.687-.618-3.217-1.971-1.188-1.057-1.988-2.357-2.22-2.756-.233-.4-.024-.614.175-.813.18-.178.399-.466.599-.699.2-.233.266-.399.4-.665.134-.267.067-.5-.034-.699-.101-.2-.906-2.181-1.24-2.98-.328-.789-.662-.686-.906-.686h-.755c-.234 0-.619.1-.945.466-.333.4-1.28 1.248-1.28 3.037s1.31 3.519 1.491 3.761c.183.244 2.584 3.947 6.263 5.533.876.377 1.559.602 2.092.77.88.28 1.68.241 2.313.146.706-.104 2.165-.884 2.471-1.738.307-.854.307-1.586.214-1.738-.092-.15-.366-.234-.765-.433z" />
                                        </svg>
                                    </a>

                                    <a href="#" class="mx-2 text-white transition-colors duration-300  hover:text-blue-600 dark:hover:text-blue-600" aria-label="Facebook">
                                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                                            </path>
                                        </svg>
                                    </a>

                                    <a href="#" class="mx-2 text-white transition-colors duration-300  hover:text-pink-500 dark:hover:text-pink-400" aria-label="Instagram">
                                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.75 2h8.5C19.925 2 22 4.075 22 7.75v8.5C22 19.925 19.925 22 16.25 22h-8.5C4.075 22 2 19.925 2 16.25v-8.5C2 4.075 4.075 2 7.75 2zm6.377 1.5h-4.254c-.93 0-1.383.008-1.865.053-.482.046-.815.106-1.123.222-.397.145-.683.318-.98.614-.297.297-.469.584-.614.98-.116.308-.176.64-.222 1.123-.045.482-.052.935-.052 1.865v4.254c0 .93.008 1.383.053 1.865.046.482.106.815.222 1.123.145.397.318.683.614.98.297.297.584.469.98.614.308.116.64.176 1.123.222.482.045.935.052 1.865.052h4.254c.93 0 1.383-.008 1.865-.053.482-.046.815-.106 1.123-.222.397-.145.683-.318.98-.614.297-.297.469-.584.614-.98.116-.308.176-.64.222-1.123.045-.482.052-.935.052-1.865v-4.254c0-.93-.008-1.383-.053-1.865-.046-.482-.106-.815-.222-1.123-.145-.397-.318-.683-.614-.98-.297-.297-.584-.469-.98-.614-.308-.116-.64-.176-1.123-.222-.482-.045-.935-.052-1.865-.052zM12 7.25a4.75 4.75 0 100 9.5 4.75 4.75 0 000-9.5zm0 7.5a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5zm4.875-7.125a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" />
                                        </svg>
                                    </a>

                                    <a href="#" class="mx-2 text-white transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="LinkedIn">
                                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 0h-14C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75S5.034 5.25 6 5.25s1.75.784 1.75 1.75S6.966 8.75 6 8.75zm13.5 10.25h-3v-4.5c0-1.12-.92-2-2-2s-2 .88-2 2v4.5h-3v-9h3v1.5c.77-1.14 2.03-1.5 3.25-1.5 2.21 0 4 1.79 4 4v5z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <hr class="h-px my-6 bg-gray-200 border-none dark:bg-yellow-500" />

                <div>
                    <p class="text-center text-white">© Copyright <span className='font-bold'>Viransh Global Legal Pvt Ltd </span> .  All Rights Reserved</p>
                    <p className='text-center text-white'>Designed by <a href="https://maharashtrainformatics.com/" target='/' className='hover:underline'> <span className='text-red-600 hover:text-red-300'>Maharashtra Informatics Opc Pvt Ltd</span> </a> </p>
                </div>
            </div>
            <div>
                {/* Telephone Button */}
                <a href="tel:+919168741515" target="_blank" rel="noopener noreferrer">
                    <div className="fixed bottom-20 left-3 z-50 bg-gradient-to-r from-blue-600 to-blue-700 text-white w-12 h-12 rounded-full flex justify-center items-center shadow-[0_5px_10px_rgba(1,1,1,1)] hover:shadow-[0_10px_30px_rgba(0,0,0,3)] transition-all duration-300 ease-in-out transform hover:scale-105">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            fill="currentColor"
                            className="bi bi-telephone"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg>
                    </div>
                </a>

                {/* WhatsApp Button */}
                <a href="https://wa.me/9168741515" target="_blank" rel="noopener noreferrer">
                    <div className="fixed bottom-20 right-3 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white w-12 h-12 rounded-full flex justify-center items-center shadow-[0_5px_10px_rgba(1,1,1,1)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-all duration-300 ease-in-out transform hover:scale-105">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="bi bi-whatsapp"
                            viewBox="0 0 16 16"
                            width="28"
                            height="28"
                        >
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>
                    </div>
                </a>
            </div>

            {/* Back-to-Top Button */}
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-3 z-50 bg-[#FD3400] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-opacity duration-400 opacity-100 hover:bg-green-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="white"
                        className="bi bi-arrow-up-short"
                        viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 12a.5.5 0 0 1-.5-.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5A.5.5 0 0 1 8 12z" />
                    </svg>
                </div>
            )}
        </footer>

    )
}

export default Footer
