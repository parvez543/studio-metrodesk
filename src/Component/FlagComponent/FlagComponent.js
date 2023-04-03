import React from 'react';
import flags from "../../assets/images/clients-flag.png"
import "./FlagComponent.css"



const FlagComponent = () => {



    return (
        <div className='heroSection'>
            <div className='container px-10 lg:px-56 mx-auto py-14'>
                <h2 className='text-3xl my-4 font-semibold text-gray-700 text-start'>Serving Globally</h2>
               <div className='flex items-center gap-4 justify-center'>
                   <div className=''>
                        <img src={flags} alt="Clients Flag"/>
                   </div>
                   <div>
                        <p className='text-xs lg:text-lg'>And More</p>
                   </div>
               </div>
            </div>
        </div>
    );
};

export default FlagComponent;