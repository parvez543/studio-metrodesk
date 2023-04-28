import React from 'react';
import "./HomeComponentEight.css"
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import ImageSlider from 'react-image-comparison-slider';
import before from "../../assets/newImages/Before/Hero Section/Rectangle 7.png"
import after from "../../assets/newImages/Before/Hero Section/Rectangle 7.png"

const HomeComponentEight = () => {
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
               {/* Image Section */}

            </div>
         </div>
         <div style={{ width: "1216px", height: "603px" }} className='block mx-auto mt-[40px] mb-[40px]'>
            <ImageSlider
               image1={before}
               image2={after}
               onSlide={() => {
                  console.log("sliding");
               }}
            />
         </div>
      </div>
   );
};

export default HomeComponentEight;