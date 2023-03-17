import React from 'react';
import bannerImage from "../../assets/images/image-editiing-slider-2.jpg"
import { FaCircle, FaArrowRight } from "react-icons/fa";
import "./HomeComponent.css"

const HomeComponent = () => {
    return (
        <div className='flex flex-col-reverse px-10 lg:px-0 items-center lg:flex-row lg:items-start justify-center gap-16 pt-16 lg:pt-32'>
            <div>
                <img src={bannerImage} className="lg:w-[500px] lg:h-[500px]" alt="This is a Banner" />
                <p className='text-center lg:text-left pt-3'>Vector Conversion</p>
            </div>
            <div className='text-left'>
                <p className='text-3xl font-bold'>24/7 Photo</p>
                <h1 className='text-7xl lg:text-9xl font-bold text-green-600 lg:-ml-3'>Editing</h1>
                <p className='text-xl font-semibold'>with 100% Satisfaction Guaranteed</p>
                <p className='lg:w-[520px] mt-6 text-gray-600 text-xl'>From simple clipping path to multi clipping path to ghost mannequin to retouching to vector conversion to embroidery digitizing, we do everything for you.</p>
                <ul className='mt-4 text-lg text-gray-800'>
                    <div className='flex items-center gap-3'>
                        <FaCircle className='text-[10px]' />
                        <li>Instant customer support (zero waiting time)</li>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaCircle className='text-[10px]' />
                        <li>A growing team of over 80 full-time photoshop experts</li>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaCircle className='text-[10px]' />
                        <li>Fastest turnaround time (1-hour) with pixel-perfect quality</li>
                    </div>
                </ul>
               <div className='flex items-center mt-10 gap-6'>
               <div className='flex items-center justify-center gap-4 py-3 px-3 rounded-md text-white getQuote lg:w-52'>
                    <button className='text-sm lg:text-xl'>GET A QUOTE</button>
                    <FaArrowRight className='text-xl' />
                </div>
                <div>
                    <button className='text-xl text-blue-600 tryFree'>Try Us Free</button>
                </div>
               </div>
                
            </div>
        </div>
    );
};

export default HomeComponent;