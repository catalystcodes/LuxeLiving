import { useState } from "react";
import SeeDetail1 from "./SeeDetail1";

const Portfolio = () => {
  const [seeDetails, setSeeDetails] = useState(false);
  const [seeDetails2, setSeeDetails2] = useState(false);
  const [seeDetails3, setSeeDetails3] = useState(false);
  return (
    <div className="md:mt-[10rem] mt-[8.3rem]">
      <div className="flex md:items-end flex-col md:flex-row md:justify-between mb-[2.8rem]">
        <div>
          <p className="font-bold text-[#FFB23F] ">Portfolio</p>
          <p className=" md:text-[2.4rem] text-[1.3rem] font-bold md:w-[27.3rem]">
            {" "}
            Amazing project we’ve done before
          </p>
        </div>
        <div>
          <p className="md:w-[28.1rem] text-[#AFADB5] mb-[1.1rem] font-medium">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non.
          </p>
          <a href="">
            <p className="text-[#518581] font-bold ">View Portofolio</p>
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  items-center justify-between  gap-y-[1.1rem]">
        <div className="bg-[url(/portfolioImage1.svg)] md:h-[35.1rem] md:w-[28.1rem] w-[18.2rem] h-[22.7rem]  bg-contain md:bg-center md:px-[1.7rem] md:pb-[1.7rem] px-[1.1rem] pb-[1.1rem] flex flex-col justify-end">
          <p className=" text-white font-bold">Siska Kohl’s Bedroom</p>
          <p className=" text-white font-medium opacity-70 text-[0.7rem]">
            We start renovating her bedroom with minimalist...
          </p>
          <a
            onClick={() => setSeeDetails(!seeDetails)}
            className=" cursor-pointer text-white font-medium mt-[0.8rem] text-[0.7rem]"
          >
            See Details
          </a>
          {seeDetails && <SeeDetail1 />}
        </div>
        <div className="bg-[url(/portfolioImage2Sm.svg)] md:h-[35.1rem] md:w-[28.1rem] w-[18.2rem] h-[22.7rem]  bg-contain md:bg-center px-[1.1rem] pb-[1.1rem] flex flex-col justify-end md:hidden">
          <p className="text-white font-bold ">
            Jeruk Veldevana Living Room Design
          </p>
          <p className=" text-white font-medium opacity-70 text-[0.7rem]">
            We start renovating her bedroom with minimalist...
          </p>
          <a
            onClick={() => setSeeDetails2(!seeDetails2)}
            className=" cursor-pointer text-white font-medium mt-[0.8rem] text-[0.7rem]"
          >
            See Details
          </a>
          {seeDetails2 && <SeeDetail1 />}
        </div>
        <div className="bg-[url(/portfolioImage3Sm.svg)] md:h-[35.1rem] md:w-[28.1rem] w-[18.2rem] h-[22.7rem]  bg-contain md:bg-center px-[1.1rem] pb-[1.1rem] flex flex-col justify-end md:hidden">
          <p className=" text-white font-bold">Cozy Co-working space</p>
          <p className=" text-white font-medium opacity-70 text-[0.7rem]">
            We start renovating her bedroom with minimalist...
          </p>
          <a
            onClick={() => setSeeDetails3(!seeDetails3)}
            className=" cursor-pointer text-white font-medium mt-[0.8rem] text-[0.7rem]"
          >
            See Details
          </a>
          {seeDetails3 && <SeeDetail1 />}
        </div>
        <div className="flex flex-col gap-y-[1.7rem] ">
          <div className="bg-[url(/portfolioImage2.svg)] md:h-[16.7rem] md:w-[39.2rem]  w-[18.2rem] h-[22.7rem]  md:bg-contain  md:bg-center px-[1.7rem] pb-[1.7rem] md:flex flex-col justify-end hidden">
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

          <div className="bg-[url(/portfolioImage3.svg)] md:h-[16.7rem] md:w-[39.2rem] w-[18.2rem] h-[22.7rem] md:bg-contain md:bg-center px-[1.7rem] pb-[1.7rem] md:flex flex-col justify-end hidden">
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
