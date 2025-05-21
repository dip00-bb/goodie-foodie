import React from 'react';
import { useLoaderData } from 'react-router';

const RecipeDetails = () => {
    const singleRecipe=useLoaderData();
    console.log(singleRecipe)
    return (
        <div>
            
        </div>
    );
};

export default RecipeDetails;