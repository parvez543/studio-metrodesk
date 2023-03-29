import React from 'react';
import FAQ from '../../Component/FAQ/FAQ';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import GetBackToPhotgraphy from '../../Component/GetBackToPhotgraphy/GetBackToPhotgraphy';
import IndustryExperts from '../../Component/IndustryExperts/IndustryExperts';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import PerfectImageEditing from '../../Component/PerfectImageEditing/PerfectImageEditing';
import PhotoEditingServiceInclude from '../../Component/PhotoEditingServiceInclude/PhotoEditingServiceInclude';
import PhotographersComponent from '../../Component/PhotographersComponent/PhotographersComponent';
import Testimonial from '../../Component/Testimonail/Testimonial';
import WhyUs from '../../Component/WhyUs/WhyUs';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';
import "./Photographers.css"

const Photographers = () => {
    return (
        <div>
            <PhotographersComponent/>
            <FlagComponent/>
            <IndustryExperts/>
            <WorkingProcess/>
            <PerfectImageEditing/>
            <GetBackToPhotgraphy/>
            <PhotoEditingServiceInclude/>
            <WhyUs/>
            <Testimonial/>
            <FAQ/>
            <LetsTalk/>

        </div>
    );
};

export default Photographers;