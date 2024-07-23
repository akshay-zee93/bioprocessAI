import Image from "next/image";
import React from "react";
import BannerLogo from "../../public/medical-banner-with-doctor-wearing-goggles 1.svg";
import Link from "next/link";
import Config from "../../config.json";

const Introduction = () => {
  return (
    <div className="card md:flex-row lg:card-side rounded-3xl bg-white  shadow-xl">
      <div className="card-body md:gap-10 ">
        <h2 className=" font-bold text-xl lg:text-3xl">About Us</h2>
        <p className=" font-normal text-sm md:w-[300px] lg:w-[450px] xl:w-[612px] lg:text-xl text-neutral-500">
          {Config.about}
        </p>
        <Link
          href="/contact-for-demo"
          className="text-sm md:text-base w-fit btn hover:shadow-2xl box-border  px-2 md:px-4  rounded-sm font-semibold   bg-teal-100 hover:bg-teal-100 text-white border-teal-100"
        >
          <p>Know More</p>
        </Link>
      </div>
      <figure className=" ">
        <Image
          src={BannerLogo}
          priority
          alt="banner"
          className="  md:w-full  md:h-full"
        />
      </figure>
    </div>
  );
};

export default Introduction;
