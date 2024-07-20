const PrivacyPolicy = () => {
  return (
    <ul className="bg-white h-screen  p-8 text-black">
      <li className=" flex flex-col pt-2 gap-1">
        <h1 className="text-xl pb-2">Privacy Policy</h1>
        <p className=" font-normal text-gray-500 ">
          Welcome to BioprocessAI. This privacy policy outlines how we handle
          your personal information.
        </p>
      </li>
      <li className=" flex flex-col pt-2 gap-1">
        <h2 className=" font-semibold text-lg text-gray-700 ">
          Information Collection
        </h2>
        <p className="text-gray-500">
          We collect various types of information in connection with the
          services we provide, including:
        </p>
        <ul className=" list-disc">
          <li className=" text-gray-500 ">
            Personal identification information (Name, email address, phone
            number, etc.)
          </li>
          <li className=" text-gray-500">
            Usage data (IP address, browser type, pages visited, etc.)
          </li>
        </ul>
      </li>

      <li className=" flex flex-col pt-2 gap-1">
        <h2 className=" font-semibold text-lg text-gray-700 ">
          Use of Information
        </h2>
        <p className=" font-normal text-gray-500 ">
          We use the collected information for various purposes, such as:
        </p>
        <ul className=" list-disc">
          <li className=" font-normal text-gray-500 ">
            To provide and maintain our services
          </li>
          <li className=" font-normal text-gray-500 ">
            To notify you about changes to our services
          </li>
          <li className=" font-normal text-gray-500 ">
            To provide customer support
          </li>
          <li className=" font-normal text-gray-500 ">
            To monitor the usage of our services
          </li>
        </ul>
      </li>
      <li className=" flex flex-col pt-2 gap-1">
        <h2 className=" font-semibold text-lg text-gray-700 ">Data Security</h2>
        <p className=" font-normal text-gray-500 ">
          Your data security is important to us. We implement appropriate
          measures to protect your personal information.
        </p>
      </li>

      <li className=" flex flex-col pt-2 gap-1">
        <h2 className=" font-semibold text-lg text-gray-700 ">
          Changes to This Privacy Policy
        </h2>
        <p className=" font-normal text-gray-500 ">
          We may update our privacy policy from time to time. We will notify you
          of any changes by posting the new privacy policy on this page.
        </p>
      </li>

      <p className=" font-normal text-gray-500 ">
        If you have any questions about this privacy policy, please contact us
        at{" "}
        <a
          className="text-blue-500 underline"
          href="mailto:hari.menon@bioprocess.ai"
        >
          hari.menon@bioprocess.ai
        </a>
        .
      </p>
    </ul>
  );
};

export default PrivacyPolicy;
