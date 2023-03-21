import React from 'react';
import "./WhyUs.css"
import whyUs from "../../assets/images/So_Why_Us.jpg"
import editbyhand from "../../assets/images/editedbyhand.jpeg"
import pixelperfect from "../../assets/images/pixelperfectdesign.jpeg"
import support from "../../assets/images/support.jpeg"
import underBudget from "../../assets/images/underbudget.jpeg"

const WhyUs = () => {
    return (
        <div className='container mx-auto py-20 px-10 lg:px-56'>
            <h2 className='mb-3 text-3xl md:text-4xl lg:text-5xl font-medium whyUs text-left'>So, Why Studio Metrodesk?</h2>
            <p className='text-xl text-left text-gray-700 mb-12'>We deliver consistent quality edits with every format and customization you need.</p>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-center gap-12'>
                <div>
                    <div className='flex flex-col md:flex-row items-center gap-4'>
                        {/* Image Container */}
                        <div>
                            <img className='w-[80px]' src={editbyhand} alt="Studio MetroDesk Edit By Hand Icon" />
                            <h3 className='text-grad-800 font-medium text-3xl mt-4 mb-2 text-left'>Edited By Hand</h3>
                            <p className='text-gray-500 text-left'>Every edit is done by a professional human retoucher, not a machine. Get customized edits with complete control and the cleanest edges.</p>
                        </div>
                        <div>
                            <img className='w-[80px]' src={pixelperfect} alt="Studio MetroDesk Edit By Hand Icon" />
                            <h3 className='text-grad-800 font-medium text-3xl mt-4 mb-2 text-left'>Pixel Perfect Result</h3>
                            <p className='text-gray-500 text-left'>Our team can handle any complex editing. No worries, have fun! Your work order is protected by our <span className='font-bold markText'>100% satisfaction guarantee.</span> </p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row items-center gap-4 mt-10'>
                        {/* Image Container */}
                        <div>
                            <img className='w-[80px]' src={support} alt="Studio MetroDesk Edit By Hand Icon" />
                            <h3 className='text-grad-800 font-medium text-3xl mt-4 mb-2 text-left'>24/7 Support</h3>
                            <p className='text-gray-500 text-left'>Our expert customer support team (real humans, not bots) is ready to help you at any time, all year round. You always hear from us instantly.</p>
                        </div>
                        <div>
                            <img className='w-[80px]' src={pixelperfect} alt="Studio MetroDesk Edit By Hand Icon" />
                            <h3 className='text-grad-800 font-medium text-3xl mt-4 mb-2 text-left'>Pixel Perfect Result</h3>
                            <p className='text-gray-500 text-left'>We've set our pricing to match your every editing need with turnaround time & editing complexity. Find the pricing that fits you.</p>
                        </div>
                    </div>
                </div>
                {/* Image */}
                <div>
                    <img className='w-full shadow-lg rounded-lg lg:w-[1000px]' src={whyUs} alt="Studio MetroDesk Why Us" />
                </div>
            </div>
        </div>
    );
};

export default WhyUs;