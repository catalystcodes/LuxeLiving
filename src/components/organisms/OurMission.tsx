import { missionDetails } from "../../data";
import MissionCard from "./MissionCard";

const OurMission = () => {
  return (
    <div className="flex flex-col md:flex-row  gap-y-[1.7rem] justify-between">
      <div>
        <p className="text-[#FFB23F] font-bold text-[0.8rem] md:text-[1rem]">
          Our Mission
        </p>
        <p className="font-bold md:text-[2.4rem] md:w-[30.4rem] mt-[0.8rem] mb-[2.8rem] text-[1.3rem]">
          Our team dedicated to help find smart home product
        </p>
        <div className="flex gap-x-[2.8rem]">
          <div className="flex flex-col gap-y-[0.6rem]">
            <p className="font-bold md:text-[2.4rem] text-[1.3rem]">20+</p>
            <p className="font-medium text-[#AFADB5]">Years Experience</p>
          </div>{" "}
          <div className="flex flex-col gap-y-[0.6rem]">
            <p className="font-bold md:text-[2.4rem] text-[1.3rem]">483</p>
            <p className="font-medium text-[#AFADB5]">Happy Client</p>
          </div>{" "}
          <div className="flex flex-col gap-y-[0.6rem]">
            <p className="font-bold md:text-[2.4rem] text-[1.3rem]">150+</p>
            <p className="font-medium text-[#AFADB5]">Project Finished</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-[1.7rem]">
        {missionDetails.map((mission, index) => (
          <MissionCard key={index} {...mission} />
        ))}
      </div>
    </div>
  );
};

export default OurMission;
