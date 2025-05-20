import { createBrowserRouter } from "react-router";
import Layout from "../WebsiteLayout/Layout";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
                path:'/details',
                element:<PrivateRoute><div>RESt</div></PrivateRoute>
            }
        ]


    }

])