import React from 'react';
import EmbroideryBanner from '../../Component/EmbroideryBanner/EmbroideryBanner';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import EmbroideryProfessional from '../../Component/EmbroideryProfessional/EmbroideryProfessional';
import EmbroideryExperts from '../../Component/EmbroideryExperts/EmbroideryExperts';
import EmbroideryPortfolio from '../../Component/EmbroideryPortfolio/EmbroideryPortfolio';
import EmbroideryService from '../../Component/EmbroideryService/EmbroideryService';
import EmbrioderyCost from '../../Component/EmbrioderyCost/EmbrioderyCost';
import WhyUs from '../../Component/WhyUs/WhyUs';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';
import EmbroideryFAQ from '../../Component/EmbroideryFAQ/EmbroideryFAQ';
import Testimonial from '../../Component/Testimonail/Testimonial';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import EmbroideryHelp from '../../Component/EmbroideryHelp/EmbroideryHelp';

const Embroidery = () => {
    return (
        <div>
            <EmbroideryBanner/>
            <FlagComponent/>
            <EmbroideryProfessional/>
            <EmbroideryExperts/>
            <EmbroideryPortfolio/>
            <EmbroideryService/>
            <EmbrioderyCost/>
            <WhyUs/>
            <WorkingProcess/>
            <EmbroideryHelp/>
            <Testimonial/>
            <EmbroideryFAQ/>
            <LetsTalk/>
        </div>
    );
};

export default Embroidery;