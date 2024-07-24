import HariImg from "../../public/hari.jpeg";
import CopilotLogo from "../../public/coPilot.svg";
import GPTLogo from "../../public/gptLogo.svg";
import RegGuideLogo from "../../public/RegGuide.svg";
import ModalityLogo from "../../public/multiModality.svg";
export const teamsList = [
  {
    title: "Samir Varma",
    role: "Co Founder",
    img: null,
    linkedin: "",
    youtube: "",
    bio: (
      <>
        <p>
          Samir has extensive bioprocess experience, working at various large
          and small pharma and biotech companies, including Nutcracker
          Therapeutics, Allakos Inc., Enzene Biosciences, and Bristol Myers
          Squibb. He has expertise in drug substance and drug product
          manufacturing, GMP facility design, and supply chain operations. Samir
          has worked on various commercial molecules such as Yervoy®, Orencia®,
          Nulojix®, and Reblozyl®.
        </p>
        <p>
          Samir was awarded a BE in Chemical Engineering from the National
          Institute of Technology, Karnataka, India, an MS in Biochemical
          Engineering from Drexel University, Philadelphia, PA, and an MBA in
          Finance and Marketing from the Stern School of Business at New York
          University, New York, NY.
        </p>
        <p>
          BioProcess.AI was born from Samir&lsquo;s vision to revolutionize
          biotech manufacturing processes. His deep understanding of the
          industry and commitment to innovation have been instrumental in
          developing BioProcess.AI&lsquo;s cutting-edge solutions.
        </p>
      </>
    ),
  },
  {
    title: "Hari Menon",
    role: "Co Founder",
    img: HariImg,
    facebook: "",
    bio: (
      <>
        <p>
          Hari brings over 25 years of experience in software development and
          technology leadership, with a proven track record of delivering
          innovative AI/ML-based SaaS solutions across multiple industries. He
          has held key roles at Oracle, GE Digital, and BlackBerry, where he led
          cross-functional teams and drove technological innovation and business
          growth.
        </p>

        <p>
          Hari holds a Master&lsquo;s and Bachelor&lsquo;s degree in Computer
          Science from the University of Pune.
        </p>

        <p>
          Renowned for his ability to take products from concept to
          multi-million dollar ARR, Hari Menon is a pivotal force behind
          BioProcess.AI&lsquo;s success.
        </p>
      </>
    ),
    instagram: "",
    youtube: "",
  },
];

export const testimonialList = [
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

export const capabilities = [
  {
    logo: GPTLogo,
    title: "Bioprocess GPT",
    text: "A ChatGPT-style interface enriched with extensive, current bioprocessing knowledge. Ask in-depth questions about any CMC topic and receive detailed, insightful answers with relevant literature references.",
  },
  {
    logo: CopilotLogo,
    title: "CMC CoPilot",
    text: "Design and iterate experiments more efficiently, significantly reducing development time. Leverage advanced statistical and visualization tools to drive informed, data-driven decisions.",
  },
  {
    logo: RegGuideLogo,
    title: "RegGuide",
    text: "Save valuable time and resources using the AI-powered document generator to effortlessly create high-quality protocols, reports, and presentations for Tech Transfer, Audits, and CMC regulatory submissions.",
  },
  {
    logo: ModalityLogo,
    title: "Multi-Modality",
    text: "Develop cutting-edge therapies across all leading biological modalities with support for mAbs, bispecific antibodies, fragment antibodies (fAbs), cell and gene therapies, and mRNA products.",
  },
];
