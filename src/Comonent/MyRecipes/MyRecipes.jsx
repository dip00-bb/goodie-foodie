import React from 'react';
import { useLoaderData } from 'react-router';
import SingleMyRes from './SingleMyRes';

const MyRecipes = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div className='grid grid-cols-3'>
            {
                data.map(recipe=><SingleMyRes key={recipe._id} recipe={recipe}/>)
            }
        </div>
    );
};

export default MyRecipes;