import React from 'react';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import HomeComponent from '../../Component/HomeComponent/HomeComponent';
import ServiceComponent from '../../Component/ServiceComponent/ServiceComponent';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';

const HomePage = () => {
    return (
        <div>
            <HomeComponent/>
            <FlagComponent/>
            <ServiceComponent/>
            <WorkingProcess/>
        </div>
    );
};

export default HomePage;