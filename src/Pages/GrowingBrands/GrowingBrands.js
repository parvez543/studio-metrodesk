import React from 'react';
import BrandConsistency from '../../Component/BrandConsistency/BrandConsistency';
import EditingServiceForBrands from '../../Component/EditingServiceForBrands/EditingServiceForBrands';
import FAQ from '../../Component/FAQ/FAQ';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import IndustryExperts from '../../Component/IndustryExperts/IndustryExperts';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import PerfectImageEditing from '../../Component/PerfectImageEditing/PerfectImageEditing';
import PhotoEditingInclude from '../../Component/PhotoEditingInclude/PhotoEditingInclude';
import Testimonial from '../../Component/Testimonail/Testimonial';
import WhyUs from '../../Component/WhyUs/WhyUs';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';

const GrowingBrands = () => {
    return (
        <div>
            <EditingServiceForBrands/>
            <FlagComponent/>
            <IndustryExperts/>
            <WorkingProcess/>
            <PerfectImageEditing/>
            <BrandConsistency/>
            <PhotoEditingInclude/>
            <WhyUs/>
            <Testimonial/>
            <FAQ/>
            <LetsTalk/>
        </div>
    );
};

export default GrowingBrands;