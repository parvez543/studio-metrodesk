import React from 'react';
import "./PhotoRetouchingCost.css"
import { FaCircle } from 'react-icons/fa';
import easyRetouching from "../../assets/images/services/retouching/easy-image-retouching1.jpg"
import easyRetouching2 from "../../assets/images/services/retouching/easy-image-retouching2.jpg"
import medium from "../../assets/images/services/retouching/medium-image-retouching1.jpg"
import mediumretouching from "../../assets/images/services/retouching/medium-image-retouching2.jpg"
import hard from "../../assets/images/services/retouching/hard-image-retouching1.jpg"
import hardretouching from "../../assets/images/services/retouching/hard-image-retouching2.jpg"
import fashion from "../../assets/images/services/retouching/fashion-image-retouching1.jpg"
import fashions from "../../assets/images/services/retouching/fashion-image-retouching2.jpg"
import fashionelement from "../../assets/images/services/retouching/fashion-image-retouching3.jpg"
import fashionretouch from "../../assets/images/services/retouching/fashion-image-retouching4.jpg"
import complex from "../../assets/images/services/retouching/complex-image-retouching1.jpg"
import complexretouch from "../../assets/images/services/retouching/complex-image-retouching2.jpg"


const PhotoRetouchingCost = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
                {/* Watch Retouching – $3 per image */}
                <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left'>How much do photo retouching services cost?</h2>
                <p className='text-xl text-gray-700 mb-3 text-left'>AWe've mastered almost every technique in retouching so we can remove dust and specks, fix blemishes, smooth wrinkles, and more. Pricing for each photo depends on what kind of retouching we're doing and how complex the retouching will be. Every photo is different, but we follow standard pricing guidelines to ensure your rate is always transparent.</p>
                <div className='grid grid-cols-1 gap-6 justify-between lg:grid-cols-2'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>BWatch Retouching – $3 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left'>Watches are high-value items that require a different level of visual presentation for e-commerce sales. We deliver flawless aesthetically pleasing images that are proven to boost sales. We understand your unique needs and offer affordable services, custom prices, and unbeatable quality to match your requirements.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={easyRetouching} alt="Studio MetroDesk PhotoRetouching" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={easyRetouching2} alt="Studio MetroDesk PhotoRetouching" />
                        </div>
                    </div>
                </div>
                {/*  Jewelry Retouching – $3 per image */}
                <div className='grid grid-cols-1  lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>  Jewelry Retouching – $3 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left'>Jewelry items are complicated and expensive that require pixel-perfect imagery for online sales. Aesthetically pleasing jewelry images are essential to boost sales, and sometimes this means more than background removal. You won't pay for packages and bundles, you'll only be invoiced for the services you need.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={medium} alt="Studio MetroDesk PhotoRetouching" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={mediumretouching } alt="Studio MetroDesk PhotoRetouching" />
                        </div>
                    </div>
                </div>
                {/*Automotive Retouching – $3 per image*/}
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>Automotive Retouching – $3 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left'>95% of potential car buyers think that high-quality car images are essential when learning about a car online. The feel an automotive image creates to the viewer is a big part of retouching. Our specialized team changes toning, cleans distracting elements, adds color and increases clarity, all make a massive difference to the way the viewer takes in the image.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={hard} alt="Studio MetroDesk PhotoRetouching" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={hardretouching} alt="Studio MetroDesk PhotoRetouching" />
                        </div>
                    </div>
                </div>
                {/* Garment & Apparel Retouching – $2.5 per image */}
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'> Garment & Apparel Retouching – $2.5 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left'>Let our expert photo editors take care of the tedious garment and apparel retouching work, so your creative mind can focus on bringing your products to life. Whether you use pins, tape, or fishing lines in the studio, we edit them out. Our team takes care of every packaging creases, wrinkle, symmetry alignment, dust, and general retouching</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={fashion} alt="Studio MetroDesk PhotoRetouching" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={fashions} alt="Studio MetroDesk PhotoRetouching" />
                        </div>
                    </div>
                </div>
                {/* Accessories Retouching – $2.5 per image*/}
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'> Accessories Retouching – $2.5 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left'>Whether you have sunglasses, handbags, wallets, ties, cufflinks, eyewear, or backpacks, we retouch the product itself, add shadow and reflection, correct the color, and ultimately match your brand guideline and make your products stand out from the competition. Get a free trial today.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={fashionelement} alt="Studio MetroDesk PhotoRetouching" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={fashionretouch} alt="Studio MetroDesk PhotoRetouching" />
                        </div>
                    </div>
                </div>
                {/* Product Retouching – $5 per image */}
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'> Product Retouching – $5 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left'>To make online shoppers take their credit cards out, you need more than ordinary product photos. This is where high-quality product photo editing comes into play to make the ordinary extraordinary, as good editing will let you showcase your products as best as possible.</p>
                        <p className='text-xl text-gray-700 mb-3 text-left'>We optimize your product photos exactly how you want them presented on your website and brand merchandising. Our main focus is to apply the best photo editing techniques and bring out eye-catching product photos that boost your sales.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={complex} alt="Studio MetroDesk PhotoRetouching" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={complexretouch} alt="Studio MetroDesk PhotoRetouching" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PhotoRetouchingCost;