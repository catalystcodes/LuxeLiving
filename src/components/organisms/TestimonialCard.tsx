interface TestimonialCardProps {
  image: string;
  desc: string;
  name: string;
  rate: number;
}

const TestimonialCard = ({ image, desc, name, rate }: TestimonialCardProps) => {
  return (
    <div className="bg-white px-[1.3rem] py-[1.4rem] min-w-[30.3rem] ">
      <img src="/quote-up.svg" alt="quote up" />
      <p className="text-[#AFADB5] font-medium my-[1.4rem]">{desc}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-[0.7rem]">
          <img src={image} alt="image" />
          <p className="text-[1.1rem] font-bold">{name}</p>
        </div>
        <div className="flex items-center gap-x-[0.7rem]">
          <img src="/rate.svg" alt="rate" />
          <p className="font-bold">{rate} </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
