import Button from "../BasicElements/Button";

const Hero = () => {
  return (
    <section className="flex flex-col font-opensans gap-10">
      <div className="flex  flex-col  gap-6">
        <div className="flex flex-col gap-4">
          <h4 className=" text-teal-100 font-semibold text-2xl">
            Automate - Analyse - Accelerate
          </h4>
          <h1 className=" text-neutral-text-dark md:w-[700px] font-bold leading-tight text-3xl md:text-5xl">
            AI-Driven Bioprocessing: Accelerate Your Journey
          </h1>
        </div>
        <p className=" w-4/6 text-neutral-500 text-base  md:text-xl  font-normal">
          Bioprocess development, simplified. Our AI platform automates tasks
          and empowers informed decisions, accelerating your path from bench to
          market.
        </p>
      </div>
      <div className=" flex gap-6">
        <Button className="text-base text-white hover:bg-teal-100 border-teal-100 bg-teal-100">
          <p>Get Started</p>
        </Button>
        <Button className="text-base bg-white hover:bg-white text-teal-100 border-teal-100">
          <p>Check Demo</p>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
