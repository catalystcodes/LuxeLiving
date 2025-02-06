import { trendingTopicsDetails } from "../../data";
import TrendingTopicCard from "./TrendingTopicCard";

const TrendingTopic = () => {
  return (
    <div>
      <p className="text-[#FFB23F] font-bold">Daily News</p>
      <p className="font-bold text-[2.4rem] mb-[1.7rem]">Today top headlines</p>
      <div className="flex items-center justify-between mb-[2.8rem]">
        <div className="flex gap-x-9 items-center ">
          <p className="font-medium px-5 py-4 active:bg-[#ecebeb] ">All</p>
          <p className="text-[#AFADB5] font-medium">Tips and Trick</p>
          <p className="text-[#AFADB5] font-medium">Interior Design</p>
          <p className="text-[#AFADB5] font-medium">Design Inspiration</p>
          <p className="text-[#AFADB5] font-medium">Color Guide</p>
        </div>
        <div className="py-3 px-5 border-[#ecebeb] border-2 ">
          <img src="/FIlter.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-y-7">
        {trendingTopicsDetails.map((item, index) => (
          <TrendingTopicCard key={index} {...item} />
        ))}
      </div>
      <div className="flex justify-center mt-12 mb-44">
        <img src="/loadMore.svg" alt="" />
      </div>
    </div>
  );
};

export default TrendingTopic;
