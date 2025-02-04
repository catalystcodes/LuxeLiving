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
      <div className="flex flex-wrap mt-[2.8rem] gap-x-[1.6rem]">
        {servicesDetails.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
