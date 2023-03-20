import React from 'react';
import "./WorkingProcess.css"
import getAQuote from "../../assets/images/Request-A-Quote.png"
import approveQuote from "../../assets/images/Approve-Our-Quote.png"
import getItDone from "../../assets/images/Get-It-Done.png"
import arrow from "../../assets/images/hiw-arrow.png"
import { FaAngleRight, FaComments } from 'react-icons/fa';

const WorkingProcess = () => {
    return (
        <div className='workingContainer'>
            <div className='container mx-auto py-20 px-10 lg:px-56'>
                <h2 className='mb-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-left workingHead'>How Does The Process Work?</h2>
                <p className='text-xl text-gray-700 text-left'>3 simple steps to get your photo editing and retouching done right. </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12'>
                {/* Get A Quote */}
                <div className='cardContainer lg:w-[350px]'>
                    <img  src={getAQuote} alt="Quotation Icon" />
                    <h3 className='text-2xl text-gray-700 mt-6 mb-3 font-medium text-left'>Request A Quote</h3>
                    <p className='text-gray-600 text-left'>Please send us a few sample images with editing requirements, image volume and turnaround time. We'll give you an estimate right away.</p>
                    <div className='mt-12 flex justify-start items-center gap-1 text-blue-500 hover:text-blue-800'>
                <div>
                    <p className='text-lg'>Click Here</p>
                </div>
                <div>
                    <FaAngleRight className='text-lg'/>
                </div>
            </div>
                </div>
                {/* Approve Our Quote */}
                <div  className='cardContainer lg:w-[350px]'>
                    <img src={approveQuote} alt="Approval Icon" />
                    <h3 className='text-2xl text-gray-700 mt-6 mb-3 font-medium text-left'>Approve Our Quote</h3>
                    <img className='arrow' src={arrow} alt="Arrow"/>
                    <p className='text-gray-600 text-left'>You can always make any final adjustments to the quote. When both parties agree, you approve the work order. Finally, you get back to the fun stuff while we edit your images.</p>
                </div>
                {/* Get It Done */}
                <div  className='cardContainer lg:w-[350px]'>
                    <img className='' src={getItDone} alt="Get It Done Icon" />
                    <h3 className='text-2xl text-gray-700 mt-6 mb-3 font-medium text-left'>Get It Done</h3>
                    <img className='arrow' src={arrow} alt="Arrow"/>
                    <p className='text-gray-600 text-left'>You can always make any final adjustments to the quote. When both parties agree, you approve the work order. Finally, you get back to the fun stuff while we edit your images.</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <div>
                    <FaComments className='text-2xl'/>
                </div>
                <div className='flex items-center gap-1'>
                    <p className='text-xl'>Need any specialized help? <span className='text-lg text-blue-500 hover:text-blue-800 cursor-pointer'>Talk to our editing specialists</span> </p>
                    <div>
                        <FaAngleRight className='text-lg  text-blue-500 hover:text-blue-800'/>
                    </div>
                </div>
            </div>
            </div>
           


        </div>
    );
};

export default WorkingProcess;