interface MissionCardProps {
  image: string;
  title: string;
  desc: string;
}

const MissionCard = ({ image, title, desc }: MissionCardProps) => {
  return (
    <div className="flex items-start gap-x-[1.4rem] ">
      <img
        src={image}
        alt=""
        className="w-[2.4rem] h-[2.4rem] md:w-[3.4rem] md:h-[3.4rem]"
      />
      <div>
        <p className="font-bold  md:text-[1.4rem] md:mb-[0.9rem] mb-[0.7rem]">
          {title}
        </p>
        <p className="md:w-[28.2rem] font-medium text-[#AFADB5]">{desc}</p>
      </div>
    </div>
  );
};

export default MissionCard;
