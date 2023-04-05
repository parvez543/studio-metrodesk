import React from 'react';
import "./Pricing.css"
import PricingBanner from '../../Component/PricingBanner/PricingBanner';
import PriceCalculator from '../../Component/PriceCalculator/PriceCalculator';
import Payment from '../../Component/Payment/Payment';
import HirePhotoEditor from '../../Component/HirePhotoEditor/HirePhotoEditor';
import ClientSection from '../../Component/ClientSection/ClientSection';
import LetsTalk from '../../Component/LetsTalk/LetsTalk';

const Pricing = () => {
    return (
        <div>
            <PricingBanner/>
            <PriceCalculator/>
            <Payment/>
            <HirePhotoEditor/>
            <ClientSection/>
            <LetsTalk/>
        </div>
    );
};

export default Pricing;