import React from 'react';
import "./WhatIsPhotoRetouching.css"
import { FaCircle } from 'react-icons/fa';
import retouchBanner from "../../assets/images/services/retouching/WhatAre_Retouch_services_banner.jpg"

const WhatIsPhotoRetouching = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left  mb-4'>What are photo retouching services?</h2>
            <div className='grid  lg:grid-cols-2 gap-12 mt-6 lg:mt-16'>
                <div>
                    <p className='text-xl text-gray-700 mb-3 text-left'>Photo retouching is also known as image retouching, Photoshop retouching, airbrushing or Photoshopping. These editing techniques make your final images look cleaner, more beautiful and refined.</p>
                    <p className='text-xl text-gray-700 mb-3 text-left mt-10'>A perfectly done retouching can fix any issues that couldn't be addressed at the photoshoot or that you didn't notice until you saw the final images or highlight the innate beauty of your products and models. Every photographer needs retouching help to get the perfect output for their photoshoot.</p>
                </div>
                <div className='flex flex-col-reverse lg:flex-row gap-10 items-center'>

                    <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={retouchBanner} alt="Studio MetroDesk PhotoRetouching Banner" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhatIsPhotoRetouching;