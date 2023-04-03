import React from 'react';
import "./GetBackToMultiClippingPath.css"
import productPhotography from "../../assets/images/services/multiple-clipping-path/Multiple_work.jpg"

const GetBackToMultiClippingPath = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-48 py-20'>
                <div className='grid lg:grid-cols-2'>
                    <div className='lg:w-[450px] lg:ml-10 flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={productPhotography} className="" alt="Studio MetroDesk Product Photography" />
                    </div>
                    <div>
                        <h2 className='mb-5 text-3xl sm:text-4xl md:text-5xl font-medium text-[#7A80BD] text-left'>Get back to the work that needs you the most</h2>
                        <p className='text-xl text-left text-gray-700 mb-3'>DMulti-clipping path edits can take days when you've hundreds or even thousands of images from a product photoshoot. But you need carefully hand-drawn muli-clipping paths for crisp, clean photos that you can put on any background, color and setting.</p>
                        <p className='text-xl text-left text-gray-700'>You don't have to waste your time in Photoshop trying to edit photos by yourself anymore. Simply take this tiresome multi-clipping path job off your plate with our multi-clipping path services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetBackToMultiClippingPath;