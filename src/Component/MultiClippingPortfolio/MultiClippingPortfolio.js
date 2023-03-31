import React from 'react';
import "./MultiClippingPortfolio.css"
import mclipping1 from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-expert-1.jpg"
import mclipping2 from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-expert-2.jpg"
import mclipping3 from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-expert-3.jpg"
import mclipping4 from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-expert-4.jpg"
import mclipping5 from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-expert-5.jpg"
import mclipping6 from "../../assets/images/services/multiple-clipping-path/multiple-clipping-path-expert-6.jpg"

const MultiClippingPortfolio = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
        <div>
            <div>
                <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7A80BD]'>Pixel-perfect multi-clipping path portfolio</h2>
                <p className='text-lg text-gray-700 mb-3 text-left'>Outsource even your most intricate clipping path projects to Path’s team of experts, From simple clipping path to multi-clipping path, get pixel-perfect image cut-outs services whenever you need them.</p>
            </div>
            <div className='grid md:grid-cols-2 gap-6 mt-6 lg:grid-cols-3 justify-items-center'>
                <div>
                    <img src={mclipping1} alt="Studio MetroDesk Easy Clipping Path"/>
                </div>
                <div>
                    <img src={mclipping2} alt="Studio MetroDesk Easy And Medium Clipping Path"/>
                </div>
                <div>
                    <img src={mclipping3} alt="Studio MetroDesk Easy and Simple Clipping Path"/>
                </div>
                <div>
                    <img src={mclipping4} alt="Studio MetroDesk Hard And Complex Clipping Path"/>
                </div>
                <div>
                    <img src={mclipping5} alt="Studio MetroDesk Hard And Sample Clipping Path"/>
                </div>
                <div>
                    <img src={mclipping6} alt="Studio MetroDesk Medium Clipping Path"/>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MultiClippingPortfolio;