import React from 'react';
import AboutTestimonial from '../../Component/AboutTestimonial/AboutTestimonial';
import AllTestimonials from '../../Component/AllTestimonials/AllTestimonials';
import LeaveFeedBack from '../../Component/LeaveFeedBack/LeaveFeedBack';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import "./Testimonial.css"

const Testimonial = () => {
    return (
        <div>
            <AboutTestimonial/>
            <AllTestimonials/>
            <LeaveFeedBack/>
            <LetsTalk/>
        </div>
    );
};

export default Testimonial;