import React, { useState, useEffect, use } from 'react';

import SingleMyRes from './SingleMyRes';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const MyRecipes = () => {
    const [recipes,setRecipes]=useState([]);
    console.log("resi resi jgsdkjksfdjj",recipes)
    const {user}=use(AuthContext);
    const uid=user?.uid
    console.log("res1",recipes)
    useEffect(() => {
        fetch(`http://localhost:2000/myRecipes/${uid}`)
        .then(res=>res.json())
        .then(data=>setRecipes(data))
        .catch(error=>toast.error(error.message))
        console.log("res2",recipes)
    }, []);


    return (
        <div className='grid grid-col-1 lg:grid-cols-2 gap-8 p-8'>
            {
                recipes.map(recipe=><SingleMyRes key={recipe._id} recipe={recipe} setRecipes={setRecipes} recipes={recipes}/>)
            }
            {
                console.log("res,res,res",recipes)
            }
        </div>
    );
};

export default MyRecipes;