import React from 'react';
import "./VectorPortfolio.css"
import vertor1 from "../../assets/images/services/vector-conversion/Vector-e1.jpg"
import vertor2 from "../../assets/images/services/vector-conversion/Vector-e2.jpg"
import vertor3 from "../../assets/images/services/vector-conversion/Vector-e3.jpg"
import vertor4 from "../../assets/images/services/vector-conversion/Vector-e4.jpg"
import vertor5 from "../../assets/images/services/vector-conversion/Vector-e5.jpg"
import vertor6 from "../../assets/images/services/vector-conversion/Vector-e6.jpg"

const VectorPortfolio = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            <div>
                <div>
                    <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7A80BD]'>Pixel-perfect vector conversion portfolio</h2>
                    <p className='text-lg text-gray-700 mb-6 text-left'>From a simple vector conversion to the most complex ones, get pixel-perfect raster to vector conversion services whenever you need them.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-6 mt-6 lg:grid-cols-3 justify-items-center'>
                    <div>
                        <img src={vertor1} alt="Studio MetroDesk Vector Conversion Service" />
                    </div>
                    <div>
                        <img src={vertor2} alt="Studio MetroDesk Vector Conversion Service" />
                    </div>
                    <div>
                        <img src={vertor3} alt="Studio MetroDesk Vector Conversion Service" />
                    </div>
                    <div>
                        <img src={vertor4} alt="Studio MetroDesk Vector Conversion Service" />
                    </div>
                    <div>
                        <img src={vertor5} alt="Studio MetroDesk Vector Conversion Service" />
                    </div>
                    <div>
                        <img src={vertor6} alt="Studio MetroDesk Vector Conversion Service" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VectorPortfolio;