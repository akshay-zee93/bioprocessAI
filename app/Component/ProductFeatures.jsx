import Image from "next/image";
import VideoImg from "../../public/Videodemo.svg";
import Link from "next/link";

const ProductFeatures = () => {
  return (
    <article className=" w-full  bg-white pt-12 lg:pt-24 ">
      <header className=" flex flex-col gap-2 items-center ">
        <h1 className="  text-black font-bold text-center text-2xl lg:text-5xl">
          Unleash the Power of BioprocessAI
        </h1>
        <h3 className=" text-neutral-500   font-normal text-lg lg:text-3xl">
          Any Modality, Any Scale, Powered by AI
        </h3>
      </header>
      <main className=" flex flex-col gap-6 lg:gap-12">
        <section className=" flex flex-col justify-center py-5 lg:py-10 items-center gap-6">
          <Image className=" h-auto w-auto" src={VideoImg} />

          <Link
            href="/contact-for-demo"
            className="text-base btn hover:shadow-2xl box-border h-8 min-h-8 lg:h-12 lg:min-h-12  px-2  rounded-sm  lg:text-sm font-semibold   bg-teal-100 hover:bg-teal-100 text-white border-teal-100"
          >
            <p>Request Demo</p>
          </Link>
        </section>
        <section className=" flex flex-col justify-center gap-5 lg:gap-10 items-center">
          <h1 className=" text-black text-3xl lg:text-5xl font-bold ">
            Core Capabilities
          </h1>
          <ul className="flex flex-col lg:flex-row gap-3 lg:gap-6 p-6 lg:p-12 ">
            <li className=" flex flex-col justify-start p-5 gap-5 hover:border hover:rounded-md hover:border-darkcyan-100 hover:bg-teal-50 ">
              <h4 className="  text-black text-lg  lg:text-2xl font-bold">
                BioprocessGPT
              </h4>
              <p className="  text-neutral-500 text-base lg:text-lg font-normal">
                Leverage the power of BioprocessGPT, a ChatGPT-like interface
                trained on comprehensive, up-to-date bioprocess knowledge. Ask
                in-depth questions on any CMC topic and get insightful answers
                with supporting literature references, all at your fingertips.
                Accelerate your process development activities with the latest
                bioprocessing knowledge.
              </p>
            </li>
            <li className=" flex flex-col justify-start p-5 gap-5 hover:border hover:rounded-md hover:border-darkcyan-100 hover:bg-teal-50 ">
              <h4 className="  text-black  text-lg  lg:text-2xl font-bold">
                CMC CoPilot
              </h4>
              <p className="  text-neutral-500 text-base lg:text-lg font-normal">
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
              <h4 className="  text-black  text-lg  lg:text-2xl font-bold">
                RegGuide
              </h4>
              <p className="  text-neutral-500 text-base lg:text-lg font-normal">
                Effortlessly generate high-quality protocols, reports, and
                presentations for Tech Transfer, Audits, and CMC sections of
                regulatory submissions with RegGuide. This AI-powered tool
                streamlines document creation, saving you valuable time and
                resources.
              </p>
            </li>
            <li className=" flex flex-col justify-start p-5 gap-5 hover:border hover:rounded-md hover:border-darkcyan-100 hover:bg-teal-50 ">
              <h4 className="  text-black  text-lg  lg:text-2xl font-bold">
                Multi-Modality Support
              </h4>
              <p className="  text-neutral-500 text-base lg:text-lg font-normal">
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
      </main>
    </article>
  );
};

export default ProductFeatures;
