"use client";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const activeLinkHandler = (text) => {
    setActiveTab(text);
  };
  return (
    <nav className=" flex flex-col lg:flex-row justify-evenly menu menu-horizontal gap-4 lg:gap-8 text-xs lg:text-sm px-1">
      <Link
        className={` font-semibold   ${
          activeTab === "Home" ? "text-teal-100" : " text-black"
        }`}
        href={"/"}
        onClick={() => activeLinkHandler("Home")}
      >
        Home
      </Link>
      <Link
        className={` font-semibold   ${
          activeTab === "About Us" ? "text-teal-100" : " text-black"
        }`}
        onClick={() => activeLinkHandler("About Us")}
        href={"/about"}
      >
        About Us
      </Link>
      {/* <Link
        className={` font-semibold   ${
          activeTab === "FAQs" ? "text-teal-100" : " text-black"
        }`}
        href={""}
        onClick={() => activeLinkHandler("FAQs")}
      >
        FAQs
      </Link> */}
      <Link
        href="https://www.bioprocessai.com/bioprocessaiplatform"
        target="_blank"
        className={` font-semibold   ${
          activeTab === "Platform" ? "text-teal-100" : " text-black"
        }`}
        onClick={() => activeLinkHandler("Platform")}
      >
        Platform
      </Link>
      <Link
        className={` font-semibold   ${
          activeTab === "Contact" ? "text-teal-100" : " text-black"
        }`}
        onClick={() => activeLinkHandler("Contact")}
        href="/contact-us"
      >
        Contact Us
      </Link>
    </nav>
  );
};

export default NavBar;
