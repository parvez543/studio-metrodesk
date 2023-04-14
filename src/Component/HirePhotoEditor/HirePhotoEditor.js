import React from 'react';
import "./HirePhotoEditor.css"
import { FaCheck } from 'react-icons/fa';
import editor from "../../assets/images/price_page/hire_editor_image.png"

const HirePhotoEditor = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            <div className='grid lg:grid-cols-2 items-center justify-center'>
                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 text-[#7A80BD] text-left">Hire a Photo Editor From Just $3 per hour</h2>
                   <div className='text-sm md:text-base lg:text-xl text-left'>
                   <p className='flex items-center gap-4'><FaCheck/>Forget about recruiting, screening resumes, interviews and payroll.</p>
                    <p className='flex items-center gap-4'><FaCheck/>Do what you do best - outsource the rest.</p>
                    <p className='flex items-center gap-4'><FaCheck/>No recruitment free, free replacement.</p>
                    <p className='flex items-center gap-4'><FaCheck/>Just want to get back your life back?</p>
                   </div>
                </div>
                <div className='mt-8 lg:mt-0'>
                    <img src={editor} alt="Studio MetroDesk Image Editor"/>
                </div>
            </div>
        </div>
    );
};

export default HirePhotoEditor;