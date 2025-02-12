interface ServiceCardProps {
  number: number;
  title: string;
  desc: string;
}

const ServiceCard = ({ number, title, desc }: ServiceCardProps) => {
  return (
    <div className="pr-[1.6rem]">
      <p className="text-[#518581] md:text-[3.6rem] font-bold text-[1.8rem]">
        0{number}
      </p>
      <p className="md:ext-[1.3rem] font-bold mt-[1.4rem] mb-[0.3rem]">
        {title}
      </p>
      <p className="text-[#AFADB5]  font-medium md:w-[20.3rem]">{desc}</p>
    </div>
  );
};

export default ServiceCard;
