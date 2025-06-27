
import React, { use } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import RecipeCard from './DashboardComponent/RecipeCard';
import useTitle from '../CustomHook/useTitle';

const fetchAllRecipes = async (uid) => {
    const res = await axios.get(`https://recipebook-pearl.vercel.app/myRecipes/${uid}`);
    return res.data;
};

const DashboardMostLiked = () => {



    useTitle('Most Liked')

    const { user } = use(AuthContext);

    const { data: allRecipes = [], isLoading } = useQuery({
        queryKey: ['allRecipes', user?.uid],
        queryFn: () => fetchAllRecipes(user.uid),
        enabled: !!user?.uid, // prevent firing before user is loaded
    });

    const mostLiked = [...allRecipes]
        .sort((a, b) => Number(b.likes) - Number(a.likes))
        .slice(0, 8);

    if (isLoading) {
        return (
            <p className="text-center text-yellow-500 text-xl font-oderna py-10">
                Loading most liked recipes...
            </p>
        );
    }

    return (
        <div className="px-6 py-10">
            <h2 className="text-3xl md:text-4xl font-oderna font-bold text-yellow-600 mb-16">
                Most Liked Recipes 🍽️
            </h2>

            {mostLiked.length === 0 ? (
                <p className="text-center text-gray-500 font-oderna text-xl py-8">
                    You haven’t liked or added any recipe yet.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                    {mostLiked.map((recipe) => (
                        <RecipeCard key={recipe._id} recipe={recipe} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DashboardMostLiked;
