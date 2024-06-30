import Button from "../BasicElements/Button";

const Footer = () => {
  return (
    <footer className=" w-screen bg-teal-100 lg:px-20 px-6 py-10  font-normal font-opensans text-base text-blue-gray-200 md:flex-col justify-start  gap-16 inline-flex">
      <div className=" px-4 lg:px-8 md:flex-col  h-full item-center gap-12 flex">
        <div className="self-stretch justify-start h-full px-4 md:px-8  items-start gap-16 inline-flex">
          <div className="grow shrink basis-0  justify-start items-start gap-8 flex flex-col md:flex-row">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-white text-3xl md:text-5xl font-dongle ">
                BioProcessAi
              </div>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
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
                      <Button className="bg-white border-0 hover:bg-white text-purple-800 rounded-md text md:h-6 md:min-h-6">
                        <p className=" text-xs">BETA</p>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div />
                </div>
              </div>
            </div>

            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
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
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch   font-semibold ">Company</div>
              <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="   font-normal ">About</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="  font-normal ">Press</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="  font-normal ">Events</div>
                  </div>
                </div>
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="justify-center items-center gap-2 flex">
                    <div className="  font-normal ">Request Demo</div>
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
