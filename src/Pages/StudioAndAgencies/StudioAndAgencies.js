import React from 'react';
import FAQ from '../../Component/FAQ/FAQ';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import GetBackToAgencies from '../../Component/GetBackToAgencies/GetBackToAgencies';
import IndustryExperts from '../../Component/IndustryExperts/IndustryExperts';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import PerfectImageEditing from '../../Component/PerfectImageEditing/PerfectImageEditing';
import StudioAndAgenciesBanner from '../../Component/StudioAndAgenciesBanner/StudioAndAgenciesBanner';
import StudioServiceInclude from '../../Component/StudioServiceInclude/StudioServiceInclude';
import Testimonial from '../../Component/Testimonail/Testimonial';
import WhyUs from '../../Component/WhyUs/WhyUs';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';

const StudioAndAgencies = () => {
    return (
        <div>
            <StudioAndAgenciesBanner/>
            <FlagComponent/>
            <IndustryExperts/>
            <WorkingProcess/>
            <PerfectImageEditing/>
            <GetBackToAgencies/>
            <StudioServiceInclude/>
            <WhyUs/>
            <Testimonial/>
            <FAQ/>
            <LetsTalk/>
        </div>
    );
};

export default StudioAndAgencies;