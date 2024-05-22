import React, { useState } from "react";

import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import { Link } from "react-router-dom";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const navElementClassLarge = `block relative font-code text-2xl uppercase text-n-8 transition-colors  hover:text-red-500  px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold cursor-pointer lg:leading-5 lg:hover-text-n-1 xl:px-12`;

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 border-b border-n-6/50 lg:bg-n-1/80 lg:backdrop-blur-sm ${
          openNavigation ? "bg-n-1" : "bg-n-1/20 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between lg:justify-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            }  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-1/90 lg:static lg:flex  lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row ">
              <a href="#about" className={navElementClassLarge}>
                About
              </a>
              <a href="#vision" className={navElementClassLarge}>
                Vision
              </a>
              <a
                href="#hero"
                className="hidden lg:block text-3xl px-8 font-semibold cursor-pointer "
              >
                RAVIAN AI<span className=" text-red-500">.</span>
              </a>
              <a href="#offerings" className={navElementClassLarge}>
                Offerings
              </a>
              <a href="#contact" className={navElementClassLarge}>
                Contact
              </a>
            </div>

            <HamburgerMenu />
          </nav>

          <div className="relative z-2 flex flex-row items-center justify-between lg:flex-row w-full lg:w-0 ">
            <a
              to="/"
              className=" block text-3xl px-8 font-semibold lg:hidden cursor-pointer "
            >
              RAVIAN AI<span className=" text-red-500">.</span>
            </a>
            <button
              className=" mr-1  ml-auto lg:hidden  bg-black px-3 h-10 rounded-sm"
              onClick={toggleNavigation}
            >
              <MenuSvg openNavigation={openNavigation} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

// lg:mx-auto
