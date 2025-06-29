
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';


const CardLoader = () => {

    const [homeRec, setHomeRec] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [limit, setLimit] = useState(6);


    useEffect(() => {

        fetch(`https://recipebook-pearl.vercel.app/homerecipe/${limit}`)
            .then(res => res.json())
            .then(data => setHomeRec(data))
            .catch(error => toast.warn(error.message))
    }, [limit])



    return (
        <div className=''>
            <p className=' lg:text-6xl mb-8 text-center my-6 text-3xl font-extrabold text-yellow-400 '>Top Recipes</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-4'>
                {
                    homeRec.map(recipe =>


                    (
                        
                        <div data-aos="flip-down" data-aos-duration='1100' key={recipe._id} className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-xl rounded-sm">
                            <div className="h-48 w-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                {recipe.imageURL ? (
                                    <img src={recipe.imageURL} alt={recipe.title} className="object-cover w-full h-full" />
                                ) : (
                                    <div className="text-gray-400 text-xl font-semibold">No Image</div>
                                )}
                            </div>
                            <div className="p-4 space-y-2">
                                <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
                                <p className="text-sm text-gray-600">Cuisine: <span className="font-medium">{recipe.cuisine}</span></p>
                                <p className="text-sm text-gray-600">Likes: <span className="font-medium">{recipe.likes}</span></p>

                                <Link to={`/allrecipes/${recipe._id}`}>
                                    <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-400 rounded hover:bg-white group mt-2 cursor-pointer">
                                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                                            View Details
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='flex justify-center'>
                <Link to='/allrecipes' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-400 rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">See All</span>
                </Link>
            </div>
        </div>

    );
};

export default CardLoader;