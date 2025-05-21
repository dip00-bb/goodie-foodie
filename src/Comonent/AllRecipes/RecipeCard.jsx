import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  const {
    imageURL,
    title,
    prepTime,
    cuisine,
    likes,
    categories,
    _id
  } = recipe;


  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-pink-300 transition-shadow duration-300">
      <img
        src={imageURL}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2 text-center mb-6">{title}</h3>

        <div className="text-sm space-y-1 mb-4 flex justify-between">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-2xl">⏱</span>
            <span className="font-semibold text-2xl" >{prepTime} min</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-2xl">🌍</span>
            <span className="font-semibold text-2xl">{cuisine}</span>
          </div>
          <div className="flex flex-col items-center">
            {categories?.length > 0 && (
              <span className="font-semibold text-2xl">🏷</span>
            )}
            <span className="font-semibold text-2xl">{categories[0]}</span>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <span><FaHeart size={25} fill="red"/></span>
          <span className="text-2xl font-semibold">{likes}</span>
        </div>

        <Link to={`/allrecipes/${_id}`} className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 cursor-pointer">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
