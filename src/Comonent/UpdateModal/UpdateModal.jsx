import React, { useState } from 'react';
import { FaCross } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import { TiDeleteOutline } from 'react-icons/ti';
// import { toast } from 'react-toastify';

const UpdateModal = ({ recipe, recipes, setRecipes, setHidden }) => {
    const { _id, imageURL, title, ingredients, instruction, prepTime, categories, cuisine } = recipe;


    const [checkedItem, setItem] = useState(categories)
    const [cuisineType, setCusine] = useState('Italian');

    const handleSubmitData = (e, id) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const categories = { categories: checkedItem }
        Object.assign(data, categories)
        const cuisine = { cuisine: cuisineType }
        Object.assign(data, cuisine)


        fetch(`https://recipebook-pearl.vercel.app/recipes/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {

                if (result.modifiedCount) {
                    const notFilteredRecipes = recipes.filter(recipe => recipe._id !== id);
                    Object.assign(data, { _id: id })
                    setRecipes([...notFilteredRecipes, data])

                    setHidden(true);


                }

            })
    }

    const handleSelected = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setItem([...checkedItem, value]);
        } else {
            const filteredItem = checkedItem.filter(item => item !== value);
            setItem(filteredItem)
        }
    }

    const handleCusine = e => {
        const value = e.target.value;
        setCusine(value)
    }
    return (
        <div className="p-8 border-0 bg-black/80 w-[80vw]">
            <div><TiDeleteOutline fill='red' size={25} className='cursor-pointer' onClick={()=>setHidden(true)}/></div>
            <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-8">
                🍽️ Update Your Recipe
            </h2>

            <form onSubmit={(e) => handleSubmitData(e, _id)} className="">

                <div className='flex justify-between w-full gap-2.5 mb-2'>
                    <div className="flex-1">
                        <label className="block mb-2 text-sm font-medium text-white ">Image URL</label>
                        <input
                            type="text"
                            name='imageURL'
                            defaultValue={imageURL}
                            placeholder="Paste image URL here"
                            className="w-full border border-white text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>


                    <div className='flex-1'>
                        <label className="block mb-2 text-sm font-medium text-white flex-1">Title</label>
                        <input
                            type="text"
                            name='title'
                            defaultValue={title}
                            placeholder="Delicious Pasta"
                            className="w-full border border-white text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>
                </div>


                <div className='mb-2'>
                    <label className="block mb-2 text-sm font-medium text-white">Cuisine Type</label>
                    <select onChange={handleCusine} defaultValue={cuisine} className="w-full border bg-black/55 border-white text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none">
                        <option>Italian</option>
                        <option>Mexican</option>
                        <option>Indian</option>
                        <option>Chinese</option>
                        <option>Others</option>
                    </select>
                </div>


                <div className='flex justify-between w-full gap-2.5 mb-2'>
                    <div className="flex-1">
                        <label className="block mb-2 text-sm font-medium text-white">Ingredients</label>
                        <textarea
                            rows="3"
                            name='ingredients'
                            defaultValue={ingredients}
                            placeholder="E.g. 2 cups of flour, 1/2 tsp salt..."
                            className="w-full border border-white text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-2 text-sm font-medium text-white">Instructions</label>
                        <textarea
                            rows="4"
                            name='instruction'
                            defaultValue={instruction}
                            placeholder="Step-by-step preparation..."
                            className="w-full border border-white text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>
                </div>

                <div className='flex justify-between gap-2.5 mb-2'>

                    <div className='flex-1' >
                        <label className="block mb-2 text-sm font-medium text-white">Prep Time (minutes)</label>
                        <input

                            type="number"
                            placeholder="30"
                            defaultValue={prepTime}
                            name='prepTime'
                            min="1"
                            className="w-full border border-white text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>


                    <div className='flex-1'>
                        <label className="block mb-2 text-sm font-medium text-white">Like Count</label>
                        <input
                            type="number"
                            name='likes'
                            value="0"
                            readOnly
                            className="w-full border border-gray-200 bg-black/55 text-white px-4 py-2 rounded-lg cursor-not-allowed"
                        />
                    </div>
                </div>

                <div className='mb-2'>
                    <label className="block mb-2 text-sm font-medium text-white">Categories</label>
                    <div className="flex flex-wrap gap-2 items-center">
                        {

                            ["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((category, index) => (
                                <div className='flex gap-2' key={index}>
                                    <input onChange={handleSelected} type='checkbox' value={category} id={index} defaultChecked={categories?.includes(category)} />
                                    <label className='text-white' htmlFor={index}>{category}</label>
                                </div>
                            ))

                        }
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2">
                    <button
                        type="submit"
                        className="w-full py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-lg rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                    >
                        🔄 Update Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateModal;