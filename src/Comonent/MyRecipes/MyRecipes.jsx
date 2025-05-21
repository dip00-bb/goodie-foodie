import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleMyRes from './SingleMyRes';

const MyRecipes = () => {
    const data=useLoaderData();
    const [recipes,setRecipes]=useState(data)
    console.log(data)
    return (
        <div className='grid grid-cols-3'>
            {
                recipes.map(recipe=><SingleMyRes key={recipe._id} recipe={recipe} setRecipes={setRecipes} recipes={recipes}/>)
            }
        </div>
    );
};

export default MyRecipes;