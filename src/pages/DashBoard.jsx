import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import { getAllFavorites, removeFavorite } from '../utils';
import Card from '../components/Card';
import { useLocation } from 'react-router-dom';

const DashBoard = () => {
    const { pathname } = useLocation()

    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        const favorite = getAllFavorites()
        setCoffees(favorite)
    }, [])

    const handleRemove = id => {
        removeFavorite(id)
        const favorite = getAllFavorites()
        setCoffees(favorite)
    }
    return (
        <>
            <Heading
                title={'Welcome to Dashboard'}
                subTitle={'Manage coffees that you have previously added as favorite. You can view or remove them from here'}
            ></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mb-6'>
                {
                    coffees.map(coffee => <Card
                        handleRemove={handleRemove}
                        key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default DashBoard;