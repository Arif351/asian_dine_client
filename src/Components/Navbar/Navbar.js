import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import logo from '../../Resturant/logos/burger logo6.png'
import { AuthContext } from '../Authentication/AuthContext/AuthProvider';


const Navbar = () => {

    // const params = useParams();

    // const { data: foodName = [] } = useQuery({
    //     queryKey: ['foodList'],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/foodList/${params.id}`)
    //         const data = await res.json();
    //         console.log(data);
    //         return data;
    //     }
    // })
    const { user, logout } = useContext(AuthContext)


    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menuItems = <>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu"></Link>
            <Link>
                Menu
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-8 text-white text-2xl font-semibold font-mono z-10 absolute bg-black bg-opacity-75">
                <li><Link className='hover:text-yellow-500'>Biryani</Link></li>
                <li><Link className='hover:text-yellow-500'>Pizza</Link></li>
                <li><Link className='hover:text-yellow-500'>Burger</Link></li>
                <li><Link className='hover:text-yellow-500'>Juice</Link></li>
                <li><Link className='hover:text-yellow-500'>Lunch</Link></li>
                <li><Link className='hover:text-yellow-500'>Dinner</Link></li>
            </ul>
        </li >
        <li><Link to="/news">News</Link></li>
        <li><Link to="/about">About</Link></li>

        {user?.email ?
            <>
                <li> <button>Dashboard</button></li>
                <li> <button onClick={handleLogout}>Logout</button></li>
            </>
            : <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </>
        }
    </>

    // to={`/foodList/${_id}`}
    // to={`/foodList/${_id}`}
    // to={`/foodList/${_id}`}
    // to={`/foodList/${_id}`}
    // to={`/foodList/${_id}`}
    // to={`/foodList/${_id}`}

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
                        <img src="https://i.ibb.co/GpJTQQ8/burger-logo6.png" alt="" />
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