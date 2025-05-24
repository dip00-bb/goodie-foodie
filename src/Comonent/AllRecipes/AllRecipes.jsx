
import RecipeCard from './RecipeCard';
import { useEffect, useState } from 'react';
import NoRecipe from '../../NoRecipie/NoRecipe';
import Loader from '../../Loader/Loader';

const AllRecipes = () => {
    const [allRecipes, setAllRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
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

    return (
        <div className='p-8'>
            <div className="dropdown mb-4">
                <div tabIndex={0} role="button" className="btn m-1">Filter</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <button onClick={() => filterByCuisine("All")}>All</button>
                    <button onClick={() => filterByCuisine("Mexican")}>Mexican</button>
                    <button onClick={() => filterByCuisine("Indian")}>Indian</button>
                    <button onClick={() => filterByCuisine("Italian")}>Italian</button>
                    <button onClick={() => filterByCuisine("Chinese")}>Chinese</button>
                </ul>
            </div>

            {loading ? (
                <Loader />
            ) : filteredRecipes.length === 0 ? ( 
                <NoRecipe />
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        filteredRecipes.map(recipe => (
                            
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default AllRecipes;
