import React from 'react';
import "./MeetTheTeam.css"
import meetTheTeam from "../../assets/images/meet-the-team-poster.png"
import { FaArrowDown } from 'react-icons/fa';

const MeetTheTeam = () => {
    return (
        <div className='about-page'>
            <div className='container mx-auto px-10 lg:px-56'>
                <div className='flex flex-col lg:flex-row items-center'>
                    <div className='flex flex-col justify-start'>
                        <h2 className='text-4xl md:text-6xl font-bold color-text pt-12 py-2 text-left'>Meet Your Awesome Team</h2>
                        <p className='block mx-auto text-xl pt-2 lg:px-0 pb-12 text-left'>Meet the people behind Studio Metrodesk. See who's editing your photos, answering your calls, enhancing your experience and constantly making sure pixel-perfect outputs.</p>
                        <div>
                            <a href="#" className='flex items-center gap-4 text-lg text-purple-500 py-2 hover:text-blue-800 rounded'>Meet The Star <FaArrowDown/></a>
                        </div>
                    </div>
                    <div className='w-full lg:[w-1000px] mt-12'>
                        <img src={meetTheTeam} alt="Studio MetroDesk Astronaut"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetTheTeam;