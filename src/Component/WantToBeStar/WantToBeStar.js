import React from 'react';
import "./WantToBeStar.css"
import questionmark from "../../assets/images/star-what.png"

const WantToBeStar = () => {
    return (
        <div className='starContainer'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
                <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
                    <div>
                        <h2 className='font-semibold text-3xl md:text-5xl text-[#7A80BD] text-left'>Want to be a star !</h2>
                        <p className='lg:w-[450px] text-lg text-gray-600 mt-6 mb-8 text-left'>Motivated? Intelligent? Brimming with positive energy? Studio Metrodesk may just be the place for you.</p>
                        <div className='flex justify-start'>
                            <button className='seeBtn'>See Open Positions To Join</button>
                        </div>
                    </div>
                    <div>
                        <img className='questionMark mb-5 lg:mb-0' src={questionmark} alt="Studio MetroDesk Question Mark" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WantToBeStar;