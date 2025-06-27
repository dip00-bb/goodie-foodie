import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const RecipeCard = ({recipe}) => {

    const { imageURL, title, prepTime }=recipe
  return (
    <div className="w-[20rem] bg-[#fff7f5] p-4 rounded-2xl shadow-md text-center space-y-3">
      {/* Top Image */}
      <div className="flex justify-center -mt-12 mb-2">
        <img
          src={imageURL}
          alt={title}
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

      {/* Difficulty Level */}
      <div className="my-2">
        <span className="text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded-md">
          Intermediate
        </span>
      </div>

      {/* Info Section */}
      <div className="flex justify-center gap-6 text-sm text-gray-700 my-3">
        <div>
          <p className="font-semibold">{prepTime}</p>
          <p className="text-xs">Min</p>
        </div>
        <div>
          <p className="font-semibold">95</p>
          <p className="text-xs">Kcal</p>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/590/590685.png" // Meat icon
            alt="meat"
            className="w-5 h-5 mx-auto"
          />
          <p className="text-xs">Meat</p>
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex justify-center text-red-400 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar key={i} className={i === 5 ? 'text-gray-300' : ''} />
        ))}
      </div>

      {/* CTA */}
      <Link to={`/allrecipes/${recipe._id}`} className="w-full py-2 px-3 mt-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition">
        View Details
      </Link>
    </div>
  );
};

export default RecipeCard;
