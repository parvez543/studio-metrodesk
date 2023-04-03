import React from 'react';
import "./VectorProfessionalExpert.css"
import vector from "../../assets/images/services/vector-conversion/vector-profetional.jpg"

const VectorProfessionalExpert = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-48 py-20'>
                <div className='grid lg:grid-cols-2'>
                    <div className='lg:w-[450px] lg:ml-10 flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={vector} className="" alt="Studio MetroDesk Product Photography" />
                    </div>
                    <div>
                        <h2 className='mb-5 text-3xl sm:text-4xl md:text-5xl font-medium text-[#7A80BD] text-left'>Getting a clean & scalable vector image isn't easy!</h2>
                        <p className='text-xl text-left text-gray-700 mb-3'>High-quality vector conversion is the only way out when you need to enlarge logos or blurry images for larger print or bigger screen. Converting raster to vector keeps those fine details, so you get scalable images with razor-sharp clean lines.</p>
                        <p className='text-xl text-left text-gray-700'>Getting vector conversions done right takes enormous time. But you don't have to hustle all that time perfecting each vector in Photoshop yourself.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VectorProfessionalExpert;