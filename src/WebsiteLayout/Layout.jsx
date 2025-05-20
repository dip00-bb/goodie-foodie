import React from 'react';
import Navbar from '../Comonent/Navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer} from 'react-toastify';
const Layout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>

            <ToastContainer />
        </div>
    );
};

export default Layout;