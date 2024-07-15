import Footer from "./Component/Footer";
import LockImg from "../public/Lock.svg";
import BackgroundImg from "../public/Background.svg";
import HeroImg from "../public/HeroImage.svg";
import Teams from "./Component/Teams";

import Hero from "./Component/Hero";
import ProductFeatures from "./Component/ProductFeatures";
import Header from "./Component/Header";
import Link from "next/link";
import Testimonials from "./Component/Testimonial";

export default async function Home() {
  return (
    <div className=" w-screen box-border  h-screen">
      <section
        style={{ backgroundImage: `url(${BackgroundImg.src})` }}
        className=" w-screen bg-cover bg-no-repeat bg-top "
      >
        <Header />
        <main
          style={{
            backgroundImage: `url(${HeroImg.src})`,
            backgroundSize: "contain",
          }}
          className=" p-4  md:py-24 md:pl-28  bg-cover   flex items-center  bg-no-repeat bg-right "
        >
          <Hero />
        </main>
      </section>
      <ProductFeatures />
      <section className=" px-2 md:px-10 py-10 bg-slate-100">
        <Teams />
      </section>
      <section className=" px-2 md:px-5 py-10 bg-slate-200">
        <Testimonials />
      </section>
      <div
        style={{ backgroundImage: `url(${LockImg.src})` }}
        className="w-full bg-center bg-no-repeat text-xl lg:text-3xl   bg-slate-800 py-10 text-white flex-col justify-center items-center gap-12 inline-flex"
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
