import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import "./FAQCard.css"

const FAQCard = ({question}) => {
    console.log(question)
  
    const [item, setItem] = useState(false)
    return (
        <div>
           <div className='flex items-center justify-between accordion py-4'>
                <h2 className='font-bold text-xl cursor-pointer' onClick={() => setItem(!false)}>{question.questions}</h2>
                <p onClick={() => setItem(!item)}>{item ? <FaAngleUp className='text-3xl cursor-pointer text-gray-500'/> : <FaAngleDown className='text-3xl cursor-pointer text-gray-500'/>}</p>
           </div>
            {
                item && <div>
                    <p className='text-xl py-6'>{question.answer}</p>
                </div>
            }
        </div>
    );
};

export default FAQCard;