import React from 'react';
import { FaCircle } from 'react-icons/fa';
import "./WhatAreClippingPathService.css"
import photoEditing from "../../assets/images/services/WhatAre_path_services_banner.jpg"

const WhatAreClippingPathService = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left  mb-4'>What are clipping path services?</h2>
            <p className='text-xl text-gray-700 mb-3 text-left'>Clipping path is a modern-day image editing technique that allows us to remove the background from an image. We use the pen tool in Photoshop to create crisp and clean clipping paths and then select paths that form a closed vector shape to separate a part of the image. Once our clipping path experts finalize the clipping path, everything on the inside of the path is included, and everything outside is removed.</p>
            <div className='flex flex-col-reverse lg:flex-row gap-10 items-center'>
                <div>
                    <h2 className='text-xl text-gray-900 my-6 text-left'>Clipping path is also known as:</h2>
                    <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Multiple clipping paths</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Multi-path</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Image clipping</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Photo cut-out</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Deep etching</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Closed vector shape</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>Closed vector path</p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                    <img src={photoEditing} alt="Studio MetroDesk PhotoEditing" />
                </div>
            </div>
            <div>
                <p className='text-xl text-gray-700 mb-3 text-left mt-10'>Our clipping path services allow us to create hand-drawn clipping paths for crisp and clean photo cut-outs that you can put on any background, color and setting. It makes displaying products or selling them online much more persuasive and focused.</p>
            </div>
        </div>
    );
};

export default WhatAreClippingPathService;