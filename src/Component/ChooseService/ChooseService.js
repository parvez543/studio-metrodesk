import React, { useEffect, useState } from 'react';
import "./ChooseService.css"
import clippingPath from "../../assets/images/card_1.jpg"
import multiClippingPath from "../../assets/images/card_2.jpg"
import retouching from "../../assets/images/card_3.jpg"
import vector from "../../assets/images/card_4.jpg"
import embroidery from "../../assets/images/card_5.jpg"
import hairMasking from "../../assets/images/card_6.jpg"
import { FaAngleRight } from 'react-icons/fa';
import FreeTrialDashboard from '../FreeTrialDashboard/FreeTrialDashboard';


const ChooseService = () => {

    const [next, setNext] = useState(null)
    const [clickedService, setclickedService] = useState("")
    
    const handleChange = (e) => {
        setclickedService(e.target.value)
    }


    return (
        <div className='container mx-auto px-10 lg:px-56 mt-[118px] lg:-mt-[118px]'>
            <div>
                <div class="trail-main__wrapper">
                    <div class="body-main--frame">
                        <div class="arrow-progressbar hidden lg:block">
                            <div class="arrow-progressbar__main">
                                <div class={`choose-services progressbar-single ${!next && "active"} cursor-pointer`} onClick={() => setNext(null)}><p>Choose Your Services</p></div>
                                <button disabled={!clickedService} class={`upload-image progressbar-single ${next === "images" && "active"} cursor-pointer`} onClick={() => setNext("images")}><p>Upload Your Images</p></button>
                                <button disabled={!clickedService} class={`contact-information progressbar-single ${next === "contact" && "active"} cursor-pointer`} onClick={() => setNext("contact")}><p>Contact Informations</p></button>
                            </div>
                        </div>
                        {
                            !next && <div class="service-section__main">
                                <div class="formsection-main__body">
                                    <h4 className='text-left'>What edits do you want to try?</h4>
                                    <div>

                                        <form action="" class="product-card-main desktop-card-main" onChange={handleChange}>
                                            <div class="product-card-main__item" value="Clipping-path">
                                                <div class="item-head">
                                                    <input type="radio" id="html" name="form" value="Clipping-path" class="" />
                                                    <label for="html" className='text-xl ml-4'>Clipping path</label>
                                                </div>
                                                <div class="item-image mt-6">
                                                    <img src={clippingPath} alt="Studio Metro Desk Clipping Path" />
                                                </div>
                                                <div class="info-button-main">
                                                    <div class="tooltip">
                                                        {/* <span class="material-symbols-outlined"> info </span> */}
                                                        <span class="tooltiptext">Tooltip text</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-card-main__item">
                                                <div class="item-head">
                                                    <input type="radio" id="Multi_Clipping" name="form" value="Multi-Clipping-Paths" class="" />
                                                    <label for="Multi_Clipping" className='text-xl ml-4'>Multi-Clipping Paths</label>
                                                </div>
                                                <div class="item-image mt-6">
                                                    <img src={multiClippingPath} alt="Studio Metro Desk Multi Clipping Path" />
                                                </div>
                                                <div class="info-button-main">
                                                    <div class="tooltip">
                                                        {/* <span class="material-symbols-outlined"> info </span> */}
                                                        <span class="tooltiptext">Tooltip text</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-card-main__item">
                                                <div class="item-head">
                                                    <input type="radio" id="retouching" name="form" value="High-End-Retouching" class="" />
                                                    <label for="retouching" className='text-xl ml-4'>High End Retouching</label>
                                                </div>
                                                <div class="item-image mt-6">
                                                    <img src={retouching} alt="Studio MetroDesk Retouching" />
                                                </div>
                                                <div class="info-button-main">
                                                    <div class="tooltip">
                                                        {/* <span class="material-symbols-outlined"> info </span> */}
                                                        <span class="tooltiptext">Tooltip text</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-card-main__item">
                                                <div class="item-head">
                                                    <input type="radio" id="raster" name="form" value="Raster-to-Vector" class="" />
                                                    <label for="raster" className='text-xl ml-4'>Raster to Vector</label>
                                                </div>
                                                <div class="item-image mt-6">
                                                    <img src={vector} alt="Studio MetroDesk Raster to Vector Conversion" />
                                                </div>
                                                <div class="info-button-main">
                                                    <div class="tooltip">
                                                        {/* <span class="material-symbols-outlined"> info </span> */}
                                                        <span class="tooltiptext">Tooltip text</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-card-main__item">
                                                <div class="item-head">
                                                    <input type="radio" id="Embroidery" name="form" value="Embroidery-Digitizing" class="" />
                                                    <label for="Embroidery" className='text-xl ml-4'>Embroidery Digitizing</label>
                                                </div>
                                                <div class="item-image mt-6">
                                                    <img src={embroidery} alt="Studio MetroDesk Embroidery Design" />
                                                </div>
                                                <div class="info-button-main">
                                                    <div class="tooltip">
                                                        {/* <span class="material-symbols-outlined"> info </span> */}
                                                        <span class="tooltiptext">Tooltip text</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="product-card-main__item">
                                                <div class="item-head">
                                                    <input type="radio" id="Masking" name="form" value="Model-HairMasking" class="" />
                                                    <label for="Masking" className='text-xl ml-4'>Model Hair Masking</label>
                                                </div>
                                                <div class="item-image mt-6">
                                                    <img src={hairMasking} alt="Studio MetroDesk Model Hair Masking" />
                                                </div>
                                                <div class="info-button-main">
                                                    <div class="tooltip">
                                                        {/* <span class="material-symbols-outlined"> info </span> */}
                                                        <span class="tooltiptext">Tooltip text</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="main-button flex justify-end">
                                    <div></div>
                                    <div class="next-btn">
                                        <button class="right-arrow btn" id="serveice-button" disabled={!clickedService} onClick={() => setNext("images")}>
                                            Next <FaAngleRight />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        }
                        {
                            clickedService && next==="images" &&  <div >
                                <div><FreeTrialDashboard/></div>
                                <button onClick={()=>setNext("contact")}>Next</button>
                        </div>

                        }

                        {
                            clickedService && next==="contact" &&  <div >
                                {/* <div><FreeTrialContactForm/></div> */}
                                <div className='mt-5 mb-5 flex justify-end'>
                                    <button className='submitBtn flex items-center gap-3'>Submit <FaAngleRight/></button>
                                </div>
                        </div>

                        }


                        {/* Contact Form */}
                        {/* <div class="contact-information__main">
                            <h6>Let us know where to send your edits</h6>
                            <div class="contact-information">
                                <form action="">
                                    <div class="common-flex-section">
                                        <div class="primaryinput-container">
                                            <label for="">What's your first name? *</label>
                                            <input type="text" placeholder="Your first name" required class="contact-input" />
                                        </div>
                                        <div class="primaryinput-container">
                                            <label for="">What's your last name?</label>
                                            <input type="text" placeholder="Your last name" required class="contact-input" />
                                        </div>
                                    </div>
                                    <div class="common-flex-section">
                                        <div class="primaryinput-container">
                                            <label for="">What's your email? *</label>
                                            <input type="email" placeholder="Your email address" required class="contact-input" />
                                        </div>
                                        <div class="primaryinput-container">
                                            <label class="phone-label" for="">What's your phone number? *</label>
                                            <input type="tel" placeholder="Your phone number" value="+1" required class="contact-input phone" />
                                            <div class="tooltip">
                                                <p class="free__warning-text"><span class="material-symbols-outlined"> assignment_late </span>Please fill out this field</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="message-section">
                                        <label for="">Message</label>
                                        <textarea name="" id="" cols="30" rows="7" placeholder="Type here" required></textarea>
                                    </div>
                                    <div class="free_trail-button">
                                        <input id="post" type="submit" value="submit" class="button-sub" />
                                        <div class="submit-btn">
                                            <button type="submit" class="button-sub">submit</button>
                                            <input type="submit" value="submit" class="submit-input" />
                                            <span class="material-symbols-outlined arrow"> arrow_right_alt </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="main-button">
                                <button class="previous-button btn p-btn" onclick="previousSlide(1)">
                                    <span class="material-symbols-outlined"> west </span> Previous
                                </button>
                                <div></div>
                            </div>
                        </div> */}

                    </div>
                </div>


            </div>
        </div>
    );
};

export default ChooseService;