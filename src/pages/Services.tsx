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
      <div className="flex justify-center mb-[5.6rem] md:mb-0">
        <img
          src="/serviceImage1.svg"
          alt=""
          className="md:border-b-[.1rem]  md:border-[#f3f3f3] md:pb-[2.8rem]"
        />
      </div>
      <div className=" flex flex-wrap justify-center mt-[2.8rem]  gap-x-7 gap-y-7">
        {servicesDetails.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <Portfolio />

      <div className="md:mt-[10rem] md:mb-[4.8rem] mt-[5.6rem] ">
        <SubFooterMessage
          message=" Are you interested work with us?"
          text="Learn More"
          w="11.9rem"
          image="/arrow-right.svg"
        />
      </div>
    </div>
  );
};

export default Services;
