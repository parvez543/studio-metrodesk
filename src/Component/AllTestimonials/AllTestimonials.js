import React, { useState } from 'react';
import "./AllTestimonials.css"
import testimonials from '../../data/testimonialsdata';
import AllTestimonialCard from './AllTestimonialCard';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const AllTestimonials = () => {

    const [noOfElement, setnoOfElement] = useState(10)

    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement)
    }
    const showLess = () => {
        setnoOfElement(24- noOfElement)
    }

    const slice = testimonials.slice(0, noOfElement)

    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            <div>
                {
                    slice?.map(testimonial => <AllTestimonialCard key={testimonial.id} testimonial={testimonial}/>)
                }
            </div>
            <div className='flex justify-center mt-10'>
              {
                noOfElement > 24 ?   <button className='text-blue-500  flex justify-center items-center hover:text-blue-800' onClick={() => showLess()}>Show Less <FaAngleUp/></button> :   <button className='text-blue-500  flex justify-center items-center hover:text-blue-800' onClick={() => loadMore()}>Load More <FaAngleDown/></button>
              }
            </div>
        </div>
    );
};

export default AllTestimonials;