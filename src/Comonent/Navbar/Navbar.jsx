import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { allImages } from '../../assets/assets';

const Navbar = () => {

    const { user, signout } = use(AuthContext);
    const [isHidden, setHidden] = useState(true)

    const link = <>
        <li><NavLink className='text-xl font-medium hover:text-violet-500' to='/'>Home</NavLink></li>
        <li><NavLink className='text-xl font-medium hover:text-violet-500' to='/allrecipes'>All Recipes</NavLink></li>
        {
            user && <> <li><NavLink className='text-xl font-medium hover:text-violet-500' to='/addrecipes'>Add Recipes</NavLink></li>
                    <li><NavLink className='text-xl font-medium hover:text-violet-500' to='/dashboard/dashboardhome'>Dashboard</NavLink></li>
                </>
        }

        <li><NavLink className='text-xl font-medium hover:text-violet-500' to='/aboutus'>About us</NavLink></li>
        <li><NavLink className='text-xl font-medium hover:text-violet-500' to='/support'>Support</NavLink></li>
        <li><NavLink className='text-xl font-medium hover:text-violet-500' to='/contactus'>Contact Us</NavLink></li>
    </>
    const [theme, setTheme] = useState("light");

    // Sync theme with document
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    const noUsers = <div className="navbar-end flex gap-5"><Link className='btn hidden lg:flex' to='/register'>Register</Link><Link className='btn hidden lg:flex' to='/login'>Login</Link></div>

    return (
        <div className="navbar bg-yellow-400 px-8 lg:px-16 rounded-b-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="space-y-3 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            link
                        }
                        {/* <Link className='btn md:flex text-center my-2' to='/register'>Register</Link>
                        <Link className='btn md:flex ' to='/login'>Login</Link> */}
                    </ul>
                </div>
                <Link to='/' className="text-3xl font-bold text-yellow-400"> <img className='w-20' src={allImages.weblogo} alt="logo" /> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" gap-5 menu-horizontal px-1">
                    {
                        link
                    }


                </ul>
            </div>





            <div className='navbar-end'>
                {
                    user ? <div className='flex gap-5'>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div onClick={() => setHidden(!isHidden)} className="w-10 rounded-full relative">
                                <img
                                    alt='not provide'
                                    src={user.photoURL} />
                            </div>
                        </div>
                        <div className={`${isHidden ? 'hidden' : 'block'} absolute top-15 right-5 p-3 rounded-xl z-10`}>
                            <p className='bg-gray-100 px-6 py-2 mb-3 rounded-md dark:text-black'>{user.displayName}</p>

                            <button onClick={() => { signout(); setHidden(true) }} className='bg-gray-100 px-6 py-2 rounded-md cursor-pointer dark:text-black'>
                                Logout
                            </button>
                        </div>
                    </div> : noUsers


                }

                <button className="ml-5" onClick={toggleTheme}>
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
            </div>

        </div>
    );
};

export default Navbar;