import React from 'react';
import faqs from "../../data/FAQ"
import GettingStartedCard from './GettingStartedCard/GettingStartedCard';

const GettingStartFAQ = () => {

    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 pt-20 pb-8'>
            <div>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7A80BD] mb-6'>Getting Started</h2>
            </div>
            <div>
                {
                    faqs?.map(faq => <GettingStartedCard key={faq.id} faq={faq}/>)
                }
            </div>
        </div>
    );
};

export default GettingStartFAQ;