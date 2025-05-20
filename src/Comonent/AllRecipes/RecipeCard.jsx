import React from "react";

const RecipeCard = ({ recipe }) => {
  const {
    imageURL,
    title,
    prepTime,
    cuisine,
    likes,
    categories
  } = recipe;

  // const handleShowRecipeDetails=(id)=>{
  //   fetch(`http://localhost:2000/recipes/${id}`)
  // }

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-pink-300 transition-shadow duration-300">
      <img
        src={imageURL}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

        <ul className="text-gray-600 text-sm space-y-1 mb-4">
          <li><span className="font-semibold">⏱ Prep Time:</span> {prepTime} mins</li>
          <li><span className="font-semibold">🌍 Cuisine:</span> {cuisine}</li>
          <li><span className="font-semibold">👍 Likes:</span> {likes}</li>
          {categories?.length > 0 && (
            <li><span className="font-semibold">🏷 Category:</span> {categories[0]}</li>
          )}
        </ul>

        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
          See Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
