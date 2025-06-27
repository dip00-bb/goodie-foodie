import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useTitle from '../CustomHook/useTitle';

const fetchRecipes = async () => {
  const res = await axios.get('https://recipebook-pearl.vercel.app/recipes');
  return res.data;
};

const AllUserRecipe = () => {


    useTitle('All Recipe')
  const { data: recipes = [], isLoading } = useQuery({
    queryKey: ['allUserRecipes'],
    queryFn: fetchRecipes,
  });

  if (isLoading) {
    return <p className="text-center text-yellow-500 text-xl font-oderna py-10">Loading Recipes...</p>;
  }

  return (
    <div className="p-6 bg-white rounded-xl border-2 border-violet-300 shadow-lg overflow-x-auto">
      <h2 className="text-3xl font-oderna text-yellow-500 mb-6">🍽️ All User Recipes</h2>

      <table className="table-auto w-full text-left border border-gray-200">
        <thead className="bg-yellow-100 text-gray-800">
          <tr>
            <th className="p-4 border font-medium">Image</th>
            <th className="p-4 border font-medium">Title</th>
            <th className="p-4 border font-medium">Cuisine</th>
            <th className="p-4 border font-medium">Categories</th>
            <th className="p-4 border font-medium">Prep Time</th>
            <th className="p-4 border font-medium">Likes</th>
          </tr>
        </thead>

        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe._id} className="hover:bg-yellow-50 transition duration-200">
              <td className="p-4 border">
                <img
                  src={recipe.imageURL}
                  alt={recipe.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>
              <td className="p-4 border font-semibold">{recipe.title}</td>
              <td className="p-4 border">{recipe.cuisine}</td>
              <td className="p-4 border">{recipe.categories?.join(', ')}</td>
              <td className="p-4 border">{recipe.prepTime} mins</td>
              <td className="p-4 border text-yellow-500 font-bold">{recipe.likes}</td>
            </tr>
          ))}

          {recipes.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center p-6 text-gray-500 font-oderna">
                No recipes found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllUserRecipe;
