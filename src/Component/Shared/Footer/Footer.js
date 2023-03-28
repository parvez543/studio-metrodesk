import React from 'react';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import logo from "../../../assets/images/Metrodesk-Studio-footer-Logo.png"
import payment from "../../../assets/images/payment.png"

const Footer = () => {
    return (
        <div className=' px-10 lg:px-56 py-20'>
            <div className='flex justify-center flex-col lg:flex-row gap-24'>
                <div>
                    <img src={logo} alt="Logo of StudioMetroDesk" />
                    <p className='text-left lg:w-[400px] mt-4 text-lg text-gray-500'>We're on a mission to make high-volume image editing effortless for our clients. Look at our logo; it shows how we make our clients feel comfortable once they outsource the editing work to us. Editing done on time on budget — EVERY TIME.</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-16'>
                    <div>
                        <h2 className='font-semibold text-xl mb-4 text-left'>SERVICES</h2>
                        <div className='text-left text-gray-600 text-base'>
                            <p>Clipping Path</p>
                            <p>Multi-Clipping Path</p>
                            <p>Ghost Mannequin</p>
                            <p>Photo Retouching</p>
                            <p>Vector Conversion</p>
                            <p>Embroidery Digitizing</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-semibold text-xl mb-4 text-left'>ABOUT</h2>
                        <div className='text-left text-gray-600 text-base'>
                            <p>Testimonials</p>
                            <p>About Us</p>
                            <p>Our Team</p>
                            <p>Careers</p>
                            <p>FAQs</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-semibold text-left text-xl mb-4'>BUSINESS</h2>
                        <div className='text-left text-gray-600 text-base'>
                            <p>Get Free Trial</p>
                            <p>Get A Quote</p>
                            <p>Sign IN/UP</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='font-semibold text-xl mb-4 text-left'>SUPPORT</h2>
                        <div className='text-left text-gray-600 text-base'>
                            <p>Contact Us</p>
                            <p>support@studiometrodesk.com</p>
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
                <p className='text-gray-400 text-base mt-1 text-purple-400'> <span className='text-sm'>Designed, Developed and Marketed by</span> <a className='text-purple-800 hover:text-blue-900' href="https://studiometrodesk.com/contact">studiometrodesk.com</a></p>
        </div>
    );
};

export default Footer;