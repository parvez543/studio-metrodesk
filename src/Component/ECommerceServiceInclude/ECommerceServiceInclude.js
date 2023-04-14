import React from 'react';
import { FaCircle } from 'react-icons/fa';
import photoEditing from "../../assets/images/ClothPhotoEditing.jpg"

const ECommerceServiceInclude = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
        <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left'>What Does Ecommerce Photo Editing Include?</h2>   
        <p className='text-lg text-gray-700 mb-3 text-left'>The main things in ecommerce image editing are color correction and background removal. To achieve desired results, you also need proper image cropping, brightness and contrast adjustment, tags removal, noise reduction, masking, clipping path, margin setting, watermarking, and more.</p> 
    <div className='grid lg:grid gap-10 items-center'>
        <div>
            <h2 className='text-xl text-gray-900 my-6 text-left'>Ecommerce product photo editing services include:</h2>
            <div className='flex gap-3 items-start justify-start'>
                <FaCircle className='mt-[5px] w-[8px]' />
                <p className='text-left text-xl'>Ecommerce website optimized editing</p>
            </div>
            <div className='flex gap-3 items-start justify-start'>
                <FaCircle className='mt-[5px] w-[8px]' />
                <p className='text-left text-xl'>Product photo retouching</p>
            </div>
            <div className='flex gap-3 items-start justify-start'>
                <FaCircle className='mt-[5px] w-[8px]' />
                <p className='text-left text-xl'>Clipping path and multi-clipping path</p>
            </div>
            <div className='flex gap-3 items-start justify-start'>
                <FaCircle className='mt-[5px] w-[8px]' />
                <p className='text-left text-xl'>Background color change / replacement</p>
            </div>
            <div className='flex gap-3 items-start justify-start'>
                <FaCircle className='mt-[5px] w-[8px]' />
                <p className='text-left text-xl'>Background color change / replacement</p>
            </div>
            <div className='flex gap-3 items-start justify-start'>
                <FaCircle className='mt-[5px] w-[8px]' />
                <p className='text-left text-xl'>Color adjustment and correction</p>
            </div>
            <div className='flex gap-3 items-start justify-start'>
                <FaCircle className='mt-[5px] w-[8px]' />
                <p className='text-left text-xl'>Remove unwanted shadows and add natural shadows</p>
            </div>
            <div className='flex gap-3 items-start justify-start'>
                <FaCircle className='mt-[5px] w-[8px]' />
                <p className='text-left text-xl'>Reflection and glare elimination</p>
            </div>
            <div className='flex gap-3 items-start justify-start'>
                <FaCircle className='mt-[5px] w-[8px]' />
                <p className='text-left text-xl'>White balance fixing, cropping and resizing</p>
            </div>
        </div>
        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
            <img src={photoEditing} alt="Studio MetroDesk PhotoEditing"/>
        </div>
    </div>
    <div>
        <p className='text-xl text-left mt-4'>The most important step of ecommerce photo editing is following the brand guideline and style. This way, we ensure consistency across the entire range of product photos and guarantee that shoppers will effortlessly recognize the brand and its products.</p>
    </div>
</div>
    );
};

export default ECommerceServiceInclude;