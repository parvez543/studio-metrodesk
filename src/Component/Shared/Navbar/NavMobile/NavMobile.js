import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";


const NavMobile = () => {
  
        // ----It is the state to open the sidebar----
        const [isOpen, setIsOpen] = useState(false);
        const toggleDrawer = () => {
          // setIsOpen((prevState) => !prevState)
          setIsOpen(!isOpen);
        };
      
        // -----It is the state to expand the menu components-----
        const [open1, setOpen1] = useState(false);
        const toggle1 = () => {
          setOpen1(!open1);
        };
      
        const [open2, setOpen2] = useState(false);
        const toggle2 = () => {
          setOpen2(!open2);
        };
      
        const handleClick = () => {
          const elem = document.activeElement;
          if (elem) {
            elem?.blur();
          }
        };
    
    return (
        <div className='block lg:hidden'>
        <button
          onClick={toggleDrawer}
          className="text-4xl font-bold hover:text-gray-400 ease-in-out duration-300 w-[40px] flex justify-center items-center hover:border-r-4 hover:border-black"
        >
          <RiMenu3Line />
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          size={300}
          direction="right"
          lockBackgroundScroll={false}
          className="overflow-y-auto overflow-x-hidden"
        >
          <div className="w-full">
            <div className="flex justify-end mr-8 mt-6">
              <ImCross
                onClick={() => setIsOpen(false)}
                className="text-3xl font-bold hover:text-gray-400 ease-in-out duration-300 hover:cursor-pointer"
              />
            </div>
  
            <div className="w-full my-10">
              <div className="flex flex-col items-start text-lg font-semibold gap-6 w-full h-full pl-8">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="uppercase hover:text-gray-400 ease-in-out duration-300"
                >
                  Home
                </Link>
  
                <Link
                  to="/process"
                  onClick={() => setIsOpen(false)}
                  className="uppercase hover:text-gray-400 ease-in-out duration-300"
                >
                  Process
                </Link>
  
                <div className="flex gap-2">
                  <Link
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className="uppercase hover:text-gray-400 ease-in-out duration-300"
                  >
                    Services
                  </Link>
                  <div className="flex flex-col">
                    <button onClick={toggle1} className="mt-1">
                      {!open1 ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
                    </button>
                    <>
                      {open1 && (
                        <div className="relative right-[70px] mt-4">
                          <div className="flex flex-col items-start w-[250px] gap-2">
                            <Link
                              to="/clippingpath"
                              onClick={() => setIsOpen(false)}
                              class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                            >
                              Clipping Path
                            </Link>
                            <Link
                              to="/multiclippingpath"
                              onClick={() => setIsOpen(false)}
                              class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                            >
                              Multi Clipping Path
                            </Link>
                          </div>
                        </div>
                      )}
                    </>
                  </div>
                </div>
  
                <div className="flex gap-2">
                  <Link
                    to="/services"
                    onClick={() => setIsOpen(false)}
                    className="uppercase hover:text-gray-400 ease-in-out duration-300"
                  >
                    Customers
                  </Link>
                  <div className="flex flex-col">
                    <button onClick={toggle2} className="mt-1">
                      {!open2 ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
                    </button>
                    <>
                      {open2 && (
                        <div className="relative right-[95px] mt-4">
                          <div className="flex flex-col items-start w-[250px] gap-2">
                            <Link
                              to="/photographers"
                              onClick={() => setIsOpen(false)}
                              class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                            >
                              Photographers
                            </Link>
                            <Link
                              to="/ecommerce"
                              onClick={() => setIsOpen(false)}
                              class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                            >
                              E-Commerce Businesses
                            </Link>
                          </div>
                        </div>
                      )}
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
};

export default NavMobile;