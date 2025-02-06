interface OurProductCardProps {
  image: string;
  name: string;
  title: string;
  desc: string;
  price: number;
}

const OurProductCard = ({
  image,
  name,
  title,
  desc,
  price,
}: OurProductCardProps) => {
  return (
    <div>
      <img src={image} alt="" />
      <p className="mt-[1.4rem] mb-[0.8rem] font-bold text-[#AFADB5]">{name}</p>
      <p className="font-bold text-[1.4rem]">{title}</p>
      <p className="mt-[0.3rem] mb-[1rem] font-medium text-[#AFADB5]">{desc}</p>
      <p className="font-bold text-[1.3rem]">${price}</p>
    </div>
  );
};

export default OurProductCard;
