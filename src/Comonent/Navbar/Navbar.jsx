import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {

    const { user, signout } = use(AuthContext);
    const [isHidden,setHidden]=useState(true)

    const link = <>
        <li><NavLink className='text-xl font-medium' to='/'>Home</NavLink></li>
        <li><NavLink className='text-xl font-medium' to='/allrecipes'>All Recipes</NavLink></li>
        <li><NavLink className='text-xl font-medium' to='/addrecipes'>Add Recipes</NavLink></li>
        <li><NavLink className='text-xl font-medium' to='/Myrecipes'>My Recipes</NavLink></li>
    </>


    const noUsers = <div className="navbar-end flex gap-5"><Link className='btn' to='/register'>Register</Link><Link className='btn' to='/login'>Login</Link></div>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            link
                        }

                    </ul>
                </div>
                <Link to='/' className="text-3xl font-bold text-yellow-400">GOODIE FOODIE</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        link
                    }
                </ul>
            </div>





            <div className='navbar-end'>
                {
                    user ? <div className='flex gap-5'>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div onClick={()=>setHidden(!isHidden)} className="w-10 rounded-full relative">
                                <img
                                    alt='not provide'
                                    src={user.photoURL} />
                            </div>
                        </div>
                        <div className={`${isHidden ? 'hidden':'block'} absolute top-15 right-5 p-3 rounded-xl`}>
                            <p className='bg-gray-100 px-6 py-2 mb-3 rounded-md'>{user.displayName}</p>

                            <button onClick={() => {signout(); setHidden(true)} } className='bg-gray-100 px-6 py-2 rounded-md cursor-pointer'>
                                Logout
                            </button>
                        </div>
                    </div> : noUsers


                }

                {
                    user && console.log(user.photoURL)
                }
            </div>

        </div>
    );
};

export default Navbar;