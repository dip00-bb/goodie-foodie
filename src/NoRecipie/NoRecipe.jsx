import { Link } from "react-router";

const NoRecipe = () => {
    return (
        <div className="w-full col-span-full flex flex-col items-center justify-center text-center space-y-4 py-45">
            <div className="text-6xl animate-bounce">🍽️</div>
            <h2 className="text-2xl font-bold text-gray-700">
                No recipes found 
            </h2>
            <p className="text-gray-500 text-sm max-w-md">
                Like your recipe is empty
            </p>

            <Link to='/addrecipes' className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-400 rounded hover:bg-white group mt-2 cursor-pointer">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                    Add A Recipe
                </span>
            </Link>
        </div>
    );
};

export default NoRecipe;