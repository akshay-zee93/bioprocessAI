import Link from "next/link";
import Config from "../../config.json";
import Image from "next/image";
import LogoImage from "../../public/logo.jpeg";

const Footer = () => {
  return (
    <footer className="footer bg-teal-100  text-blue-gray-200 p-10">
      <aside>
        <Image src={LogoImage} className="  border-2 rounded-2xl" width={100} />
        <p className="text-white text-3xl lg:text-5xl font-dongle">
          {Config.appName}
        </p>
      </aside>
      <nav>
        <h6 className=" mb-2 font-semibold">Company</h6>
        <Link className="link link-hover" href="/about">
          About
        </Link>
        <Link href="/contact-for-demo" className=" link link-hover ">
          Request Demo
        </Link>
        {/* <Link href="" className="link link-hover">
          Blogs
        </Link>
        <Link href="" className=" link link-hover ">
          FAQs
        </Link> */}
      </nav>
      <nav>
        <h6 className=" mb-2 font-semibold">Legal</h6>
        <Link href="/terms" className="link link-hover">
          Terms policy
        </Link>
        <Link href="/privacy" className="link link-hover">
          Privacy policy
        </Link>
        {/* <Link href="" className="link link-hover">
          Cookie policy
        </Link> */}
      </nav>
    </footer>
  );
};

export default Footer;
