import Portfolio from "../components/organisms/Portfolio";
import ServiceCard from "../components/organisms/ServiceCard";
import SubFooterMessage from "../components/organisms/SubFooterMessage";
import { servicesDetails } from "../data";

const Services = () => {
  return (
    <div className="md:mx-[5.5rem] mx-[1.4rem] ">
      <p className="md:mt-[5.5rem] text-center font-bold md:text-[3.6rem] mt-[2.8rem] mb-[1.1rem]">
        Services
      </p>
      <p className="text-center font-medium text-[#AFADB5] md:px-[26rem] mb-[2.8rem] md:mt-[1.1rem]">
        The product crafted by talented crafter and using high quality material
        with love inside
      </p>
      <div className="flex justify-center  ">
        <img
          src="/serviceImage1.svg"
          alt=""
          className="border-b-[.1rem]  border-[#f3f3f3] md:pb-[2.8rem]"
        />
      </div>
      <div className=" flex flex-wrap justify-center mt-[2.8rem]  gap-x-7 gap-y-7">
        {servicesDetails.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <Portfolio />

      <div className="mt-[10rem] mb-[4.8rem]">
        <SubFooterMessage
          message=" Are you interested work with us?"
          text="Let's Talk"
          w="21.9rem"
        />
      </div>
    </div>
  );
};

export default Services;
