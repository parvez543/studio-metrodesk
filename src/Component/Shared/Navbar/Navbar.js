import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/Metrodesk-Studio-Logo.png"
import { FaBars} from "react-icons/fa";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className='bg-white shadow-md'>
            <div className="container mx-auto py-6 lg:px-20">
                <div className="navbar justify-between justify-center">
                    <div className="navbar-center">


                        <Link to="/"><img src={logo} className="w-[120px] md:w-[200px]" alt="This is The Logo Of Studio MetroDesk" /></Link>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal ulItem">
                          <Link to="/process"><li><a>PROCESS</a></li></Link>
                            <li><a>PRICING</a></li>
                            <li tabIndex={0} className="aboutBar">
                                <a>
                                    SERVICE
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                   <Link to="/clippingpath"><li><a>Clipping Path</a></li></Link>
                                    <Link to="/multiclippingpath "><li><a>Multi-Clipping Path</a></li></Link>
                                    <Link to="/ghostmannequine"><li><a>Ghost Mannequin</a></li></Link>
                                    <li><a>Photo Retouching</a></li>
                                    <li><a>Vector Conversion</a></li>
                                    <li><a>Embroidery Digitizing</a></li>
                                </ul>
                            </li>
                            <li tabIndex={0} className="aboutBar">
                                <a>
                                    CUSTOMERS
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <Link to="/photographers"><li><a>Photographers</a></li></Link>
                                    <Link to="/ecommerce"><li><a>E-Commerce Business</a></li></Link>
                                    <Link to="/studioandagencies"><li><a>Studio And Agencies</a></li></Link>
                                    <Link to="/growingbrands"><li><a>Growing Brands</a></li></Link>
                                </ul>
                            </li>
                            <li tabIndex={0} className="aboutBar">
                                <a>
                                    ABOUT
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <p></p>
                                    <Link to="/testimonial"> <li><a>Testimonials</a></li></Link>
                                    <Link to="/aboutus"><li><a>About Us</a></li></Link>
                                    <Link to='/meettheteam'><li><a>Our Team</a></li></Link>
                                    <Link to="/career"><li><a>Careers</a></li></Link>
                                    <Link to="/faq"><li><a>FAQs</a></li></Link>
                                </ul>
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
                        <label tabIndex={0} className="btn btn-ghost block lg:hidden">
                            <FaBars className='text-3xl block lg:hidden'/>
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