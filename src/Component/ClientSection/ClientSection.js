import React from 'react';
import "./ClientSection.css"
import clientImage from "../../assets/images/price_page/client-section_image.png"

const ClientSection = () => {
    return (
        <div className='clientSection'>
            <div className='flex justify-center mb-[50px]'>
                <img src={clientImage} alt="Studio MetroDesk Client Testimonial"/>
            </div>
                <p className='font-medium md:text-lg lg:text-2xl'>Companies worldwide trust Studio Metrodesk, Inc. as their preferred photo clipping <br/> & retouching vendor/partner.</p>
        </div>
    );
};

export default ClientSection;