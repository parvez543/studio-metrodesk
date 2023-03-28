import React from 'react';
import "./EmbroideryFAQ.css"
import embroidery from '../../data/embroidery';
import EmbroideryCard from './EmbroideryCard';

const EmbroideryFAQ = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 pt-8 pb-8'>
            <div>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7A80BD] mb-6'>Embroidery Digitizing</h2>
            </div>
            <div>
                {
                    embroidery?.map(em => <EmbroideryCard key={em.id} em={em}/>)
                }
            </div>
        </div>
    );
};

export default EmbroideryFAQ;