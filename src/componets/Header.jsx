import React, { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header>
      <div>
        <nav>
          <div className="flex flex-1 max-w-[100%] flex-row justify-between  mx-[20px] lg:mx-[80px]  my-4  items-center">
            <a href="index.html">
              <img src="/logo.png" alt="Logo" />
            </a>

            <div>
              {/* Large screen navigation */}
              <ul className="hidden md:flex flex-1 flex-row gap-[3em]">
                <li className=" text-[22px] hover:text-blue-600 hover:scale-125 hover:border-b-2 border-b-slate-950">
                  <a href="index.html">Home</a>
                </li>
                <li className="text-[22px] hover:text-blue-600 hover:scale-125 hover:border-b-2 border-b-slate-950">
                  <a href="about.html">About</a>
                </li>
                <li className="text-[22px] hover:text-blue-600 hover:scale-125 hover:border-b-2 border-b-slate-950">
                  <a href="services.html">Services</a>
                </li>
                <li className="relative group">
                  <a
                    href="#"
                    role="button"
                    className="inline-block text-[22px] hover:text-blue-600 hover:scale-125 hover:border-b-2 border-b-slate-950"
                  >
                    Our Operations
                  </a>
                </li>
                <li className="text-[22px] hover:text-blue-600 hover:scale-125 hover:border-b-2 border-b-slate-950">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
              {/* Small screen menu icons */}

              <img
                src={nav ? "/icon-close.svg" : "/icon-hamburger.svg"}
                alt={nav ? "Close menu" : "Open menu"}
                className="block md:hidden"
                onClick={handleNav}
              />
              {nav && (
                <div className="fixed w-[60%] h-[35%] bg-gray-300 bg right-0 top-20 rounded-lg flex flex-col justify-center opacity-50 items-center z-20">
                  <a
                    href="#"
                    className="m-3 text-[22px] hover:scale-110 hover:text-blue-600"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="m-3 text-[22px] hover:scale-110 hover:text-blue-600"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="m-3 text-[22px] hover:scale-110 hover:text-blue-600"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="m-3 text-[22px] hover:scale-110 hover:text-blue-600"
                  >
                    Our Operations
                  </a>
                  <a
                    href="#"
                    className="m-3 text-[22px] hover:scale-110 hover:text-blue-600"
                  >
                    Contact
                  </a>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
