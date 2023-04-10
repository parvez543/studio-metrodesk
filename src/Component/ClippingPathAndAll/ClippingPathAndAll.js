import React from 'react';
import "./ClippingPathAndAll.css"
import clientImage from "../../assets/images/authimg/chris-w.png"
import easyClippingPath from "../../assets/images/services/Clipping-Path-Easy-Sample_big.jpg"
import easyClippingPathbig from "../../assets/images/services/Clipping-Path-Easy-big.jpg"
import mediumpath from "../../assets/images/services/Clipping-Path-Easy-medium_big.jpg"
import complex from "../../assets/images/services/Clipping-Path-medium-s.jpg"
import hard from "../../assets/images/services/Clipping-Path-Hard-Complex.jpg"
import { FaArrowRight } from 'react-icons/fa';

const ClippingPathAndAll = () => {


    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <div className='grid lg:grid-cols-2 items-center gap-12'>
                <div>
                    <h2 className='mb-3 md:mb-4 text-[#7A80BD] text-5xl font-semibold text-left'>Clipping Path</h2>
                    <p className='text-gray-800 text-xl font-bold text-left'>Our clipping path services allow us to create hand-drawn clipping paths for crisp and clean photo cut-outs that you can put on any background, color and setting.</p>
                    {/* Testimonial */}
                    <div className='my-4 md:my-8 p-4 md:p-6 bg-gray-100'>
                        <div className='text-left'>
                            <p className='text-xl'>“I've relied on Studio Metrodesk for on-time and well-done clipping paths for several years. I'm always happy with their services. Haven't used anyone else in years. As long as I need clipping paths' they have my business.”</p>
                        </div>
                        {/* Photo And Other Asset */}
                        <div className='flex items-center text-left gap-6 mt-10'>
                            <div>
                                <img src={clientImage} alt="Studio MetroDesk Client" />
                            </div>
                            <div>
                                <p className='text-gray-500 mb-1 text-xl'>Chris Williams</p>
                                <p className='text-sm text-gray-400 '>Photographer, United States.</p>
                            </div>
                        </div>
                    </div>
                        <div className='flex items-center'>
                            <button className='flex items-center gap-2 quoteBtn'>Get A Quote <FaArrowRight /></button>
                            <p className='text-xl text-btn mt-6 flexBtn  text-blue-600 decoration-solid decoration-1 decoration-blue-600 ml-6 hover:text-blue-800'>Try Us Free</p>
                        </div>
                </div>
                {/* Testimonial Slider */}
                <div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <div className='flex flex-col'>
                                <p className='text-2xl mt-14 font-bold'>Basic Clipping Path</p>
                                <p className='text-gray-500 text-sm md:text-base'>Per Photo $1</p>
                                <img src={easyClippingPath} alt="Easy Clipping Path Service" className="w-full mt-12" />
                            </div>
                            <div className="absolute flex justify-between ml-[400px]">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <div className='flex flex-col'>
                                <p className='text-2xl mt-14 font-bold'>Simple And Basic Clipping Path</p>
                                <p className='text-gray-500 text-sm md:text-base'>Per Photo $2.5</p>
                                <img src={easyClippingPathbig} alt="Easy Clipping Path Service" className="w-full mt-12" />
                            </div>
                            <div className="absolute flex justify-between ml-[400px]">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <div className='flex flex-col'>
                                <p className='text-2xl mt-14 font-bold'>Medium Clipping Path</p>
                                <p className='text-gray-500 text-sm md:text-base'>Per Photo $5</p>
                                <img src={mediumpath} alt="Easy Clipping Path Service" className="w-full mt-12" />
                            </div>
                            <div className="absolute flex justify-between ml-[400px]">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4"className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <div className='flex flex-col'>
                                <p className='text-2xl mt-14 font-bold'>Complex Clipping Path</p>
                                <p className='text-gray-500 text-sm md:text-base'>Per Photo $10</p>
                                <img src={complex} alt="Easy Clipping Path Service" className="w-full mt-12" />
                            </div>
                            <div className="absolute flex justify-between ml-[400px]">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                            <div className='flex flex-col'>
                                <p className='text-2xl mt-14 font-bold'>Medium Clipping Path</p>
                                <p className='text-gray-500 text-sm md:text-base'>Per Photo $5</p>
                                <img src={hard} alt="Easy Clipping Path Service" className="w-full mt-12" />
                            </div>
                            <div className="absolute flex justify-between ml-[400px]">
                                <a href="#slide5" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClippingPathAndAll;