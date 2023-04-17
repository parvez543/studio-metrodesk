import React from 'react';
import "./WhyStudioMetroDesk.css"
import ourValues from "../../assets/images/our-value.jpg"

const WhyStudioMetroDesk = () => {
    return (
        <div className='whyUS'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
                <div className='grid lg:grid-cols-2 gap-12  items-center'>
                    <div className='text-left'>
                        <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD]'>Why Join at Studio Metrodesk?</h2>
                        <p className='lg:w-[450px] text-lg mt-5'>We're on a mission to empower global businesses through human-powered image editing. Behind our company's success has a dedicated, collaborative, and ever-growing team. We wholeheartedly believe outsourcing has the power to change the world for the better — both for our amazing customers and in the communities where our teams live and work. Our mission is to create more job opportunities that change lives with access to real employment and real salaries. We empower people everywhere to do work they love, so they can create thriving businesses, lives, and communities.</p>
                    </div>
                    <div className='w-full'>
                        <img src={ourValues} alt="Studio MetroDesk Our Values" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyStudioMetroDesk;