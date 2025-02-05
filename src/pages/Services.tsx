import AppButton from "../components/organisms/AppButton";
import Portfolio from "../components/organisms/Portfolio";
import ServiceCard from "../components/organisms/ServiceCard";
import { servicesDetails } from "../data";

const Services = () => {
  return (
    <div className="mx-[5.5rem] ">
      <p className="mt-[5.5rem] text-center font-bold text-[3.6rem]">
        Services
      </p>
      <p className="text-center font-medium text-[#AFADB5] px-[26rem] mb-[2.8rem] mt-[1.1rem]">
        The product crafted by talented crafter and using high quality material
        with love inside
      </p>
      <div className="flex justify-center  ">
        <img src="/serviceImage1.svg" alt="" className="footer2  pb-[2.8rem]" />
      </div>
      <div className=" flex flex-wrap justify-center mt-[2.8rem]  gap-x-7 gap-y-7">
        {servicesDetails.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <Portfolio />
      <div
        className="mt-[10rem] mb-[4.8rem] flex
      items-center justify-between"
      >
        <p className=" text-[2.4rem] font-bold w-[21.9rem]">
          Are you interested work with us?
        </p>
        <AppButton text="Let's Talk" image="/arrow-right.svg" />
      </div>
    </div>
  );
};

export default Services;
