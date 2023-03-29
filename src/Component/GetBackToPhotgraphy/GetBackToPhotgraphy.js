import React from 'react';
import "./GetBackToPhotgraphy.css"
import productPhotography from "../../assets/images/product-photography.jpg"

const GetBackToPhotgraphy = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-48 py-20'>
                <div className='grid lg:grid-cols-2'>
                    <div className='lg:w-[450px] lg:ml-10 flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={productPhotography} className="" alt="Studio MetroDesk Product Photography"/>
                    </div>
                    <div>
                        <h2 className='mb-5 text-3xl sm:text-4xl md:text-5xl font-medium text-[#7A80BD] text-left'>Get Back To Photography That Needs You The Most</h2>
                        <p className='text-xl text-left text-gray-700 mb-3'>No one sees the photos you shoot until you fix them with Photoshop and publish them. Almost every photograph needs a creative retouch to get the most out of it, whether a quick edit or an in-depth retouch. As a professional photographer, your reputation will thrive or die by the quality of the final images you deliver to your clients or publish in your portfolio.</p>
                        <p className='text-xl text-left text-gray-700'>Fixing every single imperfection can make the day drag, eat up your budget and take massive time from your personal life. Our hand-edited photos and careful attention to detail provide you perfect retouching services every time.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetBackToPhotgraphy;