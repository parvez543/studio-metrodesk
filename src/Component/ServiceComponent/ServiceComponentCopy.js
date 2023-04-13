import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import serviceData from "../../data/serviceData"

const ServiceComponentCopy = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 pb-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 cursor-pointer'>
                {
                    serviceData?.map(service => <>
                        <div className='flex flex-col-reverse lg:flex-row justify-around  gap-10 items-center bg-white itemContainer hover:shadow-cyan-100 rounded-lg py-20 px-10'>
                            <div>
                                <h2 className='text-3xl text-left font-medium'>{service.title}</h2>
                                <p className='mt-2 text-left'> {service.description}</p>
                                <p className='mt-8 text-blue-500 hover:text-blue-800 cursor-pointer flex items-center gap-2'>{service.CTA} <FaLongArrowAltRight/></p>
                            </div>
                            <div className=''>
                                <img className='w-[350px]' src={service.img} alt="Studio MetroDesk Service"/>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default ServiceComponentCopy;