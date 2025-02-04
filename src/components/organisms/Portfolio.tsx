const Portfolio = () => {
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
        <div className="bg-[url(/portfolioImage1.svg)] h-[35.1rem] w-[28.1rem] bg-contain bg-center"></div>
        <div className="flex flex-col gap-y-[1.7rem] ">
          <div className="bg-[url(/portfolioImage2.svg)] h-[16.7rem] w-[39.2rem] bg-contain bg-center"></div>

          <div className="bg-[url(/portfolioImage3.svg)] h-[16.7rem] w-[39.2rem] bg-contain bg-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
