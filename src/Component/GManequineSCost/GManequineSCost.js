import React from 'react';
import { FaCircle } from 'react-icons/fa';
import photoEditing from "../../assets/images/services/ghost-mannequin/ghost-mannequin-easy.jpg"
import photo from "../../assets/images/services/ghost-mannequin/ghost-mannequin-easy2.jpg"
import mediumPath from "../../assets/images/services/ghost-mannequin/ghost-mannequin-hard.jpg"
import mediumPaths from "../../assets/images/services/ghost-mannequin/ghost-mannequin-hard2.jpg"

const GManequineSCost = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-56 py-20'>
                {/*  Simple Ghost Mannequin – $1.5 per image */}
                <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left'>How much do ghost mannequin services cost?</h2>
                <p className='text-xl text-gray-700 mb-3 text-left'>As you know, neither all images nor their ghost mannequin edits are the same. So the pricing for each project varies. We follow our standard pricing guidelines to make it transparent and open for our customers. The following section shows all our ghost mannequin editing services and how the pricing differs according to complexity. Check the following example images to understand the complexity of every ghost mannequin service we offer.</p>
                <div className='grid grid-cols-1 gap-6 justify-between lg:grid-cols-2'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'> Simple Ghost Mannequin – $1.5 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left'>Simple ghost mannequin projects involve joining simple articles of clothing in one place, for example, the shirt and its neck and labels.</p>

                        <p className='text-xl text-gray-700 mb-3 text-left mt-6 font-bold'>Perfect for:</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>An item of clothing with one joining section</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Simple shapes including tops, sweaters, pants and dresses</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={photoEditing} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={photo} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                    </div>
                </div>
                {/* Complex Ghost Mannequins – $2.5 per image */}
                <div className='grid grid-cols-1  lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'> Complex Ghost Mannequins – $2.5 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>Complex ghost mannequin projects require joining multiple parts of a product, for example, neckline and sleeves or waistband and leg holes.</p>
                        <p className='text-xl text-gray-700 mb-3 text-left mt-6 font-bold'>Perfect for:</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Clothing that comes in more than one piece, <br/> for example, a bathing suit and underwear sets</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Apparels with cutouts</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Jackets</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={mediumPath} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={mediumPaths} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GManequineSCost;