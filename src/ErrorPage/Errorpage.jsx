import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center text-center px-4">
            <img
                src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                alt="Empty plate icon"
                className="w-40 mb-6 animate-bounce"
            />

            <h1 className="text-6xl font-extrabold text-yellow-600 mb-4">404</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-2">Oops! The page you're hungry for is missing.</p>
            <p className="text-md text-gray-600 mb-6">It seems the recipe you're looking for isn't on the menu.</p>

            <Link
                to="/"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-bold transition"
            >
                🍔 Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;
