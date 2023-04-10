import React from 'react';
import clientImage from "../../assets/images/authimg/ryan-h.png"
import easyClippingPath from "../../assets/images/services/services-slider/multiple-clipping-path-1.jpg"
import easyClippingPathbig from "../../assets/images/services/services-slider/multiple-clipping-path-2.jpg"
import mediumpath from "../../assets/images/services/services-slider/multiple-clipping-path-3.jpg"
import complex from "../../assets/images/services/services-slider/multiple-clipping-path-4.jpg"
import hard from "../../assets/images/services/services-slider/multiple-clipping-path-5.jpg"
import { FaArrowRight } from 'react-icons/fa';

const MultiClippingAndAll = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56'>
            <div className='grid lg:grid-cols-2 items-center gap-12'>
                {/* Testimonial slider */}
                <div>
                    <div className="carousel w-full">
                        <div id="slide6" className="carousel-item relative w-full">
                            <div className='flex flex-col'>
                                <p className='text-2xl mt-14 font-bold'>Basic Multi Clipping Path</p>
                                <p className='text-gray-500 text-sm md:text-base'>Per Photo $2</p>
                                <img src={easyClippingPath} alt="Easy Clipping Path Service" className="w-full mt-12" />
                            </div>
                            <div className="absolute flex justify-between">
                                <a href="#slide10" className="btn btn-circle">❮</a>
                                <a href="#slide7" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide7" className="carousel-item relative w-full">
                            <div className='flex flex-col'>
                                <p className='text-2xl mt-14 font-bold'>Simple Multi-Clipping Path</p>
                                <p className='text-gray-500 text-sm md:text-base'>Per Photo $4</p>
                                <img src={easyClippingPathbig} alt="Easy Clipping Path Service" className="w-full mt-12" />
                            </div>
                            <div className="absolute flex justify-between">
                                <a href="#slide6" className="btn btn-circle">❮</a>
                                <a href="#slide8" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide8" className="carousel-item relative w-full">
                            <div className='flex flex-col'>
                                <p className='text-2xl mt-14 font-bold'>Medium Multi-Clipping Path</p>
                                <p className='text-gray-500 text-sm md:text-base'>Per Photo $7</p>
                                <img src={mediumpath} alt="Easy Clipping Path Service" className="w-full mt-12" />
                            </div>
                            <div className="absolute flex justify-between">
                                <a href="#slide7" className="btn btn-circle">❮</a>
                                <a href="#slide9" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide9" className="carousel-item relative w-full">
                            <div className='flex flex-col'>
                                <p className='text-2xl mt-14 font-bold'>Complex Multi-Clipping Path</p>
                                <p className='text-gray-500 text-sm md:text-base'>Per Photo $10</p>
                                <img src={complex} alt="Easy Clipping Path Service" className="w-full mt-12" />
                            </div>
                            <div className="absolute flex justify-between">
                                <a href="#slide8" className="btn btn-circle">❮</a>
                                <a href="#slide10" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide10" className="carousel-item relative w-full">
                            <div className='flex flex-col'>
                                <p className='text-2xl mt-14 font-bold'>Complex Multi-Clipping Path</p>
                                <p className='text-gray-500 text-sm md:text-base'>Per Photo $10</p>
                                <img src={hard} alt="Easy Clipping Path Service" className="w-full mt-12" />
                            </div>
                            <div className="absolute flex justify-between">
                                <a href="#slide9" className="btn btn-circle">❮</a>
                                <a href="#slide6" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Details Info */}
                <div>
                    <h2 className='mb-3 md:mb-4 text-[#7A80BD] text-5xl font-semibold text-left'>Multi-clipping Path</h2>
                    <p className='text-gray-800 text-xl font-bold text-left'>Our multi-clipping path service separates multiple elements in a photo. It's a complex clipping path with additional paths carefully crafted within the product or shot. Once every path is isolated, you can edit, recolor, or cut out the image individually.</p>
                    {/* Testimonial */}
                    <div className='my-4 md:my-8 p-4 md:p-6 bg-gray-100'>
                        <div className='text-left'>
                            <p className='text-xl'>“I used multi-clipping paths and color variants and was able to process hundreds of color corrections overnight. Extremely detailed work. These guys are life savers!!”</p>
                        </div>
                        {/* Photo And Other Asset */}
                        <div className='flex items-center text-left gap-6 mt-10'>
                            <div>
                                <img src={clientImage} alt="Studio MetroDesk Client" />
                            </div>
                            <div>
                                <p className='text-gray-500 mb-1 text-xl'>Ryan Hunter</p>
                                <p className='text-sm text-gray-400 '>Photographer, United States.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <button className='flex items-center gap-2 quoteBtn'>Get A Quote <FaArrowRight /></button>
                        <p className='text-xl text-btn mt-6 flexBtn  text-blue-600 decoration-solid decoration-1 decoration-blue-600 ml-6 hover:text-blue-800'>Try Us Free</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiClippingAndAll;