import React from 'react';
import "./HomeComponentFive.css"
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import women from "../../assets/newImages/HomeBanner (1)/Hero Section/women.png"
import watch from "../../assets/newImages/HomeBanner (1)/Hero Section/watch.png"
import shirt from "../../assets/newImages/HomeBanner (1)/Hero Section/t-shirt.png"
import chair from "../../assets/newImages/HomeBanner (1)/Hero Section/chair.png"



const HomeComponentFive = () => {
    const [text] = useTypewriter({
        words: ['retouching', 'multi-clipping', 'clipping path', 'ghost mannequin', 'deep-etching'],
        loop: 1000,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
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
           {/* Image Container */}
           <div className='grid lg:grid-cols-4 justify-items-center mb-[50px] px-10 lg:px-20'>
                <div>
                    <img className='imageSection mt-[20px] lg:mt-[104px]' src={chair} alt="Studio MetroDesk PhotoRetouching"/>
                </div>
                <div>
                    <img className='imageSection mt-[10px] lg:mt-[64px]' src={women} alt="Studio MetroDesk PhotoRetouching"/>
                </div>
                <div>
                    <img className='imageSection mt-[10px] lg:mt-[104px]' src={watch} alt="Studio MetroDesk PhotoRetouching"/>
                </div>
                <div>
                    <img className='imageSection mt-[10px] lg:mt-[48px]' src={shirt} alt="Studio MetroDesk PhotoRetouching"/>
                </div>
           </div>

        </div>
    );
};

export default HomeComponentFive;