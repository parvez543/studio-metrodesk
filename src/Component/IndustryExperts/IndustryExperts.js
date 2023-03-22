import React from 'react';
import './IndustryExperts.css'
import expertsData from "../../data/expertsdata"

const IndustryExperts = () => {
    console.log(expertsData);
    return (
        <div className='industryExpertContainer'>
            <div className='container mx-auto px-10 lg:px-56 py-20'>
                <div>
                    <h2 className='text-[#7A80BD] mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-left'>Industry Expertise</h2>
                    <p className='text-left text-xl'>We strictly maintain photo editing guidelines and requirements from different industries.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                    {
                        expertsData?.map(expertData => <>
                            <div className='cardContent p-6 rounded-lg hover:shadow-md cursor-pointer'>
                                <div>
                                    <img src={expertData.img} className="cardImg" alt="Studio Metrodesk Experts"/>
                                </div>
                                <div>
                                    <h2 className='text-left text-2xl text-gray-800 font-medium mt-3'>{expertData.title}</h2>
                                    <p className='text-left text-gray-500 pt-4 pb-4 text-lg'>{expertData.description}</p>
                                </div>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default IndustryExperts;