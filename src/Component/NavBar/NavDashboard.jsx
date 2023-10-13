import React, { useState, useRef, useEffect } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Link, useLocation } from "react-router-dom"; //

export const NavDashboard = () => {
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
  }, [size.width, isMobileMenuVisible, selectedNavItem]);

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
      <div className="mx-auto max-w-[1440px] px-[42px] py-4 w-full flex justify-between items-center">
        <div className="flex justify-between max-w-[830px] w-full items-center">
          <Link
            to="/"
            className={`text-primary font-gridular text-[24px] uppercase z-10`}
            onClick={() => selectedNavItem("Home")}
          >
            VIG
          </Link>
          {size.width >= 1242 && (
            <ul className="flex gap-x-1 z-20 w-full pl-[50px]">
              <Link
                to="/"
                onClick={() => {
                  setSelectedNavItem("Home");
                  setDropdownVisible(false);
                }}
                className={`h-10 flex justify-start items-center px-4 py-4 rounded-[100px] ${
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
                className={`flex justify-start items-center h-10 px-4 py-4 rounded-[100px] ${
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
                className={`relative flex gap-x-1 justify-center items-center h-10 px-4 py-4 rounded-[100px] ${
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
                        selectedNavItem === "Resources"
                          ? "#000"
                          : "currentColor"
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
                className={`h-10 px-4 py-4 flex justify-center items-center rounded-[100px] ${
                  selectedNavItem === "Contact"
                    ? "bg-primary text-black"
                    : "bg-navItemGradient text-primary"
                } font-medium text-sm -tracking-[0.28px] backdrop-blur-[6px] cursor-pointer hover:bg-primary hover:text-black`}
              >
                Contact
              </Link>
            </ul>
          )}
        </div>
        <div className="flex justify-center max-w-[830px] w-full h-fit items-center">
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-primary sr-only dark:text-primary"
            >
              Search
            </label>
            <div class="relative">
              <input
                type="search"
                id="default-search"
                class="block w-full p-2 pr-10  text-[16px] text-primary rounded-3xl border-2 border-secondary bg-bgSecondary focus:ring-primary focus:border-primary focus-visible:border-primary placeholder-primary"
                placeholder="Search ..."
              />
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-primary dark:text-primary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>

        <div className={`max-w-[620px] w-full flex justify-end gap-x-4`}>
          <button className="h-fit px-4 py-4 bg-secondary rounded-[100px] backdrop-blur-[6px] text-black font-medium text-sm -tracking-[0.28px] z-10 flex-shrink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_1074_1117)">
                <path
                  d="M10.8335 4.16663H17.5002"
                  stroke="#FF993C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8335 7.5H15.0002"
                  stroke="#FF993C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8335 12.5H17.5002"
                  stroke="#FF993C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.8335 15.8334H15.0002"
                  stroke="#FF993C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 4.16671C2.5 3.94569 2.5878 3.73373 2.74408 3.57745C2.90036 3.42117 3.11232 3.33337 3.33333 3.33337H6.66667C6.88768 3.33337 7.09964 3.42117 7.25592 3.57745C7.4122 3.73373 7.5 3.94569 7.5 4.16671V7.50004C7.5 7.72105 7.4122 7.93302 7.25592 8.0893C7.09964 8.24558 6.88768 8.33337 6.66667 8.33337H3.33333C3.11232 8.33337 2.90036 8.24558 2.74408 8.0893C2.5878 7.93302 2.5 7.72105 2.5 7.50004V4.16671Z"
                  stroke="#FF993C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.5 12.5C2.5 12.2789 2.5878 12.067 2.74408 11.9107C2.90036 11.7544 3.11232 11.6666 3.33333 11.6666H6.66667C6.88768 11.6666 7.09964 11.7544 7.25592 11.9107C7.4122 12.067 7.5 12.2789 7.5 12.5V15.8333C7.5 16.0543 7.4122 16.2663 7.25592 16.4225C7.09964 16.5788 6.88768 16.6666 6.66667 16.6666H3.33333C3.11232 16.6666 2.90036 16.5788 2.74408 16.4225C2.5878 16.2663 2.5 16.0543 2.5 15.8333V12.5Z"
                  stroke="#FF993C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1074_1117">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="h-fit px-4 py-4 bg-secondary rounded-[100px] backdrop-blur-[6px] text-black font-medium text-sm -tracking-[0.28px] z-10 flex-shrink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_1074_3522)">
                <path
                  d="M9.99986 14.7917L4.85653 17.4958L5.83903 11.7683L1.67236 7.7125L7.42236 6.87917L9.99403 1.66833L12.5657 6.87917L18.3157 7.7125L14.149 11.7683L15.1315 17.4958L9.99986 14.7917Z"
                  stroke="#FF993C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1074_3522">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="h-fit px-4 py-4 bg-secondary rounded-[100px] backdrop-blur-[6px] text-black font-medium text-sm -tracking-[0.28px] z-10 flex-shrink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clip-path="url(#clip0_1074_3685)">
                <path
                  d="M8.3335 4.16667C8.3335 3.72464 8.50909 3.30072 8.82165 2.98816C9.13421 2.67559 9.55814 2.5 10.0002 2.5C10.4422 2.5 10.8661 2.67559 11.1787 2.98816C11.4912 3.30072 11.6668 3.72464 11.6668 4.16667C12.6238 4.61919 13.4397 5.32361 14.0269 6.20442C14.6141 7.08523 14.9505 8.10923 15.0002 9.16667V11.6667C15.0629 12.1848 15.2464 12.6809 15.5358 13.1151C15.8253 13.5493 16.2127 13.9095 16.6668 14.1667H3.3335C3.78761 13.9095 4.175 13.5493 4.46449 13.1151C4.75397 12.6809 4.93745 12.1848 5.00016 11.6667V9.16667C5.0498 8.10923 5.38625 7.08523 5.97345 6.20442C6.56066 5.32361 7.37649 4.61919 8.3335 4.16667Z"
                  stroke="#FF993C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.5 14.1666V15C7.5 15.663 7.76339 16.2989 8.23223 16.7677C8.70107 17.2366 9.33696 17.5 10 17.5C10.663 17.5 11.2989 17.2366 11.7678 16.7677C12.2366 16.2989 12.5 15.663 12.5 15V14.1666"
                  stroke="#FF993C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1074_3685">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="h-fit px-2 py-2 flex gap-2 items-center bg-secondary text-primary rounded-[100px] backdrop-blur-[6px font-medium text-sm -tracking-[0.28px] z-10 flex-shrink">
            <div className="h-fit px-2 py-2 bg-white rounded-[100px] backdrop-blur-[6px] text-black font-medium text-sm -tracking-[0.28px] z-10 flex-shrink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
              >
                <g clip-path="url(#clip0_297_1969)">
                  <path
                    d="M18.1635 4.17421L11.8181 0.506324C10.6944 -0.145663 9.30534 -0.145663 8.1817 0.506324L1.83625 4.17421C0.712612 4.82619 0.0180664 6.02818 0.0180664 7.32851V14.6679C0.0180664 15.9682 0.712612 17.1702 1.83625 17.8222L8.1817 21.4937C9.30534 22.1457 10.6944 22.1457 11.8181 21.4937L18.1635 17.8222C19.2872 17.1702 19.9817 15.9682 19.9817 14.6679V7.32851C19.9817 6.02818 19.2908 4.82619 18.1635 4.17421ZM15.0362 11.7285L13.149 15.003C12.8908 15.4547 12.4108 15.7315 11.8908 15.7315H8.11261C7.59261 15.7315 7.11261 15.4547 6.85443 15.003L4.96352 11.7285C4.70534 11.2769 4.70534 10.7232 4.96352 10.2716L6.85079 6.99705C7.10898 6.5454 7.58898 6.26858 8.10898 6.26858H11.8835C12.4035 6.26858 12.8835 6.5454 13.1417 6.99705L15.029 10.2716C15.2944 10.7232 15.2944 11.2769 15.0362 11.7285Z"
                    fill="#FE005B"
                  />
                  <path
                    d="M15.0364 11.7285L13.1491 15.003C12.8909 15.4546 12.4109 15.7315 11.8909 15.7315H8.11275C7.59275 15.7315 7.11275 15.4546 6.85456 15.003L4.96366 11.7285C4.70547 11.2768 4.70547 10.7232 4.96366 10.2715L6.85093 6.99703C7.10911 6.54538 7.58911 6.26855 8.10911 6.26855H11.8837C12.4037 6.26855 12.8837 6.54538 13.1418 6.99703L15.0291 10.2715C15.2946 10.7232 15.2946 11.2768 15.0364 11.7285Z"
                    fill="#FFF1F8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_297_1969">
                    <rect width="20" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg> 
              </div>
              TE5Vv....ZcJ
           
          </button>
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
                            selectedNavItem === "Resources"
                              ? "#000"
                              : "currentColor"
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
                          Faq's
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
