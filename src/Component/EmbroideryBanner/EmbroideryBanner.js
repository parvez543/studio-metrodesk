import React from 'react';
import "./EmbroideryBanner.css"
import { FaArrowRight } from 'react-icons/fa';
import poster from "../../assets/images/services/embroidery_hero.jpg"

const EmbroideryBanner = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            <div className='grid lg:grid-cols-2 items-center justify-around gap-12'>
                <div>
                    <h2 className='page-title text-4xl md:text-9xl font-bold color-text text-left'>Embroidery Digitizing Service</h2>
                    <p className='font-medium text-xl md:text-2xl text-gray-900 mt-6 mb-1 text-left'>Get production-friendly neat machine output with no breakage — sharp and symmetrical stitch work.</p>
                    <p className='color-gray-800 text-lg  mt-4 text-left'>We're incredibly proud of our craftsmanship and offer a <span className='markText'>100% satisfaction guarantee</span> on all our embroidery digitizing services. If you need any modifications on our embroidery, simply give us a shout and we'll do everything to satisfy your standards for FREE.</p>
                   
                    <div className='flex items-center'>
                        <button className='flex items-center gap-2 quoteBtn'>Get A Quote <FaArrowRight /></button>
                        <p className='text-xl text-btn mt-6 flexBtn  text-blue-600 decoration-solid decoration-1 decoration-blue-600 ml-6 hover:text-blue-800'>Try Us Free</p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <img src={poster} alt="Studio MetroDesk PhotoShoot" />
                </div>
            </div>
        </div>
    );
};

export default EmbroideryBanner;