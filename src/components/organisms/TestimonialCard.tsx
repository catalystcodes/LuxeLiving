interface TestimonialCardProps {
  image: string;
  desc: string;
  name: string;
  rate: number;
}

const TestimonialCard = ({ image, desc, name, rate }: TestimonialCardProps) => {
  return (
    <div className="bg-white md:px-[1.3rem] md:py-[1.4rem] md:min-w-[30.3rem] min-w-[18.2rem] p-[0.9rem] ">
      <img src="/quote-up.svg" alt="quote up" className="hidden md:block" />
      <img src="/quote-upSm.svg" alt="" />
      <p className="text-[#AFADB5] font-medium my-[1.4rem]">{desc}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-[0.7rem]">
          <div className="h-[1.6rem] w-[1.6rem] rounded-full md:h-[2.8rem] md:w-[2.8rem]  ">
            <img src={image} alt="image" />
          </div>
          <p className="md:text-[1.1rem] font-bold">{name}</p>
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
