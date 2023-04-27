import React from 'react';
import FAQ from '../../Component/FAQ/FAQ';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import HomeComponent from '../../Component/HomeComponent/HomeComponent';
import HomeComponentCopy from '../../Component/HomeComponent/HomeComponentCopy';
import ImageProcessComponent from '../../Component/ImageProcessComponent/ImageProcessComponent';
import IndustryExperts from '../../Component/IndustryExperts/IndustryExperts';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import OurPartners from '../../Component/OurPartners/OurPartners';
import ServiceComponent from '../../Component/ServiceComponent/ServiceComponent';
import ServiceComponentCopy from '../../Component/ServiceComponent/ServiceComponentCopy';
import Testimonial from '../../Component/Testimonail/Testimonial';
import UsingOurWorks from '../../Component/UsingOurWorks/UsingOurWorks';
import WhoWeHelp from '../../Component/WhoWeHelp/WhoWeHelp';
import WhyUs from '../../Component/WhyUs/WhyUs';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';
import HomeComponentTwo from '../../Component/HomeComponent/HomeComponentTwo';
import HomeComponentThree from '../../Component/HomeComponent/HomeComponentThree';
import HomeComponentFour from '../../Component/HomeComponent/HomeComponentFour';

const HomePage = () => {
    return (
        <div>
            {/* <HomeComponent/> */}
            {/* <HomeComponentCopy/> */}
            {/* <HomeComponentTwo/> */}
            {/* <HomeComponentThree/> */}
            <HomeComponentFour/>
            <FlagComponent/>
            <ServiceComponent/>
            <ServiceComponentCopy/>
            <WorkingProcess/>
            <ImageProcessComponent/>
            <WhyUs/>
            <UsingOurWorks/>
            <Testimonial/>
            <WhoWeHelp/>
            <IndustryExperts/>
            <OurPartners/>
            <FAQ/>
            <LetsTalk/>
            
        </div>
    );
};

export default HomePage;