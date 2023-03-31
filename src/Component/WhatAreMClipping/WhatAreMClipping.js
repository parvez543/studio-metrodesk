import React from 'react';
import { FaCircle } from 'react-icons/fa';
import photoEditing from "../../assets/images/services/WhatAre_Multiple_path_services_banner.jpg"

const WhatAreMClipping = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left  mb-4'>What are multi-clipping path services?</h2>
            <p className='text-xl text-gray-700 mb-3 text-left'>Multi-clipping path is an advanced process of applying multiple clipping layers in a single image and the way to isolate every element in a photo. Once every part of the image is separated in Photoshop, it can be individually edited, recolored, or cut out. This image editing technique helps you separate colors, resize objects, multiple fills, change opacity, modify colors etc. It also helps remove background or extract a product image from a messy background.</p>
            <div className='flex flex-col-reverse lg:flex-row gap-10 items-center'>
                <div>
                    <h2 className='text-xl text-gray-900 my-6 text-left'>Clipping path and multi-clipping path are also known as:</h2>
                    <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Multi-path</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Image clipping</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Photo cut-out</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Deep etching</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Multiple clipping paths</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Closed vector shape</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Closed vector path</p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                    <img src={photoEditing} alt="Studio MetroDesk PhotoEditing" />
                </div>
            </div>
            <div>
                <p className='text-xl text-gray-700 mb-3 text-left mt-10'>We've witnessed many of our competitors use automation and AI for complex editing works, which leads to Photoshop fails and unhappy customers. At Studio Metrodesk, we use expert human hand-drawn clipping paths for all our photo editing projects. Our in-house trained graphic designers have the common sense and keen eye to make sure every edited photo looks just right.</p>
            </div>
        </div>
    );
};

export default WhatAreMClipping;