interface TrendingTopicCardProps {
  image: string;
  title: string;
  header: string;
  desc: string;
  authorName: string;
  authorImage: string;
  date: string;
  shortHeader: string;
}

const TrendingTopicCard = ({
  image,
  title,
  header,
  desc,
  authorName,
  authorImage,
  date,
  shortHeader,
}: TrendingTopicCardProps) => {
  return (
    <div className="flex items-center gap-x-7 gap-y-8 ">
      <img
        src={image}
        alt=""
        className="w-[6.1rem] h-[6.1rem] md:w-[11.7rem] md:h-[11.7rem]"
      />
      <div>
        <p className="text-[#AFADB5] font-medium text-[0.7rem] md:text-[1rem]">
          {title}
        </p>
        <p className="md:mt-2.5 md:mb-3.5 font-bold text-[0.9rem] md:text-[1.4rem] hidden md:block">
          {header}
        </p>
        <p className="md:mt-2.5 md:mb-3.5 font-bold text-[0.9rem] md:text-[1.4rem] md:hidden">
          {shortHeader}
        </p>
        <p className="md:mb-4 text-[#AFADB5] font-medium hidden md:block">
          {desc}
        </p>
        <div className="flex items-center gap-x-6">
          <div className="flex items-center gap-x-2.5  ">
            <img
              src={authorImage}
              alt=""
              className="h-[1rem] w-[1rem] md:h-[1rem] md:w-[1rem]"
            />
            <p className="font-bold md:text-[0.9rem] text-[0.6rem] ">
              By{authorName}
            </p>
          </div>
          <p className="text-[#AFADB5] font-medium text-[0.8rem] hidden md:block">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopicCard;
