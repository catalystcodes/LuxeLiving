import { benefitDetails } from "../../data";
import BenefitCard from "../molecules/BenefitCard";

const BenefitSection = () => {
  return (
    <section className="mx-[5.5rem] mb-[10rem]">
      <p className="mb-[0.8rem] font-bold text-[#FFB23F]">Benefits</p>
      <div className="flex items-end justify-between mb-[2.8rem]">
        <p className="text-[2.4rem] font-bold w-[23.7rem]">
          Benefits when using our services
        </p>
        <p className="text-[#AFADB5] font-medium w-[28.1rem]">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className="flex justify-center gap-x-[1.6rem]  ">
        {benefitDetails.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
