import Image from "next/image";

const list = [
  {
    name: "Executive Director, Mid Size Biotech Company",
    text: "As a biotechnology professional with over 20 years of experience, I found this to be really helpful in process development, tech transfer, scale up and manufacturing activities.  It also significantly reduces the time taken to draft technical reports and regulatory documents",
  },
  {
    name: "Sr Director, US based CDMO company",
    text: "Being a CDMO, this capability is very attractive.",
  },
  {
    name: "Head of Downstream Process Development, European CDMO company",
    text: "BioprocessAI serves as a comprehensive solution for all our process development needs. It covers all aspects from experimental design guidance, execution, data visualization, analysis, to report and regulatory document writing. Whole package!",
  },
  {
    name: "Manager, Biotech Company",
    text: "This AI based solution for Bioprocessing is an excellent platform and I see an immense potential in developing it, catering to the bioprocessing community and manufacturers",
  },
];

const Testimonial = ({ i }) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li
      key={i}
      style={{
        flexBasis: "calc(33.33% - 12px)",
        boxSizing: "border-box",
      }}
      className=" shrink basis-0  bg-white rounded-lg shadow border border-white items-start flex"
    >
      <div className=" p-6 h-full bg-white rounded-lg flex-col justify-between items-start gap-5 flex">
        <div className="self-stretch  flex-col justify-start items-start gap-3 flex">
          <div className=" text-neutral-500 text-sm font-medium ">
            {testimonial.text}
          </div>
        </div>
        <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
          {testimonial.img ? (
            <Image
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              src={list[i].img}
              alt={`${list[i].name}'s testimonial `}
              width={48}
              height={48}
            />
          ) : (
            <span className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
              {testimonial.name.charAt(0)}
            </span>
          )}
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
            <div className=" text-neutral-700 text-base font-semibold ">
              {testimonial.name}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const Testimonials3 = () => {
  return (
    <div className="w-full py-20 px-10 bg-slate-100 flex-col justify-start items-center inline-flex">
      <div className="  flex-col  justify-start items-center gap-16 flex">
        <div className="  flex-col  justify-start items-center gap-4 flex">
          <div className=" text-center text-neutral-700 text-2xl font-semibold ">
            Trusted Company over 1,0000 business rely on Humanet
          </div>
        </div>

        <ul className=" flex flex-wrap  gap-3 px-2">
          {[...Array(list.length)].map((e, i) => (
            <Testimonial i={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials3;
