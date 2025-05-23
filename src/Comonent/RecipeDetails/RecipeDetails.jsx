import randomColor from 'randomcolor';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const RecipeDetails = () => {

    const singleRecipe = useLoaderData();
    const { imageURL, title, ingredients, instruction, categories, cuisine, likes, prepTime, _id } = singleRecipe
    const [totalLike, setLike] = useState(parseInt(likes));
    console.log("total like",totalLike)
    // const { user } = use(AuthContext);

    const handleLike = () => {
        setLike(totalLike + 1)
        fetch(`http://localhost:2000/recipes/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({totalLike})
        }).then(res => res.json())
            .then(data => console.log("like data", data))
    }

    console.log("jjj", singleRecipe)

    return (
        <div className="max-w-2xl mx-auto bg-[#efeae7] rounded-lg overflow-hidden py-5 p-8">

            <div className='relative px-6'>
                <div className='w-[20rem] h-[20rem] rounded-full '>
                    <img
                        src={imageURL}
                        alt={title}
                        className="w-full h-full rounded-full object-cover"
                    />
                </div>
                <div className="absolute bottom-4 left-50 bg-white px-4 py-2 shadow-md rounded">
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    <p className="text-sm text-gray-500">{cuisine}</p>
                </div>
            </div>

            <div className='px-6 py-5'>
                <div className="p-6 bg-white/70">

                    <div className="mb-4 wrap-break-word">
                        <h3 className="text-lg font-semibold mb-2 border-b pb-1">Ingredients</h3>
                        <p className="text-sm text-gray-700">
                            {ingredients}
                        </p>
                    </div>

                    <div className="mb-4 wrap-break-word">
                        <h3 className="text-lg font-semibold mb-2 border-b pb-1">Instructions</h3>
                        <p className="text-sm text-gray-700">
                            {
                                instruction
                            }
                        </p>
                    </div>


                    <div className="flex justify-between text-sm text-gray-600">
                        <span className='text-xl font-semibold'>⏱️ Prep Time: {prepTime} mins</span>
                        <span className='text-xl font-semibold cursor-pointer'><span onClick={handleLike}>❤️</span> Likes:{totalLike}</span>
                    </div>

                    <div className="mt-4">
                        <h4 className="text-sm font-semibold mb-1">Categories:</h4>
                        <div className="flex flex-wrap gap-2">
                            {
                                categories.map(category => <span style={{ background: randomColor({ luminosity: 'light', format: 'hsla' }) }} className={`px-2 py-1 rounded-sm font-light`} >{category}</span>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;