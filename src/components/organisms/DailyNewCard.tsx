import { useNavigate } from "react-router-dom";

interface DailyNewCardProps {
  image: string;
  title: string;
  header: string;
  fullHeader: string;
  desc: string;
  authorImage: string;
  authorName: string;
  date: string;
  id: string;
}

const DailyNewCard = ({
  title,
  header,
  desc,
  authorImage,
  authorName,
  date,
  fullHeader,
  image,
  id,
}: DailyNewCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/articles/${id}`);
  };

  return (
    <div className="cursor-pointer " onClick={handleClick}>
      <img src={image} alt="image" />
      <p className="font-medium text-[#AFADB5] mt-[1.1rem] mb-[0.6rem] text-[0.7rem] md:text-[1rem] ">
        {title}
      </p>
      <p className="font-bold text-[1.4rem] hidden md:inline">{header}</p>
      <p className="font-bold md:hidden">{fullHeader}</p>
      <p className="font-medium text-[#AFADB5] mt-[0.7rem] mb-[0.9rem] md:w-[33.6rem] text-[0.7rem] md:text-[1rem] ">
        {desc}
      </p>
      <div className="flex items-center gap-x-[1.3rem]">
        <div className="flex items-center gap-x-[0.6rem]">
          <img
            src={authorImage}
            alt="{authorName} profile picture"
            className="md:h-[1.6rem] md:w-[1.6rem] h-[1.1rem] w-[1.1rem]"
          />
          <p className="font-bold text-[0.7rem] md:text-[0.8rem] ">
            By {authorName}
          </p>
        </div>
        <p className="font-medium text-[#AFADB5] md:text-[0.8rem] text-[0.7rem]">
          {date}
        </p>
      </div>
    </div>
  );
};

export default DailyNewCard;
