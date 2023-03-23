import React from 'react';
import questions from "../../data/FAQ"
import FAQCard from '../FAQCard/FAQCard';

const FAQ = () => {

   

    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7A80BD]'>Frequently Asked Questions?</h2>
            <p className='text-xl text-gray-700 text-left'>Let us look after the edits, so you can get back to the work that needs you.</p>
            <div className='text-left mt-12'>
                {
                    questions?.map(question => <FAQCard question={question} key={question.id}/>)
                }
            </div>
        </div>
    );
};

export default FAQ;