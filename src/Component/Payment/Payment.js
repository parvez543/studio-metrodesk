import React from 'react';
import "./Payment.css"
import payments from "../../data/payments"

const Payment = () => {
    return (
        <div className='paymentContainer'>
            <div className='container mx-auto px-10 lg:px-56 py-20'>
                <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#7A80BD]'>Payment</h2>
                <p className='text-lg md:text-xl mb-[60px]'>Studio Metrodesk, Inc. accepts online payments through Stripe.com & accepts ACH & wire transfers.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10'>
                    {
                        payments?.map(payment => <>
                           <div className='paymentSystem'>
                           <div className='flex justify-center'>
                                <img src={payment.img} alt="Studio MetroDesk Payment Icon" className='mb-[30px]'/>
                                </div>
                                <h2 className='paymentHeading'>{payment.name}</h2>
                                <p>{payment.description}</p>
                           </div>
                        </>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Payment;