import { useState } from "react";
import SeeDetail1 from "./SeeDetail1";

const Portfolio = () => {
  const [seeDetails, setSeeDetails] = useState(false);
  const [seeDetails2, setSeeDetails2] = useState(false);
  const [seeDetails3, setSeeDetails3] = useState(false);
  return (
    <div className="mt-[10rem]">
      <div className="flex items-end justify-between mb-[2.8rem]">
        <div>
          <p className="font-bold text-[#FFB23F] ">Portfolio</p>
          <p className=" text-[2.4rem] font-bold w-[27.3rem]">
            {" "}
            Amazing project we’ve done before
          </p>
        </div>
        <div>
          <p className="w-[28.1rem] text-[#AFADB5] mb-[1.1rem] font-medium">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non.
          </p>
          <a href="">
            <p className="text-[#518581] font-bold">View Portofolio</p>
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <div className="bg-[url(/portfolioImage1.svg)] h-[35.1rem] w-[28.1rem] bg-contain bg-center px-[1.7rem] pb-[1.7rem] flex flex-col justify-end">
          <p className="text-[1.4rem] text-white font-bold">
            Siska Kohl’s Bedroom
          </p>
          <p className=" text-white font-medium opacity-70">
            We start renovating her bedroom with minimalist...
          </p>
          <a
            onClick={() => setSeeDetails(!seeDetails)}
            className=" cursor-pointer text-white font-medium mt-[0.8rem]"
          >
            See Details
          </a>
          {seeDetails && <SeeDetail1 />}
        </div>
        <div className="flex flex-col gap-y-[1.7rem] ">
          <div className="bg-[url(/portfolioImage2.svg)] h-[16.7rem] w-[39.2rem] bg-contain bg-center px-[1.7rem] pb-[1.7rem] flex flex-col justify-end">
            <p className="text-[1.4rem] text-white font-bold">
              Jeruk Veldevana Living Room Design
            </p>
            <p className=" text-white font-medium opacity-70">
              We start renovating her bedroom with minimalist...
            </p>
            <a
              onClick={() => setSeeDetails2(!seeDetails2)}
              className=" cursor-pointer text-white font-medium mt-[0.8rem]"
            >
              See Details
            </a>
            {seeDetails2 && <SeeDetail1 />}
          </div>

          <div className="bg-[url(/portfolioImage3.svg)] h-[16.7rem] w-[39.2rem] bg-contain bg-center px-[1.7rem] pb-[1.7rem] flex flex-col justify-end">
            <p className="text-[1.4rem] text-white font-bold">
              Cozy Co-working space
            </p>
            <p className=" text-white font-medium opacity-70">
              We start renovating her bedroom with minimalist...
            </p>
            <a
              onClick={() => setSeeDetails3(!seeDetails3)}
              className=" cursor-pointer text-white font-medium mt-[0.8rem]"
            >
              See Details
            </a>
            {seeDetails3 && <SeeDetail1 />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
