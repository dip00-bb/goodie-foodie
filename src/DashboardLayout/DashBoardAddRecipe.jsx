



import React, { use, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';
import useTitle from '../CustomHook/useTitle';

const DashBoardAddRecipe = () => {
  useTitle('Add Recipe');

  const [checkedItem, setItem] = useState([]);
  const [cuisineType, setCusine] = useState('Italian');
  const { user } = use(AuthContext);

  const handleSubmitData = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    Object.assign(data, {
      categories: checkedItem,
      cuisine: cuisineType,
      UID: user.uid,
    });

    fetch(`https://recipebook-pearl.vercel.app/recipes`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          form.reset();
          setItem([]);
          Swal.fire({
            title: '✅ Recipe Added!',
            text: 'Your recipe has been successfully added.',
            icon: 'success',
            confirmButtonColor: '#facc15', // yellow-400
            confirmButtonText: 'Okay'
          });
        }
      });
  };

  const handleSelected = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setItem([...checkedItem, value]);
    } else {
      setItem(checkedItem.filter(item => item !== value));
    }
  };

  const handleCusine = (e) => {
    setCusine(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
      <div className="rounded-3xl p-8 border-2 border-violet-300 shadow-md w-full max-w-4xl">
        <h2 className="text-4xl font-extrabold text-yellow-500 text-center mb-8 font-oderna">
          🍽️ Share Your Recipe
        </h2>

        <form onSubmit={handleSubmitData} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
          {/* Image URL */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="text"
              name="imageURL"
              placeholder="Paste image URL here"
              className="w-full border border-violet-400 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Delicious Pasta"
              className="w-full border border-violet-400 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Cuisine Type */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Cuisine Type</label>
            <select
              onChange={handleCusine}
              className="w-full border border-violet-400 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            >
              <option>Italian</option>
              <option>Mexican</option>
              <option>Indian</option>
              <option>Chinese</option>
              <option>Others</option>
            </select>
          </div>

          {/* Ingredients */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Ingredients</label>
            <textarea
              rows="3"
              name="ingredients"
              placeholder="E.g. 2 cups of flour, 1/2 tsp salt..."
              className="w-full border border-violet-400 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Instructions */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Instructions</label>
            <textarea
              rows="4"
              name="instruction"
              placeholder="Step-by-step preparation..."
              className="w-full border border-violet-400 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Prep Time */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Prep Time (minutes)</label>
            <input
              type="number"
              name="prepTime"
              placeholder="30"
              min="1"
              className="w-full border border-violet-400 px-4 py-2 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          {/* Likes */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Like Count</label>
            <input
              type="number"
              name="likes"
              value={0}
              readOnly
              className="w-full border border-gray-200 bg-gray-100 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed"
            />
          </div>

          {/* Categories */}
          <div className="col-span-1 md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-700">Categories</label>
            <div className="flex flex-wrap gap-4">
              {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((category, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <input
                    onChange={handleSelected}
                    type="checkbox"
                    value={category}
                    id={`cat-${index}`}
                    className="accent-yellow-500"
                  />
                  <label htmlFor={`cat-${index}`} className="text-gray-700">{category}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
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

export default DashBoardAddRecipe;
