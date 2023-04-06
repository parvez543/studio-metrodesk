import React from 'react';
import "./CostOfMClipping.css"
import { FaCircle } from 'react-icons/fa';
import photoEditing from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-Easy1.jpg"
import photo from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-Easy2.jpg"
import mediumPath from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-medium.jpg"
import mediumPaths from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-medium2.jpg"
import hardPath from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-hard.jpg"
import hardPaths from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-hard2.jpg"
import clippingPathCost from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-complex.jpg"
import clippingPathCosts from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-complex2.jpg"



const CostOfMClipping = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-56 py-20'>
                {/* Basic Clipping Path */}
                <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left'>How much do multi-clipping path services cost?</h2>
                <p className='text-xl text-gray-700 mb-3 text-left'>As you know, neither all images nor their multi-clipping paths are the same. So the pricing for each project varies. We follow our standard pricing guidelines to make it transparent and open for our customers. The following section shows all our clipping path services and how the pricing differs according to the number of layers, how complex the layers are, or how much detail is involved within each layer. Check the following example images to understand the complexity of every multi-clipping path service we offer.</p>
                <div className='grid grid-cols-1 gap-6 justify-between lg:grid-cols-2'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>Basic Multi-clipping Paths – $2 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left'>Basic multi-clipping paths are applicable where the product's exterior and interior sections are made up of just a few smooth or straight edges. Basic multi-clipping paths are great for simple objects with a few different areas that need to be edited.</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Eyewears – eyeglasses and sunglasses that need  <br /> separate paths for the frames and the lenses</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Watches – Smart watches and hand watches</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Electronic devices with screens that need  <br /> separate paths for the device and the screen</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Different types of desks, tables, chairs and stools</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Opaque two-tone containers and boxes</p>
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
                {/* Simple Multi-clipping Paths – $4 per image */}
                <div className='grid grid-cols-1  lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'> Simple Multi-clipping Paths – $4 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>Simple multi-clipping paths are used on objects with exteriors and interiors comprised of a few straight or curved edges. These objects are a little more complicated than basic multi-clipping paths because they have multiple interior areas or are made up of groups of simple objects.</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Stacks of solid color sheets, towels or other linens  <br /> in different colors</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>A small group of similar, solid color apparel such  <br /> as jackets or folded dress shirts</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Groups of cutlery, dishes or mugs</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Single furniture items</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Single, simple objects with more than two "holes,"  <br /> such as claw hair clips or tire rims</p>
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
                {/* Medium Multi-clipping Paths – $7 per image */}
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>  Medium Multi-clipping Paths – $7 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>Medium multi-clipping paths work best for pictures of complete outfits or very complex apparel with multiple color options for each section.</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Complex, separated garments such as fully  <br /> customizable shoes or jacket / shirt / tie combinations</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Models wearing multiple pieces such as shirts,  <br /> pants, and accessories</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Garments with complicated buckles, clasps or ties</p>
                        </div>


                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={hardPaths} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={hardPath} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                    </div>
                </div>
                {/* Complex Clipping Paths – $10 per image */}
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'> Complex Multi-clipping Paths – $10 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>Complex multi-clipping paths are needed when the image has numerous straight or curved edges with many multi-clipping path objects. Several advanced Photoshop techniques are required to completely isolate every object from the image. Complex multi-clipping paths cost more than other clipping paths because it takes more time and advanced Photoshop skills to create a natural-looking output.</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Complex products with numerous holes, such  <br /> as motorbikes, bicycles or pet containers</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Complex jewelry and ornaments with detailed  <br /> links or multiple gemstones</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Furniture with multiple cut-outs, such as chairs  <br /> with a mesh backing</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>A group of multiple and dissimilar objects</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Pictures that have more than one fuzzy-edged objects</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>A photo with lager group of people</p>
                        </div>

                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={clippingPathCost} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={clippingPathCosts} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CostOfMClipping;