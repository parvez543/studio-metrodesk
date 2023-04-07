import React from 'react';
import "./AllServices.css"
import { FaArrowRight } from 'react-icons/fa';
import photoEditing from "../../assets/images/services/all-photoediting-service.jpg"

const AllServices = () => {
    return (
        <div className='serviceContainer'>
            <div className='container mx-auto px-10 lg:px-56 py-20'>
                <div className='grid lg:grid-cols-2 items-start justify-items-center'> 
                    <div className='text-left'>
                        <h2 className='page-title text-4xl md:text-9xl font-bold color-text'>Complete Photo Editing Services</h2>
                        <p className='font-semibold text-xl md:text-2xl text-gray-900 mt-6 mb-1'>Edited by expert hands, pixel-perfect output, on-time, on-budget — EVERY TIME!</p>
                        <p className='color-gray-800 text-base mt-4 sectionPara'>We're incredibly proud of our craftsmanship and offer a <span className='markText'>100% satisfaction guarantee</span> on all our services. If you need any modifications on our edits, simply give us a shout and we'll do everything to satisfy your standards for FREE.</p>
                        <div className='flex items-center'>
                            <button className='flex items-center gap-2 quoteBtn'>Get A Quote <FaArrowRight /></button>
                            <p className='text-xl text-btn mt-6 flexBtn  text-blue-600 decoration-solid decoration-1 decoration-blue-600 ml-6 hover:text-blue-800'>Try Us Free</p>
                        </div>
                    </div>
                    <div>
                        <img src={photoEditing} alt="Studio MetroDesk PhotoEditing Service"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllServices;