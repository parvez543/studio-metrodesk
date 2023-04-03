import React from 'react';
import "./VectorConversionCost.css"
import { FaCircle } from 'react-icons/fa';
import easy from "../../assets/images/services/vector-conversion/easy-vector-conversion1.jpg"
import easy2 from "../../assets/images/services/vector-conversion/easy-vector-conversion2.jpg"
import medium from "../../assets/images/services/vector-conversion/medium-vector-conversion1.jpg"
import medium2 from "../../assets/images/services/vector-conversion/medium-vector-conversion2.jpg"
import hard from "../../assets/images/services/vector-conversion/hard-vector-conversion1.jpg"
import hard2 from "../../assets/images/services/vector-conversion/hard-vector-conversion2.jpg"
import complex from "../../assets/images/services/vector-conversion/complex-vector-conversion1.jpg"
import complex2 from "../../assets/images/services/vector-conversion/complex-vector-conversion2.jpg"
import extraComplex from "../../assets/images/services/vector-conversion/extra-complex-vector-conversion1.jpg"
import extraComplex2 from "../../assets/images/services/vector-conversion/easy-vector-conversion2.jpg"

const VectorConversionCost = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-56 py-20'>
                {/* Complexity 1 – $3 per image */}
                <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left'>How much do vector conversion services cost?</h2>
                <p className='text-xl text-gray-700 mb-3 text-left'>Vector conversion projects can be as simple as a single-color logo and as complex as a detailed piece of artwork with dozens of colors — and the price is set to match the level of sophistication and work involved. Every image is different, but we follow standard pricing guidelines to ensure your rate is always transparent, even if you're working with a different designer. Here's an overview of how we price vector conversion projects:</p>
                <div className='grid grid-cols-1 gap-6 justify-between lg:grid-cols-2'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>Complexity 1 – $3 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left'>These vector conversions involve simple shapes, often with single objects, straight lines, one or two colors, or less text.
                        </p>
                        <p className='text-xl text-gray-700 mb-3 text-left font-bold'>Perfect For:</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Simple logos</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Icons</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={easy} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={easy2} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                    </div>
                </div>
                {/*  Complexity 2 – $6 per image*/}
                <div className='grid grid-cols-1  lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>  Complexity 2 – $6 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>These vector conversions involve slightly more complex shapes, often with multiple objects, detailed and curving lines, three or more colors, or more text.These vector conversions involve slightly more complex shapes, often with multiple objects, detailed and curving lines, three or more colors, or more text.</p>
                        <p className='text-xl text-gray-700 mb-3 text-left font-bold'>Perfect For:</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Simple illustrations</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Simple graphics</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={medium} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={medium2} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                    </div>
                </div>
                {/*  Complexity 3 – $10 per image */}
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>  Complexity 3 – $10 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>These vector conversions are used for logos with lots of detail, complex edges, and multiple shades or colors.</p>
                        <p className='text-xl text-gray-700 mb-3 text-left font-bold'>Perfect For:</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Complex, separated garments such as fully  <br /> customizable shoes or jacket / shirt / tie combinations</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>School or family crests</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Highly detailed logos</p>
                        </div>


                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={hard} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={hard2} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                    </div>
                </div>
                {/* Complexity 4 – $15 per image */}
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'> Complexity 4 – $15 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>These vector conversions are actually artwork conversions. They are generally used for illustrations and graphics with lots of detail, complex shapes, and multiple colors and shading. These images also often include words with complex lettering or typography.</p>
                        <p className='text-xl text-gray-700 mb-3 text-left font-bold'>Perfect For:</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Complex lettering or calligraphy</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Detailed illustrations and graphics</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={complex} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={complex2} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                    </div>
                </div>
                {/* Complexity 5 – $20 per image */}
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'> Complexity 5 – $20 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>These vector conversions are actually artwork conversions. They are generally used for illustrations and graphics with lots of detail, complex shapes, and multiple colors and shading. These images also often include words with complex lettering or typography.</p>
                        <p className='text-xl text-gray-700 mb-3 text-left font-bold'>Perfect For:</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Complex lettering or calligraphy</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Detailed illustrations and graphics</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={extraComplex} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={extraComplex2} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VectorConversionCost;