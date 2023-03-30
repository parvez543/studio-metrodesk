import React from 'react';
import "./WorkingProcessStep.css"
import step1 from "../../assets/images/hiw/hiw-1.png"
import step2 from "../../assets/images/hiw/hiw-2.png"
import step3 from "../../assets/images/hiw/hiw-3.png"
import step4 from "../../assets/images/hiw/hiw-4.png"
import step5 from "../../assets/images/hiw/hiw-5.png"
import { FaAngleRight, FaComments } from 'react-icons/fa';

const WorkingProcessStep = () => {
    return (
        <div className='bg-[#F5F6FF]'>
            <div className='stepBg'>
                <div className='container mx-auto px-10 lg:px-56 py-20'>
                    {/* Step 1 */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 text-left items-center stepContainer'>
                        <div className='w-full'>
                            <img className='lg:w-[500px]' src={step1} alt="Studio MetroDesk Working Process Step 1" />
                        </div>
                        <div>
                            <h2 className='step-head'>STEP 1</h2>
                            <h2 className='getStarted'>Get Started by Requesting a Quote or Free Trial</h2>
                            <p className='text-gray-700 text-lg text-left'>Just send us a few sample images with editing requirements, image volume and turnaround time. We'll give you an estimate right away. Click to request a custom quote or free trial now. Also, you can schedule a call with our editing specialists to share your requirements.</p>
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 text-left items-center mt-10'>
                        <div>
                            <h2 className='step-head'>STEP 2</h2>
                            <h2 className='getStarted'>Receive Free Test Images and Approve Our Quote</h2>
                            <p className='text-gray-700 text-lg text-left'>No commitment is required to receive your free professionally edited photos. You can always ask for any final adjustments to the edits and pricing. When both parties agree, you approve the work order.</p>
                        </div>
                        <div className='w-full'>
                            <img className='lg:w-[500px]' src={step2} alt="Studio MetroDesk Working Process Step 1" />
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 text-left items-center mt-10 stepContainer'>
                        <div className='w-full'>
                            <img className='lg:w-[500px]' src={step3} alt="Studio MetroDesk Working Process Step 1" />
                        </div>
                        <div>
                            <h2 className='step-head'>STEP 3</h2>
                            <h2 className='getStarted'>Upload All Your Images Inside Our System</h2>
                            <p className='text-gray-700 text-lg text-left'>Create an account and upload all your images using your web browser inside our secure and encrypted Client Management System. You can upload UNLIMITED files with no size limit: JPG, PSD, TIFF, PNG, NEF, RAW, CR2, DNG, PDF. Finally, you get back to the fun stuff while we edit your images.</p>
                        </div>
                    </div>
                    {/* Step 4 */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 text-left items-center mt-10'>
                        <div>
                            <h2 className='step-head'>STEP 4</h2>
                            <h2 className='getStarted'>Review and Ask For Adjustment If Needed</h2>
                            <p className='text-gray-700 text-lg text-left'>Finally, you review the edits and let us know if there's anything to adjust. Every edit will be done by a professional retoucher, not a machine, for complete control and the cleanest edges. Our designers can handle even the most complex cutouts — no straight polygonal lasso lines where they shouldn't be. Our data shows we've got 99.5% first-time approval from previous clients like yours.</p>
                        </div>
                        <div className='w-full'>
                            <img className='lg:w-[500px]' src={step4} alt="Studio MetroDesk Working Process Step 1" />
                        </div>
                    </div>
                     {/* Step 5 */}
                     <div className='grid grid-cols-1 lg:grid-cols-2 text-left items-center mt-10 stepContainer'>
                        <div className='w-full'>
                            <img className='lg:w-[500px]' src={step5} alt="Studio MetroDesk Working Process Step 1" />
                        </div>
                        <div>
                            <h2 className='step-head'>STEP 5</h2>
                            <h2 className='getStarted'>Download All Your Perfectly Edited Images</h2>
                            <p className='text-gray-700 text-lg text-left'>Our quality control team will double-check every image before sending you the finished files. Once your photos are perfectly ready, we'll email you a link to download the files. You get all your edits done with <span className='markText'>100% satisfaction guarantee.</span></p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-2 mt-8'>
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
        </div>
    );
};

export default WorkingProcessStep;