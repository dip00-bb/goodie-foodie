
import RecipeCard from './RecipeCard';
import { useEffect, useState } from 'react';
import NoRecipe from '../../NoRecipie/NoRecipe';
import Loader from '../../Loader/Loader';
import useTitle from '../../CustomHook/useTitle';

const AllRecipes = () => {

    useTitle('All Recipe')

    const [allRecipes, setAllRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://recipebook-pearl.vercel.app/recipes')
            .then(res => res.json())
            .then(data => {
                setAllRecipes(data);
                setFilteredRecipes(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error.message);
                setLoading(false);
            });
    }, []);

    const filterByCuisine = (cuisine) => {
        if (cuisine === "All") return setFilteredRecipes(allRecipes);
        const filtered = allRecipes.filter(recipe => recipe.cuisine === cuisine);
        setFilteredRecipes(filtered);
    };

    const handleSort = (order) => {
        const sorted = [...filteredRecipes].sort((a, b) => {
            const titleA = a.title.toLowerCase();
            const titleB = b.title.toLowerCase();
            if (order === "asc") return titleA.localeCompare(titleB);
            else return titleB.localeCompare(titleA);
        });
        setFilteredRecipes(sorted);
    };

    const handleSearch = (value) => {
        setSearchTerm(value);
        const filtered = allRecipes.filter(recipe =>
            recipe.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredRecipes(filtered);
    };

    return (
        <div className='p-8'>
            <div className="flex justify-between  gap-4 mb-6 items-center">
                {/* Filter Dropdown */}



                {/* Sort Dropdown */}


                {/* <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Click  ⬇️</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div> */}

                
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-yellow-400 border-violet-500">Filter</div>
                    <ul tabIndex={0} className="dropdown-content menu rounded-box z-10 w-52 p-2 shadow space-y-2 bg-white">
                        <button className='text-gray-500' onClick={() => filterByCuisine("All")}>All</button>
                        <button className='text-gray-500' onClick={() => filterByCuisine("Mexican")}>Mexican</button>
                        <button className='text-gray-500' onClick={() => filterByCuisine("Indian")}>Indian</button>
                        <button className='text-gray-500' onClick={() => filterByCuisine("Italian")}>Italian</button>
                        <button className='text-gray-500' onClick={() => filterByCuisine("Chinese")}>Chinese</button>
                    </ul>
                </div>

                {/* 🔍 Search Bar */}
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="input input-bordered w-full md:w-64 bg-amber-50 focus:border-yellow-400 focus:outline-none text-gray-500"
                />

                <div className="dropdown dropdown-end">

                    <div tabIndex={0} role="button" className="btn m-1 bg-yellow-400 border-violet-500">Sort</div>
                    <ul tabIndex={0} className="dropdown-content menu rounded-box z-10 w-52 p-2 shadow space-y-2 bg-white">
                        <button className='text-gray-500' onClick={() => handleSort("asc")}>Title A-Z</button>
                        <button className='text-gray-500' onClick={() => handleSort("desc")}>Title Z-A</button>
                    </ul>
                </div>

            </div>

            {/* Recipe Grid */}
            {loading ? (
                <Loader />
            ) : filteredRecipes.length === 0 ? (
                <NoRecipe />
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {
                        filteredRecipes.map(recipe => (
                            <RecipeCard key={recipe._id} recipe={recipe} />
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default AllRecipes;
