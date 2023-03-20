import React from 'react';
import "./ServiceComponent.css"
import serviceData from "../../data/serviceData"
import { FaAngleRight } from "react-icons/fa";

const ServiceComponent = () => {
    
    return (
        <div className='container mx-auto py-20 px-10 lg:px-56 '>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-left serviceText font-semibold mb-3'>Photo Editing Services </h2>
            <p className='text-left md:text-lg text-gray-700'>Let us look after the edits, so you can get back to the work that needs you. You can always <span className='markText'>get up to 20% discount</span> during order placement when selecting a longer turnaround time.</p>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-8 mt-12'>
                {
                    serviceData?.map((sData, id) => <>
                        <div className='serviceCard'>
                            <h2 className='text-2xl font-semibold text-gray-800'>{sData.title}</h2>
                            <p className='text-gray-500 text-xl mt-2 mb-5 '>{sData.description}</p>
                            <p className='text-blue-500 flex text-lg justify-center hover:text-blue-800 mb-6'>{sData.CTA}</p>
                            <div className='flex justify-end'>
                                <img className='serviceImg' src={sData.img} alt="Service Images"/>
                            </div>
                        </div>
                    </>)
                }
            </div>
            <div className='mt-12 flex justify-center items-center gap-1 text-blue-500 hover:text-blue-800'>
                <div>
                    <p className='text-lg'>See All Services</p>
                </div>
                <div>
                    <FaAngleRight className='text-lg'/>
                </div>
            </div>
        </div>
    );
};

export default ServiceComponent;