import React from 'react';
import "./DataAndSequrity.css"
import data from "../../data/dataandSequrity"
import DataAndSequrityCard from './DataAndSequrityCard';

const DataAndSequrity = () => {
    return (
        <div className='container mx-auto px-10 lg:px-20 2xl:px-56 pt-8 pb-16'>
        <div>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-left text-[#7A80BD] mb-6'>Data And Sequrity</h2>
        </div>
        <div>
            {
                data?.map(em => <DataAndSequrityCard key={em.id} em={em}/>)
            }
        </div>
    </div>
    );
};

export default DataAndSequrity;