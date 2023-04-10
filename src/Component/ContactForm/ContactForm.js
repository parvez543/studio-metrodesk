import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import "./ContactForm.css"
import contact from "../../assets/images/contact-poster.png"
import industry from "../../data/industry"
import imageEdit from "../../data/imagesEdit"
import imageDuration from '../../data/editDuration';


const ContactForm = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <h2 className='mb-3 text-2xl sm:text-3xl md:text-5xl font-semibold text-left text-[#7A80BD]'>Contact Your Amazing Team </h2>
            <p className='text-2xl text-left mt-2 text-gray-700'>You can contact our team for anything and everything :-)</p>
            <div className='flex flex-col-reverse lg:flex-row gap-12'>
                <div className='mt-12'>
                    <form className='text-left'>
                        <div className='flex flex-col lg:flex-row gap-6 lg:gap-20'>
                            <div className='flex flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>Full Name *</label>
                                <input type="text" placeholder="Your First Name" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                            </div>
                            <div className='flex flex-col '>
                                <label className='text-gray-500 mb-2 text-xl'>Industry *</label>
                                <div>
                                    <select className='selectOption lg:w-[250px] border-l border-indigo-400'>
                                        {
                                            industry?.map(i => <>
                                                <option>{i.name}</option>
                                            </>)
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 mt-6'>
                            <div className='flex flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>Email *</label>
                                <input type="email" placeholder="Your Email" className="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>Phone Number *</label>
                                <input type="tel" placeholder="Your Phone Number" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 mt-6'>
                            <div className='flex mt-6 mb-2 flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>Images To Edit Per Year *</label>
                                <select className='selectOption lg:w-[240px] border-l border-indigo-400'>
                                    {
                                        imageEdit?.map(i => <>
                                            <option>{i.name}</option>
                                        </>)
                                    }
                                </select>
                            </div>
                            <div className='flex mt-6 mb-2 flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>How Often Will You Edit *</label>
                                <select className='selectOption lg:w-[240px] border-l border-indigo-400'>
                                    {
                                        imageDuration?.map(i => <>
                                            <option>{i.name}</option>
                                        </>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='flex mt-6 flex-col'>
                            <label className='text-gray-500 mb-2 text-xl'>Your Message *</label>
                            <textarea className='w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2] messageArea' placeholder='Write Your Message Here' col="30" row="100" required></textarea>
                        </div>


                        <div className='mt-10'>
                            <button type='submit' className='flex items-center btn submit-btn text-white'>SUBMIT <FaArrowRight /></button>
                        </div>
                    </form>
                </div>
                <div>
                    <img className='lg:w-[500px]' src={contact} />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;