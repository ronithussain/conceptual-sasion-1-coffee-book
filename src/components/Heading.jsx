import React from 'react';

const Heading = ({title, subTitle}) => {
    return (
        <div className='flex flex-col w-full justify-center items-center my-12'>
            <h1 className='text-xl md:text-2xl lg:text-4xl mb-4 font-bold'> {title}</h1>
            <p className='text-xs md:text-base text-gray-700 text-center font-thin'>{subTitle}</p>
        </div>
    );
};

export default Heading;