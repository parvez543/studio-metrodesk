import React from 'react';
import FAQ from '../../Component/FAQ/FAQ';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import HomeComponent from '../../Component/HomeComponent/HomeComponent';
import ImageProcessComponent from '../../Component/ImageProcessComponent/ImageProcessComponent';
import IndustryExperts from '../../Component/IndustryExperts/IndustryExperts';
import OurPartners from '../../Component/OurPartners/OurPartners';
import ServiceComponent from '../../Component/ServiceComponent/ServiceComponent';
import Testimonial from '../../Component/Testimonail/Testimonial';
import UsingOurWorks from '../../Component/UsingOurWorks/UsingOurWorks';
import WhoWeHelp from '../../Component/WhoWeHelp/WhoWeHelp';
import WhyUs from '../../Component/WhyUs/WhyUs';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';

const HomePage = () => {
    return (
        <div>
            <HomeComponent/>
            <FlagComponent/>
            <ServiceComponent/>
            <WorkingProcess/>
            <ImageProcessComponent/>
            <WhyUs/>
            <UsingOurWorks/>
            <Testimonial/>
            <WhoWeHelp/>
            <IndustryExperts/>
            <OurPartners/>
            <FAQ/>
            
        </div>
    );
};

export default HomePage;