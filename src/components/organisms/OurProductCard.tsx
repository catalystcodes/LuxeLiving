import { useNavigate } from "react-router-dom";

interface OurProductCardProps {
  image: string;
  name: string;
  title: string;
  desc: string;
  price: number;
  id: string;
}

const OurProductCard = ({
  image,
  name,
  title,
  desc,
  price,
  id,
}: OurProductCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="cursor-pointer" onClick={handleCardClick}>
      <img
        src={image}
        alt=""
        className="w-[8.7rem] h-[7.2rem] md:w-[21.9rem] md:h-[20rem]"
      />
      <p className="md:mt-[1.4rem] md:mb-[0.8rem] font-bold text-[#AFADB5] text-[0.7rem] md:text-[1rem] mt-[0.8rem]">
        {name}
      </p>
      <p className="font-bold md:text-[1.4rem]">{title}</p>
      <p className="md:mt-[0.3rem] md:mb-[1rem] font-medium text-[#AFADB5] mb-[0.7rem]">
        {desc}
      </p>
      <p className="font-bold md:text-[1.3rem]">${price}</p>
    </div>
  );
};

export default OurProductCard;
