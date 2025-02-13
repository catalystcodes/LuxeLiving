interface SimilarTopicsProps {
  image: string;
  title: string;
  header: string;
  desc: string;
  authorImage: string;
  authorName: string;
  date: string;
  fullHeader: string;
}

const SimilarTopics = ({
  image,
  title,
  header,
  desc,
  authorImage,
  authorName,
  date,
  fullHeader,
}: SimilarTopicsProps) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p className="font-medium text-[#AFADB5] md:mt-[1.4rem] mt-[0.9rem] md:mb-2.5 mb-1.5">
        {title}
      </p>
      <div className="w-[21.9rem]">
        <p className="font-bold md:text-[1.4rem] hidden md:block">{header}</p>
        <p className="font-bold md:text-[1.4rem]  md:hidden">{fullHeader}</p>
        <p className="font-medium text-[#AFADB5] mt-1.5 mb-4">{desc}</p>
      </div>

      <div className="flex gap-x-6 items-center">
        <div className="flex items-center gap-x-2.5 ">
          <img src={authorImage} alt={authorName} />
          <p className="text-[0.8rem] font-bold">By {authorName}</p>
        </div>
        <p className="text-[0.8rem] font-medium text-[#AFADB5]">{date}</p>
      </div>
    </div>
  );
};

export default SimilarTopics;
