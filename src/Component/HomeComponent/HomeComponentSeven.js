import React, { useState } from 'react';
import "./HomeComponentSeven.css"
// import "../../index.css"
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import clientImage from "../../assets/newImages/Avatar.png"
// import before from "../../assets/newImages/Before/After.jpg"
// import after from "../../assets/newImages/Before.jpg"

import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';





const HomeComponentSeven = () => {
    const FIRST_IMAGE = {
        imageUrl: "https://i.ibb.co/qWy4h6n/After.jpg"
    };
    const SECOND_IMAGE = {
        imageUrl: "https://i.ibb.co/4KBR1Hg/Before.jpg"
    };

    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56'>
            <div className='mt-[20px] mb-[16px] lg:mt-[48px] sm:px-12 lg:px-0 flex flex-col lg:flex-row'>
                {/* Parent Container */}
                <div >
                    {/* Section One */}
                    <div>
                        <div className='mr-[60px]'>
                            <h2 className='homeSevenTitle'>Studio Metrodesk We make <span className='homeTwoRetouch'>retouching</span> easy!</h2>
                            <p className='homeTwoPara mt-[30px] lg:mr-[30px]'>Photo Editing Solutions for Fashion, Apparel, E-commerce Businesses and Pro-Photographers. Our 100+ pro photo editors work 24/7 to provide you with the most personalized solutions in the market</p>
                            <div className='flex flex-col md:flex-row justify-start items-center gap-[8px] lg:gap-[16px]'>
                                <Link to="/freetrial"> <div><button className='headerBtn block mx-auto'>Try Us Free</button></div></Link>
                                <div><button className='headerQuote block mx-auto md:mt-[24px]'>Get A Quote</button></div>
                            </div>
                            <p className='mt-[8px] text-left'>No credit card required.</p>
                        </div>
                        {/* Review */}
                        <div className='mt-[35px]'>
                            <div className='flex items-center gap-[4px]'>
                                <FaStar className='text-[#FEC84B]' />
                                <FaStar className='text-[#FEC84B]' />
                                <FaStar className='text-[#FEC84B]' />
                                <FaStar className='text-[#FEC84B]' />
                                <FaStar className='text-[#FEC84B]' />
                            </div>
                            <p className='reviewPara mt-[7.5px] text-left 2xl:w-[522px]'>Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.</p>
                            <div className='mt-[16px] flex items-center gap-[8px]'>
                                <div>
                                    <img src={clientImage} alt="Studio MetroDesk Client" />
                                </div>
                                <div className='text-left'>
                                    <p className='clientName'>Lyle Kauffman</p>
                                    <p className='title'>Photographer, Sisyphus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Section Two */}

                </div>
                {/* Image Section */}
                <ReactBeforeSliderComponent
                    firstImage={FIRST_IMAGE}
                    secondImage={SECOND_IMAGE}
                />
            </div>

        </div>
    );
};

export default HomeComponentSeven;