import Image from "next/image";
import VideoImg from "../../public/Videodemo.svg";
import Button from "../BasicElements/Button";
import PartnersImg from "../../public/partners.svg";

const ProductFeatures = () => {
  return (
    <article className=" w-full font-opensans bg-white pt-12 md:pt-24 ">
      <header className=" flex flex-col gap-2 items-center ">
        <h1 className=" font-opensans text-black font-bold text-center text-2xl md:text-5xl">
          Unleash the Power of Bioprocessing
        </h1>
        <h3 className=" text-neutral-500  font-opensans font-normal text-lg md:text-3xl">
          Any Modality, Any Scale, Powered by AI
        </h3>
      </header>
      <main className=" flex flex-col gap-6 lg:gap-12">
        <section className=" flex flex-col justify-center py-5 md:py-10 items-center gap-6">
          <Image className=" h-auto w-auto" src={VideoImg} />
          <Button className=" bg-teal-100 hover:bg-teal-100 text-white border-teal-100">
            <p>Request Demo</p>
          </Button>
        </section>
        <section className=" flex flex-col justify-center gap-5 lg:gap-10 items-center">
          <h1 className=" text-black text-3xl md:text-5xl font-bold font-opensans">
            Core Capabilities
          </h1>
          <ul className="flex flex-col lg:flex-row gap-3 lg:gap-6 p-6 lg:p-12 ">
            <li className=" flex flex-col justify-start p-5 gap-5 hover:border hover:rounded-md hover:border-darkcyan-100 hover:bg-teal-50 ">
              <h4 className=" font-opensans text-black text-lg  md:text-2xl font-bold">
                BioprocessGPT
              </h4>
              <p className=" font-opensans text-neutral-500 text-base md:text-lg font-normal">
                Leverage the power of BioprocessGPT, a ChatGPT-like interface
                trained on comprehensive, up-to-date bioprocess knowledge. Ask
                in-depth questions on any CMC topic and get insightful answers
                with supporting literature references, all at your fingertips.
                Accelerate your process development activities with the latest
                bioprocessing knowledge.
              </p>
            </li>
            <li className=" flex flex-col justify-start p-5 gap-5 hover:border hover:rounded-md hover:border-darkcyan-100 hover:bg-teal-50 ">
              <h4 className=" font-opensans text-black  text-lg  md:text-2xl font-bold">
                CMC CoPilot
              </h4>
              <p className=" font-opensans text-neutral-500 text-base md:text-lg font-normal">
                Transform your process development, manufacturing, and
                regulatory activities with CMC CoPilot. It actively analyzes
                your data to guide efficient experimental design and iteration,
                significantly reducing development time. CMC CoPilot utilizes
                advanced statistical and visualization tools, including
                neural-network Bayesian Optimization, for data-driven decision
                making.
              </p>
            </li>
            <li className=" flex flex-col justify-start p-5 gap-5 hover:border hover:rounded-md hover:border-darkcyan-100 hover:bg-teal-50 ">
              <h4 className=" font-opensans text-black  text-lg  md:text-2xl font-bold">
                RegGuide
              </h4>
              <p className=" font-opensans text-neutral-500 text-base md:text-lg font-normal">
                Effortlessly generate high-quality protocols, reports, and
                presentations for Tech Transfer, Audits, and CMC sections of
                regulatory submissions with RegGuide. This AI-powered tool
                streamlines document creation, saving you valuable time and
                resources.
              </p>
            </li>
            <li className=" flex flex-col justify-start p-5 gap-5 hover:border hover:rounded-md hover:border-darkcyan-100 hover:bg-teal-50 ">
              <h4 className=" font-opensans text-black  text-lg  md:text-2xl font-bold">
                Multi-Modality Support
              </h4>
              <p className=" font-opensans text-neutral-500 text-base md:text-lg font-normal">
                Develop cutting-edge therapies across all leading biological
                modalities with a single platform. Bioprocess AI seamlessly
                supports the development of mAbs, bispecific antibodies,
                fragment antibodies (fAbs), cell and gene therapies, and mRNA
                products, empowering innovation across the biopharmaceutical
                landscape.
              </p>
            </li>
          </ul>
        </section>
        <figure className=" w-full flex justify-center">
          <Image src={PartnersImg} alt="brands" />
        </figure>
      </main>
    </article>
  );
};

export default ProductFeatures;
