import React from 'react';
import quoteIcon from "../../assets/images/quote-icon.png"
import "./Testimonial.css"
import rating from "../../assets/images/rating"
import testimonialImage from "../../assets/images/testimonial-slider/Best-In-The-Business.jpg"
import clientImage from "../../assets/images/testimonial-slider/Isaac-r.png"
import { FaAngleRight } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div className='contentContainer'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
                <div className='flex flex-col-reverse lg:flex-row items-center gap-12'>
                    {/* Heading Container */}
                    <div className='flex'>
                        <div>
                            <img className='w-[300px] lg:w-full' src={quoteIcon} alt="Studio Metrodesk Quote Icon" />
                        </div>
                        <div>
                            <h2 className='testi-title text-left text-xl lg:text-5xl font-bold'>Best in the business!</h2>
                            <img className='w-[100px] mt-9 lg:ml-10' src={rating} alt="Studio MetroDesk 5 Star Rating" />
                            <p className='w-full mt-5 text-lg text-gray-700 lg:w-[500px] lg:ml-10 text-left'>"I tried two other companies before Studio Metrodesk, and their work was sub-par?. These guys are doing an amazing job and their work is always done on time. I've been using them for years and they have never failed to deliver fantastic results.
                                Their instant customer service is also a plus. Just best in the business! If I ever had an issue they were on top of it right away. Thanks"</p>
                        </div>
                    </div>
                    <div className=''>
                        <img className='w-full lg:w-[450px]' src={testimonialImage} alt="Studio MetroDesk Best In Business" />
                        <p className='flex items-center text-sm md:text-xl justify-end mt-2 text-blue-500 hover:text-blue-800'>Read All Testimonials <FaAngleRight className='mt-[1px]' /></p>
                    </div>
                </div>
                <div className='mt-6 lg:-mt-10 flex items-center gap-6'>
                    <div>
                        <img src={clientImage} alt="Studio MetroDesk Client Isaac-r" />
                    </div>
                    <div className='text-left'>
                        <p className='text-gray-500 text-2xl mb-1'>Issac R.</p>
                        <p className='text-gray-500'>Product Manager, New York, US.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;