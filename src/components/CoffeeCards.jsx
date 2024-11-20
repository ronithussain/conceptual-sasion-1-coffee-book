import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';
// import { useParams } from 'react-router-dom';

const CoffeeCards = () => {
    const { category } = useParams();// ure theke dynamic data niye use korar jonno amra useParams use kori.....
    //   console.log(category)

    const data = useLoaderData();

    const [coffees, setCoffees] = useState([]); // category tabs er sathe jey data gulor mill ase tabs er name onujayi sey data gulokey jeno dekhay ....sejonno state declare and useEffect er extra kaj ta kora holo and map e data er bodole coffee k map kora holo........
    useEffect(() => {
        if (category) { // filter er moddhe ekta conditional chalano holo je , jodi category hoy tahole allCoffeeCategory dekhabe r jodi na hoy tahole home e all data dekhabe..........
            const allCoffeeCategory = [...data].filter(coffee => coffee.category === category)
            setCoffees(allCoffeeCategory)
        }
        else {
            setCoffees(data.slice(0, 6)) // jodi home 6 ta data dekhate chai tahole slice korbo....
        }
    }, [category, data]);

    const navigate = useNavigate(); //// jodi view all e shob card gulo eksathe dekhate chai tahole navigate('setCoffees.data') tahole shob data eksathe dekhabe....

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-6'>
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
            <button className='btn mb-4 btn-warning font-bold' onClick={()=> navigate('/coffees')}>View All</button>  
        </>
    );
};

export default CoffeeCards;