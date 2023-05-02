import React from 'react';
import logoIcon from '../../assets/newImages/Logos.png'
import "./TrustedBrand.css"


const TrustedBrand = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 py-20'>
            <p className='trustedBrand'>Trusted by 36,000+ companies</p>
            <div>
                <div>
                    <div className='flex justify-center items-center mt-[44px]'>
                        <img  className='logoIcon' src={logoIcon} alt="Studio MetroDesk Brand Logo Icon"/>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default TrustedBrand;