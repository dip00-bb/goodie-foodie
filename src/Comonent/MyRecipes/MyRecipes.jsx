import React, { useState, useEffect, use } from 'react';

import SingleMyRes from './SingleMyRes';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const MyRecipes = () => {
    const [recipes,setRecipes]=useState([]);

    const {user}=use(AuthContext);
    const uid=user?.uid

    useEffect(() => {
        fetch(`https://recipebook-pearl.vercel.app/myRecipes/${uid}`)
        .then(res=>res.json())
        .then(data=>setRecipes(data))
        .catch(error=>toast.error(error.message))

    }, []);



    return (
        <div className='grid grid-col-1 lg:grid-cols-4 gap-8 p-8 '>
            {
                recipes.map(recipe=><SingleMyRes key={recipe._id} recipe={recipe} setRecipes={setRecipes} recipes={recipes} />)
            }

        </div>
    );
};

export default MyRecipes;