import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className=" flex flex-col lg:items-center lg:flex-row  gap-3 lg:gap-14 text-xs md:text-sm px-1">
      <Link
        className={` font-semibold  ${
          pathname === "/" ? "text-teal-800 font-bold" : "text-black"
        }`}
        href={"/"}
      >
        Home
      </Link>
      <Link
        className={` font-semibold text-nowrap  ${
          pathname === "/about" ? "text-teal-800 font-bold" : "text-black"
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
      <div className="flex flex-col lg:items-center lg:flex-row gap-6">
        <Link
          href="https://platform.bioprocess.ai/"
          className={` font-semibold text-nowrap  text-black`}
        >
          Platform
        </Link>
        <Link
          className=" w-full lg:w-32 btn h-8 min-h-8   hover:shadow-2xl box-border  px-2 md:px-4  rounded-sm font-semibold   text-teal-100 hover:bg-white bg-white border-teal-100"
          href="/contact-us"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
