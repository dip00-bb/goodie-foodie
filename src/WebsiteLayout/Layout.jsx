import React from 'react';
import Navbar from '../Comonent/Navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer} from 'react-toastify';
import Footer from '../Comonent/Footer/Footer';
const Layout = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className='py-8'>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
            <ToastContainer />
        </div>
    );
};

export default Layout;