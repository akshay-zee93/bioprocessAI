import Teams from "../../Component/Team";
import Advisors from "../../Component/Advisors";
import Careers from "../../Component/Careers";
import config from "../../../config.json";

const page = () => {
  return (
    <article className="  flex flex-col px-10  text-black gap-8  ">
      <h1 className="text-black text-center text-3xl lg:text-5xl font-bold py-10">
        About {config.appName}
      </h1>
      {/* <section className=" flex flex-col h-full w-full gap-3 lg:gap-8">
        <header className=" flex text-xl md:text-3xl flex-col">
          <h3 className="  font-semibold">Samir Varma</h3>
          <h3 className=" text-gray-500 italic">Co Founder</h3>
        </header>
        <main className="flex flex-col max-w-2xl text-sm md:text-base h-full gap-5">
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
      </section> */}
      <section className=" px-2 md:px-10 py-10 bg-slate-100">
        <Teams />
      </section>
      <section className=" px-2 md:px-10 py-10 bg-slate-100">
        <Advisors />
      </section>
      <section className=" px-2 md:px-10 py-10 bg-slate-100">
        <Careers />
      </section>
    </article>
  );
};

export default page;
