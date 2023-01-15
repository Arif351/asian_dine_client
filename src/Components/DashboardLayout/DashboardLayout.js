import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to="/Dashboard">All Users</Link></li>
                        <li><Link to="/AllUsers">Users Details</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;