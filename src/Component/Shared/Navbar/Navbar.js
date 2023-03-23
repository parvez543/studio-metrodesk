import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/Metrodesk-Studio-Logo.png"
import { FaBars} from "react-icons/fa";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='bg-white shadow-md'>
            <div className="container mx-auto py-2">
                <div className="navbar bg-base-100 justify-between justify-center">
                    <div className="navbar-center">


                        <Link to="/"><img src={logo} className="w-[120px] md:w-[200px]" alt="This is The Logo Of Studio MetroDesk" /></Link>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal ulItem">
                            <li><a>PROCESS</a></li>
                            <li><a>PRICING</a></li>
                            <li tabIndex={0}>
                                <a>
                                    SERVICE
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                {/* <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul> */}
                            </li>
                            <li tabIndex={0}>
                                <a>
                                    CUSTOMERS
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                {/* <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul> */}
                            </li>
                            <li tabIndex={0}>
                                <a>
                                    ABOUT
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                {/* <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul> */}
                            </li>
                           <Link to="/contact"><li><a>CONTACT</a></li></Link>
                            <li tabIndex={0}>
                                <a>
                                    SIGN IN/UP
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                {/* <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul> */}
                            </li>
                        </ul>
                        
                    </div>
                   <div className='flex gap-4 justify-end w-full lg:w-[250px]'>
                   <button className='freeTrailBtn hidden lg:block py-2 px-4'>Free Trial</button>
                   <button className='getAQuote py-[10px] px-4'>Get A Quote</button>
                   </div>
                   
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <FaBars className='text-3xl'/>
                        </label>
                        {/* <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;