import { testimonials } from "../../data";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <div className="md:mb-[10rem] mb-[5.5rem]">
      <div className="mx-[1.6rem]">
        <p className="mb-[0.8rem] font-bold text-[#FFB23F] text-center">
          Testimonials
        </p>
        <p className="text-center md:text-[2.4rem] text-[1.3rem] font-bold ">
          What our customer say
        </p>
        <p className="text-[#AFADB5] font-medium md:text-center  md:px-[21.8rem] md:mt-[1.7rem] md:mb-[2.8rem] mb-[1.7rem] mt-[1rem]">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className="flex gap-x-[1.6rem] overflow-x-auto mx-[1.6rem] md:mx-0">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
