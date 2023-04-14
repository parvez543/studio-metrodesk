import React from 'react';
import "./WhatAreVectorConversion.css"
import { FaCircle } from 'react-icons/fa';
import vectorConversion from "../../assets/images/services/vector-conversion/What-are-Vector-services.jpg"

const WhatAreVectorConversion = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left  mb-4'>What are vector conversion services?</h2>
        <p className='text-xl text-gray-700 mb-3 text-left'>Vector conversion means converting old obscure, low-quality raster files into scalable vector files, also known as R2V conversion. For industrial and commercial purposes, you need vector files that you can print in any size and enlarge as much as you want without losing quality</p>
        <div className='flex flex-col-reverse lg:flex-row gap-10 items-center'>
            <div>
               
                <div className='flex gap-3 items-start justify-start'>
                    <FaCircle className='mt-[3px] circle' />
                    <p className='text-left text-xl'>Usually, photos are raster files with filenames .jpg, .png, .gif, .pdf, or .psd. Raster files are made up of pixels, so they're great for online uses in places like your website where scalability isn't necessary.</p>
                </div>
                <div className='flex gap-3 items-start justify-start mt-4'>
                    <FaCircle className='mt-[3px] circle' />
                    <p className='text-left text-xl'>But when you enlarge raster files to put on a giant poster, for example — the images can get pixelated because they rely on the image's resolution.</p>
                </div>
                <div className='flex gap-3 items-start justify-start mt-4'>
                    <FaCircle className='mt-[3px] circle' />
                    <p className='text-left text-xl'>Vector files are more mathematical, and they're made up of a series of points on a graph with an X and Y axis that create straight and/or curved paths. Since they're not made up of pixels, vector images can be enlarged to any size without sacrificing quality.</p>
                </div>
               
            </div>
            <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                <img src={vectorConversion} alt="Studio MetroDesk PhotoEditing" />
            </div>
        </div>
       
    </div>
    );
};

export default WhatAreVectorConversion;