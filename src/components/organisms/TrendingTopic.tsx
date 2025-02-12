import { trendingTopicsDetails } from "../../data";
import TrendingTopicCard from "./TrendingTopicCard";

const TrendingTopic = () => {
  return (
    <div>
      <p className="text-[#FFB23F] font-bold">Trending Topics</p>
      <p className="font-bold md:text-[2.4rem] text-[1.3rem] mb-[1.7rem]">
        Popular Last Week
      </p>
      <div className="flex items-center justify-between mb-[2.8rem]">
        <div className=" flex md:gap-x-9 items-center overflow-x-scroll md:overflow-x-hidden ">
          <div className="min-w-[33.7rem] flex md:items-center md:gap-x-9 gap-x-[0.8rem]">
            <p className="font-medium md:px-5 md:py-4 active:bg-[#ecebeb] ">
              All
            </p>
            <p className="text-[#AFADB5] font-medium ">Tips and Trick</p>
            <p className="text-[#AFADB5] font-medium -">Interior Design</p>
            <p className="text-[#AFADB5] font-medium -">Design Inspiration</p>
            <p className="text-[#AFADB5] font-medium -">Color Guide</p>
          </div>
        </div>
        <div className="py-3 px-5 border-[#ecebeb] border-2 hidden md:inline ">
          <img src="/FIlter.svg" alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-y-7">
        {trendingTopicsDetails.map((item, index) => (
          <TrendingTopicCard key={index} {...item} />
        ))}
      </div>
      <div className="flex justify-center mt-12 mb-44">
        <img src="/loadMore.svg" alt="" className="hidden md:block" />
        <img src="/loadMoreSm.svg" alt="" className="md:hidden" />
      </div>
    </div>
  );
};

export default TrendingTopic;
