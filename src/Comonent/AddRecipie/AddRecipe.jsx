


import React, { use, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';

const AddRecipe = () => {

    const [checkedItem, setItem] = useState([])
    const [cuisineType, setCusine] = useState('Italian');
    const {user}=use(AuthContext);
    console.log("user user user",user.uid)
    const handleSubmitData = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        const categories = { categories: checkedItem }
        Object.assign(data, categories)
        const cuisine = { cuisine: cuisineType }
        const uid={UID:user.uid}
        Object.assign(data, cuisine);
        Object.assign(data,uid);
        console.log(data)

        fetch(`http://localhost:2000/recipes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Recipe Added Successfully")
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
    // useEffect(() => {
    //     console.log(checkedItem);
    //     console.log(cuisineType)
    // }, [checkedItem, cuisineType])

    return (
        <div style={{ backgroundImage: `url('./recipe_full.jpg')` }} className="min-h-screen flex items-center justify-center px-4 py-10">
            <div className="rounded-3xl p-8 border-0">
                <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-8">
                    🍽️ Share Your Recipe
                </h2>

                <form onSubmit={handleSubmitData} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="col-span-1 md:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-white">Image URL</label>
                        <input
                            type="text"
                            name='imageURL'
                            placeholder="Paste image URL here"
                            className="w-full border border-white text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">Title</label>
                        <input
                            type="text"
                            name='title'
                            placeholder="Delicious Pasta"
                            className="w-full border border-white text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">Cuisine Type</label>
                        <select onChange={handleCusine} className="w-full border bg-black/55 border-white text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none">
                            <option>Italian</option>
                            <option>Mexican</option>
                            <option>Indian</option>
                            <option>Chinese</option>
                            <option>Others</option>
                        </select>
                    </div>


                    <div className="col-span-1 md:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-white">Ingredients</label>
                        <textarea
                            rows="3"
                            name='ingredients'
                            placeholder="E.g. 2 cups of flour, 1/2 tsp salt..."
                            className="w-full border border-white text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-white">Instructions</label>
                        <textarea
                            rows="4"
                            name='instruction'
                            placeholder="Step-by-step preparation..."
                            className="w-full border border-white text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">Prep Time (minutes)</label>
                        <input

                            type="number"
                            placeholder="30"
                            name='prepTime'
                            min="1"
                            className="w-full border border-white text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
                        />
                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">Like Count</label>
                        <input
                            type="number"
                            name='likes'
                            value="0"
                            readOnly
                            className="w-full border border-gray-200 bg-black/55 text-white px-4 py-2 rounded-lg cursor-not-allowed"
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-white">Categories</label>
                        <div className="flex flex-wrap gap-2 items-center">
                            {

                                ["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((category, index) => (
                                    <div className='flex gap-2' key={index}>
                                        <input onChange={handleSelected} type='checkbox' value={category} id={index} />
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
                            ➕ Add Recipe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;
