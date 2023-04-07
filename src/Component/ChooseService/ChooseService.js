import React, { useState } from 'react';
import "./ChooseService.css"
import clippingPath from "../../assets/images/card_1.jpg"
import multiClippingPath from "../../assets/images/card_2.jpg"
import retouching  from "../../assets/images/card_3.jpg"
import vector from "../../assets/images/card_4.jpg"
import embroidery from "../../assets/images/card_5.jpg"
import hairMasking from "../../assets/images/card_6.jpg"
import { FaAngleRight } from 'react-icons/fa';

const ChooseService = () => {
    
    const [currentIndex, setCurrentIndex] = useState(0);

  

    return (
        <div className='container mx-auto px-10 lg:px-56 -mt-[118px]'>
            <div>
                <div class="trail-main__wrapper">
                    <div class="body-main--frame">
                        <div class="arrow-progressbar">
                            <div class="arrow-progressbar__main">
                                <div class="choose-services progressbar-single active"><p>Choose Your Services</p></div>
                                <div class="upload-image progressbar-single"><p>Upload Your Images</p></div>
                                <div class="contact-information progressbar-single"><p>Contact Informations</p></div>
                            </div>
                        </div>
                        <div class="service-section__main">
                            <div class="formsection-main__body">
                                <h4 className='text-left'>What edits do you want to try?</h4>
                                <div>

                                    <form action="" class="product-card-main desktop-card-main">
                                        <div class="product-card-main__item" value="Clipping path">
                                            <div class="item-head">
                                                <input type="radio" id="html" name="form" value="Clipping path" class="" />
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
                                                <input type="radio" id="Multi_Clipping" name="form" value="Multi-Clipping Paths" class="" />
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
                                                <input type="radio" id="retouching" name="form" value="High End Retouching" class="" />
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
                                                <input type="radio" id="raster" name="form" value="Raster to Vector" class="" />
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
                                                <input type="radio" id="Embroidery" name="form" value="Embroidery Digitizing" class="" />
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
                                                <input type="radio" id="Masking" name="form" value="Model Hair Masking" class="" />
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

                                    {/* <form action="" class="product-card-main mobile-card-main">
                                        <div class="swiper mySwiper">
                                            <div class="swiper-wrapper">
                                                <div class="swiper-slide">
                                                    <div class="product-card-main__item" value="Clipping path">
                                                        <div class="item-head">
                                                            <input type="radio" id="html" name="form" value="Clipping path" class="circle" />
                                                            <label for="html">Clipping path</label>
                                                        </div>
                                                        <div class="item-image">
                                                            <img src="img/card_1.jpg" alt="" />
                                                        </div>
                                                        <div class="info-button-main">
                                                            <div class="tooltip">
                                                                <span class="material-symbols-outlined"> info </span>
                                                                <span class="tooltiptext">Tooltip text</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="product-card-main__item">
                                                        <div class="item-head">
                                                            <input type="radio" id="Multi_Clipping" name="form" value="Multi-Clipping Paths" class="circle" />
                                                            <label for="Multi_Clipping">Multi-Clipping Paths</label>
                                                        </div>
                                                        <div class="item-image">
                                                            <img src="img/card_2.jpg" alt="" />
                                                        </div>
                                                        <div class="info-button-main">
                                                            <div class="tooltip">
                                                                <span class="material-symbols-outlined"> info </span>
                                                                <span class="tooltiptext">Tooltip text</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="product-card-main__item">
                                                        <div class="item-head">
                                                            <input type="radio" id="retouching" name="form" value="High End Retouching" class="circle" />
                                                            <label for="retouching">High End Retouching</label>
                                                        </div>
                                                        <div class="item-image">
                                                            <img src="img/card_3.jpg" alt="" />
                                                        </div>
                                                        <div class="info-button-main">
                                                            <div class="tooltip">
                                                                <span class="material-symbols-outlined"> info </span>
                                                                <span class="tooltiptext">Tooltip text</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="product-card-main__item">
                                                        <div class="item-head">
                                                            <input type="radio" id="raster" name="form" value="Raster to Vector" class="circle" />
                                                            <label for="raster">Raster to Vector</label>
                                                        </div>
                                                        <div class="item-image">
                                                            <img src="img/card_4.jpg" alt="" />
                                                        </div>
                                                        <div class="info-button-main">
                                                            <div class="tooltip">
                                                                <span class="material-symbols-outlined"> info </span>
                                                                <span class="tooltiptext">Tooltip text</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="product-card-main__item">
                                                        <div class="item-head">
                                                            <input type="radio" id="Embroidery" name="form" value="Embroidery Digitizing" class="circle" />
                                                            <label for="Embroidery">Embroidery Digitizing</label>
                                                        </div>
                                                        <div class="item-image">
                                                            <img src="img/card_5.jpg" alt="" />
                                                        </div>
                                                        <div class="info-button-main">
                                                            <div class="tooltip">
                                                                <span class="material-symbols-outlined"> info </span>
                                                                <span class="tooltiptext">Tooltip text</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="swiper-slide">
                                                    <div class="product-card-main__item">
                                                        <div class="item-head">
                                                            <input type="radio" id="Masking" name="form" value="Model Hair Masking" class="circle" />
                                                            <label for="Masking">Model Hair Masking</label>
                                                        </div>
                                                        <div class="item-image">
                                                            <img src="img/card_6.jpg" alt="" />
                                                        </div>
                                                        <div class="info-button-main">
                                                            <div class="tooltip">
                                                                <span class="material-symbols-outlined"> info </span>
                                                                <span class="tooltiptext">Tooltip text</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-pagination"></div>
                                        </div>
                                    </form> */}

                                </div>
                            </div>

                            <div class="main-button flex justify-end">
                                <div></div>
                                <div class="next-btn">
                                    <button class="right-arrow btn" id="serveice-button" onclick="nextSlide(1)">
                                        Next <FaAngleRight/>
                                    </button>
                                </div>
                            </div>

                        </div>
                        {/* Upload File */}
                         <div class="upload-image__main">
                            {/* <div class="image-main-wrapper">
                                <p>Seeing your images will help us make sure your quote is accurate. It also means we can.</p>

                                <div class="drag-area">
                                    <div class="drag-area__btn">
                                        <header>Drag & drop files here or</header>
                                        <button>Browse File</button>
                                    </div>
                                    <input
                                        id="files"
                                        type="file"
                                        multiple="multiple"
                                        accept="image/jpeg, image/png, image/jpg, application/pdf"
                                        class="image-input"
                                        hidden
                                    />

                                    <div class="result"></div>
                                </div>
                            </div> */}
                            {/* <div class="main-button">
                                <button class="previous-button btn p-btn" onclick="previousSlide(0)">
                                    <span class="material-symbols-outlined"> west </span> Previous
                                </button>
                                <div></div>
                                <button class="next-btn btn" onclick="nextSlide(2)" id="upload-button">
                                    Next <span class="material-symbols-outlined"> east </span>
                                </button>
                            </div> */}
                        </div>

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