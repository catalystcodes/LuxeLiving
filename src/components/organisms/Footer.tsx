import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <div className="flex justify-between md:mx-[5.5rem] py-[1.1rem] md:py-[5.1rem] footer mx-[1.3rem] flex-col md:flex-row gap-y-8">
      <div className="">
        <div>
          <img src="/logo.svg" alt="" className="md:mb-9 hidden md:block" />{" "}
          <img src="/logoSm.svg" alt="" className="mb-[1.1rem]" />
        </div>
        <p className="text-[#AFADB5] md:text-black md:w-[28.1rem] font-medium">
          Lalasia is digital agency that help you make better experience iaculis
          cras in.
        </p>
      </div>
      <div className="flex md:gap-x-[5.6rem] gap-x-[1.7rem]">
        <SubFooter
          subTitle1="New Arrivals"
          subTitle2="Best Selling"
          subTitle3="Home Decor"
          subTitle4="Kitchen Set"
          title="Product"
        />
        <SubFooter
          subTitle1="Catalog"
          subTitle2="Blog"
          subTitle3="FaQ"
          subTitle4="Pricing"
          title="Services"
        />
        <SubFooter
          subTitle1="Facebook"
          subTitle2="Instagram"
          subTitle3="Twitter"
          title="Follow Us"
        />
      </div>
    </div>
  );
};

export default Footer;
