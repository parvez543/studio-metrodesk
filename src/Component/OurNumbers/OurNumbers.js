import React from 'react';
import "./OurNumbers.css"
import numbers from "../../data/numbers"

const OurNumbers = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
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
        </div>
    );
};

export default OurNumbers;