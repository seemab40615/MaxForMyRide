import React, { useState, useRef, useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Link, useLocation } from "react-router-dom"; //

export const NavBar = () => {
  const location = useLocation(); // <-- get the current location

  // Function to get the initial selected nav item based on the current path
  const getInitialSelectedNavItem = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path === "/plateform") return "Platform Solutions";
    if (path === "/faq" || path === "/changelog" || path === "/blog")
      return "Resources";
    if (path === "/contact") return "Contact";
    return ""; // default value
  };

  const [selectedNavItem, setSelectedNavItem] = useState(
    getInitialSelectedNavItem()
  );
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const size = useWindowSize();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileButtonRef = useRef(null);

  useEffect(() => {
    if (size.width > 1242 && isMobileMenuVisible) {
      setIsMobileMenuVisible(false);
    }
  }, [size.width, isMobileMenuVisible , selectedNavItem]);
  


  useEffect(() => {
    function handleOutsideClick(event) {
      // Check if the clicked target is the mobile button
      if (event.target === mobileButtonRef.current) return;

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuVisible(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="text-white fixed top-0 left-0 w-full z-50 bg-bgSecondary">
      <div className="mx-auto max-w-[1440px] px-[42px] py-4 w-full flex justify-between bg-bgSecondary items-center">
        <div className="flex justify-between max-w-[830px] w-full">
          {size.width >= 1242 && (
            <ul className="flex gap-x-1 z-20 w-full">
              <Link
                to="/"
                onClick={() => {
                  setSelectedNavItem("Home");
                  setDropdownVisible(false);
                }}
                className={`h-10 flex justify-start items-center px-4 py-3 rounded-[100px] ${
                  selectedNavItem === "Home"
                    ? "bg-primary text-black"
                    : "bg-navItemGradient text-primary"
                } font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black`}
              >
                Home
              </Link>
              <Link
                to="/plateform"
                onClick={() => {
                  setSelectedNavItem("Platform Solutions");
                  setDropdownVisible(false);
                }}
                className={`flex justify-start items-center h-10 px-4 py-3 rounded-[100px] ${
                  selectedNavItem === "Platform Solutions"
                    ? "bg-primary text-black"
                    : "bg-navItemGradient text-primary"
                } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer hover:bg-primary hover:text-black`}
              >
                Platform Solutions
              </Link>
              <Link
                onClick={() => {
                  setSelectedNavItem("Resources");
                  setDropdownVisible(!isDropdownVisible);
                }}
                className={`relative flex gap-x-1 justify-center items-center h-10 px-4 py-3 rounded-[100px] ${
                  selectedNavItem === "Resources"
                    ? "bg-primary text-black"
                    : "bg-navItemGradient text-primary"
                } font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black group`}
              >
                Resources
                <svg
                  className={`transform ${
                    isDropdownVisible ? "rotate-180" : ""
                  } fill-current text-primary group-hover:text-black`}
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0" fill="none" width="24" height="24" />

                  <g>
                    <path
                      d="M7 10l5 5 5-5"
                      fill={
                        selectedNavItem === "Resources" ? "#000" : "currentColor"
                      }
                    />
                  </g>
                </svg>
                {isDropdownVisible && (
                  <ul
                    className="absolute top-[50px] w-full left-0 flex flex-col gap-y-1 z-[1]"
                    ref={dropdownRef}
                  >
                    <Link
                      to="/faq"
                      className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black"
                    >
                      Faq's
                    </Link>
                    <Link
                      to="/changelog"
                      className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black"
                    >
                      Changelog
                    </Link>
                    <Link
                      to="/blog"
                      className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black"
                    >
                      Blog
                    </Link>
                  </ul>
                )}
              </Link>
              <Link
                to="/contact"
                onClick={() => {
                  setSelectedNavItem("Contact");
                  setDropdownVisible(false);
                }}
                className={`h-10 px-4 py-3 flex justify-center items-center rounded-[100px] ${
                  selectedNavItem === "Contact"
                    ? "bg-primary text-black"
                    : "bg-navItemGradient text-primary"
                } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer hover:bg-primary hover:text-black`}
              >
                Contact
              </Link>
            </ul>
          )}
          <Link
            to="/"
            className={`text-primary font-gridular text-2xl uppercase z-10`}
            onClick={()=> setSelectedNavItem("Home")}
          >
            VIG
          </Link>
        </div>

        <div className={`max-w-[620px] w-full flex justify-end gap-x-4`}>
        <button className="h-fit px-4 py-3 bg-primary rounded-[100px] backdrop-blur-[6px] text-black font-medium text-sm -tracking-[0.28px] z-10 flex-shrink">
            Waitlist
          </button>
        <li
            className={`px-3  py-2 rounded-[100px] font-medium text-[14px] sm:text-sm -tracking-[0.28px] cursor-pointer bg-navItemGradient text-primary hover:bg-primary hover:text-black flex group items-center`}
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg>
          </li>
          
          {size.width <= 1242 && (
            <div className="relative flex justify-center" ref={mobileMenuRef}>
              <button
                ref={mobileButtonRef}
                className="w-10 rounded-full bg-secondary text-primary flex items-center justify-center z-10"
                onClick={(e) => {
                  e.stopPropagation(); // Stop event propagation
                  setIsMobileMenuVisible((prev) => !prev);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M2.5 7.08337H17.5M2.5 12.9167H17.5"
                    stroke="#FF993C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              {isMobileMenuVisible && (
                <ul className="absolute top-[50px] right-0 flex flex-col gap-y-1 z-10">
                  <Link
                    to="/"
                    onClick={() => {
                      setSelectedNavItem("Home");
                      setIsMobileMenuVisible(false);
                    }}
                    className={`h-10 flex justify-center items-center px-4 py-3 rounded-[100px] ${
                      selectedNavItem === "Home"
                        ? "bg-primary text-black"
                        : "bg-navItemGradient text-primary"
                    } font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/plateform"
                    onClick={() => {
                      setSelectedNavItem("Platform Solutions");
                      setDropdownVisible(false);
                      setIsMobileMenuVisible(false);
                    }}
                    className={`flex justify-center items-center h-10 px-4 py-3 rounded-[100px] ${
                      selectedNavItem === "Platform Solutions"
                        ? "bg-primary text-black"
                        : "bg-navItemGradient text-primary"
                    } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer hover:bg-primary hover:text-black text-center`}
                  >
                    Platform Solutions
                  </Link>
                  <Link
                    onClick={() => {
                      setSelectedNavItem("Resources");
                      setDropdownVisible(!isDropdownVisible);
                    }}
                    ref={dropdownRef}
                    className={`relative flex gap-x-1 justify-center w-full items-center h-10 px-4 py-3 rounded-[100px] ${
                      selectedNavItem === "Resources"
                        ? "bg-primary text-black"
                        : "bg-navItemGradient text-primary"
                    } font-medium text-sm -tracking-[0.28px] cursor-pointer group`}
                  >
                    Resources
                    <svg
                      className={`transform ${
                        isDropdownVisible ? "rotate-180" : ""
                      } fill-current text-primary group-hover:text-black`}
                      width="20px"
                      height="20px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="0" fill="none" width="24" height="24" />

                      <g>
                        <path
                          d="M7 10l5 5 5-5"
                          fill={
                            selectedNavItem === "Resources" ? "#000" : "currentColor"
                          }
                        />
                      </g>
                    </svg>
                    {isDropdownVisible && (
                      <ul className="absolute top-0 -left-[130px] w-full flex flex-col gap-y-1">
                        <Link
                          onClick={() => {
                            setDropdownVisible(false);
                            setIsMobileMenuVisible(false);
                          }}
                          to="/faq"
                          className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black"
                        >
                          FAQ's
                        </Link>
                        <Link
                          onClick={() => {
                            setDropdownVisible(false);
                            setIsMobileMenuVisible(false);
                          }}
                          to="/changelog"
                          className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black"
                        >
                          Changelog
                        </Link>
                        <Link
                          onClick={() => {
                            setDropdownVisible(false);
                            setIsMobileMenuVisible(false);
                          }}
                          to="/blog"
                          className="px-4 py-3 rounded-[100px] w-full text-center text-primary bg-navItemGradient backdrop-blur-[6px] font-medium text-sm -tracking-[0.28px] cursor-pointer hover:bg-primary hover:text-black"
                        >
                          Blog
                        </Link>
                      </ul>
                    )}
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => {
                      setSelectedNavItem("Contact");
                      setDropdownVisible(false);
                      setIsMobileMenuVisible(false);
                    }}
                    className={`h-10 px-4 py-3 flex justify-center items-center rounded-[100px] ${
                      selectedNavItem === "Contact"
                        ? "bg-primary text-black"
                        : "bg-navItemGradient text-primary"
                    } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer hover:bg-primary hover:text-black `}
                  >
                    Contact
                  </Link>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
