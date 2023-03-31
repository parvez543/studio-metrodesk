import React from 'react';
import "./GManequineProfessionals.css"
import ghost from "../../assets/images/services/ghost-mannequin/ghostmannequin_professionals.jpg"

const GManequineProfessionals = () => {
    return (
        <div className='bg-[#fafafa]'>
        <div className='container mx-auto px-10 lg:px-48 py-20'>
            <div className='grid lg:grid-cols-2'>
                <div className='lg:w-[450px] lg:ml-10 flex justify-center items-center mb-6 lg:mb-0'>
                    <img src={ghost} className="" alt="Studio MetroDesk Product Photography" />
                </div>
                <div>
                    <h2 className='mb-5 text-3xl sm:text-4xl md:text-5xl font-medium text-[#7A80BD] text-left'>Let our professionals do it for you</h2>
                    <p className='text-xl text-left text-gray-700 mb-3'>Undoubtedly spending all day editing out mannequins sucks the passion out of your work, so you need to outsource all ghost mannequin projects to a professional team. Now high-volume ghost mannequin editing services are cheaper, faster and effortless.</p>
                    <p className='text-xl text-left text-gray-700'>Our Photoshop experts edit each ghost mannequin project by hand to deliver natural-looking apparel and accessories.</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default GManequineProfessionals;