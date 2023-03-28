import React from 'react';
import CarrerComponent from '../../Component/CareerComponent/CarrerComponent';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';
import LifeAtStudioMetroDesk from '../../Component/LifeAtStudioMetroDesk/LifeAtStudioMetroDesk';
import WeAreHiring from '../../Component/WeAreHiring/WeAreHiring';
import WhyStudioMetroDesk from '../../Component/WhyStudioMetroDesk/WhyStudioMetroDesk';

const CareerPage = () => {
    return (
        <div>
            <CarrerComponent/>
            <WeAreHiring/>
            <WhyStudioMetroDesk/>
            <LifeAtStudioMetroDesk/>
            <LetsTalk/>
        </div>
    );
};

export default CareerPage;