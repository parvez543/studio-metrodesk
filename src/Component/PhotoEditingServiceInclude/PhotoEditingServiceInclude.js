import React from 'react';
import { FaCircle } from 'react-icons/fa';
import "./PhotoEditingServiceInclude.css"
import photoEditing from "../../assets/images/product-editing.jpg"

const PhotoEditingServiceInclude = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
                <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left'>What Do Our Photo Editing Services Include?</h2>   
                <p className='text-lg text-gray-700 mb-3 text-left'>We help photographers with basic to high-end photo editing, whatever they need.</p> 
            <div className='grid lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <h2 className='text-xl text-gray-900 my-6 text-left'>Check out our beautiful clipping path projects</h2>
                    <div className='flex gap-3 items-start justify-start'>
                        <FaCircle className='mt-[3px]' />
                        <p className='text-left text-xl'><b>Product Retouching Services</b>  include creative product photo editing, cleaning, clipping path, masking, ghost mannequin, adding shadows and reflections, recoloring elements, rotation and resizing, background removal, reshaping, liquifying, fixing symmetry and more.</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4'>
                        <FaCircle className='mt-[3px]' />
                        <p className='text-left text-xl'><b>High-end Photo Retouching Services</b>  include body retouching, skin retouching, hair retouching, teeth whitening and eye correction, make-up retouching, dodge and burn effect, remove face wrinkles, clothes editing, adjusting contrast & brightness.</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4'>
                        <FaCircle className='mt-[3px]' />
                        <p className='text-left text-xl'><b>Image Manipulation Services</b>  include changing background, photo conversion into sketches, paintings and cartoons, removing, replacing or adding an object or people, professional stylization, special effects, pin up effects, beauty photo manipulation and more.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                    <img src={photoEditing} alt="Studio MetroDesk PhotoEditing"/>
                </div>
            </div>
        </div>
    );
};

export default PhotoEditingServiceInclude;