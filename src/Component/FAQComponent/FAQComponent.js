import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import DataAndSequrity from '../DataAndSequrity/DataAndSequrity';
import EmbroideryFAQ from '../EmbroideryFAQ/EmbroideryFAQ';
import GettingStartFAQ from '../GettingStartFAQ/GettingStartFAQ';
import ImageEditingFAQ from '../ImageEditingFAQ/ImageEditingFAQ';
import PricingFAQ from '../PricingFAQ/PricingFAQ';
import "./FAQComponent.css"

const FAQComponent = () => {
    return (
        <div>
            <div className='about-page'>
                <div className='container mx-auto'>
                    <h2 className='text-4xl md:text-6xl font-bold color-text pt-12 py-2'>Frequently Asked Questions</h2>
                    <p className='lg:w-[550px] block mx-auto text-xl pt-2 px-10 lg:px-0 pb-12'>We would cover your back if you missed anything. Still, have a question? Feel free to reach out to our customer support team.</p>
                   <div className='flex justify-center pb-12'>
                   <p className='flex items-center justify-center contactUSBtn cursor-pointer'>Contact Us <FaAngleRight/></p>
                   </div>
                </div>
            </div>
            <GettingStartFAQ/>
            <PricingFAQ/>
            <ImageEditingFAQ/>
            <EmbroideryFAQ/>
            <DataAndSequrity/>
        </div>
    );
};

export default FAQComponent;