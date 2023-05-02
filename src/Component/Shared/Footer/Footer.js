import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import logo from "../../../assets/images/Metrodesk-Studio-footer-Logo.png"
import payment from "../../../assets/images/payment.png"

const Footer = () => {
    return (
        <div className=' px-10 lg:px-20 2xl:px-56 py-20'>
            <div className='flex justify-center flex-col lg:flex-row gap-24'>
                <div>
                    <img src={logo} alt="Logo of StudioMetroDesk" />
                    <p className='text-left lg:w-[400px] mt-4 text-lg text-gray-700 font-light'>We're on a mission to make high-volume image editing effortless for our clients. Look at our logo; it shows how we make our clients feel comfortable once they outsource the editing work to us. Editing done on time on budget — EVERY TIME.</p>
                </div>
                <div className='grid lg:grid-cols-4 gap-2 2xl:gap-6 justify-center'>
                    <div>
                        <h2 className='font-semibold text-xl mb-4 text-left'>SERVICES</h2>
                        <div className='text-left text-gray-500 font-light text-base'>
                            <p className='mb-[6px]'>Clipping Path</p>
                            <p className='mb-[6px]'>Multi-Clipping Path</p>
                            <p className='mb-[6px]'>Ghost Mannequin</p>
                            <p className='mb-[6px]'>Photo Retouching</p>
                            <p className='mb-[6px]'>Vector Conversion</p>
                            <p>Embroidery Digitizing</p>
                        </div>
                    </div>
                    <div className='ml-[12px]'>
                        <h2 className='font-semibold text-xl mb-4 text-left'>ABOUT</h2>
                        <div className='text-left text-gray-500 font-light text-base'>
                            <p className='mb-[6px]'>Testimonials</p>
                            <p className='mb-[6px]'>About Us</p>
                            <p className='mb-[6px]'>Our Team</p>
                            <p className='mb-[6px]'>Careers</p>
                            <p className='mb-[6px]'>FAQs</p>
                            <p className='mb-[6px]'>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className='-ml-[30px]'>
                        <h2 className='font-semibold text-left text-xl mb-4'>BUSINESS</h2>
                        <div className='text-left text-gray-700 font-light text-base'>
                            <p className='mb-[6px]'>Get Free Trial</p>
                            <p className='mb-[6px]'>Get A Quote</p>
                            <p className='mb-[6px]'>Sign IN/UP</p>
                        </div>
                    </div>
                    <div className='-ml-[50px]'>
                        <h2 className='font-semibold text-xl mb-4 text-left'>SUPPORT</h2>
                        <div className='text-left text-gray-700 font-light text-base'>
                            <p className='mb-[6px]'>Contact Us</p>
                            <p className='mb-[6px]'>support@studiometrodesk.com</p>
                            <p>+1 (973) 262-9181</p>
                        </div>
                        <div>
                            <h2 className='text-left font-bold text-xl my-6'>Find Us On</h2>
                            <div className='flex text-3xl gap-2'>
                               <a href="https://www.facebook.com/StudioMetrodesk" target="_blank"><FaFacebook className='text-gray-500 hover:text-blue-900'/></a>
                               <a href="https://www.instagram.com/studiometrodeskinc/" target="_blank"><FaInstagramSquare className='text-gray-500 hover:text-blue-900'/></a>
                               <a href="https://twitter.com/MetrodeskInc" target="_blank"><FaTwitterSquare className='text-gray-500 hover:text-blue-900'/></a>
                               <a href="https://www.youtube.com/channel/UCn3B2chTLRava7zS0YZcTVg" target="_blank"><FaYoutube className='text-gray-500 hover:text-blue-900'/></a>
                               <a href="https://www.linkedin.com/company/studiometrodeskinc/" target="_blank"><FaLinkedin className='text-gray-500 hover:text-blue-900'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-6'>
                <img src={payment} alt="Studio MetroDesk Payment Partner" className='w-[500px]'/>
            </div>
                <p className='text-gray-400 text-lg mt-3'>© STUDIO METRODESK INC 2022 | All Rights Reserved</p>
                <p className='text-base mt-1 text-purple-400'> <span className='text-sm'>Designed, Developed and Marketed by</span> <a className='text-purple-800 hover:text-blue-900' href="https://studiometrodesk.com/contact">studiometrodesk.com</a></p>
        </div>
    );
};

export default Footer;