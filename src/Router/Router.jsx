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
import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutUs";
import Support from "../Pages/Support";
import ContactUs from "../Pages/ContcatUs";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import DashboardHome from "../DashboardLayout/DashboardHome";
import DashboardDetails from "../Context/DashboardDetails";
import DashboardMostLiked from "../DashboardLayout/DashboardMostLiked";
import DashBoardAddRecipe from "../DashboardLayout/DashBoardAddRecipe";
import DashBoardMyAllRecipe from "../DashboardLayout/DashBoardMyAllRecipe";
import AllUserRecipe from "../DashboardLayout/AllUserRecipe";




export const router = createBrowserRouter([

    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: HomePage
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/addrecipes',
                element: <PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>
            },
            {
                path: '/allrecipes',
                Component: AllRecipes,
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path: '/allrecipes/:id',
                loader: ({ params }) => fetch(`https://recipebook-pearl.vercel.app/recipes/${params.id}`),
                element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>
            },
            {
                path: '/myrecipes',
                element: <PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>
            },
            {
                path: '/aboutus',
                Component: AboutUs
            },
            {
                path: '/support',
                Component: Support
            },
            {
                path: '/contactus',
                Component: ContactUs
            }
        ]


    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                path:'dashboardhome',
                element:<DashboardHome/>
            },
            {
                path:'dashdetails',
                element:<DashboardDetails/>
            },
            {
                path:"myallrecipes",
                element:<DashBoardMyAllRecipe/>
            },
            {
                path:'mostlikedrecipe',
                element:<DashboardMostLiked/>
            },
            {
                path:'addrecipe',
                element:<DashBoardAddRecipe/>
            },
            {
                path:'alluserrecipe',
                element:<AllUserRecipe/>
            }
        ]
    },

    {
        path: '*',
        Component: ErrorPage
    }

])