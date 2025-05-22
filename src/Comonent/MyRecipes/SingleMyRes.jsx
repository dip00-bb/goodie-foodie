import React, { useState } from 'react';
import Swal from 'sweetalert2';
import UpdateModal from '../UpdateModal/UpdateModal';

const SingleMyRes = ({ recipe, setRecipes, recipes }) => {
    const { _id, imageURL, title, ingredients, instruction, prepTime, likes, categories, cuisine } = recipe;


    const [hidden, setHidden] = useState(true);
    console.log("hidden hidden",hidden)
    const handleDeleteRecipe = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:2000/recipes/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.acknowledged) {
                            const remainingRecipes = recipes.filter(rec => rec._id !== id);
                            setRecipes(remainingRecipes)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }


    // const handleUpdateRecipe=()

    return (
        <>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 lg:min-w-md lg:max-w-md mx-auto relative">
                <img src={imageURL} alt={title} className="w-full h-48 object-cover" />
                <div className="p-5 space-y-2">
                    <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                    <p className="text-sm text-gray-500"><span className="font-medium">Cuisine:</span> {cuisine}</p>
                    <p className="text-sm text-gray-500"><span className="font-medium">Prep Time:</span> {prepTime}</p>
                    <p className="text-sm text-gray-500"><span className="font-medium">Category:</span> {categories?.join(', ')}</p>
                    <p className="text-sm text-gray-700 wrap-break-word"><span className="font-medium wrap-break-word">Ingredients:</span> {ingredients}</p>
                    <p className="text-sm text-gray-700 wrap-break-word"><span className="font-medium wrap-break-word">Instructions:</span> {instruction}</p>

                    <div className="flex items-center justify-between pt-3">
                        <span className="text-sm text-gray-600">❤️ {likes} Likes</span>
                        <div className="flex gap-2">
                            <button onClick={() => {setHidden(false)}} className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded cursor-pointer py-1 px-3">Update</button>
                            <button onClick={() => handleDeleteRecipe(_id)} className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-3 rounded cursor-pointer">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${hidden ? 'hidden' : 'block'} absolute z-10 top-48 left-[38%]`}>
                <UpdateModal recipe={recipe} recipes={recipes} setRecipes={setRecipes} setHidden={setHidden}/>
            </div>
        </>

    );
};

export default SingleMyRes;