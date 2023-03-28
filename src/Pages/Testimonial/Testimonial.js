import React from 'react';
import AboutTestimonial from '../../Component/AboutTestimonial/AboutTestimonial';
import AllTestimonials from '../../Component/AllTestimonials/AllTestimonials';
import "./Testimonial.css"

const Testimonial = () => {
    return (
        <div>
            <AboutTestimonial/>
            <AllTestimonials/>
        </div>
    );
};

export default Testimonial;