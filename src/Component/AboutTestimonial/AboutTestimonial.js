import React from 'react';
import "./AboutTestimonial.css"
import rating from "../../assets/images/image-removebg-preview.png"
import banner from "../../assets/images/review-benar.jpg"
import { FaArrowRight } from 'react-icons/fa';

const AboutTestimonial = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <div className='flex flex-col lg:flex-row gap-14 text-left'>
                <div>
                    <h2 className='page-title text-4xl md:text-9xl font-bold color-text'>Testimonials</h2>
                    <p className='font-semibold text-2xl text-gray-900 mt-6 mb-4 '>We've so many happy customers all over the world!</p>
                    <img className='w-[250px] -mt-5 -ml-4' src={rating} alt="Studio MetroDesk 5 Star Rating" />
                    <p className='color-gray-800 text-lg w-full md:w-5/6'>As our company logo shows, we make our clients feel relaxed once they outsource the editing work to us.</p>
                    <div className='flex items-center'>
                        <button className='flex items-center gap-2 quoteBtn'>Get A Quote <FaArrowRight /></button>
                        <p className='text-xl text-btn mt-6 flexBtn  text-blue-600 decoration-solid decoration-1 decoration-blue-600 ml-6 hover:text-blue-800'>Try Us Free</p>
                    </div>
                </div>
                <div>
                    <img src={banner} alt="Studio MetroDesk Testimonial Banner" />
                </div>
            </div>
        </div>
    );
};

export default AboutTestimonial;