import React from 'react';
import './LifeAtStudioMetroDesk.css'
import img1 from "../../assets/images/life-inmetrodesk-sq-l.jpg"
import img2 from "../../assets/images/life-inmetrodesk-l.jpg"
import img3 from "../../assets/images/life-inmetrodesk-rect-l.jpg"
import img4 from "../../assets/images/life-inmetrodesk-rect-r.jpg"
import img5 from "../../assets/images/life-inmetrodesk-sq-r.jpg"
import { FaAngleRight } from 'react-icons/fa';

const LifeAtStudioMetroDesk = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left'>Life at Studio Metrodesk</h2>
            <p className='text-left text-lg'>We didn't get here by accident. We put in the time to work on our craft with a focus of making progress every day.</p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
                <div>
                    <img src={img1} alt="Studio Metrodesk Lif In Studio MetroDesk" />
                    <img src={img3} className="mt-8" alt="Studio Metrodesk Lif In Studio MetroDesk" />
                </div>
                <div>
                    <img src={img2} alt="Studio Metrodesk Lif In Studio MetroDesk" />
                </div>
                <div>
                    <img src={img4} alt="Studio Metrodesk Lif In Studio MetroDesk" />
                    <img src={img5} className="mt-8" alt="Studio Metrodesk Lif In Studio MetroDesk" />
                </div>
            </div>
            <div className='block mx-auto mt-6'>
                <p className='text-center flex items-center justify-center text-lg cursor-pointer text-blue-500  hover:text-blue-800'>Meet The Team <FaAngleRight /></p>
            </div>
        </div>
    );
};

export default LifeAtStudioMetroDesk;