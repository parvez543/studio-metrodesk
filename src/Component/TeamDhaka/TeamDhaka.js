import React from 'react';
import "./TeamDhaka.css"
import dhaka from "../../data/teamDhaka"

const TeamDhaka = () => {
    return (
        <div className='bg-[#F5F6FF]'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-28 py-20'>
                <h2 className='font-semibold text-left text-3xl md:text-5xl text-[#7A80BD]'>Team Dhaka</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:px-20 2xl:px-56 justify-items-center'>
                {
                    dhaka?.map(d => <>
                        <div className=''>
                        <img src={d.img} alt="Studio MetroDesk Team Dhaka"/>
                        <h2 className='text-left mt-2 font-semibold text-xl'>{d.name}</h2>
                        <p className='text-left'>{d.designation}</p>

                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default TeamDhaka;