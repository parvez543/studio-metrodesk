import React from 'react';
import "./WhatIsGManequine.css"
import { FaCircle } from 'react-icons/fa';
import photoEditing from "../../assets/images/services/ghost-mannequin/WhatAre_Ghost_mannequin_services_banner.jpg"

const WhatIsGManequine = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left  mb-4'>What is ghost mannequin?</h2>
            <p className='text-xl text-gray-700 mb-3 text-left'>The "ghost mannequin" effect, also known as the "invisible mannequin," or "3D mannequin," is a powerful post-production technique for apparel product photography that solves product showcasing problems. The ghost mannequin effect allows you to take multiple photos of a product on a model or mannequin, and then combine the photos to remove the model or mannequin in post-production. The result is a realistic picture that keeps the focus firmly on your product.</p>
            <div className='grid lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <h2 className='text-xl text-gray-900 my-6 text-left'>When ghost mannequin is a great choice:</h2>
                    <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>If you want to avoid the expense and challenges of hiring live models</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>If you want to add life, texture and volume to apparel and accessories products</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>If you want to display both front and back or a 360-degree view of your products</p>
                    </div>
                    <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                        <FaCircle className='mt-[3px] circle' />
                        <p className='text-left text-xl'>To showcase the inside of the garments, brand logo and labels on the inside tags</p>
                    </div>

                </div>
                <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                    <img src={photoEditing} alt="Studio MetroDesk PhotoEditing" />
                </div>
            </div>
            <div>
                <p className='text-xl text-gray-700 mb-3 text-left mt-10'>Apparel and accessory photography without dimension make the products look flat. But online shoppers love to see how the product is meant to be worn in real life. Savvy fashion retailers keep it simple. They use mannequins to showcase products and add natural-looking dimensions. Finally, they edit the dummy out of their photos.</p>
            </div>
        </div>
    );
};

export default WhatIsGManequine;