import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/Metrodesk-Studio-Logo.png"
import { FaBars } from "react-icons/fa";
import "./Navbar.css"
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
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
                            <Link to="/pricing"><li><a>PRICING</a></li></Link>
                            <li tabIndex={0} className="aboutBar">
                                <a>
                                    SERVICE
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <Link to="/clippingpath"><li><a>Clipping Path</a></li></Link>
                                    <Link to="/multiclippingpath "><li><a>Multi-Clipping Path</a></li></Link>
                                    <Link to="/ghostmannequine"><li><a>Ghost Mannequin</a></li></Link>
                                    <Link to="/photoretouching"><li><a>Photo Retouching</a></li></Link>
                                    <Link to="/vectorconversion"><li><a>Vector Conversion</a></li></Link>
                                    <Link to="/embroidery"><li><a>Embroidery Digitizing</a></li></Link>
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

                    <div>
                        <button onClick={toggleDrawer} className='block lg:hidden ml-6'><FaBars /></button>
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='right'
                            className='bla bla bla'
                        >
                            <ul className="menu  ulItem">
                                <Link to="/process"><li><a>PROCESS</a></li></Link>
                                <Link to="/pricing"><li><a>PRICING</a></li></Link>
                                <li tabIndex={0} className="aboutBar">
                                    <a>
                                        SERVICE
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </a>
                                    <ul className="p-2">
                                        <Link to="/clippingpath"><li><a>Clipping Path</a></li></Link>
                                        <Link to="/multiclippingpath "><li><a>Multi-Clipping Path</a></li></Link>
                                        <Link to="/ghostmannequine"><li><a>Ghost Mannequin</a></li></Link>
                                        <Link to="/photoretouching"><li><a>Photo Retouching</a></li></Link>
                                        <Link to="/vectorconversion"><li><a>Vector Conversion</a></li></Link>
                                        <Link to="/embroidery"><li><a>Embroidery Digitizing</a></li></Link>
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
                            <div className='flex p-3'>
                                <button className='freeTrailBtn block lg:hidden py-2 px-4'>Free Trial</button>
                            </div>
                        </Drawer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;