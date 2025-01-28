// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import "./Header.css";
// import headerLogo from "../../assets/images/logo.png";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   // Handle scroll event to change styles
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={`fixed w-full z-30 transition-all duration-500 ease-in ${
//         isScrolled
//           ? "bg-secondary text-white shadow-md hover:text-white"
//           : "bg-white text-gray-700"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <NavLink className="flex items-center" to="/">
//             <div
//               className={`rounded-full p-2 transition-all duration-300 ${
//                 isScrolled ? "bg-white shadow-md" : "bg-transparent"
//               }`}
//             >
//               <img
//                 src={headerLogo}
//                 alt="EBHOOM - Environmental Monitoring and Pollution Control Solutions"
//                 className={`h-8 w-auto transition-transform duration-300 ${
//                   isScrolled ? "scale-90" : "scale-100"
//                 }`}
//                 loading="eager"
//               />
//             </div>
//           </NavLink>

//           {/* Hamburger Menu for Mobile */}
//           <button
//             className={`block md:hidden ${
//               isScrolled ? "text-white" : "text-gray-700"
//             } focus:outline-none`}
//             type="button"
//             onClick={toggleMenu}
//             aria-label="Toggle navigation"
//           >
//             <svg
//               className="h-6 w-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>

//           {/* Navigation Links */}
//           <div
//             className={`${
//               menuOpen ? "block" : "hidden"
//             } md:flex space-x-4 items-center text-sm font-medium`}
//           >                 
//           {/* <div
//             className={`${
//               menuOpen
//                 ? "flex flex-col space-y-4 items-center text-sm font-medium"
//                 : "hidden"
//             } md:flex md:flex-row md:space-x-4 md:space-y-0`}
//           > */}
//             <NavLink
//               className={({ isActive }) =>
//                 ` ${
//                   isActive
//                     ? isScrolled
//                       ? "text-white"
//                       : "text-secondary"
//                     : isScrolled
//                     ? "white"
//                     : "text-gray-700"
//                 } font-normal text-[16px]`
//               }
//               to="/"
//             >
//               Home
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 ` ${
//                   isActive
//                     ? isScrolled
//                       ? "text-white"
//                       : "text-secondary"
//                     : isScrolled
//                     ? "text-white"
//                     : "text-gray-700"
//                 } font-normal text-[16px]`
//               }
//               to="/about"
//               title="About Ebhoom Kochi"
//             >
//               About
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 ` ${
//                   isActive
//                     ? isScrolled
//                       ? "text-white"
//                       : "text-secondary"
//                     : isScrolled
//                     ? "text-white"
//                     : "text-gray-700"
//                 } font-normal text-[16px]`
//               }
//               to="/services"
//               title="View our Services"
//             >
//               Services
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 ` ${
//                   isActive
//                     ? isScrolled
//                       ? "text-white"
//                       : "text-secondary"
//                     : isScrolled
//                     ? "text-white"
//                     : "text-gray-700"
//                 } font-normal text-[16px]`
//               }
//               to="/products"
//               title="View our product catalog"
//             >
//               Products
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 ` ${
//                   isActive
//                     ? isScrolled
//                       ? "text-white"
//                       : "text-secondary"
//                     : isScrolled
//                     ? "text-white"
//                     : "text-gray-700"
//                 } font-normal text-[16px]`
//               }
//               to="/store"
//             >
//               Store{" "}
//               <sup>
//                 <span className="text-xs text-white bg-gray-600 px-1 py-0.5 rounded">
//                   New
//                 </span>
//               </sup>
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 ` ${
//                   isActive
//                     ? isScrolled
//                       ? "text-white"
//                       : "text-secondary"
//                     : isScrolled
//                     ? "text-white"
//                     : "text-gray-700"
//                 } font-normal text-[16px]`
//               }
//               to="/blog"
//               title="View our blogs"
//             >
//               Blog
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 ` ${
//                   isActive
//                     ? isScrolled
//                       ? "text-white"
//                       : "text-secondary"
//                     : isScrolled
//                     ? "text-white"
//                     : "text-gray-700"
//                 } font-normal text-[16px]`
//               }
//               to="/tpds"
//             >
//               TPDS
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 ` ${
//                   isActive
//                     ? isScrolled
//                       ? "text-white"
//                       : "text-secondary"
//                     : isScrolled
//                     ? "text-white"
//                     : "text-gray-700"
//                 } font-normal text-[16px]`
//               }
//               to="/careers"
//               title="Check out our careers"
//             >
//               Careers
//             </NavLink>
//             <NavLink
//               className={({ isActive }) =>
//                 ` ${
//                   isActive
//                     ? isScrolled
//                       ? "text-white"
//                       : "text-secondary"
//                     : isScrolled
//                     ? "text-white"
//                     : "text-gray-700"
//                 } font-normal text-[16px]`
//               }
//               to="/contact"
//               title="Contact us"
//             >
//               Contact Us
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
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
                }w-12 h-6 md:w-16 md:h-8 lg:w-[120px] lg:h-[26px] logo-img`}
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
            // className={`${
            //   menuOpen ?  "flex " : "hidden"
            // } flex-col absolute top-full left-0 w-full bg-white shadow-md md:flex md:relative md:flex-row md:w-auto md:bg-transparent md:shadow-none space-y-4 md:space-y-0 md:space-x-4 items-center text-sm font-medium`}
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col absolute top-full left-0 w-full shadow-md md:flex md:relative md:flex-row md:w-auto md:bg-transparent md:shadow-none space-y-4 md:space-y-0 md:space-x-4  items-center text-sm font-medium ${
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
