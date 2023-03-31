import React from 'react';
import MultiClippingPathComponent from '../../Component/MultiClippingPathComponent/MultiClippingPathComponent';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import GetBackToMultiClippingPath from '../../Component/GetBackToMultiClippingPath/GetBackToMultiClippingPath';
import MultiClippingPathExperts from '../../Component/MultiClippingPathExperts/MultiClippingPathExperts';
import MultiClippingPortfolio from '../../Component/MultiClippingPortfolio/MultiClippingPortfolio';
import WhatAreMClipping from '../../Component/WhatAreMClipping/WhatAreMClipping';
import CostOfMClipping from '../../Component/CostOfMClipping/CostOfMClipping';
import WhyUs from '../../Component/WhyUs/WhyUs';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';
import WhoWeHelp from '../../Component/WhoWeHelp/WhoWeHelp';
import Testimonial from '../../Component/Testimonail/Testimonial';
import FAQ from '../../Component/FAQ/FAQ';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';

const MultiClippingPath = () => {
    return (
        <div>
            <MultiClippingPathComponent/>
            <FlagComponent/>
            <GetBackToMultiClippingPath/>
            <MultiClippingPathExperts/>
            <MultiClippingPortfolio/>
            <WhatAreMClipping/>
            <CostOfMClipping/>
            <WhyUs/>
            <WorkingProcess/>
            <WhoWeHelp/>
            <Testimonial/>
            <FAQ/>
            <LetsTalk/>
        </div>
    );
};

export default MultiClippingPath;