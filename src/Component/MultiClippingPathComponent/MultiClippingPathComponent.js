import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import poster from "../../assets/images/services/multiple-clipping-path.jpg"

const MultiClippingPathComponent = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            <div className='grid lg:grid-cols-2 items-center justify-around gap-12'>
                <div>
                    <h2 className='page-title text-4xl md:text-9xl font-bold color-text text-left'>Multiple Clipping Path Services</h2>
                    <p className='font-medium text-xl md:text-2xl text-gray-900 mt-6 mb-1 text-left'>Hand-drawn path separation until every detail is ready for color correction and retouching.</p>
                    <p className='color-gray-800 text-lg  mt-4 text-left'>Edited by expert hands, professional retouching, pixel-perfect output, 24/7 friendly customer support, on-time, on-budget — EVERY TIME.</p>
                    <p className='color-gray-800 text-lg mt-2color-gray-800 text-left mt-2'><span className='markText'>How Much MultiClipping Path Service Cost?</span> Basic Multi-clipping Paths – $2 per image. Example Eyewears – eyeglasses and sunglasses that need separate paths for the frames and the lenses.</p>
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

export default MultiClippingPathComponent;