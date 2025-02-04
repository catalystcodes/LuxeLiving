import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <div className="flex justify-between mx-[5.5rem] py-[5.1rem]">
      <div className="">
        <img src="/logo.svg" alt="" className="mb-9" />
        <p className="w-[28.1rem] font-medium">
          Lalasia is digital agency that help you make better experience iaculis
          cras in.
        </p>
      </div>
      <div className="flex gap-x-[5.6rem]">
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
