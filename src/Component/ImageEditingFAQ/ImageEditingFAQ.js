import React from 'react';
import "./ImageEditingFAQ.css"
import imageEditing from "../../data/imageFaq"
import ImageEditingCard from './ImageEditingCard';

const ImageEditingFAQ = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 pt-8 pb-8'>
            <div>
                <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7A80BD] mb-6'>Image Editing</h2>
            </div>
            <div>
                {
                    imageEditing?.map(i => <ImageEditingCard key={i.id} i={i}/>)
                }
            </div>
        </div>
    );
};

export default ImageEditingFAQ;