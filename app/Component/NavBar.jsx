"use client";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const activeLinkHandler = (text) => {
    setActiveTab(text);
  };
  return (
    <nav className=" flex flex-col lg:flex-row  menu menu-horizontal gap-2 md:gap-4 text-xs md:text-sm px-1">
      <Link
        className={` font-semibold   ${
          activeTab === "" ? "text-teal-100" : " text-black"
        }`}
        href={"/"}
        onClick={() => activeLinkHandler("")}
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
        href="https://platform.bioprocess.ai/"
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
