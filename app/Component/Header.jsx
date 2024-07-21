"use client";
import { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";
import Image from "next/image";
import LogoImage from "../../public/logo.jpeg";
import Config from "../../config.json";
import Link from "next/link";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="navbar md:px-12 px-2 py-7 w-full border-b">
      <div className="navbar-start">
        <Link href={"/"} className="flex items-center cursor-pointer gap-2">
          <Image
            src={LogoImage}
            className="  border-2 rounded-2xl"
            width={50}
          />
          <p className="text-teal-100 text-3xl md:text-4xl font-dongle">
            {Config.appName}
          </p>
        </Link>
      </div>
      <div className="navbar-end flex gap-4 lg:gap-8 items-center w-full">
        <div className="dropdown dropdown-end" ref={dropdownRef}>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost p-2 bg-transparent text-teal-100 lg:hidden"
            onClick={toggleDropdown}
          >
            {!isDropdownOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          {isDropdownOpen && (
            <div
              tabIndex={0}
              role="button"
              className="menu menu-md  dropdown-content bg-white w-48  rounded-box z-[1] mt-3 p-2 shadow"
              onClick={closeDropdown}
            >
              <NavBar />
            </div>
          )}
        </div>
        <div className="navbar-end hidden lg:flex">
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
