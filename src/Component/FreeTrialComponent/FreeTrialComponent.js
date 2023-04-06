import React from 'react';
import "./FreeTrialComponent.css"
import freetrial from "../../assets/images/free_trail.gif"

const FreeTrialComponent = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <div className='container mx-auto px-10 lg:px-56 py-20'>
                <div className='grid lg:grid-cols-2 items-center justify-items-center'>
                    <div>
                        <h2 className='text-4xl md:text-6xl font-bold text-[#222222] text-left'>Try Free Edit 3 Of Your Image</h2>
                        <p className='text-gray-800 text-base mt-4 text-left'>Please send up to 3 sample images with any level of complexity. You can upload any image files with no size limit. You'll get your edited images back in as little as 2-hour with a custom quote.</p>
                    </div>
                    <div>
                        <img src={freetrial} alt="Studio MetroDesk Free Trial Gif" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreeTrialComponent;