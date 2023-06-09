import React from 'react';
import "./WhoWeHelp.css"
import helps from "../../data/whowehelp"

const WhoWeHelp = () => {
    console.log(helps)
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            {/* Text Container */}
            <div>
                <h2 className='secHead text-left text-3xl md:text-4xl lg:text-5xl font-semibold mb-[24px]'>Who We Help</h2>
                <p className='text-left text-xl text-gray-500 font-light mb-[24px]'>Our services are perfect for those who want to outsource their image editing works.</p>
            </div>
            <div className='grid  md:grid-cols-2 gap-12 mt-12'>
                {
                    helps?.map(help => <>
                        <div className='flex flex-col md:flex-row  gap-4'>
                            <div>
                                <img className='w-full md:w-[1000px] lg:w-[900px]' src={help.img} alt="Studio MetroDesk Images"/>
                            </div>
                            <div>
                                <h1 className='text-2xl md:text-lg lg:text-2xl text-left font-medium'>{help.title}</h1>
                                <p className='text-left sm:text-lg md:text-sm lg:text-lg text-gray-500 font-light mt-4 pb-8'>{help.description}</p>
                                <p className='text-left text-base lg:text-xl text-blue-500 hover:text-blue-800'>{help.btn}</p>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default WhoWeHelp;