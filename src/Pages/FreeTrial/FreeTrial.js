import React from 'react';
import "./FreeTrial.css"
import FreeTrialComponent from '../../Component/FreeTrialComponent/FreeTrialComponent';
import ChooseService from '../../Component/ChooseService/ChooseService';
import Testimonial from '../../Component/Testimonail/Testimonial';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';

const FreeTrial = () => {
    return (
        <div>
            <FreeTrialComponent/>
            <ChooseService/>
            <Testimonial/>
            <LetsTalk/>
        </div>
    );
};

export default FreeTrial;