import React from "react";
import { capabilities } from "../utils/stringConstants";
import CapabilitiesCard from "../Component/CapabilitiesCard";
import Link from "next/link";

const CoreCapabilities = () => {
  return (
    <section className="flex flex-col gap-6 lg:gap-12">
      <h2 className="text-black text-xl lg:text-3xl font-bold  text-center">
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
          href="/contact-us"
          className="text-sm md:text-base  btn w-36 lg:w-[170px] h-11 hover:shadow-2xl box-border rounded-sm font-semibold   bg-teal-100 hover:bg-teal-100 text-white border-teal-100"
        >
          <p>Know More</p>
        </Link>
      </div>
    </section>
  );
};

export default CoreCapabilities;
