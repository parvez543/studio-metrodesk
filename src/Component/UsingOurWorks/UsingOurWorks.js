import React from 'react';
import "./UsingOurWorks.css"
import logos from "../../data/logos"

const UsingOurWorks = () => {
    return (
        <div className='ourWorkContainer'>
            <div className='container mx-auto py-20 px-10 lg:px-56'>
                <div className='grid grid-cols-3 lg:grid-cols-6 gap-5 justify-center items-center'>
                    {
                        logos?.map(logo => <>
                            <img className='w-full lg:w-44' src={logo.img} alt="Studio MetroDesk Brand Logo" />
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UsingOurWorks;