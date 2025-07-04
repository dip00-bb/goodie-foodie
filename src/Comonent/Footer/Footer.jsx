import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { allImages } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative">

      <div className="absolute -top-10 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M321.39 56.36C177.41 92.61 45.6 90.76 0 81.55V0h1200v27.35c-42.38 10.1-111.18 29.6-191 35.51-136.49 9.89-250.37-28.15-371.88-42.29C502.59 8.17 401.46 27.39 321.39 56.36z"
            className="fill-gray-900"
          ></path>
        </svg>
      </div>


      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 grid md:grid-cols-3 gap-8 items-center">

        <div>
          <Link to='/' className="text-3xl font-bold text-yellow-400"> <img className='w-20' src={allImages.weblogo} alt="logo" /> </Link>
          <p className="text-sm mt-2 text-gray-400">
            The ultimate destination for food lovers. Explore, cook, and share!
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=100090006800919" target="_blank" className="bg-white text-gray-900 p-2 rounded-full">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/dip-chondo-2b871b360/" target="_blank" className="bg-white text-gray-900 p-2 rounded-full">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/dipchondo/" target="_blank" className="bg-white text-gray-900 p-2 rounded-full">
              <FaInstagram />
            </a>
          </div>
        </div>


        <div className="md:flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2 md:ml-3">Company</h3>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li><NavLink to='/aboutus' className="hover:underline">About Us</NavLink></li>
            <li><NavLink to='/support' className="hover:underline">Support</NavLink></li>
            <li><NavLink to='/contactus' className="hover:underline">Contact Us</NavLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm text-gray-400">
            Email:{" "}
            <a href="#" className="text-yellow-400 hover:underline">
              contact@recipebook.com
            </a>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Support: +880-123-456-789
          </p>
        </div>
      </div>


      <div className="text-center text-gray-500 text-sm border-t border-gray-800 py-4 px-4">
        &copy; {new Date().getFullYear()} GOODIE FOODIE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

