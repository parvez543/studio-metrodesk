import React from 'react';
import FAQ from '../../Component/FAQ/FAQ';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import IndustryExperts from '../../Component/IndustryExperts/IndustryExperts';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import PerfectImageEditing from '../../Component/PerfectImageEditing/PerfectImageEditing';
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
            <WhyUs/>
            <Testimonial/>
            <FAQ/>
            <LetsTalk/>

        </div>
    );
};

export default Photographers;