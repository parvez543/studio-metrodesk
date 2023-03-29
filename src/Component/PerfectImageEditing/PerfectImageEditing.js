import React from 'react';
import "./PerfectImageEditing.css"
import clippingPath1 from "../../assets/images/services/clipping-path-gallery/Clipping-Path-Easy-1.jpg"
import clippingPath2 from "../../assets/images/services/clipping-path-gallery/Clipping-Path-Easy-medium.jpg"
import clippingPath3 from "../../assets/images/services/clipping-path-gallery/Clipping-Path-Easy-Sample.jpg"
import clippingPath4 from "../../assets/images/services/clipping-path-gallery/Clipping-Path-Hard-Complex_small.jpg"
import clippingPath5 from "../../assets/images/services/clipping-path-gallery/Clipping-Path-Hard-Sample.jpg"
import clippingPath6 from "../../assets/images/services/clipping-path-gallery/Clipping-Path-medium-ss.jpg"

const PerfectImageEditing = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <div>
                <div>
                    <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7A80BD]'>Pixel-perfect Image Editing Portfolio For Photographers</h2>
                    <p className='text-lg text-gray-700 mb-3 text-left'>Our photo editing services cover all aspects of editing and retouching, so our photographer clients can scale their business and enjoy their life the fullest.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-6 mt-6 lg:grid-cols-3'>
                    <div>
                        <img src={clippingPath1} alt="Studio MetroDesk Easy Clipping Path"/>
                    </div>
                    <div>
                        <img src={clippingPath2} alt="Studio MetroDesk Easy And Medium Clipping Path"/>
                    </div>
                    <div>
                        <img src={clippingPath3} alt="Studio MetroDesk Easy and Simple Clipping Path"/>
                    </div>
                    <div>
                        <img src={clippingPath4} alt="Studio MetroDesk Hard And Complex Clipping Path"/>
                    </div>
                    <div>
                        <img src={clippingPath5} alt="Studio MetroDesk Hard And Sample Clipping Path"/>
                    </div>
                    <div>
                        <img src={clippingPath6} alt="Studio MetroDesk Medium Clipping Path"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerfectImageEditing;