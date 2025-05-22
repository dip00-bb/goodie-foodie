import { createBrowserRouter } from "react-router";
import Layout from "../WebsiteLayout/Layout";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../ErrorPage/Errorpage";
import AddRecipe from "../Comonent/AddRecipie/AddRecipe";
import AllRecipes from "../Comonent/AllRecipes/AllRecipes";
import Loader from "../Loader/Loader";
import RecipeDetails from "../Comonent/RecipeDetails/RecipeDetails";
import MyRecipes from "../Comonent/MyRecipes/MyRecipes";


export const router=createBrowserRouter([

    {
        path:'/',
        Component:Layout,
        children:[
            {
                path:'/login',
                Component:Login
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/addrecipes',
                element:<PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>
            },
            {
                path:'/allrecipes',
                loader:()=>fetch('http://localhost:2000/recipes'),
                Component:AllRecipes,
                hydrateFallbackElement:<Loader></Loader>
            },
            {
                path:'/allrecipes/:id',
                loader:({params})=>fetch(`http://localhost:2000/recipes/${params.id}`),
                element:<PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>
            },
            {
                path:'/myrecipes',
                element:<PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>
            }
        ]


    },
    {
        path:'*',
        Component:ErrorPage
    }

])