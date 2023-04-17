import React, { useState, useMemo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Select from 'react-select'
import "./LeaveFeedBack.css"

import countryList from 'react-select-country-list'
import { RatingStar } from "rating-star";
import countries from "../../data/countryData"

const LeaveFeedBack = () => {

    const [rating, setRating] = React.useState(30);

    const onRatingChange = (score) => {
        setRating(score);
    };

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }

    return (
        <div className='bg-gray-50'>
            <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
                <h2 className='mb-3 text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD]'>Leave Your Feedback</h2>
                <p>Rate our services and give your feedback</p>
                <div className='flex justify-center'>
                    <div className='mt-12'>
                        <form className='text-left'>
                            <div className='grid lg:grid-cols-2 gap-6 lg:gap-20'>
                                <div className='flex flex-col'>
                                    <label className='text-gray-500 mb-2 text-xl'>First Name *</label>
                                    <input type="text" placeholder="Your First Name" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-gray-500 mb-2 text-xl'>Last Name *</label>
                                    <input type="text" placeholder="Your Last Name" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                                </div>
                            </div>
                            <div className='grid lg:grid-cols-2 gap-6 lg:gap-20 mt-6'>
                                <div className='flex flex-col'>
                                    <label className='text-gray-500 mb-2 text-xl'>Email *</label>
                                    <input type="email" placeholder="Your Email" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-gray-500 mb-2 text-xl'>Profession *</label>
                                    <input type="text" placeholder="Your Profession" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                                </div>
                            </div>
                            <div className='grid lg:grid-cols-2 gap-6 lg:gap-20 mt-6'>

                               
                                <div className='flex flex-col'>
                                    <label className='text-gray-500 mb-2 text-xl'>Country *</label>
                                    {/* <input type="text" placeholder="Your Profession" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required /> */}
                                    <select className="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]">
                                    {
                                        countries?.map(country => <>
                                                <option>{country.name}</option>
                                        </>)
                                    }
                                    </select>

                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-gray-500 mb-2 text-xl'>Rating *</label>
                                    <div className="">
                                        <RatingStar
                                            clickable
                                            maxScore={100}
                                            id="123"
                                            rating={rating}
                                            onRatingChange={onRatingChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6 mb-6'>
                                <label className='text-gray-500 mb-2 text-xl'>Services you used *</label>
                                <div className='mt-6 grid lg:grid-cols-2 text-xl text-gray-600'>
                                    <div>
                                        <div>
                                            <input type="checkbox" className='mr-2' />
                                            <label>Clipping Path</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className='mr-2' />
                                            <label>Ghost Mannequin</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className='mr-2' />
                                            <label>Vector Conversion</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <input type="checkbox" className='mr-2' />
                                            <label>Multi-Clipping Path</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className='mr-2' />
                                            <label>Photo Retouching</label>
                                        </div>
                                        <div>
                                            <input type="checkbox" className='mr-2' />
                                            <label>Embroidery Digitizing</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='gap-20 mt-6'>
                                <div className='flex flex-col'>
                                    <label className='text-gray-500 mb-2 text-xl'>Your Message *</label>
                                    <textarea className='w-full py-3 px-3  border-l border-indigo-400 textArea' cols="30" row="10" placeholder='Write Your Message Here' col="60" required></textarea>
                                </div>

                            </div>
                            <div className='mt-10'>
                                <button type='submit' className='flex items-center btn submit-btn text-white'>SUBMIT <FaArrowRight /></button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LeaveFeedBack;