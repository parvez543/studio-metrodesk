import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import "./ContactForm.css"
import contact from "../../assets/images/contact-poster.png"
import industry from "../../data/industry"
import imageEdit from "../../data/imagesEdit"
import imageDuration from '../../data/editDuration';
import countries from "../../data/countryData"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Swal from 'sweetalert2';
import { isValidPhoneNumber } from 'react-phone-number-input';


const ContactForm = () => {

    const [value, setValue] = useState()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const fullName = form.name.value
        const industry = form.option.value
        const email = form.email.value
        const phone = form.phone.value
        const editingRange = form.numberRange.value
        const imageEdit = form.imageEdit.value
        const message = form.message.value

        // console.log(fullName, industry, email, phone, editingRange, imageEdit, message);

        const user = {fullName:fullName, industry:industry, email:email, phone:phone, editingRange:editingRange, imageEdit:imageEdit, message:message}

        if(user){
            Swal.fire({
                icon: 'Success',
                title: 'Thank You',
                text: 'We Will Contact With You Shortly',
                
              })
        } 


        console.log(user);

        form.reset()
    }


    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <h2 className='mb-3 text-2xl sm:text-3xl md:text-5xl font-semibold text-left text-[#7A80BD]'>Contact Your Amazing Team </h2>
            <p className='text-2xl text-left mt-2 text-gray-700'>You can contact our team for anything and everything :-)</p>
            <div className='flex flex-col-reverse lg:flex-row gap-12'>
                <div className='mt-12'>
                    <form className='text-left' onSubmit={handleOnSubmit}>
                        <div className='flex flex-col lg:flex-row gap-6 lg:gap-20'>
                            <div className='flex flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>Full Name *</label>
                                <input type="text" placeholder="Your First Name" name="name" class="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2]" required />
                            </div>
                            <div className='flex flex-col '>
                                <label className='text-gray-500 mb-2 text-xl'>Industry *</label>
                                <div>
                                    <select name="option" className='selectOption lg:w-[260px] border-l border-indigo-400'>
                                    {/* <option placeholder=''>select Industry</option> */}
                                        {
                                            industry?.map(i => <>
                                                <option value={i.name}>{i.name}</option>
                                            </>)
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 mt-6'>
                            <div className='flex flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>Email *</label>
                                <input type="email" placeholder="Your Email" name="email" className="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2] lg:w-[270px]" required />
                            </div>
                            <div className='flex flex-col lg:w-[270px]'>
                                <label className='text-gray-500 mb-2 text-xl'>Phone Number *</label>
                                <div className='flex'>
                                    <PhoneInput className="w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2] "
                                        international
                                        defaultCountry="US"
                                        placeholder="Enter Phone Number "
                                        name="phone"
                                        value={value}
                                        error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
                                        onChange={setValue} required/>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6 lg:gap-20 mt-6'>
                            <div className='flex mt-6 mb-2 flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>Images To Edit Per Year *</label>
                                <select name="numberRange" className='selectOption lg:w-[270px] border-l border-indigo-400'>
                                    {
                                        imageEdit?.map(i => <>
                                            <option value={i.name}>{i.name}</option>
                                        </>)
                                    }
                                </select>
                            </div>
                            <div className='flex mt-6 mb-2 flex-col'>
                                <label className='text-gray-500 mb-2 text-xl'>How Often Will You Edit *</label>
                                <select name="imageEdit" className='selectOption lg:w-[270px] border-l border-indigo-400'>
                                    {
                                        imageDuration?.map(i => <>
                                            <option value={i.name}>{i.name}</option>
                                        </>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='flex mt-6 flex-col'>
                            <label className='text-gray-500 mb-2 text-xl'>Your Message *</label>
                            <textarea name="message" className='w-full py-3 px-3  border-l border-indigo-400 bg-[#F2F2F2] messageArea' placeholder='Write Your Message Here' col="30" row="100" required></textarea>
                        </div>


                        <div className='mt-10'>
                            <button type='submit' class="text-White color-blue-900 ml-3 flex items-center gap-2 freeTrailBtn py-3 px-6">SUBMIT <FaArrowRight /></button>
                        </div>
                    </form>
                </div>
                <div>
                    <img className='lg:w-[500px]' src={contact} alt="Studio MetroDesk Contact"/>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;