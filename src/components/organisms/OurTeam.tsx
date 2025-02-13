import { teamDetails } from "../../data";

import OurTeamCard from "./OurTeamCard";

const OurTeam = () => {
  return (
    <div className="mt-[10rem]">
      <p className="text-[#FFB23F] font-bold">Our Mission</p>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-[2.8rem]">
        <p className="font-bold md:text-[2.4rem] md:w-[30.4rem] text-[1.3rem] mb-[1.1rem]">
          Meet our leading and strong team
        </p>
        <p className="font-medium text-[#AFADB5] md:w-[28.1rem]">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className="flex flex-wrap gap-[1.7rem] justify-center">
        {teamDetails.map((teamMember, index) => (
          <OurTeamCard key={index} {...teamMember} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
