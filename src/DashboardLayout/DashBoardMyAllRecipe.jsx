import React, { use } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import useTitle from '../CustomHook/useTitle';



const deleteRecipe = async (id) => {
    const res = await axios.delete(`https://recipebook-pearl.vercel.app/recipes/${id}`);
    return res.data;
};

const DashBoardMyAllRecipe = () => {

    useTitle('My Recipes')

    const { user } = use(AuthContext)

    const fetchAllRecipes = async () => {
        const res = await axios.get(`https://recipebook-pearl.vercel.app/myRecipes/${user.uid}`);
        return res.data;
    };




    const queryClient = useQueryClient();

    const { data: allRecipe = [], isLoading } = useQuery({
        queryKey: ['allRecipes'],
        queryFn: fetchAllRecipes,
    });

    const mutation = useMutation({
        mutationFn: deleteRecipe,
        onSuccess: () => {
            queryClient.invalidateQueries(['allRecipes']);
            Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Recipe has been deleted.',
                timer: 1500,
                showConfirmButton: false,
            });
        },
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this recipe!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#facc15',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                mutation.mutate(id);
            }
        });
    };

    if (isLoading) return <p className="text-center text-yellow-500 font-oderna">Loading recipes...</p>;

    return (
        <div className="overflow-x-auto p-6 bg-white border-2 border-yellow-400 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-yellow-600 font-oderna mb-6">All Recipes</h2>
            <table className="min-w-full table-auto text-left border border-gray-300 rounded-lg overflow-hidden shadow-sm text-black">
                <thead className="bg-yellow-100 text-gray-800 uppercase text-sm font-semibold">
                    <tr>
                        <th className="p-4 border">Image</th>
                        <th className="p-4 border">Title</th>
                        <th className="p-4 border">Cuisine</th>
                        <th className="p-4 border">Categories</th>
                        <th className="p-4 border">Prep Time</th>
                        <th className="p-4 border">Likes</th>
                        <th className="p-4 border text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allRecipe.map((recipe, index) => (
                        <tr
                            key={recipe._id}
                            className={`transition hover:bg-yellow-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                }`}
                        >
                            <td className="p-4 border">
                                <img
                                    src={recipe.imageURL}
                                    alt={recipe.title}
                                    className="w-16 h-16 object-cover rounded-md shadow"
                                />
                            </td>
                            <td className="p-4 border font-semibold text-gray-700">{recipe.title}</td>
                            <td className="p-4 border">{recipe.cuisine}</td>
                            <td className="p-4 border text-sm text-gray-600">{recipe.categories.join(', ')}</td>
                            <td className="p-4 border">{recipe.prepTime} mins</td>
                            <td className="p-4 border">{recipe.likes}</td>
                            <td className="p-4 border text-center space-x-2">
                                <Link
                                    to={`/allrecipes/${recipe._id}`}
                                    className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500 transition font-medium"
                                >
                                    View
                                </Link>
                                <button
                                    onClick={() => handleDelete(recipe._id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition font-medium"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {allRecipe.length === 0 && (
                        <tr>
                            <td colSpan="7" className="text-center p-6 text-gray-500 font-oderna">
                                No recipes found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DashBoardMyAllRecipe;
