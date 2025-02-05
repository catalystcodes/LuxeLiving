interface DailyNewCardProps {
  image: string;
  title: string;
  header: string;
  desc: string;
  authorImage: string;
  authorName: string;
  date: string;
}

const DailyNewCard = ({
  title,
  header,
  desc,
  authorImage,
  authorName,
  date,
  image,
}: DailyNewCardProps) => {
  return (
    <div>
      <img src={image} alt="image" />
      <p className="font-medium text-[#AFADB5] mt-[1.1rem] mb-[0.6rem]">
        {title}
      </p>
      <p className="font-bold text-[1.4rem]">{header}</p>
      <p className="font-medium text-[#AFADB5] mt-[0.7rem] mb-[0.9rem] w-[33.6rem]">
        {desc}
      </p>
      <div className="flex items-center gap-x-[1.3rem]">
        <div className="flex items-center gap-x-[0.6rem]">
          <img src={authorImage} alt="{authorName} profile picture" />
          <p>By {authorName}</p>
        </div>
        <p className="font-medium text-[#AFADB5] text-[0.8rem]">{date}</p>
      </div>
    </div>
  );
};

export default DailyNewCard;
