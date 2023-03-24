import React from 'react';
import "./AboutUsComponent.css"

const AboutUsComponent = () => {
    return (
        <div>
            <div className='about-page'>
            <div className='container mx-auto'>
                <h2 className='text-4xl md:text-6xl font-bold color-text pt-12 py-2'>About Us</h2>
                <p className='lg:w-[550px] block mx-auto text-xl pt-2 px-10 lg:px-0 pb-12'>Our mission is to make high-volume image editing work effortless for our clients. As our company logo shows, we make our clients feel relaxed once they outsource the editing work to us — editing work done on time on budget.</p>
            </div>
        </div>
        </div>
    );
};

export default AboutUsComponent;