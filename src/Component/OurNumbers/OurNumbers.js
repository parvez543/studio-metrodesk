import React from 'react';
import "./OurNumbers.css"
import numbers from "../../data/numbers"
import quotation from "../../assets/images/quotation.png"

const OurNumbers = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left'>Our Numbers</h2>
            <p className='text-left text-xl text-gray-700'>Let us look after the edits, so you can get back to the work that needs you.</p>

            <div className='grid md:grid-cols-2 gap-6 justify-center items-center mt-8'>
                {
                    numbers?.map(num => <>
                        <div className='numberContainer px-4 py-6'>
                            <h2 className='text-6xl font-bold text-[#7A80BD]'>{num.num}</h2>
                            <p className='text-3xl text-[#7A80BD] mt-4 mb-3'>{num.title}</p>
                            <p className='text-xl'>{num.details}</p>
                        </div>
                    
                    </>)
                }
            </div>
            <div  className='numberContainer px-4 py-6 mt-6'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
                    <div>
                        <h3 className='text-2xl lg:w-[250px] block mx-auto mb-2 text-[#7A80BD]'>1000+ Happy Customer Testimonials</h3>
                        <p className='lg:w-[450px] text-lg'>Served thousands of happy customers from all over the world. They love working with us.</p>
                    </div>
                    <div>
                        <img className='w-[150px]' src={quotation} alt="Studio MetroDesk Quotation Icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurNumbers;