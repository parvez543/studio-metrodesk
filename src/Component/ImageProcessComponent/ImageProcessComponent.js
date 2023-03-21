import React from 'react';
import "./ImageProcessComponent.css"
import firstTime from "../../assets/images/First-Time-Approval.png"
import onTimeDelivery from "../../assets/images/On-Time-Delivery.png"
import turnAround from "../../assets/images/Turnaround-Time.png"
import { FaArrowRight } from 'react-icons/fa';

const ImageProcessComponent = () => {
    return (
        <div className='container mx-auto py-20 px-10 lg:px-56'>
            {/* Parent Container */}
            <div className='flex flex-col lg:flex-row justify-around gap-8 items-center'>
                {/* Heading Container */}
                <div>
                    <h2 className='mb-3 text-3xl md:text-4xl text-left font-medium secHead'>10,000+ Images <br /> Process Daily</h2>
                    <p className='mb-8 text-gray-800 lg:w-[350px] text-left text-xl'>With our growing expert team, scaling to meet your photo processing needs is easy!</p>
                    <button className='text-White hover:bg-blue-900 bg-cyan-900 py-3 px-6 menu-btn text-center flex items-center gap-2' >Get Started  <FaArrowRight/></button>
                       
                   
                </div>
                {/* Card Container */}
                <div className='flex flex-col lg:flex-row justify-center items-center gap-12'>
                    <div>
                        <div className='flex flex-col justify-center items-center bg-white text-center imgContainer mb-6'>
                            {/* Image Container 1*/}
                            <div className='icons w-full pt-8 px-6 pb-10'>
                                <img className='block mx-auto' src={firstTime} alt="Approval Icon" />
                            </div>
                            {/* Content Container */}
                            <div className='pb-10 px-6'>
                                <h3 className='text-4xl text-grad-800 font-medium mt-10 mb-4'>99.8%</h3>
                                <p className='text-2xl font-semibold theme-purple secHead mb-2'>First Time Approval</p>
                                <p className='text-gray-400'>We try to remove the back and forth to reach the perfect editing result.</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center bg-white text-center imgContainer'>
                            {/* Image Container 2*/}
                            <div className='icons onTime w-full pt-8 px-6 pb-10'>
                                <img className='block mx-auto' src={onTimeDelivery} alt="On Time Delivery Icon" />
                            </div>
                            {/* Content Container */}
                            <div className='pb-10 px-6'>
                                <h3 className='text-4xl text-grad-800 font-medium mt-10 mb-4'>99.5%</h3>
                                <p className='text-2xl font-semibold theme-purple secHead mb-2'>On Time Delivery</p>
                                <p className='text-gray-400'>At Studio Metrodesk, we hate being late as much as you do.</p>
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
                                <h3 className='text-4xl text-grad-800 font-medium mt-10 mb-4'>1 Hour</h3>
                                <p className='text-2xl font-semibold theme-purple secHead mb-2'>Turn Around Time</p>
                                <p className='text-gray-400'>Get your images back in as little as 1-hour, even if you have hundreds of shots to get through.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageProcessComponent;