import React from 'react';
import FlagComponent from '../../Component/FlagComponent/FlagComponent';
import HomeComponent from '../../Component/HomeComponent/HomeComponent';
import ServiceComponent from '../../Component/ServiceComponent/ServiceComponent';

const HomePage = () => {
    return (
        <div>
            <HomeComponent/>
            <FlagComponent/>
            <ServiceComponent/>
        </div>
    );
};

export default HomePage;