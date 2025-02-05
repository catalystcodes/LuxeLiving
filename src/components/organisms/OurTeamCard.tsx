interface OurTeamCardProps {
  image: string;
  name: string;
  role: string;
}

const OurTeamCard = ({ image, name, role }: OurTeamCardProps) => {
  return (
    <div>
      <img src={image} alt={name} />
      <p className="text-[1.4rem] font-bold mt-[1.4rem]">{name}</p>
      <p className="text-[#AFADB5]">{role}</p>
    </div>
  );
};

export default OurTeamCard;
