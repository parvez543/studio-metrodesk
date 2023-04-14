import React from 'react';
import "./EmbroideryPortfolio.css"
import mclipping1 from "../../assets/images/services/embroidery/emb1.jpg"
import mclipping2 from "../../assets/images/services/embroidery/emb2.jpg"
import mclipping3 from "../../assets/images/services/embroidery/emb3.jpg"
import mclipping4 from "../../assets/images/services/embroidery/emb4.jpg"
import mclipping5 from "../../assets/images/services/embroidery/emb5.jpg"
import mclipping6 from "../../assets/images/services/embroidery/emb6.jpg"

const EmbroideryPortfolio = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            <div>
                <div>
                    <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7A80BD]'>Embroidery Digitizing Portfolio</h2>
                    <p className='text-lg text-gray-700 mb-3 text-left'>From simple embroidery digitization to the most complex ones, get neat machine output with no breakage embroidery digitizing services whenever you need them.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-6 mt-6 lg:grid-cols-3 justify-items-center'>
                    <div>
                        <img src={mclipping1} alt="Studio MetroDesk embroidery work" />
                    </div>
                    <div>
                        <img src={mclipping2} alt="Studio MetroDesk embroidery work" />
                    </div>
                    <div>
                        <img src={mclipping3} alt="Studio MetroDesk embroidery work" />
                    </div>
                    <div>
                        <img src={mclipping4} alt="Studio MetroDesk embroidery work" />
                    </div>
                    <div>
                        <img src={mclipping5} alt="Studio MetroDesk embroidery work" />
                    </div>
                    <div>
                        <img src={mclipping6} alt="Studio MetroDesk embroidery work" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmbroideryPortfolio;