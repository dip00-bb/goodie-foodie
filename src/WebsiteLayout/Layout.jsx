import React from 'react';
import Navbar from '../Comonent/Navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer} from 'react-toastify';
import Footer from '../Comonent/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';





AOS.init()


const Layout = () => {
    return (
        <div >
            <header className='sticky top-0 z-10'>
                <Navbar />
            </header>
            <main>
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