import { teamDetails } from "../../data";
import AppButton from "./AppButton";
import OurTeamCard from "./OurTeamCard";

const OurTeam = () => {
  return (
    <div className="mt-[10rem]">
      <p className="text-[#FFB23F] font-bold">Our Mission</p>
      <div className="flex justify-between items-center mb-[2.8rem]">
        <p className="font-bold text-[2.4rem] w-[30.4rem]">
          Meet our leading and strong team
        </p>
        <p className="font-medium text-[#AFADB5] w-[28.1rem]">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className="flex flex-wrap gap-[1.7rem] justify-center">
        {teamDetails.map((teamMember, index) => (
          <OurTeamCard key={index} {...teamMember} />
        ))}
      </div>
      <div className="mt-[10rem] mb-[4.8rem] flex justify-between items-center">
        <p className="text-[2.4rem] font-bold w-[21.9rem]">
          Are you interested work with us?
        </p>
        <AppButton text="Let’s Talk" image="/arrow-right.svg" />
      </div>
    </div>
  );
};

export default OurTeam;
