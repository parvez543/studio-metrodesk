import React from 'react';
import "./ContactComponent.css"

const ContactComponent = () => {
    return (
        <div className='about-page'>
            <div className='container mx-auto'>
                <h2 className='text-4xl md:text-6xl font-bold color-text pt-12 py-2'>Contact Us</h2>
                <p className='lg:w-[550px] block mx-auto text-xl pt-2 pb-12'>Our kind, happy and humble customer support team would love to answer your questions. Give us a call or send an email to speak with an actual human (zero waiting time).</p>
            </div>
        </div>
    );
};

export default ContactComponent;