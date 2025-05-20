import { createBrowserRouter } from "react-router";
import Layout from "../WebsiteLayout/Layout";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../ErrorPage/Errorpage";
import AddRecipe from "../Comonent/AddRecipie/AddRecipe";


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
            }
        ]


    },
    {
        path:'*',
        Component:ErrorPage
    }

])