

import React, { use } from 'react';
import { allImages } from '../assets/assets';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import RecipeCard from './DashboardComponent/RecipeCard';
import { AuthContext } from '../Context/AuthContext';
import LikesBarChart from './Charts/LikesBarChart';
import LikesPieChart from './Charts/LikesPieChart';
import useTitle from '../CustomHook/useTitle';

const DashboardHome = () => {

    useTitle('Overview')
    const { user } = use(AuthContext);

    const fetchData = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    const { data: userRecipes = [] } = useQuery({
        queryKey: ['userRecipes', user?.uid],
        queryFn: () => fetchData(`https://recipebook-pearl.vercel.app/myRecipes/${user.uid}`),
        enabled: !!user?.uid,
    });

    const { data: homeRecipe = [] } = useQuery({
        queryKey: ['homeRecipe', 8],
        queryFn: () => fetchData(`https://recipebook-pearl.vercel.app/homerecipe/${8}`),
    });

    const totalLikes = userRecipes.reduce((sum, recipe) => sum + Number(recipe.likes || 0), 0);

    const chartData = userRecipes.map((recipe) => ({
        name: recipe.title,
        likes: Number(recipe.likes || 0),
    }));

    return (
        <div className="flex flex-col justify-between gap-10 ">

            <div className="flex items-center">
                <div className="avatar text-center flex flex-col px-4">
                    <div className="ring-offset-base-100 w-22 rounded-full ring-2 ring-amber-200 ring-offset-2">
                        <img src={allImages.chefdoll} alt="Chef Avatar" />
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-3xl md:text-4xl lg:text-6xl font-oderna">Only The Best Recipes</p>
                    <p className="text-2xl text-gray-500 font-oderna">Profile Overview</p>
                </div>
            </div>


            <div className="flex flex-wrap gap-6 justify-between">

                <div className="w-full p-6 bg-white border-2 border-yellow-400 rounded-xl shadow-md hover:shadow-yellow-300 transition-all duration-300 cursor-pointer group">
                    <div className="flex flex-col items-start gap-4">
                        <p className="text-xl text-yellow-600 font-semibold uppercase tracking-wide font-oderna">
                            Your Stats
                        </p>
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-oderna font-bold group-hover:scale-105 transition-transform duration-300">
                            Total Recipe: {userRecipes?.length}
                        </p>
                    </div>
                </div>

                <div className="w-full p-6 bg-white border-2 border-yellow-400 rounded-xl shadow-md hover:shadow-yellow-300 transition-all duration-300 cursor-pointer group">
                    <div className="flex flex-col items-start gap-4">
                        <p className="text-xl text-yellow-600 font-semibold uppercase tracking-wide font-oderna">
                            Your Stats
                        </p>
                        <p className="text-3xl sm:text-4xl lg:text-5xl font-oderna font-bold group-hover:scale-105 transition-transform duration-300">
                            Total Likes: {totalLikes}
                        </p>
                    </div>
                </div>
            </div>


            {chartData?.length > 0 && (
                <div className="flex gap-8 justify-between">
                    <LikesBarChart data={chartData} />
                    <LikesPieChart data={chartData} />
                </div>
            )}

        </div>
    );
};

export default DashboardHome;
