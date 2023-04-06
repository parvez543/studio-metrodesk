import React from 'react';
import productPhotography from "../../assets/images/services/retouching/retouch_work.jpg"

const GetBackToPhotoRetouching = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-48 py-20'>
                <div className='grid lg:grid-cols-2'>
                    <div className='lg:w-[450px] lg:ml-10 flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={productPhotography} className="" alt="Studio MetroDesk Product Photography" />
                    </div>
                    <div>
                        <h2 className='mb-5 text-3xl sm:text-4xl md:text-5xl font-medium text-[#7A80BD] text-left'>No spec of dust shall be left behind!</h2>
                        <p className='text-xl text-left text-gray-700 mb-3'>We take your photo retouching jobs seriously. We've spent the last ten years training and building our in-house expert retouching team that can give flawless output — from beauty portraits to hair to watch faces.</p>
                        <p className='text-xl text-left text-gray-700'>Not every photo comes out the way you wanted, no matter how excellent your photographer is. Maybe your makeup artist missed the mark this time. Maybe the sample arrived all dinged up — with no time to get a replacement.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetBackToPhotoRetouching;