import React from 'react';
import "./EmbroideryService.css"
import { FaCircle } from 'react-icons/fa';
import embroidery from "../../assets/images/services/embroidery/WhatAre_emb_services_banner.jpg"

const EmbroideryService = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left  mb-4'>What is embroidery digitizing service?</h2>
            <p className='text-xl text-gray-700 mb-3 text-left'>Embroidery Digitizing is tracing logos, artwork, or any design with stitches using specialized software to turn them into machine-readable embroidery file formats. It is the technique of converting any artwork into digital form with the help of modern-day embroidery digitizing software. Studio Metrodesk offers reliable embroidery digitizing service with flawless output.</p>
            <div className='grid lg:grid-cols-2'>
                <div>
                    <h2 className='text-xl text-gray-900 my-6 text-left'>We offer the following embroidery digitizing services.</h2>
                    <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Logo digitizing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Patch digitizing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Applique digitizing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>3D puff digitizing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Cap digitizing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Hat digitizing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>T-shirt monogram digitizing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Left chest digitizing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Jacket back digitizing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Chenille embroidery</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Chain stitch embroidery</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Towel monogram</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Badge embroidery</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Convert image into embroidery</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Convert image into embroidery pattern</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>PNG to embroidery digitizing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>JPG to embroidery digitizing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>And more.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                    <img src={embroidery} alt="Studio MetroDesk embroidery digitaizing services" />
                </div>
            </div>
            <div>
                <p className='text-xl text-gray-700 mb-3 text-left mt-10'>Embroidery Digitizing is tracing logos, artwork, or any design with stitches using specialized software to turn them into machine-readable embroidery file formats. It is the technique of converting any artwork into digital form with the help of modern-day embroidery digitizing software. Studio Metrodesk offers reliable embroidery digitizing service with flawless output.</p>
            </div>
        </div>
    );
};

export default EmbroideryService;