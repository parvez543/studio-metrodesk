import React from 'react';
import hiring from "../../data/hiring"
import "./WeAreHiring.css"


const WeAreHiring = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <div>
                <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD]'>We Are Hiring</h2>
                <p className='text-lg text-gray-600 max-w-3xl mx-auto'>We're on the lookout for extraordinary talents. If you think you're an ideal candidate, please send your biodata and mention the position you're applying for.</p>
            </div>
            <div className='grid md:grid-cols-2 gap-6 mt-16'>
                {
                    hiring?.map(h => <>
                        <div className='text-left bg-white shadow-lg p-14 rounded-lg'>
                            <h2 className='title'>{h.title}</h2>
                            <p>{h.description}</p>
                            <button className='bioData mt-8'>Send Your BioData</button>
                        </div>
                    
                    </>)
                }
            </div>
        </div>
    );
};

export default WeAreHiring;