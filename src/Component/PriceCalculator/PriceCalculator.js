import React, { useState } from 'react';
import "./PriceCalculator.css"
import clippingPath from "../../assets/images/price_page/clipping_path.png"
import MultiClippingPathCalculator from '../MultiClippingPathCalculator/MultiClippingPathCalculator';
import GhostManequineCalculator from '../GhostManequineCalculator/GhostManequineCalculator';
import PhotoRetouchingCalculator from '../PhotoRetouchingCalculator/PhotoRetouchingCalculator';

const PriceCalculator = () => {

    const [value, setValue] = useState(0.00)

    const handleOnClick = (event) => {
        event.preventDefault()
        const form = event.target
        const numberValue = parseInt(form.number.value)
        const selectedOption = form.option.value
        const shadows = parseFloat(form.shadows.value)
        const hours = parseInt(form.hours.value)

        if (hours === 20) {
            console.log((numberValue * selectedOption) + (numberValue * shadows) * 1);
            // setValue((numberValue* selectedOption) + (shadows + 1)
            setValue((numberValue * selectedOption) + (numberValue * shadows) * 1);
        }

        if (hours === 10) {
            let initaialvalue = ((numberValue * selectedOption) + (numberValue * shadows) * 1)
            let percentage = parseFloat(initaialvalue * (70 / 100))
            let finalValue = parseFloat(initaialvalue + percentage)

            setValue(finalValue.toFixed(2));

        }

        if (hours === 4) {
            // console.log(numberValue* selectedOption * shadows * 2);
            let initaialvalue = ((numberValue * selectedOption) + (numberValue * shadows) * 1)
            let percentage = parseFloat(initaialvalue * (200 / 100))
            let finalValue = parseFloat(initaialvalue + percentage)

            setValue(finalValue.toFixed(2));
        }

        if (hours === 1) {
            // console.log(numberValue* selectedOption * shadows * 3);
            let initaialvalue = ((numberValue * selectedOption) + (numberValue * shadows) * 1)
            let percentage = parseFloat(initaialvalue * (300 / 100))
            let finalValue = parseFloat(initaialvalue + percentage)

            setValue(finalValue.toFixed(2));
        }

        if (hours === 48) {
            console.log(numberValue * selectedOption * shadows * 0.05);
            let initaialvalue = ((numberValue * selectedOption) + (numberValue * shadows) * 1)
            let percentage = parseFloat(initaialvalue * (5 / 100))
            let finalValue = parseFloat(initaialvalue - percentage)

            setValue(finalValue.toFixed(2));
        }

        if (hours === 72) {
            console.log(numberValue * selectedOption * shadows * 0.1);
            let initaialvalue = ((numberValue * selectedOption) + (numberValue * shadows) * 1)
            let percentage = parseFloat(initaialvalue * (10 / 100))
            let finalValue = parseFloat(initaialvalue - percentage)

            setValue(finalValue.toFixed(2));
        }

        if (hours === 92) {
            console.log(numberValue * selectedOption * shadows * 0.15);
            let initaialvalue = ((numberValue * selectedOption) + (numberValue * shadows) * 1)
            let percentage = parseFloat(initaialvalue * (15 / 100))
            let finalValue = parseFloat(initaialvalue - percentage)

            setValue(finalValue.toFixed(2));
        }


        // console.log(selectedOption * numberValue * shadows);
    }

    return (
        <div className='py-20'>
            <div className='container mx-auto px-10 lg:px-20'>
                <h2 className='mb-3 text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7a80bd]'>Estimation Calculator Per Image Price</h2>
                <div className='line px-4'></div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 lg:px-28 2xl:px-64 '>
                <div className='mt-12 bg-white hover:bg-[#fdfddc] rounded-lg calculator 2xl:w-[300px]'>
                    <form onSubmit={handleOnClick}>
                        <div>
                            <h3 className='pricingHeader pt-10'>Clipping Path Service</h3>
                            <p className='text-gray-400 mb-4'>Hand Made Service</p>
                            <div className='mb-4'>
                                <img className='pricingImg' src={clippingPath} alt="Studio MetroDesk Clipping Path Service" />
                            </div>
                            <div className='flex justify-center'>
                                <p className='dollar-sign'>$</p>
                                <p className='price-text'>01</p>
                            </div>
                            <p className='mb-4'>per image price</p>
                        </div>
                        <div>
                            <input type="number" className='input input-bordered w-[239px] mb-4' name="number"></input> <br />
                            <div className='mb-4'>
                                <select name="option" className="select  input input-bordered w-[239px]">
                                    <option disabled selected>Choose Price</option>
                                    <option value="1">Basic - $1</option>
                                    <option value="2.5">Flat Rate - $2.5</option>
                                    <option value="5">Medium -$5</option>
                                    <option value="10">Complex - $10</option>
                                    <option value="16">Super Complex - $16</option>
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
                                    <option value="1">1 Hour ASAP - 300% Extra</option>
                                    <option value="48">48 Hour - 5% Discount</option>
                                    <option value="72">72 Hour - 10% Discount</option>
                                    <option value="92">92 Hour - 15% Discount</option>
                                </select>
                            </div>
                        </div>
                        <p className='text-blue-900 text-xl mt-3'> TOTAL QUOTATION</p>
                         <p className='text-blue-700 text-4xl font-semibold mt-3'>${value}</p>
                        <div>
                            <button type="submit" className='tryBtn '>Try Us Free</button>
                        </div>
                    </form>
                </div>
                <MultiClippingPathCalculator />
                <GhostManequineCalculator />
                <PhotoRetouchingCalculator/>
            </div>
        </div>

    );
};

export default PriceCalculator;