import config from "../../../config.json";

const TermsOfUse = () => {
  return (
    <ul className="bg-white h-screen  p-8 text-black">
      <li className=" flex flex-col pt-2 gap-1">
        <h1 className=" font-semibold text-lg text-gray-700 ">Terms of Use</h1>
        <p className=" font-normal text-gray-500 ">
          Welcome to {config.appName}. By accessing or using our services, you
          agree to be bound by these terms of use.
        </p>
      </li>
      <li className=" flex flex-col pt-2 gap-1">
        <h1 className=" font-semibold text-lg text-gray-700 ">Use License</h1>
        <p className=" font-normal text-gray-500 ">
          Permission is granted to temporarily download one copy of the
          materials on {config.appName}.in&lsquo;s website for personal,
          non-commercial transitory viewing only. This is the grant of a
          license, not a transfer of title, and under this license, you may not:
          <ul className=" list-disc ">
            <li className="">Modify or copy the materials;</li>
            <li>
              Use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              Attempt to decompile or reverse engineer any software contained on
              {config.appName}.in&lsquo;s website;
            </li>
            <li>
              Transfer the materials to another person or &quot;mirror&quot; the
              materials on any other server.
            </li>
          </ul>
          This license shall automatically terminate if you violate any of these
          restrictions and may be terminated by {config.appName}.in at any time.
        </p>
      </li>
      <li className=" flex flex-col pt-2 gap-1">
        <h1 className=" font-semibold text-lg text-gray-700 ">Disclaimer</h1>
        <p className=" font-normal text-gray-500 ">
          The materials on {config.appName}.in&lsquo;s website are provided on
          an &lsquo;as is&lsquo; basis. {config.appName}.in makes no warranties,
          expressed or implied, and hereby disclaims and negates all other
          warranties including, without limitation, implied warranties or
          conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property or other violation of
          rights.
        </p>
      </li>
      <li className=" flex flex-col pt-2 gap-1">
        <h1 className=" font-semibold text-lg text-gray-700 "> Limitations</h1>
        <p className=" font-normal text-gray-500 ">
          In no event shall {config.appName}.in or its suppliers be liable for
          any damages (including, without limitation, damages for loss of data
          or profit, or due to business interruption) arising out of the use or
          inability to use the materials on {config.appName}.in&lsquo;s website,
          even if
          {config.appName}.in or a {config.appName}.in authorized representative
          has been notified orally or in writing of the possibility of such
          damage.
        </p>
      </li>
      <li className=" flex flex-col pt-2 gap-1">
        <h1 className=" font-semibold text-lg text-gray-700 ">Governing Law</h1>
        <p className=" font-normal text-gray-500 ">
          These terms and conditions are governed by and construed in accordance
          with the laws of Bangalore, India, and you irrevocably submit to the
          exclusive jurisdiction of the courts in that location.
        </p>
      </li>
    </ul>
  );
};

export default TermsOfUse;
