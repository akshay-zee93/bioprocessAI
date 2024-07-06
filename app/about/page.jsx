import Image from "next/image";
import BackgroundImg from "../../public/Background.svg";
import PlaceholderImg from "../../public/placeholder.jpg";

const page = () => {
  return (
    <article
      style={{ backgroundImage: `url(${BackgroundImg.src})` }}
      className=" w-screen bg-cover  bg-no-repeat bg-top justify-between min-h-dvh  flex flex-col md:flex-row p-10  md:py-48 md:px-20   text-black   gap-20 "
    >
      <Image src={PlaceholderImg} priority alt="image" className=" md:w-1/2 " />
      <section className=" flex flex-col h-full w-full gap-8">
        <header className=" flex text-3xl flex-col">
          <h3 className="  font-semibold">Samir Varma</h3>
          <h3 className=" text-gray-500 italic">Co Founder</h3>
        </header>
        <main className="flex flex-col max-w-2xl h-full gap-5">
          <p>
            Samir has extensive experience in the Biotech industry working at
            various large and small pharma and biotech companies including
            Nutcracker Therapeutics, Allakos Inc, Enzene Biosciences and Bristol
            Myers Squibb. He has expertise is in drug substance and drug product
            manufacturing, GMP facility design and supply chain operations. He
            has worked on various commercial molecules such as Yervoy®,
            Orencia®, Nulojix® and Reblozyl®
          </p>
          <p>
            Samir was awarded a BE in Chemical Engineering from National
            Institute of Technology, Karnataka, India, a MS in Biochemical
            Engineering from Drexel University, Philadelphia, PA and MBA in
            Finance and Marketing from Stern School of Business at New York
            University, New York, NY.
          </p>
        </main>
      </section>
    </article>
  );
};

export default page;