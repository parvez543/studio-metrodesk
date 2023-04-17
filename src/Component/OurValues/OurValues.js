import React from 'react';
import "./OurValues.css"
import ourValue from "../../assets/images/our-value.jpg"
import { FaCircle } from 'react-icons/fa';

const OurValues = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
                <div>
                    <div>
                        <div className='grid lg:grid-cols-2 justify-start gap-12'>
                            <div className='text-left text-lg lg:w-[500px] text-gray-700'>
                                <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left'>Our Values</h2>
                                <p className='mb-3 mt-4'><b>Do the right thing:</b> Integrity is the foundation for everything we do. We are admired and respected for our commitment to honesty, trust, and transparency. We do the right thing — even when no one is watching.</p>
                                <p><b>Remember the feeling: </b> Our world can be frustrating, confusing and even scary. We have all been there, so we show empathy and act with humility. We are all human, and therefore, we respect our customers, partners, and coworkers.</p>
                                <p className='mt-3'><b>Get it done:</b> Every day, customers trust us to edit and retouch high volume of images that are crucial to their success and we take that work seriously. Our team will overcome obstacles, find solutions and deliver exceptional image editing results.</p>
                            </div>
                            <div>
                                <img src={ourValue} className="lg:w-[450px] block mx-auto" alt="Founder And CEO of Studio MetroDesk" />
                            </div>
                        </div>
                        <div className='text-left mt-5 text-lg text-gray-700'>
                            <p className='mb-6'><b>Service.</b> We do whatever it takes to delight our customers. We support and share responsibility with the members of our team.</p>
                            <p className=''><b>Our customer-first approach includes...</b>
                                <ul>
                                    <div className='flex items-center gap-3'>
                                        <FaCircle className='w-[10px]' /><li>Listen to our customers' needs</li>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FaCircle className='w-[10px]' /><li>Provide options for our customers</li>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FaCircle className='w-[10px]' /><li>Deliver beyond their expectations</li>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FaCircle className='w-[10px]' /><li>Accountable for pixel-perfect results</li>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FaCircle className='w-[10px]' /><li>Set realistic expectations and make them happen</li>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <FaCircle className='w-[10px]' /><li>Hire top talents and keep them happy</li>
                                    </div>

                                </ul>
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurValues;