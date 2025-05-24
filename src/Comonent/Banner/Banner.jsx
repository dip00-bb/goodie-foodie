import React from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
    return (
        <div className="relative w-full h-[500px] overflow-hidden shadow-xl">
            <img
                src="/banners.jpg"
                alt="Recipe Book"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/5 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-8xl font-bold mb-4 drop-shadow-lg hover:text-yellow-400 delay-200 duration-500 hover:shadow-2xl">
                    <Typewriter
                        words={['GOODIE', 'FOODIE']}
                        loop={10}
                        cursor
                        cursorStyle='__'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}

                    />
                </h1>
                <p className="text-lg md:text-3xl max-w-xl drop-shadow-md text-gray-200 font-semibold mb-6">
                    Discover delicious recipes from around the world and cook with passion!
                </p>

                <Link to='/allrecipes' href="#_" class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-yellow-400 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out ">All Recipe</span>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
