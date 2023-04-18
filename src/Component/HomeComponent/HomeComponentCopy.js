import React from 'react';
import "./HomeComponent.css"
import watch from "../../assets/newImages/Homepage_Vol_1 (1)/Hero Section/Rectangle 1.png"
import bag from "../../assets/newImages/Homepage_Vol_1 (1)/Hero Section/Rectangle 2.png"
import chair from "../../assets/newImages/Homepage_Vol_1 (1)/Hero Section/Rectangle 1-1.png"
import shoes from "../../assets/newImages/Homepage_Vol_1 (1)/Hero Section/Rectangle 2-1.png"
import tshirt from "../../assets/newImages/Homepage_Vol_1 (1)/Hero Section/Rectangle 1-2.png"
import newWatch from "../../assets/newImages/Homepage_Vol_1 (1)/Hero Section/Rectangle 2-2.png"
import children from "../../assets/newImages/Homepage_Vol_1 (1)/Hero Section/Rectangle 1-3.png"
import women from "../../assets/newImages/Homepage_Vol_1 (1)/Hero Section/Rectangle 2-3.png"
import sunglass from "../../assets/newImages/Homepage_Vol_1 (1)/Hero Section/Rectangle 1-4.png"
import jewellery from "../../assets/newImages/Homepage_Vol_1 (1)/Hero Section/Rectangle 2-4.png"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const HomeComponentCopy = () => {   

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
               <div className='homeImageContainer'>
                  <div className='grid lg:grid-cols-5 lg:gap-[16px] justify-items-center mt-[20px] lg:mt-0'>
                     {/* Image 1 */}
                     <div className='homeImgContainer flex flex-row lg:flex-col gap-8 lg:gap-0 px-6 lg:px-0 mb-4 lg:mb-0'>
                       <div className='lg:h[268px] lg:w-[268px]'> <img className='lg:mb-[16px] ' src={watch} alt="This is Watch" /></div>
                       <div className='lg:h[268px] lg:w-[268px]'> <img src={bag} alt="This is Bag"/></div>
                     </div>
                     <div className='homeImgContainer lg:mt-[25px] flex flex-row lg:flex-col gap-8 lg:gap-0 px-6 lg:px-0'>
                      <div className='lg:h[268px] lg:w-[268px]'><img src={chair} className='mb-[16px]' alt="This is Watch" /></div>
                       <div className='lg:h[268px] lg:w-[268px]'><img src={shoes} alt="This is Bag" /></div>
                     </div>
                     <div className='homeImgContainer lg:mt-[67px] flex flex-row lg:flex-col gap-8 lg:gap-0 px-6 lg:px-0 mb-4 lg:mb-0'>
                        <div className='lg:h[268px] lg:w-[268px]'> <img src={tshirt} className='lg:mb-[16px]' alt="This is T-Shirt" /></div>
                        <div className='lg:h[268px] lg:w-[268px]'><img src={newWatch} className='lg:mb-16' alt="This is Watch" /></div>
                     </div>
                     <div className='homeImgContainer lg:mt-[25px] flex flex-row lg:flex-col gap-8 lg:gap-0 px-6 lg:px-0 mb-4 lg:mb-0'>
                     <div className='lg:h[268px] lg:w-[268px]'><img src={children} className='mb-[16px]' alt="This is Children" /></div>
                     <div className='lg:h[268px] lg:w-[268px]'><img src={women} alt="This is Women" /></div>
                     </div>
                     <div className='homeImgContainer flex flex-row lg:flex-col gap-8 lg:gap-0 px-6 lg:px-0 mb-4 lg:mb-0'>
                       <div className='lg:h[268px] lg:w-[268px]'> <img src={sunglass} className='mb-[16px]' alt="This is Sunglass" /></div>
                       <div className='lg:h[268px] lg:w-[268px]'> <img src={jewellery} alt="This is Jewellery" /></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeComponentCopy;