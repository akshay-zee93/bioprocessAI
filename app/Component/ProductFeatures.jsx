import Image from "next/image";
import VideoImg from "../../public/Videodemo.svg";
import Link from "next/link";
import config from "../../config.json";

const ProductFeatures = () => {
  return (
    <article className=" w-full  bg-white pt-12 lg:pt-24 ">
      <header className=" flex flex-col gap-2 items-center ">
        <h1 className="  text-black font-bold text-center text-2xl lg:text-5xl">
          Unleash the Power of {config.appName}
        </h1>
        <h3 className=" text-neutral-500   font-normal text-lg lg:text-3xl">
          Any Modality, Any Scale, Powered by AI
        </h3>
      </header>
      <main className=" flex flex-col gap-6 lg:gap-12">
        <section className=" flex flex-col justify-center py-5 lg:py-10 items-center gap-6">
          <Image
            alt="video placeholder"
            className=" h-auto w-auto"
            src={VideoImg}
          />

          <Link
            href="/contact-for-demo"
            className="text-sm md:text-base w-fit btn hover:shadow-2xl box-border   px-2 md:px-4  rounded-sm font-semibold   bg-teal-100 hover:bg-teal-100 text-white border-teal-100"
          >
            <p>Request Demo</p>
          </Link>
        </section>
      </main>
    </article>
  );
};

export default ProductFeatures;
