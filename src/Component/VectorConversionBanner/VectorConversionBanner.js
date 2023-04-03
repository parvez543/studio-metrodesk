import React from 'react';
import "./VectorConversionBanner.css"
import { FaArrowRight } from 'react-icons/fa';
import banner from "../../assets/images/services/vector-conversion-service.jpg"

const VectorConversionBanner = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
        <div className='flex flex-col lg:flex-row items-center justify-around gap-12'>
            <div>
                <h2 className='page-title text-4xl md:text-9xl font-bold color-text text-left'>Vector Conversion Services</h2>
                <p className='font-medium text-xl md:text-2xl text-gray-900 mt-6 mb-1 text-left'>We convert raster to vector that you can print in any size while saving more time and money.</p>
                <p className='color-gray-800 text-lg  mt-4 text-left'>Vector conversion done by expert hands, pixel-perfect output, 24/7 friendly customer support, on-time, on-budget — EVERY TIME.</p>
                <p className='color-gray-800 text-lg mt-2color-gray-800 text-left mt-2'>We're incredibly proud of our craftsmanship and offer a <span className='markText'>100% satisfaction guarantee</span> on all our vector conversion services. If you need any modifications on our edits, simply give us a shout and we'll do everything to satisfy your standards for FREE.</p>
                <div className='flex items-center'>
                    <button className='flex items-center gap-2 quoteBtn'>Get A Quote <FaArrowRight /></button>
                    <p className='text-xl text-btn mt-6 flexBtn  text-blue-600 decoration-solid decoration-1 decoration-blue-600 ml-6 hover:text-blue-800'>Try Us Free</p>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <img src={banner} alt="Studio MetroDesk PhotoShoot" />
            </div>
        </div>
    </div>
    );
};

export default VectorConversionBanner;