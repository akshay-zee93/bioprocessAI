import Footer from "./Component/Footer";
import Button from "./BasicElements/Button";
import LockImg from "../public/Lock.svg";
import BackgroundImg from "../public/Background.svg";
import HeroImg from "../public/HeroImage.svg";

import Hero from "./Component/Hero";
import ProductFeatures from "./Component/ProductFeatures";
import Header from "./Component/Header";
import Link from "next/link";

export default async function Home() {
  return (
    <div className=" w-screen box-border h-screen">
      <section
        style={{ backgroundImage: `url(${BackgroundImg.src})` }}
        className=" w-screen bg-cover bg-no-repeat bg-top "
      >
        <Header />
        <main
          style={{ backgroundImage: `url(${HeroImg.src})` }}
          className=" p-4 lg:p-16 lg:px-40 lg:pb-40 lg:pt-28   flex items-center  bg-no-repeat bg-right "
        >
          <Hero />
        </main>
      </section>
      <ProductFeatures />
      <div
        style={{ backgroundImage: `url(${LockImg.src})` }}
        className="w-full bg-center bg-no-repeat text-xl lg:text-3xl   bg-slate-800 py-24 text-white flex-col justify-center items-center gap-12 inline-flex"
      >
        <p>Unlock the power of BioProcessAi now !</p>
        <Link
          href="/contact-us"
          className=" hover:bg-teal-100  bg-teal-100 btn hover:shadow-2xl box-border h-8 min-h-8 lg:h-12 lg:min-h-12 text-xs px-2  rounded-sm font-opensans lg:text-sm font-semibold border-teal-100 text-white "
        >
          <p>Contact Us</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
