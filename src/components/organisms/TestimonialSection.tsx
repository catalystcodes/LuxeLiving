import { testimonials } from "../../data";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <div className="mb-[10rem]">
      <div className="mx-[5.5rem]">
        <p className="mb-[0.8rem] font-bold text-[#FFB23F] text-center">
          Testimonials
        </p>
        <p className="text-center text-[2.4rem] font-bold ">
          What our customer say
        </p>
        <p className="text-[#AFADB5] font-medium text-center px-[21.8rem] mt-[1.7rem] mb-[2.8rem]">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className="flex gap-x-[1.6rem] overflow-x-auto">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
