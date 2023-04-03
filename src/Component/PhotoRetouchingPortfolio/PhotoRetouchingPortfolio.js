import React from 'react';
import "./PhotoRetouchingPortfolio.css"
import retouchting1 from "../../assets/images/services/retouching/retouching-service-1.jpg"
import retouchting2 from "../../assets/images/services/retouching/retouching-service-2.jpg"
import retouchting3 from "../../assets/images/services/retouching/retouching-service-3.jpg"
import retouchting4 from "../../assets/images/services/retouching/retouching-service-4.jpg"
import retouchting5 from "../../assets/images/services/retouching/retouching-service-5.jpg"
import retouchting6 from "../../assets/images/services/retouching/retouching-service-6.jpg"






const PhotoRetouchingPortfolio = () => {
    return (
        <div className='container mx-auto px-10 lg:px-56 py-20'>
            <div>
                <div>
                    <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7A80BD]'>Pixel-perfect photo retouching portfolio</h2>
                    <p className='text-lg text-gray-700 mb-6 text-left'>From simple retouching to the most complex ones, get pixel-perfect photo retouching services whenever you need them.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-6 mt-6 lg:grid-cols-3 justify-items-center'>
                    <div>
                        <img src={retouchting1} alt="Studio MetroDesk Retouching Service" />
                    </div>
                    <div>
                        <img src={retouchting2} alt="Studio MetroDesk Retouching Service" />
                    </div>
                    <div>
                        <img src={retouchting3} alt="Studio MetroDesk Retouching Service" />
                    </div>
                    <div>
                        <img src={retouchting4} alt="Studio MetroDesk Retouching Service" />
                    </div>
                    <div>
                        <img src={retouchting5} alt="Studio MetroDesk Retouching Service" />
                    </div>
                    <div>
                        <img src={retouchting6} alt="Studio MetroDesk Retouching Service" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoRetouchingPortfolio;