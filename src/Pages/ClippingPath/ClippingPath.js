import React from 'react';
import ClippingPathComponent from '../../Component/ClippingPathComponent/ClippingPathComponent';
import FAQ from '../../Component/FAQ/FAQ';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import GetBackToClippingPath from '../../Component/GetBackToClippingPath/GetBackToClippingPath';
import HowMuchCost from '../../Component/HowMuchCost/HowMuchCost';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import OurExperts from '../../Component/OurExperts/OurExperts';
import PerfectImageEditing from '../../Component/PerfectImageEditing/PerfectImageEditing';
import Testimonial from '../../Component/Testimonail/Testimonial';
import WhatAreClippingPathService from '../../Component/WhatAreClippingPathService/WhatAreClippingPathService';
import WhoWeHelp from '../../Component/WhoWeHelp/WhoWeHelp';
import WhyUs from '../../Component/WhyUs/WhyUs';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';
import "./ClippingPath.css"

const ClippingPath = () => {
    return (
        <div>
            <ClippingPathComponent/>
            <FlagComponent/>
            <GetBackToClippingPath/>
            <OurExperts/>
            <PerfectImageEditing/>
            <WhatAreClippingPathService/>
            <HowMuchCost/>
            <WhyUs/>
            <WorkingProcess/>
            <WhoWeHelp/>
            <Testimonial/>
            <FAQ/>
            <LetsTalk/>
        </div>
    );
};

export default ClippingPath;