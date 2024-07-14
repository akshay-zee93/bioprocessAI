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
      className="inline-block m-2 p-4 bg-white shadow-md rounded-lg w-full h-full md:w-1/2 lg:w-2/5"
    >
      <div className="flex flex-col justify-between h-full p-6 gap-4 bg-white rounded-lg">
        <div className="text-neutral-500 text-wrap break-words text-xs lg:text-sm font-medium">
          {testimonial.text}
        </div>
        <div className="flex gap-4 items-center">
          {testimonial.img ? (
            <Image
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              src={testimonial.img}
              alt={`${testimonial.name}'s testimonial`}
              width={48}
              height={48}
            />
          ) : (
            <span className=" w-12 h-12 rounded-full flex justify-center items-center text-base lg:text-lg font-medium bg-base-300">
              {testimonial.name.charAt(0)}
            </span>
          )}
          <div className="flex flex-col justify-start text-wrap w-3/4 items-start gap-2">
            <div className="text-neutral-700 text-left break-words text-sm lg:text-base font-semibold">
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
    <ul className="overflow-x-auto overflow-y-hidden p-10 bg-slate-100 whitespace-nowrap ">
      {list.map((_, i) => (
        <Testimonial key={i} i={i} />
      ))}
    </ul>
  );
};

export default Testimonials3;
