import Image from "next/image";
import React from "react";
import BannerLogo from "../../public/medical-banner-with-doctor-wearing-goggles 1.jpg";
import Link from "next/link";
import Config from "../../config.json";

const Introduction = () => {
  return (
    <div className="card md:flex-row lg:card-side rounded-3xl bg-slate-100  shadow-xl">
      <div className="card-body md:gap-10 ">
        <h2 className=" font-bold text-xl lg:text-3xl">About Us</h2>
        <p className=" font-normal text-sm md:w-[300px] lg:w-[450px] xl:w-[612px] lg:text-xl text-neutral-500">
          {Config.about}
        </p>
        <Link
          href="/contact-us"
          className="text-sm md:text-base w-36 lg:w-[170px] btn hover:shadow-2xl  rounded-sm font-semibold   bg-teal-100 hover:bg-teal-100 text-white border-teal-100"
        >
          <p>Know More</p>
        </Link>
      </div>
      <Image
        src={BannerLogo}
        width={619}
        height={518}
        quality={75}
        priority
        layout="responsive"
        alt="banner"
      />
    </div>
  );
};

export default Introduction;
