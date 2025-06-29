import React, { use, useEffect, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { IoBookOutline } from 'react-icons/io5';
import { allImages } from '../assets/assets';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const DashboardLayout = () => {
    const [theme, setTheme] = useState("light");

    const { user } = use(AuthContext)

    console.log(user)



    // Sync theme with document
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };




    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>
                </div>

                <div className='min-h-full p-6 md:p-19'>
                    <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4"></ul>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu min-h-full w-80 p-4 bg-yellow-50 flex justify-between">


                    <div className="avatar text-center flex flex-col px-4 mt-8">
                        <p className='self-start font-oderna font-extrabold text-4xl mb-5 text-black'>Dashboard</p>
                        <div className="ring-primary ring-offset-base-100 w-22 rounded-full ring-offset-2">
                            <img src={user.photoURL} />
                        </div>
                        <p className='self-start text-2xl font-oderna font-bold text-black'>{user.displayName}</p>
                    </div>

                    <div className='justify-self-center'>
                        <li className='font-oderna text-2xl text-black'><NavLink to='/dashboard/dashboardhome' >Overview</NavLink></li>
                        <li className='font-oderna text-2xl text-black'><NavLink to='/dashboard/myallrecipes' >My Recipes</NavLink></li>
                        <li className='font-oderna text-2xl text-black'><NavLink to='/dashboard/mostlikedrecipe'>Most Liked</NavLink></li>
                        <li className='font-oderna text-2xl text-black'><NavLink to='/dashboard/alluserrecipe'>All Recipes</NavLink></li>
                        <li className='font-oderna text-2xl text-black'><NavLink to='/dashboard/addrecipe'>Add Item</NavLink></li>
                    </div>


                    <div className='justify-self-end px-4 flex justify-between items-center'>
                        <Link to='/' className="text-3xl font-bold text-yellow-400 mb-3"> <img className='w-20' src={allImages.weblogo} alt="logo" /> </Link>
                        <Link to='/' className='text-xl text-violet-600 flex items-center flex-row-reverse justify-center'> <ArrowRight /> <p className='mb-1'>Home</p></Link>
                        <button className="ml-5" onClick={toggleTheme}>
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
