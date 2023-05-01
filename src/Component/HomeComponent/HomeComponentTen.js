import React from 'react';
import "./HomeComponentTen.css"
import banner from "../../assets/newImages/Rectangle 22.png"

const HomeComponentTen = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 '>
            {/* Main Container */}
            <div className=''>
                <div className='mt-[50px] grid lg:grid-cols-2 justify-center items-center'>
                    {/* Content */}
                    <div className='homeTenBlock'>
                        <h1 className='homeTenText text-left text-[#101828]'>Studio Metrodesk We make <span className='text-[#004EEB]'>retouching</span> easy!</h1>
                        <p className='text-left text-[#475467]'>Photo Editing Solutions for Fashion, Apparel, E-commerce Businesses and Pro-Photographers. Our 100+ pro photo editors work 24/7 to provide you with the most personalized solutions in the market</p>
                        <div className='flex justify-start'><button className='headerTenBtn'>Try Us Free</button></div>
                        <p className='text-[#667085] -mt-[23px] creditCard'>No credit card required.</p>
                    </div>
                    {/* Image Section */}
                    <div className='homeTenContent -ml-64 relative'>
                        <img src={banner} alt="Studio MetroDesk Home Banner"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponentTen;