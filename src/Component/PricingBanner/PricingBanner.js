import React from 'react';
import "./PricingBanner.css"
import priceImage from "../../assets/images/price_page/Hero_Image.png"

const PricingBanner = () => {
    return (
        <div className='pricingBanner'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
                <div className='grid lg:grid-cols-2 gap-8 justify-items-center'>
                    <div>
                        <h2 className='page-title text-4xl md:text-9xl font-bold color-text text-left'>Goal- oriented pricing that scales with you</h2>
                        <p className='pricePara text-left'>Tell us what you need, and we'll send your custom quote within 4 step and get back to your work. We are take care of your work.</p>
                    </div>
                    <div>
                        <img src={priceImage} alt="Studio MetroDesk Pricing"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingBanner;