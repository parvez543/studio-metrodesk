import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp, FaMinus, FaPlus } from 'react-icons/fa';
import "./AllTestimonials.css"

const AllTestimonialCard = ({testimonial}) => {
    console.log(testimonial);
    const {name, img, designation, description, rating, service} = testimonial

    const [items, setItems] = useState(false)

   


    // const {img}
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center border-t-2 border-b-2 border-gray-200 p-6'>
            <div className='flex gap-6 rev-item flex-col md:flex-row py-6 px-0 md:px-4 md:py-8 '>
                <div>
                    <img src={img} alt="Studio MetroDesk Client"/>
                </div>
                   <div className='text-left'>
                        <img className='w-[100px] mb-2' src={rating} alt="Studio MetroDesk Service Rating"/>
                        <p className='text-xl'>{name}</p>
                        <p className='text-gray-400'>{designation}</p>
                   </div>
            </div>
            <div>
                <div className='flex items-center gap-6'>
                {
                    items ?  <p className='lg:w-[450px] text-left text-lg'>{description}</p> : <p className='text-lg lg:w-[450px] text-left titleTestimonial'>{description}</p> 
                }
                    <p onClick={() => setItems(!items)}>{items ? <FaMinus className='text-3xl cursor-pointer text-gray-400'/> : <FaPlus className='text-3xl cursor-pointer text-gray-400'/>}</p>
                </div>
                <div className='text-left'>
                    <p className='service'>{service}</p>
                </div>
            </div>
            
        </div>
    );
};

export default AllTestimonialCard;