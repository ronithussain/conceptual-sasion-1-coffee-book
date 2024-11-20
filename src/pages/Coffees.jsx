import { useLoaderData } from 'react-router-dom';
import Card from '../components/Card';
import { useState } from 'react';

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);

    const handleSort = sortBy => {
        if(sortBy == 'popularity'){
             //sort by popularity
             const sorted = [...data].sort((a, b) => b.popularity - a.popularity)
             setCoffees(sorted)
        }
        else if( sortBy == 'rating'){
            //sort by rating
            const sorted = [...data].sort((a, b) => b.rating - a.rating)
             setCoffees(sorted)
        }
    }
    return (
        <>
        <div className='flex sm:gap-y-0 gap-y-3 justify-between items-center my-12'>
            <div>
                <h1 className='text-3xl font-thin'>Sort Coffees by Popularity and Ratings</h1>
            </div>
            <div className='md:space-y-4 lg:space-x-4'>
                <button onClick={()=> handleSort('popularity')} className='btn btn-warning'>Sort By Popularity</button>
                <button onClick={()=> handleSort('rating')} className='btn btn-warning'>Sort By Rating</button>
            </div>
        </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-6'>
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default Coffees;