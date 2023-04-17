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
      words: ['retouching', 'photo editing', 'clipping path', 'ghost mannequin', 'deepetching'],
      loop: 1000,
      onLoopDone: () => console.log(`loop completed after 3 runs.`)
   })
   return (
      <div className='container mx-auto'>
         <div className='mt-[48px]'>
            <div>
               <h2 className='homeContainer'>Studio Metrodesk</h2>
               <h2 className='homeContainer'>We make <span className='homeText'> <span>{text}</span><Cursor cursorColor='blue' /></span>easy!</h2>
               <p className='mt-[16px] homeParagraph'>Photo Editing Solutions for Fashion, Apparel, E-commerce Businesses and Pro-<br /> Photographers. Our 100+ pro photo editors work 24/7 to provide you with the <br /> most personalized solutions in the market</p>
               <div className='flex justify-center items-center gap-[16px]'>
                  <div><button className='headerBtn block mx-auto'>Try Us Free</button></div>
                  <div><button className='headerQuote block mx-auto'>Get A Quote</button></div>
               </div>
               {/* Image Section */}
               <div className='homeImageContainer'>
                  <div className='grid lg:grid-cols-5 gap-[16px]'>
                     {/* Image 1 */}
                     <div className='homeImgContainer'>
                        <img className='mb-[16px]' src={watch} alt="This is Watch" />
                        <img src={bag} alt="This is Bag" />
                     </div>
                     <div className='homeImgContainer mt-[25px]'>
                        <img src={chair} className='mb-[16px]' alt="This is Watch" />
                        <img src={shoes} alt="This is Bag" />
                     </div>
                     <div className='homeImgContainer mt-[67px]'>
                        <img src={tshirt} className='mb-[16px]' alt="This is T-Shirt" />
                        <img src={newWatch} className='mb-16' alt="This is Watch" />
                     </div>
                     <div className='homeImgContainer mt-[25px]'>
                        <img src={children} className='mb-[16px]' alt="This is Children" />
                        <img src={women} alt="This is Women" />
                     </div>
                     <div className='homeImgContainer'>
                        <img src={sunglass} className='mb-[16px]' alt="This is Sunglass" />
                        <img src={jewellery} alt="This is Jewellery" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeComponentCopy;