import React from 'react';
import "./UsingOurWorks.css"
import logos from "../../data/logos"

const UsingOurWorks = () => {
    return (
        <div className='ourWorkContainer'>
            <div className='container mx-auto py-20 px-10 lg:px-56'>
                <div className='grid grid-cols-3 lg:grid-cols-6 gap-5 justify-center items-center'>
                    {
                        logos?.map(logo => <>
                            <img className='w-full lg:w-44' src={logo.img} alt="Studio MetroDesk Brand Logo" />
                        </>)
                    }
                </div>
                <div className='flex flex-col lg:flex-row justify-around items-start mt-8'>
                    <div className='mt-6'>
                        <h2 className='ourWork mb-6 text-4xl lg:text-5xl text-left font-medium'>Global Brands That <br /> Use Our Work </h2>
                    </div>
                    <div className='lg:w-[550px] text-xl'>
                        <div className='text-left'>
                            <p className='mb-3 text-gray-700'>We are more than a photo editing company for many global brands, and they consider Studio Metrodesk as their post-production partner for success. Our comprehensive image editing services cover all aspects of professional product photos so that your product is the star of the show.</p>
                        </div>
                        <div className='text-left'>
                            <p className='mb-3 text-gray-700'>We take our photo retouching job seriously, so no spec of dust shall be left behind! Let us show you what we can do with hand-drawn retouching from hair to watch faces.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsingOurWorks;