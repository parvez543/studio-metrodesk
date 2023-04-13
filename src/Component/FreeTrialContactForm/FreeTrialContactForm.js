import React, { useState } from 'react';
import "./FreeTrialContactForm.css"
import countries from "../../data/countryData"
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';

const FreeTrialContactForm = () => {

    const [value, setValue] = useState()

    return (
        <div className='container mx-auto'>
            <p className='text-xl text-left pb-6'>Let us know where to send your edits</p>
            <div className=''>
                {/* Name Input */}
                <div className='grid lg:grid-cols-2 gap-10'>
                    <div className='flex flex-col justify-start items-start'>
                        <label className='text-gray-500 mb-2 text-xl'>What's your first name? *</label>
                        <input type="text" placeholder="Your First Name" name="name" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <label className='text-gray-500 mb-2 text-xl'>What's your last name? *</label>
                        <input type="text" placeholder="Your Last Name" name="name" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                    </div>
                </div>
                {/* Email And Phone Number Input */}
                <div className='grid lg:grid-cols-2 gap-10 mt-8'>
                    <div className='flex flex-col justify-start items-start'>
                        <label className='text-gray-500 mb-2 text-xl'>What's your email? *</label>
                        <input type="email" placeholder="Your Email" name="name" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <label className='text-gray-500 mb-2 text-xl'>What's your phone number? *</label>
                        <PhoneInput className="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2] "
                            international
                            defaultCountry="US"
                            placeholder="Enter Phone Number "
                            name="phone"
                            value={value}
                            error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
                            onChange={setValue} 
                            required
                            />
                    </div>
                </div>
                {/* Message Box */}
                <div className='flex mt-6 justify-start items-start flex-col'>
                            <label className='text-gray-500 mb-2 text-xl'>Your Message *</label>
                            <textarea name="message" className='w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2] messageArea' placeholder='Write Your Message Here' col="30" row="100" required></textarea>
                        </div>
            </div>
        </div>
    );
};

export default FreeTrialContactForm;