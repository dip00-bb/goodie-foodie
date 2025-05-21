import React from 'react';

const SingleMyRes = ({recipe}) => {
    const {imageURL,title,ingredients,instruction,prepTime,likes,categories,cuisine}=recipe
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 max-w-md mx-auto">
            <img src={imageURL} alt={title} className="w-full h-48 object-cover" />
            <div className="p-5 space-y-2">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <p className="text-sm text-gray-500"><span className="font-medium">Cuisine:</span> {cuisine}</p>
                <p className="text-sm text-gray-500"><span className="font-medium">Prep Time:</span> {prepTime}</p>
                <p className="text-sm text-gray-500"><span className="font-medium">Category:</span> {categories?.join(', ')}</p>
                <p className="text-sm text-gray-700 wrap-break-word"><span className="font-medium">Ingredients:</span> {ingredients}</p>
                <p className="text-sm text-gray-700 wrap-break-word"><span className="font-medium">Instructions:</span> {instruction}</p>

                <div className="flex items-center justify-between pt-3">
                    <span className="text-sm text-gray-600">❤️ {likes} Likes</span>
                    <div className="flex gap-2">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded"
                        >
                            Update
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-3 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMyRes;