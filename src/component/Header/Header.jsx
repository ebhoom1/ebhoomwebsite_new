import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../assets/images/logo.png";
import goodfootlogo1 from "../../assets/images/goodfootlogo1.png";
import goodfootlogo2 from "../../assets/images/goodfootlogo2.png";
import goodfootlogo3 from "../../assets/images/goodfootlogo3.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle scroll event to change styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-500 ease-in ${
        isScrolled
          ? "bg-secondary text-white shadow-md hover:text-white"
          : "bg-white text-gray-700"
      }`}
    >
      <div className="nav-container container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4 gap-x-4 md:gap-x-8 lg:gap-x-16">
          {/* Logo */}
          <NavLink className="flex items-center" to="/">
            <div
              className={`rounded-full p-2 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md" : "bg-transparent"
              }`}
            >
              <img
                src={headerLogo}
                alt="EBHOOM - Environmental Monitoring and Pollution Control Solutions"
                className={`h-8 w-auto transition-transform duration-300 ${
                  isScrolled ? "scale-90" : "scale-100"
                }w-12 h-6  lg:w-[120px] lg:h-[26px] logo-img`}
                loading="eager"
              />
            </div>
          </NavLink>

          {/* Hamburger Menu for Mobile */}
          <button
            className={`block lg:hidden ${
              isScrolled ? "text-white" : "text-gray-700"
            } focus:outline-none`}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            // className={`${
            //   menuOpen ?  "flex " : "hidden"
            // } flex-col absolute top-full left-0 w-full bg-white shadow-md md:flex md:relative md:flex-row md:w-auto md:bg-transparent md:shadow-none space-y-4 md:space-y-0 md:space-x-4 items-center text-sm font-medium`}
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col absolute top-full left-0 w-full shadow-md lg:flex lg:relative lg:flex-row lg:w-auto lg:bg-transparent lg:shadow-none space-y-4 lg:space-y-0 lg:space-x-4  items-center text-sm font-medium ${
              menuOpen && isScrolled
                ? "bg-secondary text-gray-700"
                : menuOpen
                ? "bg-white text-gray-700"
                : isScrolled
                ? "text-white"
                : "text-gray-700"
            }`}
          >
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "text-white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "text-white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/about"
              title="About Ebhoom Kochi"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "text-white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/services"
              title="View our Services"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              Services
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "text-white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/products"
              title="View our product catalog"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "text-white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/store"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              Store{" "}
              <sup>
                <span className="text-xs text-white bg-gray-600 px-1 py-0.5 rounded">
                  New
                </span>
              </sup>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "text-white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/blog"
              title="View our blogs"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "text-white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/tpds"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              TPDS
            </NavLink>
            {/* <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "text-white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/goodfoot"
              onClick={() => setMenuOpen(false)} // Close menu on click

            >
              Good Foot
            </NavLink> */}
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isScrolled
                    ? "text-white"
                    : isActive
                    ? "text-secondary"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/goodfoot"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              {({ isActive }) => (
                <img
                  // src={isActive ? goodfootlogo3 : isScrolled ? goodfootlogo2 : goodfootlogo1}
                  src={
                    isActive
                      ? isScrolled
                        ? goodfootlogo2
                        : goodfootlogo3
                      : isScrolled
                      ? goodfootlogo2
                      : goodfootlogo1
                  }
                  alt="Good Foot Logo"
                  className="h-6 w-auto"
                />
              )}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "text-white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/esg"
              title="Check out our careers"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              ESG
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "text-white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/pricing"
              title="Check out our careers"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
             Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "text-white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/careers"
              title="Check out our careers"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              Careers
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "text-white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/contact"
              title="Contact us"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
