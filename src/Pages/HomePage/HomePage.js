import React from 'react';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import HomeComponent from '../../Component/HomeComponent/HomeComponent';
import ImageProcessComponent from '../../Component/ImageProcessComponent/ImageProcessComponent';
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
            
        </div>
    );
};

export default HomePage;