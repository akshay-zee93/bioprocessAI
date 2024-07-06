import Link from "next/link";
import Button from "../BasicElements/Button";

const Hero = () => {
  return (
    <section className="flex flex-col font-opensans gap-10">
      <div className="flex  flex-col  gap-6">
        <div className="flex flex-col gap-4">
          <h4 className=" text-teal-100 font-semibold text-2xl">
            Automate - Analyze - Accelerate
          </h4>
          <h1 className=" text-neutral-text-dark lg:w-[700px] font-bold leading-tight text-3xl lg:text-5xl">
            AI-Driven Bioprocessing: Accelerate Your Journey
          </h1>
        </div>
        <p className=" lg:w-4/6 text-neutral-500 text-base  lg:text-xl  font-normal">
          Bioprocess development, simplified. Our AI platform automates tasks
          and empowers informed decisions, accelerating your path from bench to
          market.
        </p>
      </div>
      <div className=" flex gap-6">
        <Button className="text-base text-white hover:bg-teal-100 border-teal-100 bg-teal-100">
          <p>Get Started</p>
        </Button>
        <Link
          href="/contact-for-demo"
          className="text-base bg-white btn hover:shadow-2xl box-border h-8 min-h-8 lg:h-12 lg:min-h-12  px-2  rounded-sm font-opensans lg:text-sm font-semibold hover:bg-white text-teal-100 border-teal-100"
        >
          <p>Request Demo</p>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
