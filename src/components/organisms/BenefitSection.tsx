import { benefitDetails } from "../../data";
import BenefitCard from "../molecules/BenefitCard";

const BenefitSection = () => {
  return (
    <section className="md:mx-[5.5rem] mb-[10rem] mx-[1.7rem]">
      <p className="mb-[0.8rem] font-bold text-[#FFB23F]">Benefits</p>
      <div className="flex flex-col md:items-end md:justify-between mb-[2.8rem] md:flex-row gap-y-[0.9rem] ">
        <p className="w-[12.9rem] md:text-[2.4rem] font-bold md:w-[23.7rem] text-[1.3rem]">
          Benefits when using our services
        </p>
        <p className="text-[#AFADB5] font-medium md:w-[28.1rem] w-[18.2rem]">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className="flex flex-col gap-y-[1.1rem] md:gap-x-[1.6rem]  items-center m-auto md:flex-row md:items-center md:justify-center ">
        {benefitDetails.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
