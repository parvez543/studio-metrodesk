import React from 'react';
import "./EmbrioderyCost.css"
import { FaCircle } from 'react-icons/fa';
import emb1 from "../../assets/images/services/embroidery/emb-service1.jpg"
import emb2 from "../../assets/images/services/embroidery/emb-service2.jpg"
import emb3 from "../../assets/images/services/embroidery/emb-service3.jpg"
import emb4 from "../../assets/images/services/embroidery/emb-service4.jpg"
import emb5 from "../../assets/images/services/embroidery/emb-service5.jpg"
import emb6 from "../../assets/images/services/embroidery/emb-service6.jpg"
import emb7 from "../../assets/images/services/embroidery/emb-service7.jpg"
import emb8 from "../../assets/images/services/embroidery/emb-service8.jpg"


const EmbrioderyCost = () => {
    return (
        <div className='bg-[#fafafa]'>
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            {/*  Embroidery – $10 per image */}
            <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left'>How much does embroidery digitizing service cost?</h2>
            <p className='text-xl text-gray-700 mb-3 text-left'>At Studio Metrodesk, we transform your artworks perfectly into stitch files without stretching your budget. Our transparent pricing plan offers you free cost estimates by carefully seeing your sample design. We consider color changes in the thread, number of stitches, sizes, time and effort while giving you an estimate. The cost is usually between $10-$50 per embroidery digitization. We offer discounts for ongoing customers and bulk orders.</p>
            <div className='grid grid-cols-1 gap-12 justify-between lg:grid-cols-2'>
                <div>
                    <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>Embroidery – $10 per image</h2>
                    <p className='text-xl text-gray-700 mb-3 text-left'>Put your product on any background. Take tedious, nitty-gritty photo edits off your plate with outsourced clipping path services. plate with outsourced clipping path services.</p>
                    <div className='flex gap-3 items-start justify-start'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Strategy to delivery - we drive the entire process</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Full-service fixed price packages</p>
                    </div>
                    

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                    <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={emb1} alt="Studio MetroDesk embroidery service works" />
                    </div>
                    <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={emb2} alt="Studio MetroDesk embroidery service works" />
                    </div>
                </div>
            </div>
            {/*  3D Puff – $10 per image */}
            <div className='grid grid-cols-1 gap-12  lg:grid-cols-2 mt-14'>
                <div>
                    <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>  3D Puff – $10 per image</h2>
                    <p className='text-xl text-gray-700 mb-3 text-left'>A simple clipping path is slightly more complex, so it takes a bit more time. Simple clipping paths remove objects that have more edges and curves, like a wine bottle or a car.</p>
                    <div className='flex gap-3 items-start justify-start'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Simple jewelry, Vehicles</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>A simple item of clothing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Single furniture items</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Other standalone products</p>
                    </div>
                    

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                    <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={emb3} alt="Studio MetroDesk embroidery service works" />
                    </div>
                    <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={emb4} alt="Studio MetroDesk embroidery service works" />
                    </div>
                </div>
            </div>
            {/*  Chenille – $10 per image */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14'>
                <div>
                    <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>Chenille – $10 per image</h2>
                    <p className='text-xl text-gray-700 mb-3 text-left'>A simple clipping path is slightly more complex, so it takes a bit more time. Simple clipping paths remove objects that have more edges and curves, like a wine bottle or a car.</p>
                    <div className='flex gap-3 items-start justify-start'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>A grouping of simple items</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Shoes</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Items of clothing with more complex shapes and curves</p>
                    </div>


                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                    <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={emb5} alt="Studio MetroDesk embroidery service works" />
                    </div>
                    <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={emb6} alt="Studio MetroDesk embroidery service works" />
                    </div>
                </div>
            </div>
            {/* Appliqué – $10 per image */}
            <div className='grid grid-cols-1 gap-12 lg:grid-cols-2 mt-14'>
                <div>
                    <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'> Appliqué – $10 per image</h2>
                    <p className='text-xl text-gray-700 mb-3 text-left '>A simple clipping path is slightly more complex, so it takes a bit more time. Simple clipping paths remove objects that have more edges and curves, like a wine bottle or a car.</p>
                    <div className='flex gap-3 items-start justify-start '>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Groupings of multiple items of clothing</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 '>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Complex jewelry and ornaments with detailed  <br /> links or multiple gemstones</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 '>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Furniture sets</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 '>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Strollers</p>
                    </div>
                   

                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                    <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={emb7} alt="Studio MetroDesk embroidery service works" />
                    </div>
                    <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={emb8} alt="Studio MetroDesk embroidery service works" />
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default EmbrioderyCost;