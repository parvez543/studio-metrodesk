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


const PhotoRetouching = () => {
    return (
        <div>
            <PhotoRetouchingComponent/>
            <FlagComponent/>
            <GetBackToPhotoRetouching/>
            <ProfessionalRetoucher/>
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