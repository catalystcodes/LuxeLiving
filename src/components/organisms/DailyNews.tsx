import { TopHeadLines } from "../../data";
import DailyNewCard from "./DailyNewCard";

const DailyNews = () => {
  return (
    <div className="mb-[10rem]">
      <p className="text-[#FFB23F] font-bold">Daily News</p>
      <p className="font-bold text-[2.4rem] mb-[1.7rem]">Today top headlines</p>
      <div className="flex justify-center gap-x-[1.7rem]">
        {TopHeadLines.map((headline, index) => (
          <DailyNewCard key={index} {...headline} />
        ))}
      </div>
    </div>
  );
};

export default DailyNews;
