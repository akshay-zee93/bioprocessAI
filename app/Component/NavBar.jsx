"use client";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const activeLinkHandler = (text) => {
    setActiveTab(text);
  };
  return (
    <nav className=" flex flex-col lg:flex-row justify-evenly gap-4 lg:gap-8 text-xs lg:text-sm menu menu-horizontal px-1">
      <Link
        className={` font-semibold font-opensans  ${
          activeTab === "Home" ? "text-teal-100" : " text-black"
        }`}
        href={""}
        onClick={() => activeLinkHandler("Home")}
      >
        Home
      </Link>
      <Link
        className={` font-semibold font-opensans  ${
          activeTab === "About Us" ? "text-teal-100" : " text-black"
        }`}
        onClick={() => activeLinkHandler("About Us")}
        href={""}
      >
        About Us
      </Link>
      <Link
        className={` font-semibold font-opensans  ${
          activeTab === "FAQs" ? "text-teal-100" : " text-black"
        }`}
        href={""}
        onClick={() => activeLinkHandler("FAQs")}
      >
        FAQs
      </Link>
    </nav>
  );
};

export default NavBar;
