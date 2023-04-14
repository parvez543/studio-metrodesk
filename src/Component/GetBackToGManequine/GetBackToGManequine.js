import React from 'react';
import ghostManequine from "../../assets/images/services/ghost-mannequin/ghostmannequin_work.jpg"


const GetBackToGManequine = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-48 py-20'>
                <div className='grid lg:grid-cols-2 gap-6'>
                    <div className='flex justify-center items-center mb-6 lg:mb-0'>
                        <img src={ghostManequine} className="" alt="Studio MetroDesk Product Photography" />
                    </div>
                    <div>
                        <h2 className='mb-5 text-3xl sm:text-4xl md:text-5xl font-medium text-[#7A80BD] text-left'>Get back to the work that needs you the most</h2>
                        <p className='text-xl text-left text-gray-700 mb-3'>Ghost mannequin edits can take days when you've hundreds or even thousands of images from a clothing or accessory photoshoot. To edit out a mannequin, you have to piece together multiple images, add depth, increase volume, and give it just enough texture to create a natural-looking product photo.</p>
                        <p className='text-xl text-left text-gray-700'>All that edits take way too much time when you could be focusing on your business. You don't have to waste your time anymore in Photoshop trying to edit photos by yourself. Simply take this tiresome ghost mannequin job off your plate with our affordable ghost mannequin services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetBackToGManequine;