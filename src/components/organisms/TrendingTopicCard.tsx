interface TrendingTopicCardProps {
  image: string;
  title: string;
  header: string;
  desc: string;
  authorName: string;
  authorImage: string;
  date: string;
}

const TrendingTopicCard = ({
  image,
  title,
  header,
  desc,
  authorName,
  authorImage,
  date,
}: TrendingTopicCardProps) => {
  return (
    <div className="flex items-center gap-x-7 gap-y-8 ">
      <img src={image} alt="" />
      <div>
        <p className="text-[#AFADB5] font-medium">{title}</p>
        <p className="mt-2.5 mb-3.5 font-bold text-[1.4rem]">{header}</p>
        <p className="mb-4 text-[#AFADB5] font-medium">{desc}</p>
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-x-2.5  ">
            <img src={authorImage} alt="" />
            <p className="font-bold text-[0.9rem]">By{authorName}</p>
          </div>
          <p className="text-[#AFADB5] font-medium text-[0.8rem]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopicCard;
