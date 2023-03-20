import React from 'react';
import UKFlag from "../../assets/Flages/united-kingdom.png"
import USAFlag from "../../assets/Flages/USA.png"
import CanadaFlag from "../../assets/Flages/canada.png"
import GermanFlag from "../../assets/Flages/germany.png"
import AustraliaFlag from "../../assets/Flages/australia.png"
import SwedenFlag from "../../assets/Flages/sweden.png"
import "./FlagComponent.css"



const FlagComponent = () => {



    return (
        <div className='heroSection'>
            <div className='container mx-auto lg:py-14'>
                <h2 className='text-3xl font-semibold text-gray-700 text-start px-10 lg:px-56'>Serving Globally</h2>
                <div className='grid grid-cols-7 gap-4 lg:px-56 justify-center justify-items-center px-10 items-center mt-6'>
                    <img src={UKFlag} alt="Flag of United Kingdom" />
                    <img src={USAFlag} alt="Flag of USA" />
                    <img src={CanadaFlag} alt="Flag of Canada" />
                    <img src={GermanFlag} alt="Flag of Gremany" />
                    <img src={AustraliaFlag} alt="Flag of Australia" />
                    <img src={SwedenFlag} alt="Flag of Sweden" />
                    <div className=''>
                        <p className='text-xs lg:text-xl lg:-ml-11'>And More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlagComponent;