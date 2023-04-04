import React from 'react';
import "./Pricing.css"
import PricingBanner from '../../Component/PricingBanner/PricingBanner';
import PriceCalculator from '../../Component/PriceCalculator/PriceCalculator';

const Pricing = () => {
    return (
        <div>
            <PricingBanner/>
            <PriceCalculator/>
        </div>
    );
};

export default Pricing;