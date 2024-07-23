import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className=" flex flex-col lg:items-center lg:flex-row  gap-3 lg:gap-10 text-xs md:text-sm px-1">
      <Link
        className={` font-semibold  ${
          pathname === "/" ? "text-teal-100" : "text-black"
        }`}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={` font-semibold text-nowrap  ${
          pathname === "/about" ? "text-teal-100" : "text-black"
        }`}
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
        className=" lg:w-fit btn hover:shadow-2xl h-8 min-h-8 lg:h-12 lg:min-h-12 box-border  px-2 md:px-4  rounded-sm font-semibold   bg-teal-100 hover:bg-teal-100 text-white border-teal-100"
      >
        Platform
      </Link>
      <Link
        className=" lg:w-fit btn h-8 min-h-8 lg:h-12 lg:min-h-12 hover:shadow-2xl box-border  px-2 md:px-4  rounded-sm font-semibold   text-teal-100 hover:bg-white bg-white border-teal-100"
        href="/contact-us"
      >
        Contact Us
      </Link>
    </nav>
  );
};

export default NavBar;
