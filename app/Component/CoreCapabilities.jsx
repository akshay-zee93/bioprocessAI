import React from "react";
import { capabilities } from "../utils/stringConstants";
import CapabilitiesCard from "../Component/CapabilitiesCard";
import Link from "next/link";

const CoreCapabilities = () => {
  return (
    <section className="flex flex-col gap-7">
      <h2 className="text-black text-xl lg:text-3xl font-semibold  text-center">
        Core Capabilities
      </h2>
      <ul className="flex flex-col lg:flex-row gap-5 w-full">
        {capabilities.map((item, index) => {
          return (
            <li className=" w-full lg:w-1/4" key={index}>
              <CapabilitiesCard data={item} />
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center">
        <Link
          href="/contact-for-demo"
          className="text-sm md:text-base w-fit btn hover:shadow-2xl box-border  px-2 md:px-4  rounded-sm font-semibold   bg-teal-100 hover:bg-teal-100 text-white border-teal-100"
        >
          <p>Know More</p>
        </Link>
      </div>
    </section>
  );
};

export default CoreCapabilities;
