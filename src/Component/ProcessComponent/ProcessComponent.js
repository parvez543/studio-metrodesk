import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import poster from "../../assets/images/hiw/howitworks_herro.jpg"

const ProcessComponent = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
        <div className='flex flex-col lg:flex-row items-center justify-around gap-12'>
            <div>
                <h2 className='page-title text-4xl md:text-9xl font-bold color-text text-left'>Take A Sneak Peek Into How Our Work Process Looks Like</h2>
                
                <p className='color-gray-800 text-lg  mt-4 text-left'>Here are the five simple steps to get pixel-perfect photo edits with the size and format you need — EVERYTHING. You don't even have to think about it.</p>
                <p className='color-gray-800 text-lg mt-2color-gray-800 text-left mt-2'>We're incredibly proud of our craftsmanship and offer a <span className='markText'>100% satisfaction guarantee</span> on all our services.</p>
                <div className='flex items-center'>
                    <button className='flex items-center gap-2 quoteBtn'>Get A Quote <FaArrowRight /></button>
                    <p className='text-xl text-btn mt-6 flexBtn  text-blue-600 decoration-solid decoration-1 decoration-blue-600 ml-6 hover:text-blue-800'>Try Us Free</p>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <img src={poster} alt="Studio MetroDesk PhotoShoot"/>
            </div>
        </div>
    </div>
    );
};

export default ProcessComponent;