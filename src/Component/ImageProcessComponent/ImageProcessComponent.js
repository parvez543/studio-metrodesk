import React from 'react';
import "./ImageProcessComponent.css"
import firstTime from "../../assets/images/First-Time-Approval.png"
import onTimeDelivery from "../../assets/images/On-Time-Delivery.png"
import turnAround from "../../assets/images/Turnaround-Time.png"
import { FaArrowRight } from 'react-icons/fa';

const ImageProcessComponent = () => {
    return (
        <div className='contentContainer'>
            <div className='container mx-auto py-20 px-10 lg:px-20 2xl:px-56'>
                {/* Parent Container */}
                <div className='flex flex-col lg:flex-row justify-around gap-8 items-center'>
                    {/* Heading Container */}
                    <div className='ml-0 lg:-ml-3 2xl:ml-0'>
                        <h2 className='text-3xl md:text-4xl text-left font-semibold mb-[24px] secHead'>10,000+ Images <br /> Process Daily</h2>
                        <p className='lg:w-[350px] text-gray-700 font-light text-left text-xl mb-[24px]'>With our growing expert team, scaling to meet your photo processing needs is easy!</p>
                        <button className='text-White hover:bg-blue-900 bg-cyan-900 py-3 px-6 headerStartBtn text-center flex items-center gap-2' >Get Started  <FaArrowRight /></button>
                    </div>
                    {/* Card Container */}
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-6'>
                        <div>
                            <div className='flex flex-col justify-center items-center bg-white text-center imgContainer mb-6'>
                                {/* Image Container 1*/}
                                <div className='icons w-full pt-8 px-6 pb-10'>
                                    <img className='block mx-auto' src={firstTime} alt="Approval Icon" />
                                </div>
                                {/* Content Container */}
                                <div className='pb-10 px-6'>
                                    <h3 className='text-2xl text-gray-700 font-medium mt-[24px] mb-4'>99.8%</h3>
                                    <p className='text-2xl font-semibold theme-purple secHead mb-[8px]'>First Time Approval</p>
                                    <p className='text-gray-500 font-light'>We try to remove the back and forth to reach the perfect editing result.</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center bg-white text-center imgContainer'>
                                {/* Image Container 2*/}
                                <div className='icons onTime w-full pt-8 px-6 pb-10'>
                                    <img className='block mx-auto' src={onTimeDelivery} alt="On Time Delivery Icon" />
                                </div>
                                {/* Content Container */}
                                <div className='pb-10 px-6'>
                                    <h3 className='text-2xl text-gray-700 font-medium mt-[24px] mb-4'>99.5%</h3>
                                    <p className='text-2xl font-semibold theme-purple secHead mb-[8px]'>On Time Delivery</p>
                                    <p className='text-gray-500 font-light'>At Studio Metrodesk, we hate being late as much as you do.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col justify-center items-center bg-white text-center imgContainer'>
                                {/* Image Container 2*/}
                                <div className='icons turnAround onTime w-full pt-8 px-6 pb-10'>
                                    <img className='block mx-auto' src={turnAround} alt="Turn Around Icon" />
                                </div>
                                {/* Content Container */}
                                <div className='pb-10 px-6'>
                                    <h3 className='text-2xl text-gray-700 font-medium mt-[24px] mb-4'>1 Hour</h3>
                                    <p className='text-2xl font-semibold theme-purple secHead mb-[8px]'>Turn Around Time</p>
                                    <p className='text-gray-500 font-light'>Get your images back in as little as 1-hour, even if you have hundreds of shots to get through.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageProcessComponent;