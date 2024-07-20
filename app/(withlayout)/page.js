import LockImg from "../../public/Lock.svg";
import HeroImg from "../../public/HeroImage.svg";

import Hero from "../Component/Hero";
import ProductFeatures from "../Component/ProductFeatures";
import Link from "next/link";
import Testimonials from "../Component/Testimonial";
import config from "../../config.json";

export default async function Home() {
  return (
    <div>
      <main
        style={{
          backgroundImage: `url(${HeroImg.src})`,
          backgroundSize: "contain",
        }}
        className=" p-4  md:py-24 md:pl-28  bg-cover   flex items-center  bg-no-repeat bg-right "
      >
        <Hero />
      </main>

      <ProductFeatures />

      <section className=" px-2 md:px-5 py-10 bg-slate-200">
        <Testimonials />
      </section>
      <div
        style={{ backgroundImage: `url(${LockImg.src})` }}
        className="w-full bg-center bg-no-repeat text-xl lg:text-3xl   bg-slate-800 py-10 text-white flex-col justify-center items-center gap-12 inline-flex"
      >
        <p>Unlock the power of {config.appName} now !</p>
        <Link
          href="/contact-us"
          className=" hover:bg-teal-100  bg-teal-100 btn hover:shadow-2xl box-border h-8 min-h-8 lg:h-12 lg:min-h-12 text-xs px-2  rounded-sm  lg:text-sm font-semibold border-teal-100 text-white "
        >
          <p>Contact Us</p>
        </Link>
      </div>
    </div>
  );
}
