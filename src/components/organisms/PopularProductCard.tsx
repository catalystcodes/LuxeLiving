interface PopularProductCardProps {
  image: string;
  name: string;
  title: string;
  desc: string;
  price: number;
}

const PopularProductCard = ({
  image,
  name,
  title,
  desc,
  price,
}: PopularProductCardProps) => {
  return (
    <div className="min-w-[21.9rem] w-[21.9rem]">
      <img src={image} alt="" />
      <p className="font-bold text-[#AFADB5] mt-[1.4rem] mb-[0.8rem]">{name}</p>
      <p className="font-bold text-[1.4rem] ">{title}</p>
      <p className="font-medium text-[#AFADB5] mt-[0.4rem]  mb-[1rem]">
        {desc}
      </p>
      <p className="font-bold text-[1.4rem] ">${price}</p>
    </div>
  );
};

export default PopularProductCard;
