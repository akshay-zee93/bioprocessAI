import Image from "next/image";

const CapabilitiesCard = ({ data }) => {
  const { logo, title, text } = data;
  return (
    <div className="card rounded-2xl w-full h-full bg-white shadow-xl hover:shadow-2xl ">
      <figure className="px-2 w-full  md:px-4 pt-10 pb-4">
        <Image src={logo} alt="member" width={60} />
      </figure>
      <h2 className=" font-bold text-base md:text-xl text-black text-center">
        {title}
      </h2>
      <div className="flex justify-center">
        <div className=" divider w-12 h-2 bg-teal-100"></div>
      </div>

      <section className="card-body text-center  font-normal text-sm md:text-base  text-gray-500 ">
        {text}
      </section>
    </div>
  );
};

export default CapabilitiesCard;
