import React from 'react';
import "./HomeComponent.css"

const HomeComponentCopy = () => {
    return (
        <div className='homeContainer'>
            <div className='px-10 lg:px-0'>
                <h2 className='text-white text-3xl lg:text-6xl font-bold heading'>Professional Photo Retouching <br/> Perfect for Photographers & Business
</h2>
                <p className='text-white text-sm lg:text-xl -mt-24 lg:-mt-[150px]'>Twenty years of high-end retouching knowledgeable team, ready to work. <br/> Every industry has there own guidelines for product retouching, <br/> and our team works with almost all sectors that need complex product retouching.</p>
            </div>
            <div className='flex gap-8 justify-center items-center mt-10'>
                <button className='headerBtn py-3 px-20'>Free Trial</button>
                <button className='getAQuote py-[13px] px-20'>Get A Quote</button>
            </div>
        </div>
    );
};

export default HomeComponentCopy;