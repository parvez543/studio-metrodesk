import React from 'react';
import './IndustryExperts.css'
import expertsData from "../../data/expertsdata"
import { FaAngleRight } from 'react-icons/fa';

const IndustryExperts = () => {
    console.log(expertsData);
    return (
        <div className='industryExpertContainer'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
                <div>
                    <h2 className='text-[#7A80BD] text-3xl sm:text-4xl md:text-5xl font-semibold text-left mb-[24px]'>Industry Expertise</h2>
                    <p className='text-left text-xl text-gray-700 font-light mb-[24px]'>We strictly maintain photo editing guidelines and requirements from different industries.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                    {
                        expertsData?.map(expertData => <>
                            <div className='cardContent p-6 rounded-lg hover:shadow-md cursor-pointer'>
                                <div>
                                    <img src={expertData.img} className="cardImg" alt="Studio Metrodesk Experts"/>
                                </div>
                                <div>
                                    <h2 className='text-left text-2xl text-gray-800 font-medium mt-3'>{expertData.title}</h2>
                                    <p className='text-left text-gray-500 font-light pt-4 pb-4 text-lg'>{expertData.description}</p>
                                </div>
                            </div>
                        </>)
                    }
                </div>
                <p className='mt-10 flex text-xl justify-center items-center text-blue-500  hover:text-blue-800 cursor-pointer'>See All Service <FaAngleRight className='mt-[1.5px]'/></p>
            </div>
        </div>
    );
};

export default IndustryExperts;