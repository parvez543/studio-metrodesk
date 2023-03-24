import React from 'react';
import AboutUsComponent from '../../Component/AboutUsComponent/AboutUsComponent';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import LifeAtStudioMetroDesk from '../../Component/LifeAtStudioMetroDesk/LifeAtStudioMetroDesk';
import OurNumbers from '../../Component/OurNumbers/OurNumbers';
import OurStory from '../../Component/OurStory/OurStory';
import OurValues from '../../Component/OurValues/OurValues';

const AboutUs = () => {
    return (
        <div>
            <AboutUsComponent/>
            <OurStory/>
            <OurValues/>
            <OurNumbers/>
            <LifeAtStudioMetroDesk/>
            <LetsTalk/>
        </div>
    );
};

export default AboutUs;