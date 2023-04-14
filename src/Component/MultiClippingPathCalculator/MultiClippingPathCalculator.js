import React, { useState } from 'react';
import multiClippingPath from "../../assets/images/price_page/multi-clipping.png"

const MultiClippingPathCalculator = () => {
    const [value, setValue] = useState(0)

    const handleOnClick = (event) => {
        event.preventDefault()
        const form = event.target
        const numberValue = parseInt(form.number.value)
        const selectedOption = form.option.value
        const shadows = parseFloat(form.shadows.value)
        const hours = parseInt(form.hours.value)

        if(hours === 20){
            console.log((numberValue* selectedOption) + (numberValue * shadows) );
            // setValue((numberValue* selectedOption) + (shadows + 1)
            setValue((numberValue* selectedOption) + (numberValue * shadows));
        }

        if(hours === 10){
            let initaialvalue = ((numberValue* selectedOption) + (numberValue * shadows))
            let percentage = parseFloat(initaialvalue * (70/100))
            let finalValue = parseFloat(initaialvalue + percentage)

            setValue(finalValue.toFixed(2));

        }

        if(hours === 4){
            // console.log(numberValue* selectedOption * shadows * 2);
            let initaialvalue = ((numberValue* selectedOption) + (numberValue * shadows) )
            let percentage = parseFloat(initaialvalue * (200/100))
            let finalValue = parseFloat(initaialvalue + percentage)

            setValue(finalValue.toFixed(2));
        }

        // if(hours === 1){
        //     // console.log(numberValue* selectedOption * shadows * 3);
        //     let initaialvalue = ((numberValue* selectedOption) + (numberValue * shadows) )
        //     let percentage = parseFloat(initaialvalue * (300/100))
        //     let finalValue = parseFloat(initaialvalue + percentage)

        //     setValue(finalValue.toFixed(2));
        // }

        if(hours === 48){
            console.log(numberValue* selectedOption * shadows * 0.05);
            let initaialvalue = ((numberValue* selectedOption) + (numberValue * shadows))
            let percentage = parseFloat(initaialvalue * (5/100))
            let finalValue = parseFloat(initaialvalue - percentage)

            setValue(finalValue.toFixed(2));
        }

        if(hours === 72){
            console.log(numberValue* selectedOption * shadows * 0.1);
            let initaialvalue = ((numberValue* selectedOption) + (numberValue * shadows))
            let percentage = parseFloat(initaialvalue * (10/100))
            let finalValue = parseFloat(initaialvalue - percentage)

            setValue(finalValue.toFixed(2));
        }

        if(hours === 92){
            console.log(numberValue* selectedOption * shadows * 0.15);
            let initaialvalue = ((numberValue* selectedOption) + (numberValue * shadows))
            let percentage = parseFloat(initaialvalue * (15/100))
            let finalValue = parseFloat(initaialvalue - percentage)

            setValue(finalValue.toFixed(2));
        }


        // console.log(selectedOption * numberValue * shadows);
    }
    return (
        <div className=''>
          
            <div className='mt-12 bg-white hover:bg-[#fdfddc] rounded-lg calculator 2xl:w-[300px]'>
                <form onSubmit={handleOnClick}>
                    <div>
                        <h3 className='pricingHeader pt-10'>Multi-Clipping Path Service</h3>
                        <p className='text-gray-400 mb-4'>Hand Made Service</p>
                        <div className='mb-4'>
                            <img className='pricingImg' src={multiClippingPath} alt="Studio MetroDesk Clipping Path Service" />
                        </div>
                        <div className='flex justify-center'>
                            <p className='dollar-sign'>$</p>
                            <p className='price-text'>02</p>
                        </div>
                        <p className='mb-4'>per image price</p>
                    </div>
                    <div>
                        <input type="number" className='input input-bordered w-[239px] mb-4' name="number"></input> <br />
                        <div className='mb-4'>
                            <select name="option" className="select input input-bordered w-[239px]">
                                <option disabled selected>Choose Price</option>
                                <option value="2">Basic - $2</option>
                                <option value="4">Simple - $4</option>
                                <option value="7">Medium -$7</option>
                                <option value="10">Complex - $10</option>
                                <option value="15">Super Complex - $15</option>
                            </select>
                        </div>
                        <div className='mb-4'>
                            <select name="shadows" className="select input input-bordered w-[239px]">

                                <option value="0">No Drop Shadow</option>
                                <option value="0.5">Drop Shadow - $0.5</option>
                                <option value="0.5">Custom Shadow - $0.5</option>
                                <option value="0.5">Reflection Shadow -$0.5</option>
                                <option value="0.5">Keep Shadow - $0.5</option>

                            </select>
                        </div>
                        <div className='mb-4'>
                            <select name="hours" className="select input input-bordered w-[239px]">

                                <option value="20">20 Hours - No Extra</option>
                                <option value="10">10 Hours - 70% Extra</option>
                                <option value="4">4 Hours - 200% Extra</option>
                                {/* <option value="1">1 Hour ASAP - 300% Extra</option> */}
                                <option value="48">48 Hour - 5% Discount</option>
                                <option value="72">72 Hour - 10% Discount</option>
                                <option value="92">92 Hour - 15% Discount</option>
                            </select>
                        </div>
                    </div>
                    <p className='text-blue-900 text-xl mt-3'> TOTAL QUOTATION</p>
                <p className='text-blue-700 text-4xl font-semibold mt-3'>${value}</p>
                    <div>
                        <button type="submit" className='tryBtn'>Try Us Free</button>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default MultiClippingPathCalculator;