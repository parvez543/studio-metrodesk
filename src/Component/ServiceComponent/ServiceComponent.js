import React from 'react';
import "./ServiceComponent.css"

const ServiceComponent = () => {
    return (
        <div className='container mx-auto py-20 lg:px-56 '>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-left serviceText font-semibold mb-3'>Photo Editing Services </h2>
            <p className='text-left md:text-lg text-gray-700'>Let us look after the edits, so you can get back to the work that needs you. You can always <span className='markText'>get up to 20% discount</span> during order placement when selecting a longer turnaround time.</p>

        </div>
    );
};

export default ServiceComponent;