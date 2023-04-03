import React from 'react';
import "./VectorConversion.css"
import VectorConversionBanner from '../../Component/VectorConversionBanner/VectorConversionBanner';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import WhyUs from '../../Component/WhyUs/WhyUs';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';
import WhoWeHelp from '../../Component/WhoWeHelp/WhoWeHelp';
import Testimonial from '../../Component/Testimonail/Testimonial';
import FAQ from '../../Component/FAQ/FAQ';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import GettingCleanVector from '../../Component/GettingCleanVector/GettingCleanVector';
import VectorProfessionalExpert from '../../Component/VectorProfessionalExpert/VectorProfessionalExpert';
import VectorPortfolio from '../../Component/VectorPortfolio/VectorPortfolio';
import WhatAreVectorConversion from '../../Component/WhatAreVectorConversion/WhatAreVectorConversion';
import VectorConversionCost from '../../Component/VectorConversionCost/VectorConversionCost';

const VectorConversion = () => {
    return (
        <div>
            <VectorConversionBanner/>
            <FlagComponent/>
            <GettingCleanVector/>
            <VectorProfessionalExpert/>
            <VectorPortfolio/>
            <WhatAreVectorConversion/>
            <VectorConversionCost/>
            <WhyUs/>
            <WorkingProcess/>
            <WhoWeHelp/>
            <Testimonial/>
            <FAQ/>
            <LetsTalk/>
        </div>
    );
};

export default VectorConversion;