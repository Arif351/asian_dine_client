import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Resturant/logos/burger logo6.png'

const Navbar = () => {


    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu"></Link>
            <Link>
                Menu
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-8 text-white text-2xl font-semibold font-mono z-10 absolute bg-black bg-opacity-75">
                <li><Link to="/Biryani" className='hover:text-yellow-600'>Biryani</Link></li>
                <li><Link to="/Pizza" className='hover:text-yellow-600'>Pizza</Link></li>
                <li><Link to="/Burger" className='hover:text-yellow-600'>Burger</Link></li>
                <li><Link to="/Juice" className='hover:text-yellow-600'>Juice</Link></li>
                <li><Link to="/Lunch" className='hover:text-yellow-600'>Lunch</Link></li>
                <li><Link to="/Dinner" className='hover:text-yellow-600'>Dinner</Link></li>
            </ul>
        </li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/about">About</Link></li>
    </>



    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <label tabIndex={0} className="avatar mr-3">
                    <div className="w-16">
                        <img src={logo} alt="" />
                    </div>
                </label>
                <Link to='/' className="text-2xl font-serif">Asian Dine's</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">

            </div>
        </div>
    );
};

export default Navbar;