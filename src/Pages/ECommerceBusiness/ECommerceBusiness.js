import React from 'react';
import BusinessNeedMost from '../../Component/BusinessNeedMost/BusinessNeedMost';
import ECommerceBusinessComponent from '../../Component/ECommerceBusinessComponent/ECommerceBusinessComponent';
import ECommerceServiceInclude from '../../Component/ECommerceServiceInclude/ECommerceServiceInclude';
import FAQ from '../../Component/FAQ/FAQ';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import IndustryExperts from '../../Component/IndustryExperts/IndustryExperts';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import PerfectImageEditing from '../../Component/PerfectImageEditing/PerfectImageEditing';
import Testimonial from '../../Component/Testimonail/Testimonial';
import WhyUs from '../../Component/WhyUs/WhyUs';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';

const ECommerceBusiness = () => {
    return (
        <div>
            <ECommerceBusinessComponent/>
            <FlagComponent/>
            <IndustryExperts/>
            <WorkingProcess/>
            <PerfectImageEditing/>
            <BusinessNeedMost/>
            <ECommerceServiceInclude/>
            <WhyUs/>
            <Testimonial/>
            <FAQ/>
            <LetsTalk/>
        </div>
    );
};

export default ECommerceBusiness;