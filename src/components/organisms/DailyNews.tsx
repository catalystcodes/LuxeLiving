import { TopHeadLines } from "../../data";
import DailyNewCard from "./DailyNewCard";

const DailyNews = () => {
  return (
    <div className="md:mb-[10rem] mb-[5.5rem]">
      <p className="text-[#FFB23F] font-bold">Daily News</p>
      <p className="font-bold md:text-[2.4rem] text-[1.3rem] md:mb-[1.7rem] mb-[1.7rem]">
        Today top headlines
      </p>
      <div className="flex flex-col md:flex-row justify-center md:gap-x-[1.7rem] gap-y-[1rem]">
        {TopHeadLines.map((headline, index) => (
          <DailyNewCard key={index} {...headline} />
        ))}
      </div>
    </div>
  );
};

export default DailyNews;
