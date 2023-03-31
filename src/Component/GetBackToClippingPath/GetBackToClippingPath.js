import React from 'react';
import productPhotography from "../../assets/images/services/clipping-path-cost/clipping-path-pro.jpg"

const GetBackToClippingPath = () => {
    return (
        <div className='bg-[#fafafa]'>
        <div className='container mx-auto px-10 lg:px-48 py-20'>
            <div className='grid lg:grid-cols-2'>
                <div className='lg:w-[450px] lg:ml-10 flex justify-center items-center mb-6 lg:mb-0'>
                    <img src={productPhotography} className="" alt="Studio MetroDesk Product Photography"/>
                </div>
                <div>
                    <h2 className='mb-5 text-3xl sm:text-4xl md:text-5xl font-medium text-[#7A80BD] text-left'>Get back to the work that needs you the most</h2>
                    <p className='text-xl text-left text-gray-700 mb-3'>Doing clipping path yourself can take days when you've hundreds or even thousands of images from a product photoshoot. Hire our professional editing team that fulfills your need with a <span className='markText'>100% satisfaction guarantee</span> . Get carefully hand-drawn clipping paths for crisp, clean photos that you can put on any background, color and setting.</p>
                    <p className='text-xl text-left text-gray-700'>You don't have to waste your time anymore in Photoshop trying to edit photos by yourself. Simply take this tiresome clipping path jobs off your plate with our clipping path services.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default GetBackToClippingPath;