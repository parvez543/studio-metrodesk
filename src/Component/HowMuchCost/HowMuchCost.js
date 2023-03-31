import React from 'react';
import { FaCircle } from 'react-icons/fa';
import "./HowMuchCost.css"
import photoEditing from "../../assets/images/services/clipping-path-cost/easy-clipping-paths-work.jpg"
import photo from "../../assets/images/services/clipping-path-cost/easyclipping-paths.jpg"
import mediumPath from "../../assets/images/services/clipping-path-cost/Medium-clipping paths.jpg"
import mediumPaths from "../../assets/images/services/clipping-path-cost/Medium-clipping-paths2.jpg"
import hardPath from "../../assets/images/services/clipping-path-cost/hard-clipping-path-work.jpg"
import hardPaths from "../../assets/images/services/clipping-path-cost/hard-clipping-path.jpg"
import clippingPathCost from "../../assets/images/services/clipping-path-cost/flatrate1.jpg"
import clippingPathCosts from "../../assets/images/services/clipping-path-cost/flatrate.jpg"
import extraHard from "../../assets/images/services/clipping-path-cost/Extra_Hard.jpg"
import extraHard2 from "../../assets/images/services/clipping-path-cost/Extra_Hard2.jpg"

const HowMuchCost = () => {
    return (
        <div className='bg-[#fafafa]'>
            <div className='container mx-auto px-10 lg:px-56 py-20'>
                {/* Basic Clipping Path */}
                <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD] text-left  mb-4'>How much do clipping path services cost?</h2>
                <p className='text-xl text-gray-700 mb-3 text-left'>As you know, neither all images nor their clipping paths are the same. So the pricing for each project varies. We follow our standard pricing guidelines to make it transparent and open for our customers. The following section shows all our clipping path services and how the pricing differs according to complexity. Check the following example images to understand the complexity of every clipping path service we offer.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>Basic Clipping Paths – $1 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>Basic clipping path means outlining a product photo that does not have too many holes, curves or loops. The basic clipping path service includes...</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Simple to cut-outs objects</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Objects with not many holes</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Objects with not many curves and loops</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Items with simple angels</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Straightforward clipping paths like the samples</p>
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
                {/* Simple and Basic Clipping Paths – $2.5 per image */}
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'> Simple and Basic Clipping Paths – $2.5 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>This one is the most common service among our customers and also known as flat rate clipping path service. It’s a combination of basic, simple and slightly more complex clipping paths editing. We offer a flat rate pricing to make this necessary editing service more convenient to our customers. Photos include more cut-outs objects that have multiple holes, edges, and curves than basic clipping paths. This flat rate clipping path service includes...</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Automobiles</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Simple jewelry</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Simple clothing items</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Single furniture items</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Other standalone products like the samples</p>
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
                {/* Medium Clipping Path */}
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>  Medium Clipping Paths – $5 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>A medium clipping path is used for items with complicated edges and multiple holes. It requires creating several paths and then merging to get the final output. The medium clipping path service includes...</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Group of relatively complicated items</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Shoes with multiple shapes and curves</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Relatively complex clothing items</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Items with many holes, curves, loops and angles</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Items with bit complex shapes just like the samples</p>
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
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>  Complex Clipping Paths – $10 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>A complex clipping path is applied to objects with multiple holes, very complicated edges, possibly multiple items or varied levels of transparency. These types of clipping paths are very time-consuming and require advanced Photoshop skills. Such as...</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Group of complicated items</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Group of clothing items</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Multi-hole furniture sets with complex ages</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Objects with complex curves and angles</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Items with complex shapes just like the samples</p>
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
                {/*  Super Complex Clipping Paths – $16 per image */}
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-14'>
                    <div>
                        <h2 className='text-2xl my-6 text-left text-[#7A80BD] font-bold'>   Super Complex Clipping Paths – $16 per image</h2>
                        <p className='text-xl text-gray-700 mb-3 text-left lg:w-[450px]'>This clipping path is relatively more complex and applies to items with complicated edges and numerous holes. It requires several tricky clipping paths with additional paths carefully crafted within the product itself. This service includes...</p>
                        <div className='flex gap-3 items-start justify-start lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Jewelry items with various shapes and intricacy</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>All kinds of bicycles and motorbikes</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Objects that need color changes in specific areas</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Objects with complex curves and angles</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Items with netting</p>
                        </div>
                        <div className='flex gap-3 items-start justify-start mt-4 lg:w-[650px]'>
                            <FaCircle className='mt-[3px] circle' />
                            <p className='text-left text-xl'>Wire furniture and items just like the samples</p>
                        </div>

                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center'>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={extraHard} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                        <div className='w-full flex justify-center items-center mb-6 lg:mb-0'>
                            <img src={extraHard2} alt="Studio MetroDesk PhotoEditing" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowMuchCost;