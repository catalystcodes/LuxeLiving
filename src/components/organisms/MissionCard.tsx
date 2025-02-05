interface MissionCardProps {
  image: string;
  title: string;
  desc: string;
}

const MissionCard = ({ image, title, desc }: MissionCardProps) => {
  return (
    <div className="flex items-start gap-x-[1.4rem] ">
      <img src={image} alt="" />
      <div>
        <p className="font-bold text-[1.4rem] mb-[0.9rem]">{title}</p>
        <p className="w-[28.2rem] font-medium text-[#AFADB5]">{desc}</p>
      </div>
    </div>
  );
};

export default MissionCard;
