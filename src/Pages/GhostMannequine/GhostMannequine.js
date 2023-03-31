import React from 'react';
import "./GhostMannequine.css"
import GhostMannequineBanner from '../../Component/GhostMannequineBanner/GhostMannequineBanner';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import WhyUs from '../../Component/WhyUs/WhyUs';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';
import WhoWeHelp from '../../Component/WhoWeHelp/WhoWeHelp';
import Testimonial from '../../Component/Testimonail/Testimonial';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import GetBackToGManequine from '../../Component/GetBackToGManequine/GetBackToGManequine';
import GManequineProfessionals from '../../Component/GManequineProfessionals/GManequineProfessionals';
import GManequinePortfolio from '../../Component/GManequinePortfolio/GManequinePortfolio';
import WhatIsGManequine from '../../Component/WhatIsGManequine/WhatIsGManequine';
import GManequineEditingProcess from '../../Component/GManequineEditingProcess/GManequineEditingProcess';
import GManequineSCost from '../../Component/GManequineSCost/GManequineSCost';

const GhostMannequine = () => {
    return (
        <div>
            <GhostMannequineBanner/>
            <FlagComponent/>
            <GetBackToGManequine/>
            <GManequineProfessionals/>
            <GManequinePortfolio/>
            <WhatIsGManequine/>
            <GManequineEditingProcess/>
            <GManequineSCost/>
            <WhyUs/>
            <WorkingProcess/>
            <WhoWeHelp/>
            <Testimonial/>
            <LetsTalk/>
        </div>
    );
};

export default GhostMannequine;