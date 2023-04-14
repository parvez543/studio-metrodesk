import React from 'react';
import "./EmbroideryProfessional.css"
import embroidery from "../../assets/images/services/embroidery/EMB_professionals.jpg"

const EmbroideryProfessional = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-48 py-20'>
                <div className='grid lg:grid-cols-2 gap-6'>
                    <div className='flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={embroidery} className="" alt="Studio MetroDesk Embroidery Design" />
                    </div>
                    <div>
                        <h2 className='mb-5 text-3xl sm:text-4xl md:text-5xl font-medium text-[#7A80BD] text-left'>Experienced and skilled embroidery digitizers that understand your need</h2>
                        <p className='text-xl text-left text-gray-700 mb-3'>Customers from all around the world provide us photos of their logos and designs and we convert them into embroidery formats for use on computerized embroidery machines.</p>
                        <p className='text-xl text-left text-gray-700'>We have a highly-skilled embroidery digitizing team capable of handling even the most challenging and complex embroidery digitization jobs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmbroideryProfessional;