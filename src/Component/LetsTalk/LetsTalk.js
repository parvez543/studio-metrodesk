import React from 'react';
import { FaArrowRight, FaPhone, FaUserFriends } from 'react-icons/fa';
import "./LetsTalk.css"
import talkingMan from "../../assets/images/profilePicture.9bf8b27bde939c049bcc-removebg-preview.png"

const LetsTalk = () => {
    return (
        <div className='letsTalkContainer'>
            <div className='container mx-auto px-10 lg:px-56 py-20'>
                <div className='flex flex-col lg:flex-row items-center gap-36'>
                    <div>
                        <h2 className='text-left text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-[#7A80BD]'>Let's Talk</h2>
                        <p className='text-gray-700 text-xl text-left lg:w-[450px]'>Our kind, happy and humble customer support team would love to answer your questions. Give us a call or send an email to speak with an actual human (zero waiting time).</p>

                        <div className='flex items-center gap-4 mt-6 text-xl lg:text-2xl text-blue-900 hover:text-blue-700 cursor-pointer'>
                            <FaPhone/><p className='text-left'>+1 (973) 262-9181</p>
                        </div>
                        <div className='flex items-center gap-4 mt-3 text-xl lg:text-2xl text-blue-900 hover:text-blue-700 cursor-pointer'>
                            <FaUserFriends/><p className='flex items-center gap-2 text-left'>Talk To Our Editing Specialist <FaArrowRight/></p>
                        </div>
                    </div>
                    <div>
                        <img src={talkingMan} alt="Studio MetroDesk Man Talking on Phone" className='profilePhoto w-[450px] hidden lg:block'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetsTalk;