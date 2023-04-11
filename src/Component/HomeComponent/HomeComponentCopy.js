import React from 'react';
import "./HomeComponent.css"

const HomeComponentCopy = () => {
    return (
        <div className='homeContainer'>
            <div className='px-10 lg:px-0 heading'>
                <h2 className='text-white text-3xl lg:text-6xl font-bold '>Professional Photo Retouching <br/> Perfect for Photographers & Business</h2>
                <p className='text-white text-sm lg:text-xl mt-10'>Twenty years of high-end retouching knowledgeable team, ready to work. Every industry has there own guidelines for product retouching, <br/> and our team works with almost all sectors that need complex product retouching.</p>
                <div className='flex gap-8 justify-center items-center mt-10'>
                    <button className='headerBtn  px-10 py-3 lg:px-20'>Free Trial</button>
                    <button className='getAQuote px-10 py-[13px] lg:px-20'>Get A Quote</button>
                </div>
            </div>
        </div>
    );
};

export default HomeComponentCopy;