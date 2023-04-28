import React, { useState } from 'react';
import "./HomeComponentSeven.css"
// import "../../index.css"
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import clientImage from "../../assets/newImages/Avatar.png"
import before from "../../assets/newImages/After.jpg"
import after from "../../assets/newImages/Before.jpg"
import ImageSlider from 'react-image-comparison-slider';





const HomeComponentSeven = () => {

    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56'>
            <div className='mt-[20px] mb-[16px] lg:mt-[48px] sm:px-12 lg:px-0 flex'>
                {/* Parent Container */}
                <div >
                    {/* Section One */}
                    <div>
                        <div>
                            <h2 className='homeTwoTitle'>Studio Metrodesk We make <span className='homeTwoRetouch'>retouching</span> easy!</h2>
                            <p className='homeTwoPara -mt-[48px] lg:mr-[30px]'>Photo Editing Solutions for Fashion, Apparel, E-commerce Businesses and Pro-Photographers. Our 100+ pro photo editors work 24/7 to provide you with the most personalized solutions in the market</p>
                            <div className='flex flex-col md:flex-row justify-start items-center gap-[8px] lg:gap-[16px]'>
                                <Link to="/freetrial"> <div><button className='headerBtn block mx-auto'>Try Us Free</button></div></Link>
                                <div><button className='headerQuote block mx-auto md:mt-[24px]'>Get A Quote</button></div>
                            </div>
                            <p className='creditCard mt-[8px]'>No credit card required.</p>
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
                <div style={{ width: 700, height: 450 }}>
                    <ImageSlider
                        image1={before}
                        image2={after}
                        onSlide={() => {
                            console.log("sliding");
                        }}
                    />
                </div>
            </div>

        </div>
    );
};

export default HomeComponentSeven;