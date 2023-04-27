import React from 'react';
import "./HomeComponentSix.css"
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import slide_image_1 from "../../assets/newImages/slide_image/Rectangle 7.png"
import slide_image_2 from "../../assets/newImages/slide_image/Rectangle 9.png"
import slide_image_3 from "../../assets/newImages/slide_image/Rectangle 10.png"
import slide_image_4 from "../../assets/newImages/slide_image/Rectangle 11.png"
import slide_image_5 from "../../assets/newImages/slide_image/Rectangle 8.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const HomeComponentSix = () => {
    const [text] = useTypewriter({
        words: ['retouching', 'multi-clipping', 'clipping path', 'ghost mannequin', 'deep-etching'],
        loop: 1000,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div className='container mx-auto'>
            <div className='mt-[20px] lg:mt-[48px] sm:px-12 lg:px-0'>
                <div>
                    <h2 className='homeContainer text-[30px] lg:text-[60px] px-5 lg:px-0'>Experience Flawless </h2>
                    <h2 className='homeContainer text-[30px] lg:text-[60px]'><span className='homeText'> <span>{text}</span><Cursor cursorColor='blue' /></span></h2>
                    <p className='mt-[16px] homeParagraph px-5 lg:px-0 text-[14px] lg:text-[16px]'>Photo Editing Solutions for Fashion, Apparel, E-commerce Businesses and Pro-<br /> Photographers. Our 100+ pro photo editors work 24/7 to provide you with the <br /> most personalized solutions in the market</p>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-[8px] lg:gap-[16px]'>
                        <div><button className='headerBtn block mx-auto'>Try Us Free</button></div>
                        <div><button className='headerQuote block mx-auto md:mt-[24px]'>Get A Quote</button></div>
                    </div>
                </div>
                {/* Slider Container */}
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container swiper-slide"
                    
                >
                    <SwiperSlide >
                        <img src={slide_image_1} alt="slide_image" className='sliderImage' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_2} alt="slide_image" className='sliderImage sliderImageTwo' />
                    </SwiperSlide>
                    <SwiperSlide>
                        {/*  */}
                        <img src={slide_image_3} alt="slide_image" className='sliderImage sliderImageTwo' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_4} alt="slide_image" className='sliderImage' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide_image_5} alt="slide_image" className='sliderImage' />
                    </SwiperSlide>


                    <div className="slider-controler">
          {/* <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div> */}
          {/* <div className="swiper-pagination mt-[1000px]"></div> */}
        </div>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeComponentSix;