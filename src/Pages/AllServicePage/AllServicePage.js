import React from 'react';
import "./AllServicePage.css"
import AllServices from '../../Component/AllServices/AllServices';
import ClippingPathAndAll from '../../Component/ClippingPathAndAll/ClippingPathAndAll';
import MultiClippingAndAll from '../../Component/MultiClippingAndAll/MultiClippingAndAll';
import WorkingProcess from '../../Component/WorkingProcess/WorkingProcess';
import WhyUs from '../../Component/WhyUs/WhyUs';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';

const AllServicePage = () => {
    return (
        <div>
            <AllServices/>
            <ClippingPathAndAll/>
            <MultiClippingAndAll/>
            <WorkingProcess/>
            <WhyUs/>
            <LetsTalk/>
        </div>
    );
};

export default AllServicePage;