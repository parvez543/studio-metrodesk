import React from 'react';
import "./GManequineEditingProcess.css"
import { FaCircle } from 'react-icons/fa';
import photoEditing from "../../assets/images/services/ghost-mannequin/WhatAre_Ghost_mannequin_services_banner.jpg"

const GManequineEditingProcess = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
        <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left  mb-4'>How the ghost mannequin editing process works:</h2>
        <p className='text-xl text-gray-700 mb-3 text-left'>Here is a simple 4-step process for your understanding…</p>
        <div className='flex flex-col-reverse lg:flex-row gap-10 items-center'>
            <div>
                <h2 className='text-xl text-gray-900 my-6 text-left'>When ghost mannequin is a great choice:</h2>
                <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                   
                    <p className='text-left text-xl'>1. First, we need two images; one image of the clothing with the mannequin and one image with the visible inside labels.</p>
                </div>
                <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                   
                    <p className='text-left text-xl'>2. We put the two images together using the advanced clipping path technique.</p>
                </div>
                <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                   
                    <p className='text-left text-xl'>3. We combine the ghost mannequin with other services, such as color correction or shadow effect, to enhance the clothing or accessories.</p>
                </div>
                <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                    
                    <p className='text-left text-xl'>4. That's it! You have the product photo that looks as though there is an invisible form wearing it.</p>
                </div>

            </div>
            <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                <img src={photoEditing} alt="Studio MetroDesk PhotoEditing" />
            </div>
        </div>
        
    </div>
    );
};

export default GManequineEditingProcess;