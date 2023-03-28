import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const EmbroideryCard = ({em}) => {
    const [item, setItem] = useState(false)
    return (
        <div className=''>
             <div className='flex items-center justify-between accordion py-4'>
                <h2 className='font-medium text-xl cursor-pointer' onClick={() => setItem(!false)}>{em.questions}</h2>
                <p onClick={() => setItem(!item)}>{item ? <FaAngleUp className='text-3xl cursor-pointer text-gray-500'/> : <FaAngleDown className='text-3xl cursor-pointer text-gray-500'/>}</p>
           </div>
            {
                item && <div>
                    <p className='text-gray-500 text-xl py-6 text-left'>{em.answer}</p>
                </div>
            }
        </div>

    )
};

export default EmbroideryCard;