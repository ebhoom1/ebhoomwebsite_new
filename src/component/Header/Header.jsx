import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import headerLogo from "../../assets/images/logo.png";

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
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center py-4">
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
                }`}
                loading="eager"
              />
            </div>
          </NavLink>

          {/* Hamburger Menu for Mobile */}
          <button
            className={`block md:hidden ${
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
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex space-x-4 items-center text-sm font-medium`}
          >
            <NavLink
              className={({ isActive }) =>
                ` ${
                  isActive
                    ? isScrolled
                      ? "text-white"
                      : "text-secondary"
                    : isScrolled
                    ? "white"
                    : "text-gray-700"
                } font-normal text-[16px]`
              }
              to="/"
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
            >
              TPDS
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
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
