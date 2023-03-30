import React from 'react';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import ProcessComponent from '../../Component/ProcessComponent/ProcessComponent';
import ServiceComponent from '../../Component/ServiceComponent/ServiceComponent';
import ServiceComponentCopy from '../../Component/ServiceComponent/ServiceComponentCopy';
import Testimonial from '../../Component/Testimonail/Testimonial';
import WhoWeHelp from '../../Component/WhoWeHelp/WhoWeHelp';
import WorkingProcessStep from '../../Component/WorkingProcessStep/WorkingProcessStep';

const Process = () => {
    return (
        <div>
            <ProcessComponent/>
            <WorkingProcessStep/>
            <ServiceComponent/>
            <ServiceComponentCopy/>
            <Testimonial/>
            <WhoWeHelp/>
            <LetsTalk/>
        </div>
    );
};

export default Process;