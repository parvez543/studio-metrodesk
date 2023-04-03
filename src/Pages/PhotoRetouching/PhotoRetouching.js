import React from 'react';
import PhotoRetouchingComponent from '../../Component/PhotoRetouchingComponent/PhotoRetouchingComponent';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import WhyUs from '../../Component/WhyUs/WhyUs';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';
import WhoWeHelp from '../../Component/WhoWeHelp/WhoWeHelp';
import Testimonial from '../../Component/Testimonail/Testimonial';
import FAQ from '../../Component/FAQ/FAQ';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import GetBackToPhotoRetouching from '../../Component/GetBackToPhotoRetouching/GetBackToPhotoRetouching';
import ProfessionalRetoucher from '../../Component/ProfessionalRetoucher/ProfessionalRetoucher';
import PhotoRetouchingPortfolio from '../../Component/PhotoRetouchingPortfolio/PhotoRetouchingPortfolio';
import WhatIsPhotoRetouching from '../../Component/WhatIsPhotoRetouching/WhatIsPhotoRetouching';
import PhotoRetouchingCost from '../../Component/PhotoRetouchingCost/PhotoRetouchingCost';


const PhotoRetouching = () => {
    return (
        <div>
            <PhotoRetouchingComponent/>
            <FlagComponent/>
            <GetBackToPhotoRetouching/>
            <ProfessionalRetoucher/>
            <PhotoRetouchingPortfolio/>
            <WhatIsPhotoRetouching/>
            <PhotoRetouchingCost/>
            <WhyUs/>
            <WorkingProcess/>
            <WhoWeHelp/>
            <Testimonial/>
            <FAQ/>
            <LetsTalk/>
        </div>
    );
};

export default PhotoRetouching;