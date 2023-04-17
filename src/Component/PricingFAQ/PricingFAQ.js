import React from 'react';
import pricing from "../../data/pricingFAQ"
import PricingCard from './PricingCard';

const PricingFAQ = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56  pt-8 pb-8'>
            <div>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7A80BD] mb-6'>Pricing</h2>
            </div>
           <div>
            {
                pricing?.map(p => <PricingCard key={p.id} p={p}/>)
            }
           </div>
        </div>
    );
};

export default PricingFAQ;