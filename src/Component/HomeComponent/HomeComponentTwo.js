import React from 'react';
import "./HomeComponentTwo.css"
import { FaStar } from 'react-icons/fa';
import clientImage from "../../assets/newImages/Avatar.png"
import shirt from "../../assets/newImages/HomeTwo (1)/Hero Section/Rectangle 7.png"
import watch from "../../assets/newImages/HomeTwo (1)/Hero Section/Rectangle 8.png"
import girl from "../../assets/newImages/HomeTwo (1)/Hero Section/Rectangle 7-1.png"
import chair from "../../assets/newImages/HomeTwo (1)/Hero Section/Rectangle 8-1.png"

const HomeComponentTwo = () => {
    return (
        <div className='container mx-auto lg:px-20 2xl:px-56'>
            <div className='mt-[20px] mb-[16px] lg:mt-[48px] sm:px-12 lg:px-0'>
                {/* Parent Container */}
                <div className='grid lg:grid-cols-2 gap-[280px]'>
                    {/* Section One */}
                    <div>
                        <div>
                            <h2 className='homeTwoTitle 2xl:w-[668px]'>Studio Metrodesk We make <span className='homeTwoRetouch'>retouching</span> easy!</h2>
                            <p className='homeTwoPara mt-[16px] 2xl:w-[579px]'>Photo Editing Solutions for Fashion, Apparel, E-commerce Businesses and Pro-Photographers. Our 100+ pro photo editors work 24/7 to provide you with the most personalized solutions in the market</p>
                            <div className='flex flex-col md:flex-row justify-start items-center gap-[8px] lg:gap-[16px]'>
                                <div><button className='headerBtn block mx-auto'>Try Us Free</button></div>
                                <div><button className='headerQuote block mx-auto md:mt-[24px]'>Get A Quote</button></div>
                            </div>
                                <p className='creditCard mt-[8px]'>No credit card required.</p>
                        </div>
                        {/* Review */}
                        <div className='mt-[64.5px]'>
                            <div className='flex items-center gap-[4px]'>
                                <FaStar className='text-[#FEC84B]'/>
                                <FaStar className='text-[#FEC84B]'/>
                                <FaStar className='text-[#FEC84B]'/>
                                <FaStar className='text-[#FEC84B]'/>
                                <FaStar className='text-[#FEC84B]'/>
                            </div>
                            <p className='reviewPara mt-[7.5px] text-left 2xl:w-[522px]'>Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.</p>
                            <div className='mt-[16px] flex items-center gap-[8px]'>
                                <div>
                                    <img src={clientImage} alt="Studio MetroDesk Client"/>
                                </div>
                               <div className='text-left'> 
                                    <p className='clientName'>Lyle Kauffman</p>
                                    <p className='title'>Photographer, Sisyphus</p></div>
                            </div>
                        </div>
                    </div>
                    {/* Section Two */}
                    <div className='flex lg:flex-row gap-[8px]'>
                        <div className='w-full'>
                            <img src={shirt} className='mb-[8px]' alt="Studio MetroDesk Shirt"/>
                            <img src={watch} alt="Studio MetroDesk Watch"/>
                        </div>
                        <div className='mt-[65px] w-full'>
                        <img src={girl} className='mb-[8px]' alt="Studio MetroDesk Model PhotoRetouching"/>
                            <img src={chair} alt="Studio MetroDesk Chair Color Correction"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComponentTwo;