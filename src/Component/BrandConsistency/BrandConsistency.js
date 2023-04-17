import React from 'react';
import "./BrandConsistency.css"
import productPhotography from "../../assets/images/groing-brand1.jpg"

const BrandConsistency = () => {
    return (
        <div className='bg-[#fafafa]'>
        <div className='container mx-auto px-10 lg:px-20 2xl:px-48 py-20'>
            <div className='grid lg:grid-cols-2'>
                <div className='lg:w-[450px] lg:ml-10 flex justify-center items-center mb-6 lg:mb-0'>
                    <img src={productPhotography} className="" alt="Studio MetroDesk Product Photography"/>
                </div>
                <div>
                    <h2 className='mb-5 text-3xl sm:text-4xl md:text-5xl font-medium text-[#7A80BD] text-left'>We Strictly Maintain Your Brand Consistency</h2>
                    <p className='text-xl text-left text-gray-700 mb-3'>Everything you post online – from social media posts to stories to everything you put up on your website – should reflect your brand aesthetic.</p>
                    <p className='text-xl text-left text-gray-700'>We understand how important professional photo editing is. That's why our number one priority is to maintain the consistency of your brand aesthetic through all sorts of image editing services. We'll edit your photos to your brand specifications and you'll see your edited photos the next day. Now, what will you do with all that time you just saved?</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BrandConsistency;