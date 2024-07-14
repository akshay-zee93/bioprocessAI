import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" w-screen bg-teal-100 lg:px-20 px-6 py-10  font-normal font-opensans text-base text-blue-gray-200 flex-col justify-start  gap-16 inline-flex">
      <div className="  flex-col  h-full item-center gap-12 flex">
        <div className="self-stretch justify-start h-full px-4 lg:px-8  items-start gap-16 inline-flex">
          <div className="grow shrink basis-0 justify-center  gap-8 flex ">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-white text-3xl lg:text-5xl font-dongle ">
                BioProcessAi
              </div>
            </div>
            {/* <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch  font-semibold ">Product</div>
              <div className="self-stretch  flex-col justify-start items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="  font-normal ">Pricing</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="  font-normal ">Overview</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="  font-normal ">Browse</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="font-normal flex gap-2 items-center ">
                      <p>Accessibilty</p>{" "}
                      <Button className="bg-white border-0 hover:bg-white text-purple-800 rounded-md text lg:h-6 lg:min-h-6">
                        <p className=" text-xs">BETA</p>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div />
                </div>
              </div>
            </div> */}

            {/* <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch   font-semibold ">Resources</div>
              <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="  font-normal ">Help Center</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="  font-normal ">Blog</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="  font-normal ">Tutorials</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="  font-normal ">FAQs</div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch   font-semibold ">Company</div>
              <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <Link className="link link-hover" href="/about">
                      About
                    </Link>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <Link
                      href="/contact-for-demo"
                      className=" link link-hover "
                    >
                      Request Demo
                    </Link>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="  link link-hover ">Blog</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <Link href="" className=" link link-hover ">
                      FAQs
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch   font-semibold ">Legal</div>
              <div className="self-stretch h-24 flex-col justify-start items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <Link href="" className=" link link-hover ">
                      Terms
                    </Link>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <Link href="" className=" link link-hover ">
                      Privacy
                    </Link>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <Link href="" className=" link link-hover ">
                      Cookies Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
