import React from 'react';
import "./HomeComponentNine.css"
import ImageSlider from 'react-image-comparison-slider';
import before from "../../assets/newImages/Homepage_nine/Hero Section/Rectangle 24.png"
import after from "../../assets/newImages/Homepage_nine/Hero Section/Rectangle 24.png"

const HomeComponentNine = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56'>
            {/* Parent Container */}
            <div className='mt-[60px]'>
                {/* Header Container */}
                <div className='grid lg:grid-cols-2 gap-[45px] text-left justify-center items-center'>
                    <div>
                        <h1 className='homeNineText text-left text-[#101828]'>Studio Metrodesk We make <br /><span className='text-[#004EEB]'>retouching</span> easy!</h1>
                    </div>
                    <div>
                        <p className='homeNinePara text-[#475467]'>Photo Editing Solutions for Fashion, Apparel, E-commerce Businesses and Pro-Photographers. Our 100+ pro photo editors work 24/7 to provide you with the most personalized solutions in the market </p>
                        <div className='flex flex-col md:flex-row justify-start items-start gap-[8px] lg:gap-[16px] mt-[32px]'>
                            <div><button className='headerNineBtn block mx-auto'>Try Us Free</button></div>
                            <div><button className='headerNineQuote block mx-auto'>Get A Quote</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "1216px", height: "727px" }} className='block mx-auto mt-[40px] mb-[40px]'>
                <ImageSlider
                    image1={before}
                    image2={after}
                    onSlide={() => {
                        console.log("sliding");
                    }}
                />
            </div>
            {/* Button Section */}
            <div className='mb-[24px] flex justify-center items-center gap-[8px]'>
                <div className='inputContainer'>
                    <input className='mr-[6px]' type="checkbox"></input>
                    <label className='inputText'>Clipping Path</label>
                </div>
                <div className='inputContainer'>
                    <input className='mr-[6px]' type="checkbox"></input>
                    <label className='inputText'>Shadow</label>
                </div>
                <div className='inputContainer'>
                    <input className='mr-[6px]' type="checkbox"></input>
                    <label className='inputText'>Reflection</label>
                </div>
                <div className='inputContainer'>
                    <input className='mr-[6px]' type="checkbox"></input>
                    <label className='inputText'>Remove Dust & Scratches</label>
                </div>
                <div className='inputContainer'>
                    <input className='mr-[6px]' type="checkbox"></input>
                    <label className='inputText'>Remove Dust & Scratches</label>
                </div>
            </div>
        </div>
    );
};

export default HomeComponentNine;