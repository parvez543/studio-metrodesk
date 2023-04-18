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
    <div className='block lg:hidden mt-[10px]'>
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
                to="/process"
                onClick={() => setIsOpen(false)}
                className="uppercase hover:text-gray-400 ease-in-out duration-300"
              >
                How It Works
              </Link>

              {/* <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="uppercase hover:text-gray-400 ease-in-out duration-300"
                >
                  Our Services
                </Link> */}

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
                          <Link
                            to="/ghostmannequine"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Ghost Mannequin
                          </Link>
                          <Link
                            to="/photoretouching"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Photo Retouching
                          </Link>
                          <Link
                            to="/vectorconversion"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Vector Conversion
                          </Link>
                          <Link
                            to="/embroidery"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Embroidery Designing
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
                  Company
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
                            to="/testimonials"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Testimonials
                          </Link>
                          <Link
                            to="/aboutus"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            About Us
                          </Link>
                          <Link
                            to="/meettheteam"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Our Team
                          </Link>
                          <Link
                            to="/career"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Careers
                          </Link>
                          <Link
                            to="/faq"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            FAQs
                          </Link>
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
                            E-Commerce Business
                          </Link>
                          <Link
                            to="/studioandagencies"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Studio And Agencies
                          </Link>
                          <Link
                            to="/growingbrands"
                            onClick={() => setIsOpen(false)}
                            class="uppercase hover:text-gray-400 ease-in-out duration-300 text-base"
                          >
                            Growing Brands
                          </Link>
                        </div>

                      </div>
                    )}
                  </>
                </div>
              </div>
              <Link
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className="uppercase hover:text-gray-400 ease-in-out duration-300"
              >
                Pricing
              </Link>
              <div className='block lg:hidden'>
                <div className='flex flex-col justify-start items-start mt-[8px]'>
                  <Link to="" class="text-White color-blue-900 freeTrailBtn py-2 mb-6 menu-btn-ot mr-2"><a>Get A Quote</a></Link>
                  <Link class="text-White color-blue-900 loginBtn py-2 px-4 menu-btn-ot mr-2 mt-[12px]">Login</Link>
                  <Link class="text-White color-blue-900 getStartBtn py-2 px-4 menu-btn-ot mr-2 mt-[12px]">Get Started</Link>
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