import React from 'react';
import productPhotography from "../../assets/images/services/clipping-path-cost/no-spec-of-dust.jpg"

const OurExperts = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-48 py-20'>
                <div className='grid lg:grid-cols-2 gap-6'>
                    <div className='flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={productPhotography} className="" alt="Studio MetroDesk Product Photography" />
                    </div>
                    <div>
                        <h2 className='mb-5 text-3xl sm:text-4xl md:text-5xl font-medium text-[#7A80BD] text-left'>Let our professional clipping path experts do it</h2>
                        <p className='text-xl text-left text-gray-700 mb-3'>Undoubtedly spending all day editing photos sucks the passion out of your work, so you need to outsource all clipping path projects to a professional team. Now high-volume image clipping path is cheaper, faster and effortless.</p>
                        <p className='text-xl text-left text-gray-700'>Our hand-drawn clipping path with meticulous attention to detail guarantees you get perfect clipping paths and clean cut-outs every time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurExperts;