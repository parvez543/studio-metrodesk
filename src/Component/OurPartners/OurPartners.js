import React from 'react';
import "./OurPartners.css"
import logos from "../../data/partnersLogo"

const OurPartners = () => {
    return (
        <div className='bg-[#F6F7FF]'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-56 pt-20 pb-5'>
                <h2 className='text-left text-[#7A80BD] mb-3 text-2xl sm:text-3xl md:text-4xl font-semibold'>Our Awesome Partners </h2>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center items-center justify-items-center lg:px-[108px] 2xl:px-96 gap-6 mb-10 pb-16'>
                {
                    logos?.map(l => <>
                       <div className='anim-wave-start'>
                         <img className='imgAnimation imgBox py-2 px-4' src={l.img} alt="Partners Logo"/>
                       </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default OurPartners;