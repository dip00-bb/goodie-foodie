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
    <div className=" rounded-sm overflow-hidden shadow-xl bg-white hover:shadow-violet-300 transition-shadow duration-300">
      <img
        src={imageURL}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 text-center mb-6">{title}</h3>

        <div className="text-sm space-y-1 mb-4 flex justify-between">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-2xl text-gray-500">⏱</span>
            <span className="font-semibold text-2xl text-gray-500" >{prepTime} min</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-2xl">🌍</span>
            <span className="font-semibold text-2xl text-gray-500">{cuisine}</span>
          </div>
          <div className="flex flex-col items-center">
            {categories?.length > 0 && (
              <span className="font-semibold text-2xl">🏷</span>
            )}
            <span className="font-semibold text-2xl text-gray-500">{categories[0]}</span>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <span><FaHeart size={25} fill="red"/></span>
          <span className="text-2xl font-semibold text-gray-500">{likes}</span>
        </div>

        <Link to={`/allrecipes/${_id}`} className="w-full bg-yellow-500 hover:bg-violet-500 text-white font-semibold py-2 px-4 rounded-sm transition duration-300 cursor-pointer">
          See Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
