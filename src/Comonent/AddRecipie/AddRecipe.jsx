
import React from 'react';

const AddRecipe = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-lime-500 via-lime-500 to-lime-900 flex items-center justify-center px-4 py-10">
            <div className="w-full max-w-3xl bg-lime-700/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-0">
                <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-8">
                    🍽️ Share Your Recipe
                </h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="col-span-1 md:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Image URL</label>
                        <input
                            type="text"
                            placeholder="Paste image URL here"
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            placeholder="Delicious Pasta"
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Cuisine Type</label>
                        <select className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none">
                            <option>Italian</option>
                            <option>Mexican</option>
                            <option>Indian</option>
                            <option>Chinese</option>
                            <option>Others</option>
                        </select>
                    </div>


                    <div className="col-span-1 md:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Ingredients</label>
                        <textarea
                            rows="3"
                            placeholder="E.g. 2 cups of flour, 1/2 tsp salt..."
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Instructions</label>
                        <textarea
                            rows="4"
                            placeholder="Step-by-step preparation..."
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Prep Time (minutes)</label>
                        <input
                            type="number"
                            placeholder="30"
                            min="1"
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Like Count</label>
                        <input
                            type="number"
                            value="0"
                            readOnly
                            className="w-full border border-gray-200 bg-gray-100 text-gray-400 px-4 py-2 rounded-lg cursor-not-allowed"
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Categories</label>
                        <div className="flex flex-wrap gap-4">
                            {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat, idx) => (
                                <label key={idx} className="flex items-center gap-2">
                                    <input type="checkbox" className="form-checkbox text-yellow-500" />
                                    <span className="text-sm text-gray-700">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <button
                            type="button"
                            className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-lg rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                        >
                            ➕ Add Recipe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;
