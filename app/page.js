import Footer from "./Component/Footer";
import Button from "./BasicElements/Button";
import LockImg from "../public/Lock.svg";
import BackgroundImg from "../public/Background.svg";
import HeroImg from "../public/HeroImage.svg";
import NavBar from "./Component/NavBar";
import Hero from "./Component/Hero";
import ProductFeatures from "./Component/ProductFeatures";

export default async function Home() {
  return (
    <div className="w-full h-screen">
      <section
        style={{ backgroundImage: `url(${BackgroundImg.src})` }}
        className=" w-full bg-cover bg-no-repeat bg-top "
      >
        <header className=" px-12 py-7  flex justify-between w-full border-b">
          <p className=" text-teal-100 text-4xl font-dongle">BioProcessAi</p>
          <div className="flex justify-start gap-8 items-center">
            <NavBar />
            <div className=" flex gap-4">
              <Button className="bg-teal-100 hover:bg-teal-100 border-teal-100 text-white">
                <p>Go To Platform</p>
              </Button>
              <Button className=" text-teal-100 border-teal-100 hover:bg-white bg-white">
                <p>Contact Us</p>
              </Button>
            </div>
          </div>
        </header>
        <main
          style={{ backgroundImage: `url(${HeroImg.src})` }}
          className=" w-full px-40 pb-40 pt-28  flex items-center  bg-no-repeat bg-right "
        >
          <Hero />
        </main>
      </section>
      <ProductFeatures />
      <div
        style={{ backgroundImage: `url(${LockImg.src})` }}
        className="w-full bg-center bg-no-repeat text-3xl   bg-slate-800 py-24 text-white flex-col justify-center items-center gap-12 inline-flex"
      >
        <p>Unlock the power of BioProcessAi now !</p>
        <Button className=" hover:bg-teal-100  bg-teal-100 border-teal-100 text-white ">
          <p>Contact Us</p>
        </Button>
      </div>
      <Footer />
    </div>
  );
}
