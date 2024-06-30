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
    <div className=" w-screen box-border h-screen">
      <section
        style={{ backgroundImage: `url(${BackgroundImg.src})` }}
        className=" w-screen bg-cover bg-no-repeat bg-top "
      >
        <header className=" md:px-12 px-4 py-7  flex flex-col md:flex-row  md:justify-between w-full border-b">
          <p className=" text-teal-100 text-3xl md:text-4xl font-dongle">
            BioProcessAi
          </p>
          <div className="flex justify-between  md:justify-start  gap-4 md:gap-8 items-center">
            <NavBar />
            <div className=" flex gap-4">
              <Button className="bg-teal-100  hover:bg-teal-100 border-teal-100 text-white">
                <p>Go To Platform</p>
              </Button>
              <Button className=" text-teal-100  border-teal-100 hover:bg-white bg-white">
                <p>Contact Us</p>
              </Button>
            </div>
          </div>
        </header>
        <main
          style={{ backgroundImage: `url(${HeroImg.src})` }}
          className=" p-4 md:px-40 md:pb-40 md:pt-28   flex items-center  bg-no-repeat bg-right "
        >
          <Hero />
        </main>
      </section>
      <ProductFeatures />
      <div
        style={{ backgroundImage: `url(${LockImg.src})` }}
        className="w-full bg-center bg-no-repeat text-xl md:text-3xl   bg-slate-800 py-24 text-white flex-col justify-center items-center gap-12 inline-flex"
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
