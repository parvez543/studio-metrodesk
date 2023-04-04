import React from 'react';
import "./EmbroideryExperts.css"
import embroidery from "../../assets/images/services/embroidery/EMB_Experienced.jpg"

const EmbroideryExperts = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-48 py-20'>
                <div className='grid lg:grid-cols-2'>
                    <div className='lg:w-[450px] lg:ml-10 flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={embroidery} className="" alt="Studio MetroDesk Embroidery Design" />
                    </div>
                    <div>
                        <h2 className='mb-5 text-3xl sm:text-4xl md:text-5xl font-medium text-[#7A80BD] text-left'>Let our professional digitizers do it for you</h2>
                        <p className='text-xl text-left text-gray-700 mb-3'>Our embroidery digitizing service provides you flawless outputs with no thread breaks. We use top of the line machines, applications and software to digitize and process your design for sharp and symmetrical stitch work.</p>
                        <p className='text-xl text-left text-gray-700'>Every embroidery digitization comes with a different challenge and we are adept at solving all your digitizing problems.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmbroideryExperts;