import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import "./ContactForm.css"
import contact from "../../assets/images/contact-poster.png"

const ContactForm = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <h2 className='mb-3 text-2xl sm:text-3xl md:text-5xl font-semibold text-left text-[#7A80BD]'>Contact Your Amazing Team </h2>
            <p className='text-2xl text-left mt-2 text-gray-700'>You can contact our team for anything and everything :-)</p>
            <div className='flex gap-12'>
                <div className='mt-12'>
                    <form className='text-left'>
                        <div className='flex flex-col lg:flex-row gap-6 lg:gap-20'>
                            <div className='flex flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>First Name *</label>
                                <input type="text" placeholder="Your First Name" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>Last Name *</label>
                                <input type="text" placeholder="Your Last Name" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 mt-6'>
                            <div className='flex flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>Email *</label>
                                <input type="text" placeholder="Your Email" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>Phone Number *</label>
                                <input type="text" placeholder="Your Phone Number" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                            </div>
                        </div>
                        <div className='flex flex-row gap-20 mt-6'>
                            <div className='flex flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>Your Message *</label>
                                <textarea className='w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]' placeholder='Write Your Message Here' cols="60" rows="10" required></textarea>
                            </div>

                        </div>
                        <div className='mt-10'>
                            <button type='submit' className='flex items-center btn submit-btn text-white'>SUBMIT <FaArrowRight /></button>
                        </div>
                    </form>
                </div>
                <div>
                    <img className='w-[500px]' src={contact}/>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;