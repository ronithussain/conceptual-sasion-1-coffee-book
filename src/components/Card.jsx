import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";

const Card = ({coffee, handleRemove}) => {
    const {pathname} = useLocation()

    const {name, image, category, origin,type,id, rating, popularity} = coffee || {} // jodi kono karone coffee object k na pay tahole or er pore object k nibe.......
    
    
    return (
        <div className='flex-relative border-2 rounded-lg p-2 '>
           <Link 
           to={`/coffee/${id}`}
           className='transition hover:scale-105 rounded-xl overflow-hidden'
           >
            <figure className='w-full h-48  overflow-hidden'>
                <img className='rounded-lg  w-full h-36' src={image} alt="" />
            </figure>
            <div className='p-2'>
                <h1 className='text-xl'>Name: {name}</h1>
                <p>Category: {category}</p>
                <p>Type: {origin}</p>
                <p>Rating: {rating}</p>
                <p>Popularity: {popularity}</p>
            </div>
           </Link>
           {
            pathname === '/dashboard' && (
            <div onClick={()=> handleRemove(id)} className='absolute  lg:right-[61%] md:right-[48%] lg:top-[28%] md:top-[85%] text-2xl bg-red-600 p-2 rounded-full top-[37%] right-[0%]'><FaRegTrashAlt></FaRegTrashAlt></div>)
           }
        </div>
    );
};

export default Card;