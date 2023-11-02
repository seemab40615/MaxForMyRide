import React, { useState } from "react";
import { Collapse, initTE } from "tw-elements";
import Logo from "../../assets/assets/images/logo_max_for_my_ride.png";
initTE({ Collapse });
export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      class="fixed bg-black z-10 flex max-w-[1920px] w-full flex-nowrap items-center justify-between text-neutral-500 shadow-lg py-4"
      data-te-navbar-ref
    >
      <div class="flex w-full flex-wrap items-center justify-between  lg:px-[120px] md:px-10 px-2">
        <div class="ml-2">
          <img class="img-fluid" src={Logo} alt="Max For My Ride" />
        </div>
        {/* <!-- Hamburger button for mobile view --> */}
        <button
          class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent14"
          aria-controls="navbarSupportedContent14"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={()=> setOpen(open ? false : true)}
        >
          {/* <!-- Hamburger icon --> */}
          <span class="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-7 w-7"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* <!-- Collapsible navbar container --> */}
     { open &&   <div
          class="!visible hidden mt-2 basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent14"
          data-te-collapse-item
        >
          {/* <!-- Left links --> */}
          <ul
            class="list-style-none mr-auto flex flex-col pl-0 gap-[30px] lg:mt-1 lg:flex-row"
            data-te-navbar-nav-ref
          >
            {/* <!-- Home link --> */}
            <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
              <a
                class="active text-white hover:text-primary  focus:text-primary lg:px-2 [&.active]:text-primary hover-scale"
                aria-current="page"
                href="google.com"
                data-te-nav-link-ref
              >
                Home
              </a>
            </li>
            {/* <!-- Link --> */}
            <li class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
              <a
                class=" hover-scale p-0 text-white hover:text-primary  focus:text-primary transition duration-200 hover:ease-in-out  motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-primary dark:[&.active]:text-neutral-400"
                href="#faq"
                data-te-nav-link-ref
              >
                FAQ
              </a>
            </li>

            {/* <!-- Disabled link --> */}
            <li class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
              <a
                class=" hover-scale p-0 text-white hover:text-primary  focus:text-primary transition duration-200  hover:ease-in-out  motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-primary dark:[&.active]:text-neutral-400"
                href="#Direction"
                data-te-nav-link-ref
              >
                Get Directions
              </a>
            </li>
          </ul>
        </div> }
      </div>
    </nav>
  );
};
