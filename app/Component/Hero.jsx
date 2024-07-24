import Link from "next/link";
import Button from "../BasicElements/Button";

const Hero = () => {
  return (
    <section className="flex flex-col  gap-10">
      <div className="flex  flex-col  gap-6">
        <div className="flex flex-col gap-4">
          <h4 className=" text-teal-100 font-semibold text-lg lg:text-2xl">
            Automate - Analyze - Accelerate
          </h4>
          <h1 className=" text-black font-bold leading-tight text-2xl lg:text-4xl xl:text-5xl">
            <p>{"AI-Driven Bioprocessing:"}</p>
            <p>{"Accelerate Your Journey"}</p>
          </h1>
        </div>
        <div className="  text-neutral-500 hidden lg:block  text-xl  font-normal">
          <p>
            Bioprocess development, simplified. Our AI platform automates tasks
            and
          </p>
          <p>
            empowers informed decisions, accelerating your path from bench to
            market.
          </p>
        </div>
        <div className="  text-neutral-500 lg:hidden md:w-3/4  text-xl  font-normal">
          <p>
            Bioprocess development, simplified. Our AI platform automates tasks
            and empowers informed decisions, accelerating your path from bench
            to market.
          </p>
        </div>
      </div>
      <div className=" flex gap-6">
        <Button className="text-base text-white w-36 lg:w-[170px] h-11  hover:bg-teal-100 border-teal-100 bg-teal-100">
          <p>Get Started</p>
        </Button>
        <Link
          href="/contact-for-demo"
          className=" btn hover:shadow-2xl  box-border text-xs w-36 lg:w-[170px] h-11 bg-white hover:bg-white border-teal-100 text-teal-100  rounded-sm  lg:text-sm font-semibold"
        >
          <p>Request Demo</p>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
