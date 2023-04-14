import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import poster from "../../assets/images/services/image-Retouching-service.jpg"

const PhotoRetouchingComponent = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            <div className='grid lg:grid-cols-2 items-center justify-around gap-12'>
                <div>
                    <h2 className='page-title text-4xl md:text-9xl font-bold color-text text-left'>Photo Retouching Services</h2>
                    <p className='font-medium text-xl md:text-2xl text-gray-900 mt-6 mb-1 text-left'>Twenty years of high-end retouching knowledgeable team, ready to work.</p>
                    <p className='color-gray-800 text-lg  mt-4 text-left'>Every industry has there own guidelines for product retouching, and our team works with almost all sectors that need complex product retouching.</p>
                    <p className='color-gray-800 text-lg mt-2color-gray-800 text-left mt-2'>You can send your files using our web application or a third-party app like WeTransfer, Dropbox, Hightail, Box, and OneDrive. In addition, we can connect your system through API for automated workflow. <span className='markText'>STOP! Before doing anything,</span> send your guides and images to test our service quality.</p>
                    <div className='flex items-center'>
                        <button className='flex items-center gap-2 quoteBtn'>Get A Quote <FaArrowRight /></button>
                        <p className='text-xl text-btn mt-6 flexBtn  text-blue-600 decoration-solid decoration-1 decoration-blue-600 ml-6 hover:text-blue-800'>Try Us Free</p>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <img src={poster} alt="Studio MetroDesk PhotoShoot" />
                </div>
            </div>
        </div>
    );
};

export default PhotoRetouchingComponent;