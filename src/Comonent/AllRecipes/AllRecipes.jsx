
import { useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';


const AllRecipes = () => {
    const allRecipes = useLoaderData();


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 '>
            {
                allRecipes.map(recipe => <RecipeCard recipe={recipe} />)
            }
        </div>
    );
};

export default AllRecipes;