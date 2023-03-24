import React from 'react';
import "./ContactUs.css"
import mailus from "../../assets/images/email.png"
import chatnow from "../../assets/images/chat.png"
import callus from "../../assets/images/callus.png"
import { FaAngleRight, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className=''>
            <div className='container mx-auto px-10 lg:px-56 py-20 '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <div className='cardItems px-6 py-10'>
                        <div className='flex justify-center items-center'>
                            <img className='w-[80px]' src={mailus} alt="Studio MetroDesk Mail Icon" />
                        </div>
                        <div>
                            <h3 className='text-3xl mt-4 mb-4 pt-4'>Email Us</h3>
                            <p className='text-base'><a href="mailto: support@studiometrodesk.com" className='text-[#7A80BD] font-[16px]'>support@studiometrodesk.com</a>   and we'll hear from our expert team almost instantly. No automated reply, all human.</p>
                            <div className='flex justify-center items-center text-blue-500 hover:text-blue-800 py-6 mt-4'>
                                <a href='mailto: support@studiometrodesk.com'>Click To Email</a><FaAngleRight className='mt-[2px]'/>
                            </div>
                        </div>
                    </div>
                    <div className='cardItems px-6 py-6'>
                        <div className='flex justify-center items-center'>
                            <img className='w-[100px] pt-2' src={chatnow} alt="Studio MetroDesk Mail Icon" />
                        </div>
                        <div>
                            <h3 className='text-3xl mt-4 mb-4 pt-2'>Chat Now</h3>
                            <p className=''>Get instantly help by starting a chat with someone from our expert support team. We're available 24/7 whenever you need us.</p>
                            <div className='flex justify-center items-center text-blue-500 hover:text-blue-800 py-3'>
                                <a href='mailto: support@studiometrodesk.com'>Create Account To Chat</a><FaAngleRight className='mt-[2px]'/>
                            </div>
                        </div>
                    </div>
                    <div className='cardItems px-6 py-6'>
                        <div className='flex justify-center items-center'>
                            <img className='w-[80px]  pt-2' src={callus} alt="Studio MetroDesk Mail Icon" />
                        </div>
                        <div>
                            <h3 className='text-3xl mt-4 mb-4 pt-6'>Give Us A Call</h3>
                            <p className=''>Speak with one of our expert customer support team members over the phone.</p>
                        </div>
                        <div className='flex justify-center items-center text-blue-500 hover:text-blue-800 py-4 mt-4'>
                               <p>Call <a href='+1 (973) 262-9181'>+1 (973) 262-9181</a></p>
                            </div>
                    </div>
                </div>
            </div>
            <div className='con-card bg-[#FAFAFA] py-14'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-12 py-6'>
                    <div>
                        <h3 className='con-header text-3xl lg:text-[48px]'>Connect With Us <br/> Social Media</h3>
                    </div>
                    <div className='flex'>
                       <div>
                        <a href='https://www.facebook.com/StudioMetrodesk' className=' text-gray-500 hover:text-blue-900 text-3xl'><FaFacebookSquare className='text-5xl ml-10'/></a>
                       </div>
                       <div>
                        <a href='https://www.facebook.com/StudioMetrodesk' className=' text-gray-500 hover:text-blue-900 text-3xl'><FaLinkedin className='text-5xl ml-4 mt-16'/></a>
                       </div>
                       <div>
                        <a href='https://www.instagram.com/studiometrodeskinc/' className=' text-gray-500 hover:text-blue-900 text-3xl'><FaInstagramSquare className='text-5xl ml-3 -mt-1'/></a>
                       </div>
                       <div>
                        <a href='https://twitter.com/MetrodeskInc' className=' text-gray-500 hover:text-blue-900 text-3xl'><FaTwitter className='text-5xl  mt-20'/></a>
                       </div>
                       <div>
                        <a href='https://www.youtube.com/channel/UCn3B2chTLRava7zS0YZcTVg' className=' text-gray-500 hover:text-blue-900 text-3xl'><FaYoutube className='text-5xl'/></a>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;