interface BenefitCardProps {
  title: string;
  desc: string;
  image: string;
}

const BenefitCard = ({ title, desc, image }: BenefitCardProps) => {
  return (
    <div className="bg-white py-[1.4rem] px-[1.3rem]">
      <img src={image} alt={title} />
      <p className="font-bold text-[1.3rem] mt-[1.3rem] mb-[1.1rem]">{title}</p>
      <p className="text-[#AFADB5] font-weight">{desc}</p>
    </div>
  );
};

export default BenefitCard;
